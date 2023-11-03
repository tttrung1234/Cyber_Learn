package Khoa1_Chuong5_TrinhThanhTrung;

import java.util.Scanner;

public class bai1_OanTuXi {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		Scanner scan = new Scanner(System.in);
		int luaChonMay;
		int luaChonNguoi;
		int diemNguoi =0 ;
		int diemMay = 0;
		int soLanChoi = 0;
		boolean continueFlag = true;
		
		do {
			luaChonMay = hamLuaChonMay();
			luaChonNguoi = hamLuaChonNguoi(scan);
			if (luaChonNguoi == 0) {
				System.out.println("Ban da thoat ra khoi game Oan Tu Xi");
				hamOanTuXi(luaChonNguoi, luaChonMay,diemNguoi, diemMay, soLanChoi);
				continueFlag = false;
			} else {
				if (luaChonNguoi == 1 || luaChonNguoi == 2 || luaChonNguoi == 3) {
					soLanChoi++;
				}
				if (luaChonMay == 1 && luaChonNguoi == 2) {
					diemNguoi++;
					System.out.println("Nguoi thang");
				} else if (luaChonMay == 1 && luaChonNguoi == 3) {
					diemMay++;
					System.out.println("May thang");
				} else if (luaChonMay == 2 && luaChonNguoi == 1) {
					diemMay++;
					System.out.println("May thang");
				} else if (luaChonMay == 2 && luaChonNguoi == 3) {
					diemNguoi++;
					System.out.println("Nguoi thang");
				} else if (luaChonMay == 3 && luaChonNguoi == 1) {
					diemNguoi++;
					System.out.println("Nguoi thang");
				} else if (luaChonMay == 3 && luaChonNguoi == 2) {
					diemMay++;
					System.out.println("May thang");
				} else {
					System.out.println("Hoa");
				}
			
			}
			
		} while (continueFlag);

	}


	public static int hamLuaChonNguoi(Scanner scan) {
		int luaChonNguoi;
	
		System.out.println("Vui long chon");
		System.out.println("1. Keo");
		System.out.println("2. Kim");
		System.out.println("3. Bao ");
		System.out.println("0. Dung cuoc choi");
	
		luaChonNguoi = Integer.parseInt(scan.nextLine());
		return luaChonNguoi;
	}
	
	public static int hamLuaChonMay() {
		int luaChonMay = (int) (Math.random() * 3 + 1);
		return luaChonMay;
	}
	
	public static void hamOanTuXi(int luaChonNguoi, int luaChonMay, int diemNguoi, int diemMay, int soLanChoi) {
	
		if (diemMay > diemNguoi) {
			System.out.println("May da thang ban sau " + soLanChoi + " lan choi");
			System.out.println("So lan may thang: " + diemMay);
			System.out.println("So lan nguoi thang: " + diemNguoi);
	
		} else if (diemMay < diemNguoi) {
			System.out.println("Chuc mung chien thang. Ban da thang may sau " + soLanChoi + " lan choi");
			System.out.println("So lan nguoi thang: " + diemNguoi);
			System.out.println("So lan may thang: " + diemMay);
		} else {
			System.out.println("Ket qua HOA. Sau "+ soLanChoi + " lan choi");
			System.out.println("So lan nguoi thang: " + diemNguoi);
			System.out.println("So lan may thang: " + diemMay);
		}
	}
}
