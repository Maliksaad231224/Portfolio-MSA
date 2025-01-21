import matplotlib.pyplot as plt
import cv2
img=cv2.imread('images\saad.jpg',1)
cv2.imwrite('images\saad.webp',img)
cv2.waitKey(0)