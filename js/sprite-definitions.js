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

'sprites/series/lostgarden-flame/lostgarden-flame-01.png': [ { id: 'lostgarden-flame-01', x:0, y:0, w:19, h:40, left:2, right:2, top:5, bottom:2 } ],
'sprites/series/lostgarden-flame/lostgarden-flame-02.png': [ { id: 'lostgarden-flame-02', x:0, y:0, w:19, h:40, left:2, right:2, top:5, bottom:2 } ],
'sprites/series/lostgarden-flame/lostgarden-flame-03.png': [ { id: 'lostgarden-flame-03', x:0, y:0, w:19, h:40, left:2, right:2, top:5, bottom:2 } ],
'sprites/series/lostgarden-flame/lostgarden-flame-04.png': [ { id: 'lostgarden-flame-04', x:0, y:0, w:19, h:40, left:2, right:2, top:5, bottom:2 } ],
'sprites/series/lostgarden-flame/lostgarden-flame-05.png': [ { id: 'lostgarden-flame-05', x:0, y:0, w:19, h:40, left:2, right:2, top:5, bottom:2 } ],

'sprites/series/lostgarden-flag/lostgarden-flag-01.png': [ { id: 'lostgarden-flag-01', x:0, y:0, w:26, h:30, left:10, right:8, top:0, bottom:10 } ],
'sprites/series/lostgarden-flag/lostgarden-flag-02.png': [ { id: 'lostgarden-flag-02', x:0, y:0, w:26, h:30, left:10, right:8, top:0, bottom:10 } ],
'sprites/series/lostgarden-flag/lostgarden-flag-03.png': [ { id: 'lostgarden-flag-03', x:0, y:0, w:26, h:30, left:10, right:8, top:0, bottom:10 } ],
'sprites/series/lostgarden-flag/lostgarden-flag-04.png': [ { id: 'lostgarden-flag-04', x:0, y:0, w:26, h:30, left:10, right:8, top:0, bottom:10 } ],
'sprites/series/lostgarden-flag/lostgarden-flag-05.png': [ { id: 'lostgarden-flag-05', x:0, y:0, w:26, h:30, left:10, right:8, top:0, bottom:10 } ],
'sprites/series/lostgarden-flag/lostgarden-flag-06.png': [ { id: 'lostgarden-flag-06', x:0, y:0, w:26, h:30, left:10, right:8, top:0, bottom:10 } ],
'sprites/series/lostgarden-flag/lostgarden-flag-07.png': [ { id: 'lostgarden-flag-07', x:0, y:0, w:26, h:30, left:10, right:8, top:0, bottom:10 } ],
'sprites/series/lostgarden-flag/lostgarden-flag-08.png': [ { id: 'lostgarden-flag-08', x:0, y:0, w:26, h:30, left:10, right:8, top:0, bottom:10 } ],

