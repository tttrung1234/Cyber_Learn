package Khoa1_Chuong5_TrinhThanhTrung;

import java.util.Scanner;

public class bai7_TamGiac {

	public static void main(String[] args) {
		
		int height;
        Scanner sc = new Scanner(System.in);
        do {
            System.out.print("Nhap chieu cao tam giac: ");
            height = sc.nextInt();
        }while(height <= 0);
         
        for(int i = 1; i <= height; i++) {
            for(int j = 1; j <= height-i; j++) {
            System.out.print(" ");
            }
            for(int k = 1; k <= i; k++) {
            System.out.print("* ");
            }
            System.out.println("");
        }
        
        for (int row = 0; row < height-1 ; row++) {
    		for (int col = 0; col < 2*height-1; col++) {
    			if((col== height - row - 1) || (col== height + row - 1)) {
    				System.out.print(" * ");
    			}
    			else {System.out.print("   ");}
    		}
    		System.out.println("");
    	}
        for (int row = 0; row <2*height-1; row++) {
        	System.out.print(" * ");
        }
        
        sc.close();

	}
	

}
