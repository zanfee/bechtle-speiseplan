/**
 * BUG:
 * With the current implementation only the element that are on the screen will be themed.
 * This is a problem when elements are dynamically created. Since they will not be colored.
 * The best option is probably to integrate theming into vue.
 */

class Theme {
  constructor(isLight, counterpart) {
    this.counterpart = counterpart;
    this.isLight = isLight;

    this.colors = {
      light1: '#ffffff',
      light2: '#f5f5f5',
      light3: '#BDBDBD',
      dark1: '#3c3c3c',
      dark2: '#505050',
      dark3: '#757575',
    };

    this.selectorStyleMap = {};
  }

  addMappings(mappings) {
    for (var key in mappings) {
      this.addMapping(key, mappings[key]);
    }
  }

  addMapping(selector, updatedStyles) {
    this.selectorStyleMap[selector] = updatedStyles;
  }

  activate() {
    for (var selector in this.selectorStyleMap) {
      for (var element of document.querySelectorAll(selector)) {
        var stylesToUpdate = this.selectorStyleMap[selector];

        for (var styleToUpdate in stylesToUpdate) {
          element.style[styleToUpdate] = stylesToUpdate[styleToUpdate];
        }
      }
    }
  }
}

class LightTheme extends Theme {
  constructor() {
    super(true, DarkTheme);

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
    });
  }
}

class DarkTheme extends Theme {
  constructor() {
    super(false, LightTheme);

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
}

export const ThemeService = {
  LOCALSTORAGE_KEY: "current-theme",

  Themes: {
    Light: new LightTheme(),
    Dark: new DarkTheme(),
  },

  getStored() {
    var storedKey = localStorage.getItem(this.LOCALSTORAGE_KEY);

    if (!this.validateThemeName(storedKey)) {
      localStorage.setItem(this.LOCALSTORAGE_KEY, Object.keys(this.Themes)[0]);
      return this.getStored();
    }

    return this.getThemeFromName(storedKey);
  },

  setStored(theme) {
    if (typeof theme !== "string") {
      theme = this.getNameFromTheme(theme)
    }

    localStorage.setItem(this.LOCALSTORAGE_KEY, theme);
  },

  applyCurrent() {
    this.getStored().activate();
  },

  toggleCurrent() {
    var theme = new(this.getStored().counterpart)();
    this.setStored(theme);
    theme.activate();
  },

  getThemeFromName(name) {
    if (!this.validateThemeName(name)) {
      this.getStoredTheme();
    }

    return this.Themes[name];
  },

  getNameFromTheme(theme) {
    var name = Object.keys(this.Themes).find(name => {
      return this.Themes[name].constructor === theme.constructor;
    });

    if (!this.validateThemeName(name)) {
      return this.getNameFromTheme(this.getStored());
    }

    return name;
  },

  validateThemeName(nameToValidate) {
    return nameToValidate !== undefined && Object.keys(this.Themes).includes(nameToValidate);
  }
}