function standoff_extrude_4_outline_fn(){
    return CAG.circle({"center":[250.2266225,-158.9644915],"radius":2.5})
.union(
    CAG.circle({"center":[224.5580107,-88.4405603],"radius":2.5})
).union(
    CAG.circle({"center":[316.5300604,-118.9225559],"radius":2.5})
).union(
    CAG.circle({"center":[297.0349123,-65.3600765],"radius":2.5})
).union(
    CAG.circle({"center":[139.5466335,-158.9644915],"radius":2.5})
).union(
    CAG.circle({"center":[165.2152453,-88.4405603],"radius":2.5})
).union(
    CAG.circle({"center":[73.2431956,-118.9225559],"radius":2.5})
).union(
    CAG.circle({"center":[92.7383437,-65.3600765],"radius":2.5})
).extrude({ offset: [0, 0, 4] });
}


function mounting_extrude_4_outline_fn(){
    return CAG.circle({"center":[250.2266225,-158.9644915],"radius":1.5})
.union(
    CAG.circle({"center":[224.5580107,-88.4405603],"radius":1.5})
).union(
    CAG.circle({"center":[316.5300604,-118.9225559],"radius":1.5})
).union(
    CAG.circle({"center":[297.0349123,-65.3600765],"radius":1.5})
).union(
    CAG.circle({"center":[139.5466335,-158.9644915],"radius":1.5})
).union(
    CAG.circle({"center":[165.2152453,-88.4405603],"radius":1.5})
).union(
    CAG.circle({"center":[73.2431956,-118.9225559],"radius":1.5})
).union(
    CAG.circle({"center":[92.7383437,-65.3600765],"radius":1.5})
).extrude({ offset: [0, 0, 4] });
}


function xlBoard_extrude_1_outline_fn(){
    return new CSG.Path2D([[49.4394807,-117.0752238],[77.0922692,-41.0998118]]).appendArc([79.4046748,-39.8312913],{"radius":2,"clockwise":true,"large":false}).appendPoint([133.6919242,-51.8706025]).appendArc([133.942944,-51.9437779],{"radius":2,"clockwise":true,"large":false}).appendPoint([159.068418,-61.0887027]).appendArc([159.3077468,-61.1939995],{"radius":2,"clockwise":true,"large":false}).appendPoint([191.6338031,-78.018909]).appendArc([192.5898194,-80.4770376],{"radius":2,"clockwise":true,"large":false}).appendPoint([187.6682783,-93.9988605]).appendArc([189.5476635,-96.6829007],{"radius":2,"clockwise":false,"large":false}).appendPoint([200.2255925,-96.6829007]).appendArc([202.1049778,-93.9988605],{"radius":2,"clockwise":false,"large":false}).appendPoint([197.1834367,-80.4770376]).appendArc([198.1394529,-78.018909],{"radius":2,"clockwise":true,"large":false}).appendPoint([230.4655092,-61.1939995]).appendArc([230.704838,-61.0887026],{"radius":2,"clockwise":true,"large":false}).appendPoint([255.830312,-51.943778]).appendArc([256.0813318,-51.8706025],{"radius":2,"clockwise":true,"large":false}).appendPoint([310.3685812,-39.8312913]).appendArc([312.6809869,-41.0998118],{"radius":2,"clockwise":true,"large":false}).appendPoint([340.3337753,-117.0752238]).appendArc([339.7459681,-119.2862958],{"radius":2,"clockwise":true,"large":false}).appendPoint([310.1553798,-144.3142971]).appendArc([309.5661418,-144.6598887],{"radius":2,"clockwise":true,"large":false}).appendPoint([257.7542657,-164.092283]).appendArc([257.2578581,-164.3639679],{"radius":2,"clockwise":false,"large":false}).appendPoint([222.05018,-190.726702]).appendArc([219.5658571,-190.6578523],{"radius":2,"clockwise":true,"large":false}).appendPoint([200.6551564,-174.7898902]).appendArc([199.3695811,-174.3219791],{"radius":2,"clockwise":false,"large":false}).appendPoint([190.4036749,-174.3219791]).appendArc([189.1180996,-174.7898902],{"radius":2,"clockwise":false,"large":false}).appendPoint([170.2073988,-190.6578522]).appendArc([167.723076,-190.726702],{"radius":2,"clockwise":true,"large":false}).appendPoint([132.5153979,-164.3639679]).appendArc([132.0189903,-164.0922831],{"radius":2,"clockwise":false,"large":false}).appendPoint([80.2071142,-144.6598888]).appendArc([79.6178762,-144.3142971],{"radius":2,"clockwise":true,"large":false}).appendPoint([50.0272879,-119.2862958]).appendArc([49.4394806,-117.0752238],{"radius":2,"clockwise":true,"large":false}).close().innerToCAG()
.extrude({ offset: [0, 0, 1] });
}


