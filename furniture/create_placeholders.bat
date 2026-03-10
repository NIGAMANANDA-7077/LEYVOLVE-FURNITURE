@echo off
mkdir public\images 2>nul

echo Creating SVG placeholders...

(
echo ^<svg width="800" height="1000" xmlns="http://www.w3.org/2000/svg"^>^<rect width="800" height="1000" fill="#D4B996"/^>^<text x="50%%" y="50%%" font-family="Arial" font-size="28" fill="#FFFFFF" text-anchor="middle" dy=".3em"^>Chair 1^</text^>^</svg^>
) > public\images\chair1.svg

(
echo ^<svg width="800" height="1000" xmlns="http://www.w3.org/2000/svg"^>^<rect width="800" height="1000" fill="#D4B996"/^>^<text x="50%%" y="50%%" font-family="Arial" font-size="28" fill="#FFFFFF" text-anchor="middle" dy=".3em"^>Chair 2^</text^>^</svg^>
) > public\images\chair2.svg

(
echo ^<svg width="800" height="1000" xmlns="http://www.w3.org/2000/svg"^>^<rect width="800" height="1000" fill="#D4B996"/^>^<text x="50%%" y="50%%" font-family="Arial" font-size="28" fill="#FFFFFF" text-anchor="middle" dy=".3em"^>Chair 3^</text^>^</svg^>
) > public\images\chair3.svg

(
echo ^<svg width="800" height="1000" xmlns="http://www.w3.org/2000/svg"^>^<rect width="800" height="1000" fill="#D4B996"/^>^<text x="50%%" y="50%%" font-family="Arial" font-size="28" fill="#FFFFFF" text-anchor="middle" dy=".3em"^>Chair 4^</text^>^</svg^>
) > public\images\chair4.svg

(
echo ^<svg width="800" height="1000" xmlns="http://www.w3.org/2000/svg"^>^<rect width="800" height="1000" fill="#C9A882"/^>^<text x="50%%" y="50%%" font-family="Arial" font-size="28" fill="#FFFFFF" text-anchor="middle" dy=".3em"^>Armchair 1^</text^>^</svg^>
) > public\images\armchair1.svg

(
echo ^<svg width="800" height="1000" xmlns="http://www.w3.org/2000/svg"^>^<rect width="800" height="1000" fill="#C9A882"/^>^<text x="50%%" y="50%%" font-family="Arial" font-size="28" fill="#FFFFFF" text-anchor="middle" dy=".3em"^>Armchair 2^</text^>^</svg^>
) > public\images\armchair2.svg

(
echo ^<svg width="800" height="1000" xmlns="http://www.w3.org/2000/svg"^>^<rect width="800" height="1000" fill="#C9A882"/^>^<text x="50%%" y="50%%" font-family="Arial" font-size="28" fill="#FFFFFF" text-anchor="middle" dy=".3em"^>Armchair 3^</text^>^</svg^>
) > public\images\armchair3.svg

(
echo ^<svg width="800" height="1000" xmlns="http://www.w3.org/2000/svg"^>^<rect width="800" height="1000" fill="#C9A882"/^>^<text x="50%%" y="50%%" font-family="Arial" font-size="28" fill="#FFFFFF" text-anchor="middle" dy=".3em"^>Armchair 4^</text^>^</svg^>
) > public\images\armchair4.svg

(
echo ^<svg width="800" height="1000" xmlns="http://www.w3.org/2000/svg"^>^<rect width="800" height="1000" fill="#B8956A"/^>^<text x="50%%" y="50%%" font-family="Arial" font-size="28" fill="#FFFFFF" text-anchor="middle" dy=".3em"^>Sofa 1^</text^>^</svg^>
) > public\images\sofa1.svg

(
echo ^<svg width="800" height="1000" xmlns="http://www.w3.org/2000/svg"^>^<rect width="800" height="1000" fill="#B8956A"/^>^<text x="50%%" y="50%%" font-family="Arial" font-size="28" fill="#FFFFFF" text-anchor="middle" dy=".3em"^>Sofa 2^</text^>^</svg^>
) > public\images\sofa2.svg

