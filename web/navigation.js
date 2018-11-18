document.addEventListener("DOMContentLoaded", () => {
  /* Navigation */
  var navBody = document.getElementById('nav-body');
  var navButton = document.getElementById('nav-button');
  var navOpen = document.getElementById('nav-open');

  var date = document.getElementById("date");
  var clock = document.getElementById("clock");

  /* Progress Bar*/
  var barGradient = -200;
  var progressbar = document.getElementById('progress');

  /* Content */
  var content = document.getElementById('content');

  /* Navigation */
  function toggleMenu() {
    if (navBody.classList.contains('go-left')) {
      navBody.classList.add('go-right');
      navBody.classList.remove('go-left');

      navOpen.classList.add('shown');
      navOpen.classList.remove('hidden');
    } else {
      navBody.classList.add('go-left');
      navBody.classList.remove('go-right');

      navOpen.classList.add('hidden');
      navOpen.classList.remove('shown');
    }
  }

  function closeMenu() {
    navBody.classList.add('go-left');
    navBody.classList.remove('go-right');
    navOpen.classList.add('hidden');
    navOpen.classList.remove('shown');
  }


  var KEYCODE_SPACE = 32;
  var KEYCODE_ENTER = 13;

  navButton.addEventListener('click', toggleMenu);

  navButton.addEventListener("keyup", function (event) {
    if (event.keyCode === KEYCODE_ENTER || event.keyCode === KEYCODE_SPACE) {
      navButton.click();
    }
  });

  /* Expandable List */

  var heightModules = 0;
  var heightSettings = 0;

  function setContainerHeight(id) {
    var container = document.getElementById(id);

    if (id === 'modules') {
      heightModules = container.offsetHeight;
    } else if (id === 'settings') {
      heightSettings = container.offsetHeight;
    }

    container.style.height = '0px';
    container.classList.add('toggleList');
  }

  setContainerHeight('modules');
  setContainerHeight('settings');

  // eslint-disable-next-line no-unused-vars
  function expandList(id) {
    var container = document.getElementById(id);

    var height = 0;
    if (id === 'modules') {
      height = 24 + heightModules;
    } else if (id === 'settings') {
      height = 24 + heightSettings;
    }

    if (container.classList.contains('open')) {
      container.classList.remove('open');
      container.style.height = '0px';
    } else {
      container.classList.add('open');
      container.style.height = height + 'px';
    }
  }

  /* Progress Bar */

  function moveForeward() {
    progressbar.style.backgroundImage = "linear-gradient(90deg, #008451 " + barGradient + "% , #f76b20)";

    if (barGradient < 120) {
      barGradient += 1;
      window.requestAnimationFrame(moveForeward);
    } else {
      window.requestAnimationFrame(moveBackward);
    }
  }

  function moveBackward() {
    progressbar.style.backgroundImage = "linear-gradient(90deg, #008451 " + barGradient + "% , #f76b20)";

    if (barGradient > -200) {
      barGradient -= 5;
      window.requestAnimationFrame(moveBackward);
    } else {
      window.requestAnimationFrame(moveForeward);
    }
  }

  window.requestAnimationFrame(moveForeward);

  /* Clock */
  function clockTick() {
    var currentTime = new Date();
    clock.innerHTML = currentTime.toLocaleTimeString();

    var weekDay = currentTime.toLocaleDateString("de-DE", {
      weekday: "long"
    });
    date.innerHTML = weekDay.bold() + ", " + currentTime.toLocaleDateString("de-DE");

    window.setTimeout(clockTick, 1000);
  }

  clockTick();

  /* Navigation */

  // eslint-disable-next-line no-unused-vars
  var NavigationService = {
    setRawContentPath: function (path) {
      closeMenu();
      content.innerHTML = '<iframe type="text/html" id="page-object" class="fullscreen" frameborder="0" src="' + path + '"></iframe>'
    },

    loadAdminPage: function () {
      this.setRawContentPath('./admin/adminTool.html')
    },
    loadWeekPage: function () {
      this.setRawContentPath('./Speiseplan/viewWeek/week.html');
    },
    loadDayPage: function () {
      this.setRawContentPath('./Speiseplan/viewDay/day.html');
    },
    loadCarouselPage: function () {
      this.setRawContentPath('./Speiseplan/viewCarousel/carousel.html');
    },
  };

  // NavigationService.loadCarouselPage();
});