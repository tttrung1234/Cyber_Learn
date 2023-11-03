package Khoa1_Chuong5_TrinhThanhTrung;

import java.util.Scanner;

public class bai3_TongCacSoNhoN {

	public static void main(String[] args) {
		int sum = 0;
		Scanner scan = new Scanner(System.in);
		int n;
		do {
			System.out.println("Nhap vao so n > 0:");
			n = Integer.parseInt(scan.nextLine());

		} while (n <= 0);
		sum = tinhTongSoLeNguyenDuong(n);
	}

	public static int tinhTongSoLeNguyenDuong(int n) {
		int sum = 0;
		for (int i = 1; i <= n; i = i + 2) {
			if (i % 2 != 0) {
				sum = sum + i;
			}
		}
		System.out.println("Tong cac so le nguyen duong la: " + sum);
		return sum;

	}

}
