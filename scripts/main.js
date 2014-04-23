require([
  '$api/models',
  'scripts/toplist',
  'scripts/language-example',
  'scripts/cover-example',
  'scripts/button-example',
  'scripts/playlist-example'
], function(models, toplist, languageExample, coverExample, buttonExample, playlistExample) {
  'use strict';

  toplist.doTopList();
  
  languageExample.doHelloWorld();
  coverExample.doCoverForAlbum();
  buttonExample.doShareButtonForArtist();
  buttonExample.doPlayButtonForAlbum();
  playlistExample.doPlaylistForAlbum();

});
