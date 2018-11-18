<template>
<div>
    <div class="nav-header">
        <div class="header">
            <div id="nav-button" tabindex="1">
                <div class="bar"></div>
                <div class="bar"></div>
                <div class="bar"></div>
            </div>

            <h5 class="pagename"><strong>Bechtle</strong> Speiseplan</h5>
            <h6 id="clock"></h6>
            <h6 id="date"></h6>
        </div>

        <div id="progress"></div>
    </div>

    <nav id="nav-body" class="go-left">
        <ul class="nav-admin unselectable">
            <a class="menuPoint" onclick="loadAdmin()" style="color: darkred;">Bearbeiten</a>
        </ul>
        <ul class="nav-view unselectable">
            <a class="menuPoint" onclick="loadWeek()">Wochenübersicht</a>
            <a class="menuPoint" onclick="loadDay()">Tagesübersicht</a>
            <a class="menuPoint" onclick="loadCarousel()">Karussell Ansicht</a>
        </ul>
        <ul class="nav-base unselectable">
            <a onclick="expandList('modules')">Module</a>
            <div class="menuPoint" id="modules">
                <a class="indented">Speiseplan Karussell</a>
                <a class="indented">Speiseplan Tag</a>
                <a class="indented">Speiseplan Woche</a>
                <a class="indented">Wetter</a>
            </div>
            <a onclick="expandList('settings')">Einstellungen</a>
            <div class="menuPoint" id="settings">
                    <a onclick="ThemeService.toggleCurrent();" class="indented">Nachtmodus</a>
                    <a class="indented">Language</a>
                    <a class="indented">Geschwindigkeit</a>
                </div>
            </ul>
    </nav>

    <div id="nav-open" class="unselectable hidden" onclick="closeMenu()" style="width:100%"></div>

    <div id="content"></div>
</div>
</template>

<script>
export default {};
</script>
