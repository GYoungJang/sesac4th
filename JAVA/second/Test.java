package second;
import first.src.Rectangle;
import java.util.ArrayList;
import java.util.Scanner;



public class Test {

    public static void main(String[] args) {
        
        ArrayList<Rectangle> Rect = new ArrayList<>();
        Scanner input = new Scanner(System.in);
        while (true) {
            System.out.println("가로 세로 띄어서 입력");
            int a = input.nextInt();
            int b = input.nextInt();
            
            if (a == 0 && b == 0) {
                for (Rectangle value : Rect) {
                    System.out.printf("가로 길이는 : %d\n", value.getWidth());
                    System.out.printf("세로 길이는 : %d\n", value.getHeight());
                    System.out.printf("넓이 : %d\n",value.area()) ;
                    
                }
               
                System.out.printf("Rectangle 인스턴스 갯수 : %d\n", Rectangle.getCount());
                input.close();
                return;
            }
            Rectangle rec = new Rectangle(a);
            // System.out.println(rec);
            rec.setHeight(b);
            Rect.add(rec);
            // System.out.println(Rect);
        }   
    }
}
