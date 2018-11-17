function Theme(opposite) {

  this.opposite = opposite;

  this.colors = {
    light1: '#ffffff',
    light2: '#f5f5f5',
    light3: '#BDBDBD',

    dark1: '#3c3c3c',
    dark2: '#505050',
    dark3: '#757575',
  };

  this.selectorStyleMap = {};

  this.addMappings = function (mappings) {
    Object.keys(mappings).forEach(function (key) {
      this.addMapping(key, mappings[key]);
    }, this);
  }

  this.addMapping = function(selector, updatedStyles) {
    this.selectorStyleMap[selector] = updatedStyles;
  }

  this.activate = function() {
    Object.keys(this.selectorStyleMap).forEach(function (selector) {
      var elements = document.querySelectorAll(selector);

      elements.forEach(function(element) {
        var stylesToUpdate = this.selectorStyleMap[selector];

        Object.keys(stylesToUpdate).forEach(function (styleToUpdate) {
          element.style[styleToUpdate] = stylesToUpdate[styleToUpdate];
        }, this);
      }, this);
    }, this);
  }
}

function LightTheme() {
  Theme.call(this, DarkTheme);

  this.addMappings({
    'h1, h2, h3, h4, a': {
      'color': this.colors.dark1
    },
    'h5, h6, h7, h8': {
      'color': this.colors.dark3
    },

    'body': {
      'background-color': this.colors.light1
    },
    'div.bar': {
      'background-color': this.colors.dark3
    },
    '#nav-body, #modules, #settings': {
      'background-color': this.colors.light2
    },
  })
}

function DarkTheme() {
  Theme.call(this, LightTheme);

  this.addMappings({
    'h1, h3, h4, a': {
      'color': this.colors.light1
    },
    'h2': {
      'color': this.colors.dark2
    },
    'h5, h6, h7, h8': {
      'color': this.colors.light3
    },

    'div.bar': {
      'background-color': this.colors.light3
    },
    '#nav-body, #modules, #settings': {
      'background-color': this.colors.dark2
    },
    'body': {
      'background-color': this.colors.dark1
    }
  })
}

var ThemeService = {
  LOCALSTORAGE_KEY: "current-theme",

  Themes: {
    Light: new LightTheme(),
    Dark: new DarkTheme(),
  },

  getStored: function() {
    var storedKey = localStorage.getItem(this.LOCALSTORAGE_KEY);

    if (!this.validateThemeName(storedKey)) {
      localStorage.setItem(this.LOCALSTORAGE_KEY, Object.keys(this.Themes)[0]);
      return this.getStored();
    }

    return this.getThemeFromName(storedKey);
  },

  setStored: function(theme) {
    if (typeof theme !== "string") {
      theme = this.getNameFromTheme(theme)
    }

    localStorage.setItem(this.LOCALSTORAGE_KEY, theme);
  },

  applyCurrent: function () {
    this.getStored().activate();
  },

  toggleCurrent: function () {
    var theme = new (this.getStored().opposite)();
    this.setStored(theme);
    theme.activate();
  },

  getThemeFromName: function (name) {
    if (!this.validateThemeName(name)) {
      this.getStoredTheme();
    }

    return this.Themes[name];
  },

  getNameFromTheme: function(theme) {
    var name = Object.keys(this.Themes).find(function (name) {
      return this.Themes[name].constructor === theme.constructor;
    }, this);

    if (!this.validateThemeName(name)) {
      return this.getNameFromTheme(this.getStored());
    }

    return name;
  },

  validateThemeName: function(nameToValidate) {
    return !(nameToValidate == undefined ||
           !Object.keys(this.Themes).find(function (name) { return nameToValidate === name }))
  }
};

(function () {
  ThemeService.applyCurrent();
})();