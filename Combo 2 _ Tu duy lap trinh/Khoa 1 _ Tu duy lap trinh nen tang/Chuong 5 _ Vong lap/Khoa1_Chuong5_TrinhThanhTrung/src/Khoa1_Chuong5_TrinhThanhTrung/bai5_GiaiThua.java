package Khoa1_Chuong5_TrinhThanhTrung;

import java.util.Scanner;

public class bai5_GiaiThua {

	public static void main(String[] args) {

		int n;
		Scanner scan = new Scanner(System.in);
		do {
			System.out.println("Nhap vao so n nguyen duong:");
			n = Integer.parseInt(scan.nextLine());

		} while (n <= 0);
		
		int giaiThua = tinhGiaiThua(n);
		
		System.out.println("Ket qua giai thua la: " + giaiThua);
	}
		
		
		
		public static int tinhGiaiThua (int n) {
			int giaiThua = 1;
			if (n == 0 || n ==1) {
			giaiThua =1;
			}
			else {
				for (int i =1; i <=n; i++) {
					giaiThua = giaiThua*i;
				}
				
			}
			return giaiThua;
			
	}
	

}