// car images start with the car facing up and rotate left 45/2 degrees each time
'sprites/series/car/carRotate0000.png': [ { id: 'carRotate0000', x:0, y:0, w:64, h:64, left:0, right:0, top:0, bottom:0} ],
'sprites/series/car/carRotate0001.png': [ { id: 'carRotate0001', x:0, y:0, w:64, h:64, left:0, right:0, top:0, bottom:0} ],
'sprites/series/car/carRotate0002.png': [ { id: 'carRotate0002', x:0, y:0, w:64, h:64, left:0, right:0, top:0, bottom:0} ],
'sprites/series/car/carRotate0003.png': [ { id: 'carRotate0003', x:0, y:0, w:64, h:64, left:0, right:0, top:0, bottom:0} ],
'sprites/series/car/carRotate0004.png': [ { id: 'carRotate0004', x:0, y:0, w:64, h:64, left:0, right:0, top:0, bottom:0} ],
'sprites/series/car/carRotate0005.png': [ { id: 'carRotate0005', x:0, y:0, w:64, h:64, left:0, right:0, top:0, bottom:0} ],
'sprites/series/car/carRotate0006.png': [ { id: 'carRotate0006', x:0, y:0, w:64, h:64, left:0, right:0, top:0, bottom:0} ],
'sprites/series/car/carRotate0007.png': [ { id: 'carRotate0007', x:0, y:0, w:64, h:64, left:0, right:0, top:0, bottom:0} ],
'sprites/series/car/carRotate0008.png': [ { id: 'carRotate0008', x:0, y:0, w:64, h:64, left:0, right:0, top:0, bottom:0} ],
'sprites/series/car/carRotate0009.png': [ { id: 'carRotate0009', x:0, y:0, w:64, h:64, left:0, right:0, top:0, bottom:0} ],
'sprites/series/car/carRotate0010.png': [ { id: 'carRotate0010', x:0, y:0, w:64, h:64, left:0, right:0, top:0, bottom:0} ],
'sprites/series/car/carRotate0011.png': [ { id: 'carRotate0011', x:0, y:0, w:64, h:64, left:0, right:0, top:0, bottom:0} ],
'sprites/series/car/carRotate0012.png': [ { id: 'carRotate0012', x:0, y:0, w:64, h:64, left:0, right:0, top:0, bottom:0 } ],
'sprites/series/car/carRotate0013.png': [ { id: 'carRotate0013', x:0, y:0, w:64, h:64, left:0, right:0, top:0, bottom:0 } ],
'sprites/series/car/carRotate0014.png': [ { id: 'carRotate0014', x:0, y:0, w:64, h:64, left:0, right:0, top:0, bottom:0 } ],
'sprites/series/car/carRotate0015.png': [ { id: 'carRotate0015', x:0, y:0, w:64, h:64, left:0, right:0, top:0, bottom:0 } ],
'sprites/series/car/carRotate0016.png': [ { id: 'carRotate0016', x:0, y:0, w:64, h:64, left:0, right:0, top:0, bottom:0 } ],
'sprites/series/car/carRotate0017.png': [ { id: 'carRotate0017', x:0, y:0, w:64, h:64, left:0, right:0, top:0, bottom:0 } ],
'sprites/series/car/carRotate0018.png': [ { id: 'carRotate0018', x:0, y:0, w:64, h:64, left:0, right:0, top:0, bottom:0 } ],
'sprites/series/car/carRotate0019.png': [ { id: 'carRotate0019', x:0, y:0, w:64, h:64, left:0, right:0, top:0, bottom:0 } ],
'sprites/series/car/carRotate0020.png': [ { id: 'carRotate0020', x:0, y:0, w:64, h:64, left:0, right:0, top:0, bottom:0 } ],
'sprites/series/car/carRotate0021.png': [ { id: 'carRotate0021', x:0, y:0, w:64, h:64, left:0, right:0, top:0, bottom:0 } ],
'sprites/series/car/carRotate0022.png': [ { id: 'carRotate0022', x:0, y:0, w:64, h:64, left:0, right:0, top:0, bottom:0 } ],
'sprites/series/car/carRotate0023.png': [ { id: 'carRotate0023', x:0, y:0, w:64, h:64, left:0, right:0, top:0, bottom:0 } ],
'sprites/series/car/carRotate0024.png': [ { id: 'carRotate0024', x:0, y:0, w:64, h:64, left:0, right:0, top:0, bottom:0 } ],
'sprites/series/car/carRotate0025.png': [ { id: 'carRotate0025', x:0, y:0, w:64, h:64, left:0, right:0, top:0, bottom:0 } ],
'sprites/series/car/carRotate0026.png': [ { id: 'carRotate0026', x:0, y:0, w:64, h:64, left:0, right:0, top:0, bottom:0 } ],
'sprites/series/car/carRotate0027.png': [ { id: 'carRotate0027', x:0, y:0, w:64, h:64, left:0, right:0, top:0, bottom:0 } ],
'sprites/series/car/carRotate0028.png': [ { id: 'carRotate0028', x:0, y:0, w:64, h:64, left:0, right:0, top:0, bottom:0 } ],
'sprites/series/car/carRotate0029.png': [ { id: 'carRotate0029', x:0, y:0, w:64, h:64, left:0, right:0, top:0, bottom:0 } ],
'sprites/series/car/carRotate0030.png': [ { id: 'carRotate0030', x:0, y:0, w:64, h:64, left:0, right:0, top:0, bottom:0 } ],
'sprites/series/car/carRotate0031.png': [ { id: 'carRotate0031', x:0, y:0, w:64, h:64, left:0, right:0, top:0, bottom:0 } ],
'sprites/series/car/carRotate0032.png': [ { id: 'carRotate0032', x:0, y:0, w:64, h:64, left:0, right:0, top:0, bottom:0 } ],