function xlBoard_extrude_5_6_outline_fn(){
    return new CSG.Path2D([[49.4394807,-117.0752238],[77.0922692,-41.0998118]]).appendArc([79.4046748,-39.8312913],{"radius":2,"clockwise":true,"large":false}).appendPoint([133.6919242,-51.8706025]).appendArc([133.942944,-51.9437779],{"radius":2,"clockwise":true,"large":false}).appendPoint([159.068418,-61.0887027]).appendArc([159.3077468,-61.1939995],{"radius":2,"clockwise":true,"large":false}).appendPoint([191.6338031,-78.018909]).appendArc([192.5898194,-80.4770376],{"radius":2,"clockwise":true,"large":false}).appendPoint([187.6682783,-93.9988605]).appendArc([189.5476635,-96.6829007],{"radius":2,"clockwise":false,"large":false}).appendPoint([200.2255925,-96.6829007]).appendArc([202.1049778,-93.9988605],{"radius":2,"clockwise":false,"large":false}).appendPoint([197.1834367,-80.4770376]).appendArc([198.1394529,-78.018909],{"radius":2,"clockwise":true,"large":false}).appendPoint([230.4655092,-61.1939995]).appendArc([230.704838,-61.0887026],{"radius":2,"clockwise":true,"large":false}).appendPoint([255.830312,-51.943778]).appendArc([256.0813318,-51.8706025],{"radius":2,"clockwise":true,"large":false}).appendPoint([310.3685812,-39.8312913]).appendArc([312.6809869,-41.0998118],{"radius":2,"clockwise":true,"large":false}).appendPoint([340.3337753,-117.0752238]).appendArc([339.7459681,-119.2862958],{"radius":2,"clockwise":true,"large":false}).appendPoint([310.1553798,-144.3142971]).appendArc([309.5661418,-144.6598887],{"radius":2,"clockwise":true,"large":false}).appendPoint([257.7542657,-164.092283]).appendArc([257.2578581,-164.3639679],{"radius":2,"clockwise":false,"large":false}).appendPoint([222.05018,-190.726702]).appendArc([219.5658571,-190.6578523],{"radius":2,"clockwise":true,"large":false}).appendPoint([200.6551564,-174.7898902]).appendArc([199.3695811,-174.3219791],{"radius":2,"clockwise":false,"large":false}).appendPoint([190.4036749,-174.3219791]).appendArc([189.1180996,-174.7898902],{"radius":2,"clockwise":false,"large":false}).appendPoint([170.2073988,-190.6578522]).appendArc([167.723076,-190.726702],{"radius":2,"clockwise":true,"large":false}).appendPoint([132.5153979,-164.3639679]).appendArc([132.0189903,-164.0922831],{"radius":2,"clockwise":false,"large":false}).appendPoint([80.2071142,-144.6598888]).appendArc([79.6178762,-144.3142971],{"radius":2,"clockwise":true,"large":false}).appendPoint([50.0272879,-119.2862958]).appendArc([49.4394806,-117.0752238],{"radius":2,"clockwise":true,"large":false}).close().innerToCAG()
.extrude({ offset: [0, 0, 5.6] });
}


