package java_first_project;

import java.util.Scanner;
import java.util.Arrays;
import java.util.ArrayList;

public class Main {
	// 리턴 값이 없으면 void
	public static void hello() {
		System.out.println("hello");
	}
	
	public static int number() {
		return 5;
	}
	
	public static String hellow() {
		return "aaa";
	}
	

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		
//		System.out.println("Hello");
//		
//		boolean logic = true;
//		char ch = 'A';
//		int number = 213;
//		double number2 = 5.6;
//		
//		System.out.println(logic);
//		System.out.println(ch);
//		
//		String str = "zzbtang";
//		String str2 = new String("zzbtang");
		
//		System.out.println("이름, 나이, 키, 결혼 여부를 입력해주세요.");
//		
//		Scanner scanner = new Scanner(System.in);
//		
//		String name = scanner.next();
//		int age = scanner.nextInt();
//		double height = scanner.nextDouble();
//		boolean married = scanner.nextBoolean();
//		
//		System.out.println(name);
//		System.out.println(age);
//		System.out.println(height);
//		System.out.println(married);
//		
//		scanner.close();
		
//		double a = 5.2;
//		double b = 2.0;
//		System.out.println(a/b);
//
//		int c = 5;
//		int d = 2;
//		System.out.println((double)c/d);
		
		
//		Scanner scanner = new Scanner(System.in);
//		
//		System.out.println("이름 입력하세요.");
//		String name = scanner.next();
//		
//		System.out.println("나이를 입력하세요.");
//		int age = scanner.nextInt();
//		
//		System.out.printf("안녕하세요! %s님(%d)", name, age);
		
//		
//		String str = "홍길동";
//		String str2 = "홍길동2";
//		
//		
//		
//		if(str.equals(str2)) {
//			System.out.println("남");
//		}
//		else System.out.println("여");
		
//		int number = 8;
//		if(number % 3 == 0) System.out.println("3의 배수");
//		else System.out.println("3의 배수 아님");
		
//		int number = 9;
//		
//		switch (number % 3) {
//			case 0:
//				System.out.println("3의 배수입니다.");
//				break;
//			default:
//				System.out.println("3의 배수가 아닙니다.");
//		}
		
//		for (int i = 0; i < 10; i++) {
//			System.out.println(i);
//		}
//		
//		int i = 0;
//		while(i<10) {
//			System.out.println(i);
//			i++;
//		}
		
		
//		Scanner scanner = new Scanner(System.in);
//		
//		while(true) {
//			System.out.println("숫자를 입력하세요.");
//			
//			int number = scanner.nextInt();
//			if (number == 0) {
//				System.out.print("입력종료");
//				break;
//			}
//			
//		}
		
//		int i = 10;
//		do {
//			System.out.print(i + " ");
//			i++;
//		}
//		while (i < 10);
//	
//		hello();
//		
//		int a = number();
//		
//		String b = hellow();
//		
//		
//		System.out.println(b);
//		System.out.println(a);
		
//		Scanner input = new Scanner(System.in);
		
//		System.out.println("나이를 입력하세요");
//		
//		int age = input.nextInt();
//		
//		switch (age) {
//		case 1,2,3,4,5,6,7:
//			System.out.println("유아");
//			break;
//		case 8,9,10,11,12,13:
//			System.out.println("초등학생");
//		case 14,15,16:
//			System.out.println("중학생");
//		case 17,18,19:
//			System.out.println("고등학생");
//		default:
//			System.out.println("성인");
//		}
		
		
//		System.out.println("이름을 입력하세요");
//		String name = input.next();
//		
//		if (name.equals("홍길동")) System.out.println("남자");
//		else if (name.equals("성춘향")) System.out.println("여자");
//		else System.out.println("모르겠어요");
		
//		System.out.println("숫자를 입력하세요.");
//		int num = input.nextInt();
//		
//		for (int i=1; i <= num; i++) {
//			System.out.print(i + " ");
//		}
		
//		System.out.println("숫자 두 개를 입력하세요");
//		
//		double n = input.nextDouble(), m = input.nextDouble();
//	
//		System.out.printf("덧셈 결과 : %f\n", n+m);
//		System.out.printf("뺄 결과 : %f\n", n-m);
//		System.out.printf("나눗 결과 : %.2f\n", n/m);
//		System.out.printf("곱 결과 : %f\n", n*m);
		
//		int [] intArray = new int[2];
//		intArray[0] = 1;
//		intArray[1] = 2;
//		
//		int [] intArray2 = {1,2};
////		
////		for (int i = 0; i<intArray.length; i++) {
////			if(i == 0) System.out.print("[");
////			System.out.print(intArray2[i]);
////			if (i == intArray2.length - 1) System.out.print("]");
////			else System.out.print(", ");
////			
////		}
//		
//		System.out.println(Arrays.toString(intArray2));
		
//		int [] intArray3 = {1,2,3,4,5,6,7,8,9};
//		
//		for (int value: intArray3) {
//			System.out.print(value);
//		}
//		
//		System.out.println(Arrays.toString(intArray3));
		
//		ArrayList<Integer> arrayList1 = new ArrayList<>();
//		
//		ArrayList<Integer> arrayList2 = new ArrayList<>();
//		for (int i = 0; i < 10; i++) {
//			arrayList2.add(i);
//		}
//		
//		ArrayList<Double> arrayList3 = new ArrayList<>();
//		
//		ArrayList<String> arrayList4 = new ArrayList<>();
//		
//		arrayList1.add(1); // [1];
//		arrayList1.add(2); // [1, 2];
//		arrayList1.add(0,3); // [3, 1, 2]; 밀려남..
//		arrayList1.addAll(arrayList2); // [3, 1, 2, 0, 1, 2, 3, 4, ... 9];
		
//		for (int value: arrayList1) {
//			System.out.print(value + " ");
//		}
//		
//		System.out.print(arrayList1.size());
//		
//		for (int i = 0; i < arrayList1.size(); i++) {
//			System.out.print("\n" + arrayList1.get(i) + " ");
//		}
//		
//		System.out.println(arrayList1.indexOf(9));
//		System.out.println(arrayList1.indexOf(12));
//		
//		arrayList1.remove(2);
//		arrayList1.clear();
//		System.out.println("5개의 정수를 입력하세요.");
		Scanner input = new Scanner(System.in);
//		int a = input.nextInt();
//		int b = input.nextInt();
//		int c = input.nextInt();
//		int d = input.nextInt();
//		int e = input.nextInt();
//		System.out.printf("평균은 %f", (double) (a+b+c+d+e) / 5 );
//		
		
		
		
		ArrayList<String> stringList = new ArrayList<>();
		while(true) {
			System.out.println("문자를 입력해주세요.");
			String str = input.nextLine();
			if (str.equals("exit")) {
				for (String s : stringList) {
					System.out.println(s);
				}
				return;
			}
			stringList.add(str);
		}
		
	}

}