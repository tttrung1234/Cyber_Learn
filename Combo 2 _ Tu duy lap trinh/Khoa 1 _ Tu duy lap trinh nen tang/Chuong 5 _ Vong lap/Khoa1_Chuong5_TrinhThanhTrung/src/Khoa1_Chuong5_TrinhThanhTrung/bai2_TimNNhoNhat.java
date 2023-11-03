package Khoa1_Chuong5_TrinhThanhTrung;

public class bai2_TimNNhoNhat {
	static final int NUMBER = 10000;
	public static void main(String[] args) {
		int n = 0;
		int sum = 0;

		while ((sum) <= NUMBER) {
			n++;
			sum = sum + n;
			System.out.print(n);

			if ((sum ) <= NUMBER) {
				System.out.print(" + ");
			}

		}
		System.out.println(" = " + sum + " > " + NUMBER);
		System.out.println("So nguyen duong n nho nhat la: " + n);
	}
}