function board_extrude_5_6_outline_fn(){
    return new CSG.Path2D([[52.0029062,-115.8798789],[78.2876141,-43.6632373]]).appendArc([80.6000197,-42.3947168],{"radius":2,"clockwise":true,"large":false}).appendPoint([134.8872691,-54.434028]).appendArc([135.1382889,-54.5072034],{"radius":2,"clockwise":true,"large":false}).appendPoint([156.5049925,-62.2840476]).appendArc([156.7443213,-62.3893444],{"radius":2,"clockwise":true,"large":false}).appendPoint([189.0703776,-79.2142539]).appendArc([190.0263939,-81.6723825],{"radius":2,"clockwise":true,"large":false}).appendPoint([185.1048528,-95.1942054]).appendArc([186.984238,-97.8782456],{"radius":2,"clockwise":false,"large":false}).appendPoint([202.789018,-97.8782456]).appendArc([204.6684033,-95.1942054],{"radius":2,"clockwise":false,"large":false}).appendPoint([199.7468622,-81.6723825]).appendArc([200.7028784,-79.2142539],{"radius":2,"clockwise":true,"large":false}).appendPoint([233.0289347,-62.3893444]).appendArc([233.2682635,-62.2840475],{"radius":2,"clockwise":true,"large":false}).appendPoint([254.6349671,-54.5072035]).appendArc([254.8859869,-54.434028],{"radius":2,"clockwise":true,"large":false}).appendPoint([309.1732363,-42.3947168]).appendArc([311.485642,-43.6632373],{"radius":2,"clockwise":true,"large":false}).appendPoint([337.7703498,-115.8798789]).appendArc([337.1825426,-118.0909509],{"radius":2,"clockwise":true,"large":false}).appendPoint([307.5838584,-143.1257999]).appendArc([307.0138772,-143.4640558],{"radius":2,"clockwise":true,"large":false}).appendPoint([254.950339,-163.6051194]).appendArc([254.4860753,-163.8598994],{"radius":2,"clockwise":false,"large":false}).appendPoint([221.8007612,-187.9269828]).appendArc([219.3293254,-187.848564],{"radius":2,"clockwise":true,"large":false}).appendPoint([203.4728205,-174.5433765]).appendArc([202.1872452,-174.0754654],{"radius":2,"clockwise":false,"large":false}).appendPoint([187.5860108,-174.0754654]).appendArc([186.3004355,-174.5433765],{"radius":2,"clockwise":false,"large":false}).appendPoint([170.4439305,-187.848564]).appendArc([167.9724948,-187.9269828],{"radius":2,"clockwise":true,"large":false}).appendPoint([135.2871807,-163.8598994]).appendArc([134.822917,-163.6051194],{"radius":2,"clockwise":false,"large":false}).appendPoint([82.7593788,-143.4640557]).appendArc([82.1893976,-143.1257999],{"radius":2,"clockwise":true,"large":false}).appendPoint([52.5907134,-118.0909509]).appendArc([52.0029061,-115.8798789],{"radius":2,"clockwise":true,"large":false}).close().innerToCAG()
.extrude({ offset: [0, 0, 5.6] });
}




                function _standoffs_case_fn() {
                    

                // creating part 0 of case _standoffs
                let _standoffs__part_0 = standoff_extrude_4_outline_fn();

                // make sure that rotations are relative
                let _standoffs__part_0_bounds = _standoffs__part_0.getBounds();
                let _standoffs__part_0_x = _standoffs__part_0_bounds[0].x + (_standoffs__part_0_bounds[1].x - _standoffs__part_0_bounds[0].x) / 2
                let _standoffs__part_0_y = _standoffs__part_0_bounds[0].y + (_standoffs__part_0_bounds[1].y - _standoffs__part_0_bounds[0].y) / 2
                _standoffs__part_0 = translate([-_standoffs__part_0_x, -_standoffs__part_0_y, 0], _standoffs__part_0);
                _standoffs__part_0 = rotate([0,0,0], _standoffs__part_0);
                _standoffs__part_0 = translate([_standoffs__part_0_x, _standoffs__part_0_y, 0], _standoffs__part_0);

                _standoffs__part_0 = translate([0,0,0], _standoffs__part_0);
                let result = _standoffs__part_0;
                
            
                    return result;
                }
            
            

                function _holes_case_fn() {
                    

                // creating part 0 of case _holes
                let _holes__part_0 = mounting_extrude_4_outline_fn();

                // make sure that rotations are relative
                let _holes__part_0_bounds = _holes__part_0.getBounds();
                let _holes__part_0_x = _holes__part_0_bounds[0].x + (_holes__part_0_bounds[1].x - _holes__part_0_bounds[0].x) / 2
                let _holes__part_0_y = _holes__part_0_bounds[0].y + (_holes__part_0_bounds[1].y - _holes__part_0_bounds[0].y) / 2
                _holes__part_0 = translate([-_holes__part_0_x, -_holes__part_0_y, 0], _holes__part_0);
                _holes__part_0 = rotate([0,0,0], _holes__part_0);
                _holes__part_0 = translate([_holes__part_0_x, _holes__part_0_y, 0], _holes__part_0);

                _holes__part_0 = translate([0,0,0], _holes__part_0);
                let result = _holes__part_0;
                
            
                    return result;
                }
            
            

                function xlBottom_case_fn() {
                    

                // creating part 0 of case xlBottom
                let xlBottom__part_0 = xlBoard_extrude_1_outline_fn();

                // make sure that rotations are relative
                let xlBottom__part_0_bounds = xlBottom__part_0.getBounds();
                let xlBottom__part_0_x = xlBottom__part_0_bounds[0].x + (xlBottom__part_0_bounds[1].x - xlBottom__part_0_bounds[0].x) / 2
                let xlBottom__part_0_y = xlBottom__part_0_bounds[0].y + (xlBottom__part_0_bounds[1].y - xlBottom__part_0_bounds[0].y) / 2
                xlBottom__part_0 = translate([-xlBottom__part_0_x, -xlBottom__part_0_y, 0], xlBottom__part_0);
                xlBottom__part_0 = rotate([0,0,0], xlBottom__part_0);
                xlBottom__part_0 = translate([xlBottom__part_0_x, xlBottom__part_0_y, 0], xlBottom__part_0);

                xlBottom__part_0 = translate([0,0,0], xlBottom__part_0);
                let result = xlBottom__part_0;
                
            
                    return result;
                }
            
            

                function wall_case_fn() {
                    

                // creating part 0 of case wall
                let wall__part_0 = _outerWall_case_fn();

                // make sure that rotations are relative
                let wall__part_0_bounds = wall__part_0.getBounds();
                let wall__part_0_x = wall__part_0_bounds[0].x + (wall__part_0_bounds[1].x - wall__part_0_bounds[0].x) / 2
                let wall__part_0_y = wall__part_0_bounds[0].y + (wall__part_0_bounds[1].y - wall__part_0_bounds[0].y) / 2
                wall__part_0 = translate([-wall__part_0_x, -wall__part_0_y, 0], wall__part_0);
                wall__part_0 = rotate([0,0,0], wall__part_0);
                wall__part_0 = translate([wall__part_0_x, wall__part_0_y, 0], wall__part_0);

                wall__part_0 = translate([0,0,0], wall__part_0);
                let result = wall__part_0;
                
            

                // creating part 1 of case wall
                let wall__part_1 = _innerWall_case_fn();

                // make sure that rotations are relative
                let wall__part_1_bounds = wall__part_1.getBounds();
                let wall__part_1_x = wall__part_1_bounds[0].x + (wall__part_1_bounds[1].x - wall__part_1_bounds[0].x) / 2
                let wall__part_1_y = wall__part_1_bounds[0].y + (wall__part_1_bounds[1].y - wall__part_1_bounds[0].y) / 2
                wall__part_1 = translate([-wall__part_1_x, -wall__part_1_y, 0], wall__part_1);
                wall__part_1 = rotate([0,0,0], wall__part_1);
                wall__part_1 = translate([wall__part_1_x, wall__part_1_y, 0], wall__part_1);

                wall__part_1 = translate([0,0,0], wall__part_1);
                result = result.subtract(wall__part_1);
                
            
                    return result;
                }
            
            

                function _outerWall_case_fn() {
                    

                // creating part 0 of case _outerWall
                let _outerWall__part_0 = xlBoard_extrude_5_6_outline_fn();

                // make sure that rotations are relative
                let _outerWall__part_0_bounds = _outerWall__part_0.getBounds();
                let _outerWall__part_0_x = _outerWall__part_0_bounds[0].x + (_outerWall__part_0_bounds[1].x - _outerWall__part_0_bounds[0].x) / 2
                let _outerWall__part_0_y = _outerWall__part_0_bounds[0].y + (_outerWall__part_0_bounds[1].y - _outerWall__part_0_bounds[0].y) / 2
                _outerWall__part_0 = translate([-_outerWall__part_0_x, -_outerWall__part_0_y, 0], _outerWall__part_0);
                _outerWall__part_0 = rotate([0,0,0], _outerWall__part_0);
                _outerWall__part_0 = translate([_outerWall__part_0_x, _outerWall__part_0_y, 0], _outerWall__part_0);

                _outerWall__part_0 = translate([0,0,0], _outerWall__part_0);
                let result = _outerWall__part_0;
                
            
                    return result;
                }
            
            

                function _innerWall_case_fn() {
                    

                // creating part 0 of case _innerWall
                let _innerWall__part_0 = board_extrude_5_6_outline_fn();

                // make sure that rotations are relative
                let _innerWall__part_0_bounds = _innerWall__part_0.getBounds();
                let _innerWall__part_0_x = _innerWall__part_0_bounds[0].x + (_innerWall__part_0_bounds[1].x - _innerWall__part_0_bounds[0].x) / 2
                let _innerWall__part_0_y = _innerWall__part_0_bounds[0].y + (_innerWall__part_0_bounds[1].y - _innerWall__part_0_bounds[0].y) / 2
                _innerWall__part_0 = translate([-_innerWall__part_0_x, -_innerWall__part_0_y, 0], _innerWall__part_0);
                _innerWall__part_0 = rotate([0,0,0], _innerWall__part_0);
                _innerWall__part_0 = translate([_innerWall__part_0_x, _innerWall__part_0_y, 0], _innerWall__part_0);

                _innerWall__part_0 = translate([0,0,0], _innerWall__part_0);
                let result = _innerWall__part_0;
                
            
                    return result;
                }
            
            

                function case_case_fn() {
                    

                // creating part 0 of case case
                let case__part_0 = _standoffs_case_fn();

                // make sure that rotations are relative
                let case__part_0_bounds = case__part_0.getBounds();
                let case__part_0_x = case__part_0_bounds[0].x + (case__part_0_bounds[1].x - case__part_0_bounds[0].x) / 2
                let case__part_0_y = case__part_0_bounds[0].y + (case__part_0_bounds[1].y - case__part_0_bounds[0].y) / 2
                case__part_0 = translate([-case__part_0_x, -case__part_0_y, 0], case__part_0);
                case__part_0 = rotate([0,0,0], case__part_0);
                case__part_0 = translate([case__part_0_x, case__part_0_y, 0], case__part_0);

                case__part_0 = translate([0,0,0], case__part_0);
                let result = case__part_0;
                
            

                // creating part 1 of case case
                let case__part_1 = _holes_case_fn();

                // make sure that rotations are relative
                let case__part_1_bounds = case__part_1.getBounds();
                let case__part_1_x = case__part_1_bounds[0].x + (case__part_1_bounds[1].x - case__part_1_bounds[0].x) / 2
                let case__part_1_y = case__part_1_bounds[0].y + (case__part_1_bounds[1].y - case__part_1_bounds[0].y) / 2
                case__part_1 = translate([-case__part_1_x, -case__part_1_y, 0], case__part_1);
                case__part_1 = rotate([0,0,0], case__part_1);
                case__part_1 = translate([case__part_1_x, case__part_1_y, 0], case__part_1);

                case__part_1 = translate([0,0,0], case__part_1);
                result = result.subtract(case__part_1);
                
            

                // creating part 2 of case case
                let case__part_2 = xlBottom_case_fn();

                // make sure that rotations are relative
                let case__part_2_bounds = case__part_2.getBounds();
                let case__part_2_x = case__part_2_bounds[0].x + (case__part_2_bounds[1].x - case__part_2_bounds[0].x) / 2
                let case__part_2_y = case__part_2_bounds[0].y + (case__part_2_bounds[1].y - case__part_2_bounds[0].y) / 2
                case__part_2 = translate([-case__part_2_x, -case__part_2_y, 0], case__part_2);
                case__part_2 = rotate([0,0,0], case__part_2);
                case__part_2 = translate([case__part_2_x, case__part_2_y, 0], case__part_2);

                case__part_2 = translate([0,0,0], case__part_2);
                result = result.union(case__part_2);
                
            

                // creating part 3 of case case
                let case__part_3 = wall_case_fn();

                // make sure that rotations are relative
                let case__part_3_bounds = case__part_3.getBounds();
                let case__part_3_x = case__part_3_bounds[0].x + (case__part_3_bounds[1].x - case__part_3_bounds[0].x) / 2
                let case__part_3_y = case__part_3_bounds[0].y + (case__part_3_bounds[1].y - case__part_3_bounds[0].y) / 2
                case__part_3 = translate([-case__part_3_x, -case__part_3_y, 0], case__part_3);
                case__part_3 = rotate([0,0,0], case__part_3);
                case__part_3 = translate([case__part_3_x, case__part_3_y, 0], case__part_3);

                case__part_3 = translate([0,0,0], case__part_3);
                result = result.union(case__part_3);
                
            
                    return result;
                }
            
            
        
            function main() {
                return case_case_fn();
            }

        