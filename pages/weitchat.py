import pdfplumber
# 读取pdf 文档
def open_pdf():
    pass
    with pdfplumber.open("1.pdf") as pdf:
        # 代表第一页的信息
        first_page=pdf.pages[0]
        
        # print(first_page.to_image())
        print(first_page.extract_table())
open_pdf()