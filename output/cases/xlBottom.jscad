function xlBoard_extrude_1_outline_fn(){
    return new CSG.Path2D([[49.4394807,-117.0752238],[77.0922692,-41.0998118]]).appendArc([79.4046748,-39.8312913],{"radius":2,"clockwise":true,"large":false}).appendPoint([133.6919242,-51.8706025]).appendArc([133.942944,-51.9437779],{"radius":2,"clockwise":true,"large":false}).appendPoint([159.068418,-61.0887027]).appendArc([159.3077468,-61.1939995],{"radius":2,"clockwise":true,"large":false}).appendPoint([191.6338031,-78.018909]).appendArc([192.5898194,-80.4770376],{"radius":2,"clockwise":true,"large":false}).appendPoint([187.6682783,-93.9988605]).appendArc([189.5476635,-96.6829007],{"radius":2,"clockwise":false,"large":false}).appendPoint([200.2255925,-96.6829007]).appendArc([202.1049778,-93.9988605],{"radius":2,"clockwise":false,"large":false}).appendPoint([197.1834367,-80.4770376]).appendArc([198.1394529,-78.018909],{"radius":2,"clockwise":true,"large":false}).appendPoint([230.4655092,-61.1939995]).appendArc([230.704838,-61.0887026],{"radius":2,"clockwise":true,"large":false}).appendPoint([255.830312,-51.943778]).appendArc([256.0813318,-51.8706025],{"radius":2,"clockwise":true,"large":false}).appendPoint([310.3685812,-39.8312913]).appendArc([312.6809869,-41.0998118],{"radius":2,"clockwise":true,"large":false}).appendPoint([340.3337753,-117.0752238]).appendArc([339.7459681,-119.2862958],{"radius":2,"clockwise":true,"large":false}).appendPoint([310.1553798,-144.3142971]).appendArc([309.5661418,-144.6598887],{"radius":2,"clockwise":true,"large":false}).appendPoint([257.7542657,-164.092283]).appendArc([257.2578581,-164.3639679],{"radius":2,"clockwise":false,"large":false}).appendPoint([222.05018,-190.726702]).appendArc([219.5658571,-190.6578523],{"radius":2,"clockwise":true,"large":false}).appendPoint([200.6551564,-174.7898902]).appendArc([199.3695811,-174.3219791],{"radius":2,"clockwise":false,"large":false}).appendPoint([190.4036749,-174.3219791]).appendArc([189.1180996,-174.7898902],{"radius":2,"clockwise":false,"large":false}).appendPoint([170.2073988,-190.6578522]).appendArc([167.723076,-190.726702],{"radius":2,"clockwise":true,"large":false}).appendPoint([132.5153979,-164.3639679]).appendArc([132.0189903,-164.0922831],{"radius":2,"clockwise":false,"large":false}).appendPoint([80.2071142,-144.6598888]).appendArc([79.6178762,-144.3142971],{"radius":2,"clockwise":true,"large":false}).appendPoint([50.0272879,-119.2862958]).appendArc([49.4394806,-117.0752238],{"radius":2,"clockwise":true,"large":false}).close().innerToCAG()
.extrude({ offset: [0, 0, 1] });
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
            
            
        
            function main() {
                return xlBottom_case_fn();
            }

        