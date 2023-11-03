import java.util.ArrayList;
import java.util.LinkedList;
import java.util.Scanner;

public class XuLy {

	public XuLy() {
		// TODO Auto-generated constructor stub
	}

	public static void main(String[] args) {
		// Khởi tạo đối tượng
		/*HinhChuNhat hcn = new HinhChuNhat();
		Scanner scan = new Scanner(System.in);
		hcn.nhap(scan);
		*/
		Scanner scan = new Scanner(System.in);
//		System.out.print("Nhập chiều dài");
//		float cDai = Float.parseFloat(scan.nextLine());
//		System.out.print("Nhập chiều rộng");
//		float cRong = Float.parseFloat(scan.nextLine());
		HinhChuNhat hcn = new HinhChuNhat(5.6f, 4);
		hcn.tinhChuVi();
		hcn.tinhDienTich();
		hcn.xuat();
		
		

	}

}
