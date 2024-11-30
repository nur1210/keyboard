function board_extrude_1_outline_fn(){
    return new CSG.Path2D([[52.0029062,-115.8798789],[78.2876141,-43.6632373]]).appendArc([80.6000197,-42.3947168],{"radius":2,"clockwise":true,"large":false}).appendPoint([134.8872691,-54.434028]).appendArc([135.1382889,-54.5072034],{"radius":2,"clockwise":true,"large":false}).appendPoint([156.5049925,-62.2840476]).appendArc([156.7443213,-62.3893444],{"radius":2,"clockwise":true,"large":false}).appendPoint([189.0703776,-79.2142539]).appendArc([190.0263939,-81.6723825],{"radius":2,"clockwise":true,"large":false}).appendPoint([185.1048528,-95.1942054]).appendArc([186.984238,-97.8782456],{"radius":2,"clockwise":false,"large":false}).appendPoint([202.789018,-97.8782456]).appendArc([204.6684033,-95.1942054],{"radius":2,"clockwise":false,"large":false}).appendPoint([199.7468622,-81.6723825]).appendArc([200.7028784,-79.2142539],{"radius":2,"clockwise":true,"large":false}).appendPoint([233.0289347,-62.3893444]).appendArc([233.2682635,-62.2840475],{"radius":2,"clockwise":true,"large":false}).appendPoint([254.6349671,-54.5072035]).appendArc([254.8859869,-54.434028],{"radius":2,"clockwise":true,"large":false}).appendPoint([309.1732363,-42.3947168]).appendArc([311.485642,-43.6632373],{"radius":2,"clockwise":true,"large":false}).appendPoint([337.7703498,-115.8798789]).appendArc([337.1825426,-118.0909509],{"radius":2,"clockwise":true,"large":false}).appendPoint([307.5838584,-143.1257999]).appendArc([307.0138772,-143.4640558],{"radius":2,"clockwise":true,"large":false}).appendPoint([254.950339,-163.6051194]).appendArc([254.4860753,-163.8598994],{"radius":2,"clockwise":false,"large":false}).appendPoint([221.8007612,-187.9269828]).appendArc([219.3293254,-187.848564],{"radius":2,"clockwise":true,"large":false}).appendPoint([203.4728205,-174.5433765]).appendArc([202.1872452,-174.0754654],{"radius":2,"clockwise":false,"large":false}).appendPoint([187.5860108,-174.0754654]).appendArc([186.3004355,-174.5433765],{"radius":2,"clockwise":false,"large":false}).appendPoint([170.4439305,-187.848564]).appendArc([167.9724948,-187.9269828],{"radius":2,"clockwise":true,"large":false}).appendPoint([135.2871807,-163.8598994]).appendArc([134.822917,-163.6051194],{"radius":2,"clockwise":false,"large":false}).appendPoint([82.7593788,-143.4640557]).appendArc([82.1893976,-143.1257999],{"radius":2,"clockwise":true,"large":false}).appendPoint([52.5907134,-118.0909509]).appendArc([52.0029061,-115.8798789],{"radius":2,"clockwise":true,"large":false}).close().innerToCAG()
.extrude({ offset: [0, 0, 1] });
}




                function bottom_case_fn() {
                    

                // creating part 0 of case bottom
                let bottom__part_0 = board_extrude_1_outline_fn();

                // make sure that rotations are relative
                let bottom__part_0_bounds = bottom__part_0.getBounds();
                let bottom__part_0_x = bottom__part_0_bounds[0].x + (bottom__part_0_bounds[1].x - bottom__part_0_bounds[0].x) / 2
                let bottom__part_0_y = bottom__part_0_bounds[0].y + (bottom__part_0_bounds[1].y - bottom__part_0_bounds[0].y) / 2
                bottom__part_0 = translate([-bottom__part_0_x, -bottom__part_0_y, 0], bottom__part_0);
                bottom__part_0 = rotate([0,0,0], bottom__part_0);
                bottom__part_0 = translate([bottom__part_0_x, bottom__part_0_y, 0], bottom__part_0);

                bottom__part_0 = translate([0,0,0], bottom__part_0);
                let result = bottom__part_0;
                
            
                    return result;
                }
            
            
        
            function main() {
                return bottom_case_fn();
            }

        