// car images start with the car facing up and rotate left 45/2 degrees each time
'sprites/series/car/mercRotate0000.png': [ { id: 'mercRotate0000', x:0, y:0, w:64, h:64, left:0, right:0, top:0, bottom:0} ],
'sprites/series/car/mercRotate0001.png': [ { id: 'mercRotate0001', x:0, y:0, w:64, h:64, left:0, right:0, top:0, bottom:0} ],
'sprites/series/car/mercRotate0002.png': [ { id: 'mercRotate0002', x:0, y:0, w:64, h:64, left:0, right:0, top:0, bottom:0} ],
'sprites/series/car/mercRotate0003.png': [ { id: 'mercRotate0003', x:0, y:0, w:64, h:64, left:0, right:0, top:0, bottom:0} ],
'sprites/series/car/mercRotate0004.png': [ { id: 'mercRotate0004', x:0, y:0, w:64, h:64, left:0, right:0, top:0, bottom:0} ],
'sprites/series/car/mercRotate0005.png': [ { id: 'mercRotate0005', x:0, y:0, w:64, h:64, left:0, right:0, top:0, bottom:0} ],
'sprites/series/car/mercRotate0006.png': [ { id: 'mercRotate0006', x:0, y:0, w:64, h:64, left:0, right:0, top:0, bottom:0} ],
'sprites/series/car/mercRotate0007.png': [ { id: 'mercRotate0007', x:0, y:0, w:64, h:64, left:0, right:0, top:0, bottom:0} ],
'sprites/series/car/mercRotate0008.png': [ { id: 'mercRotate0008', x:0, y:0, w:64, h:64, left:0, right:0, top:0, bottom:0} ],
'sprites/series/car/mercRotate0009.png': [ { id: 'mercRotate0009', x:0, y:0, w:64, h:64, left:0, right:0, top:0, bottom:0} ],
'sprites/series/car/mercRotate0010.png': [ { id: 'mercRotate0010', x:0, y:0, w:64, h:64, left:0, right:0, top:0, bottom:0} ],
'sprites/series/car/mercRotate0011.png': [ { id: 'mercRotate0011', x:0, y:0, w:64, h:64, left:0, right:0, top:0, bottom:0} ],
'sprites/series/car/mercRotate0012.png': [ { id: 'mercRotate0012', x:0, y:0, w:64, h:64, left:0, right:0, top:0, bottom:0 } ],
'sprites/series/car/mercRotate0013.png': [ { id: 'mercRotate0013', x:0, y:0, w:64, h:64, left:0, right:0, top:0, bottom:0 } ],
'sprites/series/car/mercRotate0014.png': [ { id: 'mercRotate0014', x:0, y:0, w:64, h:64, left:0, right:0, top:0, bottom:0 } ],
'sprites/series/car/mercRotate0015.png': [ { id: 'mercRotate0015', x:0, y:0, w:64, h:64, left:0, right:0, top:0, bottom:0 } ],
'sprites/series/car/mercRotate0016.png': [ { id: 'mercRotate0016', x:0, y:0, w:64, h:64, left:0, right:0, top:0, bottom:0 } ],
'sprites/series/car/mercRotate0017.png': [ { id: 'mercRotate0017', x:0, y:0, w:64, h:64, left:0, right:0, top:0, bottom:0 } ],
'sprites/series/car/mercRotate0018.png': [ { id: 'mercRotate0018', x:0, y:0, w:64, h:64, left:0, right:0, top:0, bottom:0 } ],
'sprites/series/car/mercRotate0019.png': [ { id: 'mercRotate0019', x:0, y:0, w:64, h:64, left:0, right:0, top:0, bottom:0 } ],
'sprites/series/car/mercRotate0020.png': [ { id: 'mercRotate0020', x:0, y:0, w:64, h:64, left:0, right:0, top:0, bottom:0 } ],
'sprites/series/car/mercRotate0021.png': [ { id: 'mercRotate0021', x:0, y:0, w:64, h:64, left:0, right:0, top:0, bottom:0 } ],
'sprites/series/car/mercRotate0022.png': [ { id: 'mercRotate0022', x:0, y:0, w:64, h:64, left:0, right:0, top:0, bottom:0 } ],
'sprites/series/car/mercRotate0023.png': [ { id: 'mercRotate0023', x:0, y:0, w:64, h:64, left:0, right:0, top:0, bottom:0 } ],
'sprites/series/car/mercRotate0024.png': [ { id: 'mercRotate0024', x:0, y:0, w:64, h:64, left:0, right:0, top:0, bottom:0 } ],
'sprites/series/car/mercRotate0025.png': [ { id: 'mercRotate0025', x:0, y:0, w:64, h:64, left:0, right:0, top:0, bottom:0 } ],
'sprites/series/car/mercRotate0026.png': [ { id: 'mercRotate0026', x:0, y:0, w:64, h:64, left:0, right:0, top:0, bottom:0 } ],
'sprites/series/car/mercRotate0027.png': [ { id: 'mercRotate0027', x:0, y:0, w:64, h:64, left:0, right:0, top:0, bottom:0 } ],
'sprites/series/car/mercRotate0028.png': [ { id: 'mercRotate0028', x:0, y:0, w:64, h:64, left:0, right:0, top:0, bottom:0 } ],
'sprites/series/car/mercRotate0029.png': [ { id: 'mercRotate0029', x:0, y:0, w:64, h:64, left:0, right:0, top:0, bottom:0 } ],
'sprites/series/car/mercRotate0030.png': [ { id: 'mercRotate0030', x:0, y:0, w:64, h:64, left:0, right:0, top:0, bottom:0 } ],
'sprites/series/car/mercRotate0031.png': [ { id: 'mercRotate0031', x:0, y:0, w:64, h:64, left:0, right:0, top:0, bottom:0 } ],

};

