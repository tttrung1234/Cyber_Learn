package Khoa1_Chuong5_TrinhThanhTrung;

import java.util.Scanner;

public class bai4_TongLuyThua {
	public static void main(String[] args) {
		Scanner scan = new Scanner(System.in);
		int n;
		int x;
		do {
			System.out.println(" S = x + x^2 + x^3 +... + x^n");
			System.out.println("Nhap vao so n nguyen duong:");
			n = Integer.parseInt(scan.nextLine());
			System.out.println("Nhap vao so x:");
			x = Integer.parseInt(scan.nextLine());

		} while (n <= 0);
		
		int tong = tinhTongLuyThua(n, x);
		System.out.println("Tong S la: " + tong);
	}

	public static int tinhTongLuyThua (int n, int x) {
		int tong = 0;
		for (int i = 1; i <= n; i++) {
			tong = (int) (tong + Math.pow(x,i));
		}
		return tong;
	}
	
}
