from PIL import Image
import os.path
 
rootdir = '/media/zhao/ZHAO/各种html代码/最终表白代码/images/xiaoyueyue/'
outdir = '/media/zhao/ZHAO/各种html代码/最终表白代码/images/xiaoyueyue/new/'
list = os.listdir(rootdir) #列出文件夹下所有的目录与文件
for i in range(0,len(list)):
	path = os.path.join(rootdir,list[i])
	if os.path.isfile(path):
		if list[i].endswith('.jpg'):		
			infile = path
			outfile = outdir + list[i]
			im = Image.open(infile)
			(x,y) = im.size #read image size
			x_s = 327 #define standard width
			y_s = int(y * x_s / x) #calc height based on standard width
			out = im.resize((x_s,y_s),Image.ANTIALIAS) #resize image with high-quality
			out.save(outfile)
