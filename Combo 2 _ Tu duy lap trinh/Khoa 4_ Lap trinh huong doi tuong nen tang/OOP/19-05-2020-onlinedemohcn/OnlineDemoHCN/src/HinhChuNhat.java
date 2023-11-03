import java.util.Scanner;

/**
 * Mục đích: Quản lý nghiệp vụ HCN Người tạo: CyberLearn Ngày tạo: 15/4/2020
 * Version: 1.0
 */
public class HinhChuNhat {

	// 1. Các thuộc tính
	private float chieuDai;
	private float chieuRong;
	private float chuVi;
	private float dienTich;

	// 2. Các phương thức get, set
	public float getChieuDai() {
		return chieuDai;
	}

	public void setChieuDai(float cDai) {
		this.chieuDai = cDai;
	}

	public float getChieuRong() {
		return chieuRong;

	}

	public void setChieuRong(float cRong) {
		this.chieuRong = cRong;
	}

	public float getChuVi() {
		return this.chuVi;
	}

	public float getDienTich() {
		return this.dienTich;
	}

	// 3. Các phương thức khởi tạo
	public HinhChuNhat() {

	}

	public HinhChuNhat(float cDai, float cRong) {
		this.chieuDai = cDai;
		this.chieuRong = cRong;
	}

	// 4. Các phương thức nhập, xuât
	public void nhap(Scanner scan) {
		System.out.print("Nhập Chiều Dài:");
		this.chieuDai = Float.parseFloat(scan.nextLine());

		System.out.print("Nhập Chiều Rộng:");
		this.chieuRong = Float.parseFloat(scan.nextLine());
	}

	public void xuat() {
		System.out.println(" HCN (" + chieuDai + ", " + chieuRong + "). Diện tích: " + dienTich + "\t Chu vi:" + chuVi);
	}

	// 5. Các phương thức xử lý nghiệp vụ liên quan lớp này
	public void tinhChuVi() {
		this.chuVi = (chieuDai + chieuRong) * 2;
	}

	public void tinhDienTich() {
		this.dienTich = chieuDai * chieuRong;
	}

}
