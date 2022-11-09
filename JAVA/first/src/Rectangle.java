package first.src;

import java.util.Scanner;
import java.util.InputMismatchException;

public class Rectangle {
    private int width; int height;

    private static int count = 0;

    public static int getCount() {
        return count;
    }

    
    public Rectangle(int width) {
        count++;
        this.width = width;
    }

    public int getWidth() {
        return width;
    }
    public int getHeight() {
        return height;
    }
    public void setHeight(int height) {
        this.height = height;
    }

    public int area() {
        return this.width * this.height;
    }
}

// class Rectangle {
//     int width, height;

//     Rectangle(int w, int h) {
//         this.width = w;
//         this.height = h;
//     }

//     int area() {
//         return this.width * this.height;
//     }
// }

// private class Secondjava {
//     public int num;
//     public String str = "문자열";

//     public Secondjava(int num) {
//         this.num = num;
//     }

//     public void testMethod() {
//         System.out.println("test");
//     }
//     public static void main(String [] args) {
//         System.out.println("가로 세로 띄어서 입력");
//         Scanner input = new Scanner(System.in);
//         int a = input.nextInt();
//         int b = input.nextInt();
//         Rectangle rec = new Rectangle(a, b);
//         System.out.println(rec.area());
//         input.close();
        // int [] arr = {1,2,3,4};

        // int [] arr2 = new int[4];
        
        // for (int i = 0; i <= arr2.length + 1; i++) {

        // }
        
        // try {
        //     for (int i = 0; i <arr.length+1; i++) {
        //         System.out.println(arr[i]);
        //     }

        // } catch(ArrayIndexOutOfBoundsException e) {
        //     System.out.println("인덱스가 범위를 벗어났습니다.");
        // }

        // Scanner input = new Scanner(System.in);
        // System.out.println("숫자를 입력해");
        
        // int num = 0;

        // try {
        //     num = input.nextInt();

        // } catch (InputMismatchException e) {
        //     System.out.println("숫자를 입력해");
        // }

        // System.out.println("숫자" + num);

        // input.close();

        // int num1 = 5;
        // int num2 = 0;

        // try {
        //     System.out.println(num1/num2); 
        // } catch(ArithmeticException e) {
        //     System.out.println("0으로 나눌 수 없음");
        // } finally {
        //     System.out.println("finally");
        // }

        // System.out.println("aaa");



    // }
    
// }
