package Khoa1_Chuong5_TrinhThanhTrung;

import java.util.Scanner;

public class bai6_TienTietKiem {
	public static void main(String[] args) {
		// TODO Auto-generated method stub
		Scanner scan = new Scanner(System.in);
		System.out.println("Nhap vao so tien gui");
		float soTienGui = Float.parseFloat(scan.nextLine());
		System.out.println("Nhap vao so tien muon co");
		float soTienMuonCo = Float.parseFloat(scan.nextLine());
		System.out.println("Nhap vao lai suat tiet kiem theo nam. VD: 8%");
		float tienLaiTietKiem = Float.parseFloat(scan.nextLine());

		int soNamTietKiem = calculate(soTienGui, tienLaiTietKiem, soTienMuonCo);
		
		System.out.println("So nam tiet kiem: " + soNamTietKiem + " nam");
		
		
		
		
	}

	 public static int calculate(float p, float r, float target) {
		 float check = -1;
		 int t = 0;
		 while(check < 0) {
			 check =(float)( p * Math.pow(1 + (r / 12/100), 12 * t) - target);  
			 t++;
		 }
		 return t-1;
		 	
	 }
}
