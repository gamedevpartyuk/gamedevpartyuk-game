"use strict";
// --------------------------------------------------------------------------------------------
// images and corresponding files
// --------------------------------------------------------------------------------------------
// 
// NOTE: this structure is updated/expanded after loading maps, as maps from Tiled contain
//  tileset definitions. Eventually, all sprites should be defined in maps and this would be
//  an empty set.
//
// each file can contains an array of sprite definitions
//  each sprite definition contains
//  '<image filename>':
//        [ {  id - unique identifier, needed for lookup
//             x, y - coordinates in the image file where this sprite starts
//             w, h - width and height in pixels
//             left, right - pixels to ignore for the actual underlying physical body
//             top, right - pixels to ignore for the actual underlying physical body
//          }, ...
//        ]
//
var definitions = {
'sprites/series/overworld-punk/punk-left-01.png': [ { id: 'punk-left-01', x:0, y:0, w:16, h:24, left:4, right:4, top:6, bottom:1 } ],
'sprites/series/overworld-punk/punk-left-02.png': [ { id: 'punk-left-02', x:0, y:0, w:16, h:24, left:4, right:4, top:6, bottom:1 } ],
'sprites/series/overworld-punk/punk-right-01.png': [ { id: 'punk-right-01', x:0, y:0, w:16, h:24, left:4, right:4, top:6, bottom:1 } ],
'sprites/series/overworld-punk/punk-right-02.png': [ { id: 'punk-right-02', x:0, y:0, w:16, h:24, left:4, right:4, top:6, bottom:1 } ],
'sprites/series/overworld-punk/punk-down-01.png': [ { id: 'punk-down-01', x:0, y:0, w:16, h:24, left:4, right:4, top:6, bottom:1 } ],
'sprites/series/overworld-punk/punk-down-02.png': [ { id: 'punk-down-02', x:0, y:0, w:16, h:24, left:4, right:4, top:6, bottom:1 } ],
'sprites/series/overworld-punk/punk-up-01.png': [ { id: 'punk-up-01', x:0, y:0, w:16, h:24, left:4, right:4, top:6, bottom:1 } ],
'sprites/series/overworld-punk/punk-up-02.png': [ { id: 'punk-up-02', x:0, y:0, w:16, h:24, left:4, right:4, top:6, bottom:1 } ],

'sprites/series/overworld-boy/boy-left-01.png': [ { id: 'boy-left-01', x:0, y:0, w:15, h:24, left:4, right:4, top:6, bottom:1 } ],
'sprites/series/overworld-boy/boy-left-02.png': [ { id: 'boy-left-02', x:0, y:0, w:15, h:24, left:4, right:4, top:6, bottom:1 } ],
'sprites/series/overworld-boy/boy-up-left-01.png': [ { id: 'boy-up-left-01', x:0, y:0, w:16, h:24, left:4, right:4, top:6, bottom:1 } ],
'sprites/series/overworld-boy/boy-up-left-02.png': [ { id: 'boy-up-left-02', x:0, y:0, w:16, h:24, left:4, right:4, top:6, bottom:1 } ],
'sprites/series/overworld-boy/boy-down-left-01.png': [ { id: 'boy-down-left-01', x:0, y:0, w:15, h:24, left:4, right:4, top:6, bottom:1 } ],
'sprites/series/overworld-boy/boy-down-left-02.png': [ { id: 'boy-down-left-02', x:0, y:0, w:15, h:24, left:4, right:4, top:6, bottom:1 } ],
'sprites/series/overworld-boy/boy-right-01.png': [ { id: 'boy-right-01', x:0, y:0, w:15, h:24, left:4, right:4, top:6, bottom:1 } ],
'sprites/series/overworld-boy/boy-right-02.png': [ { id: 'boy-right-02', x:0, y:0, w:15, h:24, left:4, right:4, top:6, bottom:1 } ],
'sprites/series/overworld-boy/boy-up-right-01.png': [ { id: 'boy-up-right-01', x:0, y:0, w:16, h:24, left:4, right:4, top:6, bottom:1 } ],
'sprites/series/overworld-boy/boy-up-right-02.png': [ { id: 'boy-up-right-02', x:0, y:0, w:16, h:24, left:4, right:4, top:6, bottom:1 } ],
'sprites/series/overworld-boy/boy-down-right-01.png': [ { id: 'boy-down-right-01', x:0, y:0, w:15, h:24, left:4, right:4, top:6, bottom:1 } ],
'sprites/series/overworld-boy/boy-down-right-02.png': [ { id: 'boy-down-right-02', x:0, y:0, w:15, h:24, left:4, right:4, top:6, bottom:1 } ],
'sprites/series/overworld-boy/boy-down-01.png': [ { id: 'boy-down-01', x:0, y:0, w:15, h:24, left:4, right:4, top:6, bottom:1 } ],
'sprites/series/overworld-boy/boy-down-02.png': [ { id: 'boy-down-02', x:0, y:0, w:15, h:24, left:4, right:4, top:6, bottom:1 } ],
'sprites/series/overworld-boy/boy-up-01.png': [ { id: 'boy-up-01', x:0, y:0, w:15, h:24, left:4, right:4, top:6, bottom:1 } ],
'sprites/series/overworld-boy/boy-up-02.png': [ { id: 'boy-up-02', x:0, y:0, w:15, h:24, left:4, right:4, top:6, bottom:1 } ],

'sprites/series/lostgarden-flame/lostgarden-flame 1.png': [ { id: 'lostgarden-flame-01', x:0, y:0, w:19, h:40, left:2, right:2, top:5, bottom:2 } ],
'sprites/series/lostgarden-flame/lostgarden-flame 2.png': [ { id: 'lostgarden-flame-02', x:0, y:0, w:19, h:40, left:2, right:2, top:5, bottom:2 } ],
'sprites/series/lostgarden-flame/lostgarden-flame 3.png': [ { id: 'lostgarden-flame-03', x:0, y:0, w:19, h:40, left:2, right:2, top:5, bottom:2 } ],
'sprites/series/lostgarden-flame/lostgarden-flame 4.png': [ { id: 'lostgarden-flame-04', x:0, y:0, w:19, h:40, left:2, right:2, top:5, bottom:2 } ],
'sprites/series/lostgarden-flame/lostgarden-flame 5.png': [ { id: 'lostgarden-flame-05', x:0, y:0, w:19, h:40, left:2, right:2, top:5, bottom:2 } ],

'sprites/series/lostgarden-flag/lostgarden-flag 1.png': [ { id: 'lostgarden-flag-01', x:0, y:0, w:26, h:30, left:10, right:8, top:0, bottom:10 } ],
'sprites/series/lostgarden-flag/lostgarden-flag 2.png': [ { id: 'lostgarden-flag-02', x:0, y:0, w:26, h:30, left:10, right:8, top:0, bottom:10 } ],
'sprites/series/lostgarden-flag/lostgarden-flag 3.png': [ { id: 'lostgarden-flag-03', x:0, y:0, w:26, h:30, left:10, right:8, top:0, bottom:10 } ],
'sprites/series/lostgarden-flag/lostgarden-flag 4.png': [ { id: 'lostgarden-flag-04', x:0, y:0, w:26, h:30, left:10, right:8, top:0, bottom:10 } ],
'sprites/series/lostgarden-flag/lostgarden-flag 5.png': [ { id: 'lostgarden-flag-05', x:0, y:0, w:26, h:30, left:10, right:8, top:0, bottom:10 } ],
'sprites/series/lostgarden-flag/lostgarden-flag 6.png': [ { id: 'lostgarden-flag-06', x:0, y:0, w:26, h:30, left:10, right:8, top:0, bottom:10 } ],
'sprites/series/lostgarden-flag/lostgarden-flag 7.png': [ { id: 'lostgarden-flag-07', x:0, y:0, w:26, h:30, left:10, right:8, top:0, bottom:10 } ],
'sprites/series/lostgarden-flag/lostgarden-flag 8.png': [ { id: 'lostgarden-flag-08', x:0, y:0, w:26, h:30, left:10, right:8, top:0, bottom:10 } ],

// car images start with the car facing up and rotate left 45/2 degrees each time
'sprites/series/car/carRotate0.png': [ { id: 'carRotate01', x:0, y:0, w:64, h:64, left:0, right:0, top:0, bottom:0 } ],
'sprites/series/car/carRotate1.png': [ { id: 'carRotate02', x:0, y:0, w:64, h:64, left:0, right:0, top:0, bottom:0 } ],
'sprites/series/car/carRotate2.png': [ { id: 'carRotate03', x:0, y:0, w:64, h:64, left:0, right:0, top:0, bottom:0 } ],
'sprites/series/car/carRotate3.png': [ { id: 'carRotate04', x:0, y:0, w:64, h:64, left:0, right:0, top:0, bottom:0 } ],
'sprites/series/car/carRotate4.png': [ { id: 'carRotate05', x:0, y:0, w:64, h:64, left:0, right:0, top:0, bottom:0 } ],
'sprites/series/car/carRotate5.png': [ { id: 'carRotate06', x:0, y:0, w:64, h:64, left:0, right:0, top:0, bottom:0 } ],
'sprites/series/car/carRotate6.png': [ { id: 'carRotate07', x:0, y:0, w:64, h:64, left:0, right:0, top:0, bottom:0 } ],
'sprites/series/car/carRotate7.png': [ { id: 'carRotate08', x:0, y:0, w:64, h:64, left:0, right:0, top:0, bottom:0 } ],
'sprites/series/car/carRotate8.png': [ { id: 'carRotate09', x:0, y:0, w:64, h:64, left:0, right:0, top:0, bottom:0 } ],
'sprites/series/car/carRotate9.png': [ { id: 'carRotate10', x:0, y:0, w:64, h:64, left:0, right:0, top:0, bottom:0 } ],
'sprites/series/car/carRotate10.png': [ { id: 'carRotate11', x:0, y:0, w:64, h:64, left:0, right:0, top:0, bottom:0 } ],
'sprites/series/car/carRotate11.png': [ { id: 'carRotate12', x:0, y:0, w:64, h:64, left:0, right:0, top:0, bottom:0 } ],
'sprites/series/car/carRotate12.png': [ { id: 'carRotate13', x:0, y:0, w:64, h:64, left:0, right:0, top:0, bottom:0 } ],
'sprites/series/car/carRotate13.png': [ { id: 'carRotate14', x:0, y:0, w:64, h:64, left:0, right:0, top:0, bottom:0 } ],
'sprites/series/car/carRotate14.png': [ { id: 'carRotate15', x:0, y:0, w:64, h:64, left:0, right:0, top:0, bottom:0 } ],
'sprites/series/car/carRotate15.png': [ { id: 'carRotate16', x:0, y:0, w:64, h:64, left:0, right:0, top:0, bottom:0 } ],

};

