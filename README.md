# SCNU_auto_evaluate
*华南师范大学教务信息系统自动教学评价*

## 使用说明
**1.** 默认是全部选择“完全同意”，如果你需要改变默认的评价选项，只需更改 data-dyf 属性值  
"完全同意"：data-dyf="98"  
"同意"：data-dyf="88"  
"基本同意"：data-dyf="78"  
"不同意"：data-dyf="68"  
"完全不同意"：data-dyf="58"    

**2.** 完成评价后会自动保存但不会提交，需要手动提交

## 操作步骤
**1.** 使用Chrome浏览器登录教务信息系统->教学评价->学生评价。

**2.** 在学生评价界面按F12，打开开发者工具。
![](开发者工具.png)

**3.** 点击console，粘贴auto_evaluate_scnu.js中的代码，回车。

## 有待改进的地方
**1.** 目前只能实现单页自动评价，如果有多页则需手动翻页  

**2.** 每个老师评完之后会保存但不会提交，需要手动提交。这个应该设置成可供用户选择，用户可以选择评完保存并提交或保存但不提交