(
echo ^<svg width="800" height="1000" xmlns="http://www.w3.org/2000/svg"^>^<rect width="800" height="1000" fill="#B8956A"/^>^<text x="50%%" y="50%%" font-family="Arial" font-size="28" fill="#FFFFFF" text-anchor="middle" dy=".3em"^>Sofa 3^</text^>^</svg^>
) > public\images\sofa3.svg

(
echo ^<svg width="800" height="1000" xmlns="http://www.w3.org/2000/svg"^>^<rect width="800" height="1000" fill="#B8956A"/^>^<text x="50%%" y="50%%" font-family="Arial" font-size="28" fill="#FFFFFF" text-anchor="middle" dy=".3em"^>Sofa 4^</text^>^</svg^>
) > public\images\sofa4.svg

(
echo ^<svg width="800" height="1000" xmlns="http://www.w3.org/2000/svg"^>^<rect width="800" height="1000" fill="#A68A64"/^>^<text x="50%%" y="50%%" font-family="Arial" font-size="28" fill="#FFFFFF" text-anchor="middle" dy=".3em"^>Table 1^</text^>^</svg^>
) > public\images\table1.svg

(
echo ^<svg width="800" height="1000" xmlns="http://www.w3.org/2000/svg"^>^<rect width="800" height="1000" fill="#A68A64"/^>^<text x="50%%" y="50%%" font-family="Arial" font-size="28" fill="#FFFFFF" text-anchor="middle" dy=".3em"^>Table 2^</text^>^</svg^>
) > public\images\table2.svg

(
echo ^<svg width="800" height="1000" xmlns="http://www.w3.org/2000/svg"^>^<rect width="800" height="1000" fill="#A68A64"/^>^<text x="50%%" y="50%%" font-family="Arial" font-size="28" fill="#FFFFFF" text-anchor="middle" dy=".3em"^>Table 3^</text^>^</svg^>
) > public\images\table3.svg

(
echo ^<svg width="800" height="1000" xmlns="http://www.w3.org/2000/svg"^>^<rect width="800" height="1000" fill="#A68A64"/^>^<text x="50%%" y="50%%" font-family="Arial" font-size="28" fill="#FFFFFF" text-anchor="middle" dy=".3em"^>Table 4^</text^>^</svg^>
) > public\images\table4.svg

(
echo ^<svg width="800" height="1000" xmlns="http://www.w3.org/2000/svg"^>^<rect width="800" height="1000" fill="#8C7853"/^>^<text x="50%%" y="50%%" font-family="Arial" font-size="28" fill="#FFFFFF" text-anchor="middle" dy=".3em"^>Bed 1^</text^>^</svg^>
) > public\images\bed1.svg

(
echo ^<svg width="800" height="1000" xmlns="http://www.w3.org/2000/svg"^>^<rect width="800" height="1000" fill="#8C7853"/^>^<text x="50%%" y="50%%" font-family="Arial" font-size="28" fill="#FFFFFF" text-anchor="middle" dy=".3em"^>Bed 2^</text^>^</svg^>
) > public\images\bed2.svg

(
echo ^<svg width="800" height="1000" xmlns="http://www.w3.org/2000/svg"^>^<rect width="800" height="1000" fill="#8C7853"/^>^<text x="50%%" y="50%%" font-family="Arial" font-size="28" fill="#FFFFFF" text-anchor="middle" dy=".3em"^>Bed 3^</text^>^</svg^>
) > public\images\bed3.svg

(
echo ^<svg width="800" height="1000" xmlns="http://www.w3.org/2000/svg"^>^<rect width="800" height="1000" fill="#8C7853"/^>^<text x="50%%" y="50%%" font-family="Arial" font-size="28" fill="#FFFFFF" text-anchor="middle" dy=".3em"^>Bed 4^</text^>^</svg^>
) > public\images\bed4.svg

(
echo ^<svg width="800" height="1000" xmlns="http://www.w3.org/2000/svg"^>^<rect width="800" height="1000" fill="#E8DCC8"/^>^<text x="50%%" y="50%%" font-family="Arial" font-size="28" fill="#888888" text-anchor="middle" dy=".3em"^>Stool 1^</text^>^</svg^>
) > public\images\stool1.svg

(
echo ^<svg width="800" height="1000" xmlns="http://www.w3.org/2000/svg"^>^<rect width="800" height="1000" fill="#E8DCC8"/^>^<text x="50%%" y="50%%" font-family="Arial" font-size="28" fill="#888888" text-anchor="middle" dy=".3em"^>Stool 2^</text^>^</svg^>
) > public\images\stool2.svg

(
echo ^<svg width="800" height="1000" xmlns="http://www.w3.org/2000/svg"^>^<rect width="800" height="1000" fill="#E8DCC8"/^>^<text x="50%%" y="50%%" font-family="Arial" font-size="28" fill="#888888" text-anchor="middle" dy=".3em"^>Stool 3^</text^>^</svg^>
) > public\images\stool3.svg

(
echo ^<svg width="800" height="1000" xmlns="http://www.w3.org/2000/svg"^>^<rect width="800" height="1000" fill="#E8DCC8"/^>^<text x="50%%" y="50%%" font-family="Arial" font-size="28" fill="#888888" text-anchor="middle" dy=".3em"^>Stool 4^</text^>^</svg^>
) > public\images\stool4.svg

(
echo ^<svg width="800" height="1000" xmlns="http://www.w3.org/2000/svg"^>^<rect width="800" height="1000" fill="#C4B5A0"/^>^<text x="50%%" y="50%%" font-family="Arial" font-size="28" fill="#FFFFFF" text-anchor="middle" dy=".3em"^>Lounge 1^</text^>^</svg^>
) > public\images\lounge1.svg

(
echo ^<svg width="800" height="1000" xmlns="http://www.w3.org/2000/svg"^>^<rect width="800" height="1000" fill="#C4B5A0"/^>^<text x="50%%" y="50%%" font-family="Arial" font-size="28" fill="#FFFFFF" text-anchor="middle" dy=".3em"^>Lounge 2^</text^>^</svg^>
) > public\images\lounge2.svg

(
echo ^<svg width="800" height="1000" xmlns="http://www.w3.org/2000/svg"^>^<rect width="800" height="1000" fill="#C4B5A0"/^>^<text x="50%%" y="50%%" font-family="Arial" font-size="28" fill="#FFFFFF" text-anchor="middle" dy=".3em"^>Lounge 3^</text^>^</svg^>
) > public\images\lounge3.svg

(
echo ^<svg width="800" height="1000" xmlns="http://www.w3.org/2000/svg"^>^<rect width="800" height="1000" fill="#C4B5A0"/^>^<text x="50%%" y="50%%" font-family="Arial" font-size="28" fill="#FFFFFF" text-anchor="middle" dy=".3em"^>Lounge 4^</text^>^</svg^>
) > public\images\lounge4.svg

(
echo ^<svg width="800" height="1000" xmlns="http://www.w3.org/2000/svg"^>^<rect width="800" height="1000" fill="#9D8B70"/^>^<text x="50%%" y="50%%" font-family="Arial" font-size="28" fill="#FFFFFF" text-anchor="middle" dy=".3em"^>Desk 1^</text^>^</svg^>
) > public\images\desk1.svg

(
echo ^<svg width="800" height="1000" xmlns="http://www.w3.org/2000/svg"^>^<rect width="800" height="1000" fill="#9D8B70"/^>^<text x="50%%" y="50%%" font-family="Arial" font-size="28" fill="#FFFFFF" text-anchor="middle" dy=".3em"^>Desk 2^</text^>^</svg^>
) > public\images\desk2.svg

(
echo ^<svg width="800" height="1000" xmlns="http://www.w3.org/2000/svg"^>^<rect width="800" height="1000" fill="#9D8B70"/^>^<text x="50%%" y="50%%" font-family="Arial" font-size="28" fill="#FFFFFF" text-anchor="middle" dy=".3em"^>Desk 3^</text^>^</svg^>
) > public\images\desk3.svg

(
echo ^<svg width="800" height="1000" xmlns="http://www.w3.org/2000/svg"^>^<rect width="800" height="1000" fill="#9D8B70"/^>^<text x="50%%" y="50%%" font-family="Arial" font-size="28" fill="#FFFFFF" text-anchor="middle" dy=".3em"^>Desk 4^</text^>^</svg^>
) > public\images\desk4.svg

echo Done! Created 32 SVG placeholders.
