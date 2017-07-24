define(["org/eclipse/edt/rui/widgets/Box", "org/eclipse/edt/rui/widgets/HyperLink", "org/eclipse/edt/rui/widgets/Div", "ezekw$$dojo/widgets/eze$$DojoTitlePane", "eglx/ui/rui/eze$$View", "org/eclipse/edt/rui/widgets/GridLayoutData", "org/eclipse/edt/rui/widgets/GridLayout", "org/eclipse/edt/rui/widgets/TextLabel", "org/eclipse/edt/rui/widgets/GridLayoutLib"],function(){
	egl.loadCSS("css/NewProject.css");
	egl.defineRUIHandler("client.client", "Education", {
		"eze$$fileName" : "client/client/Education.egl",
		"eze$$runtimePropertiesFile" : "client/client/Education",
			"constructor": function() {
				this.start();
			}
			,
			"eze$$setEmpty": function() {
				new egl.org.eclipse.edt.rui.widgets.GridLayoutLib();
				this.ui = new egl.org.eclipse.edt.rui.widgets.GridLayout();
				this.Box = new egl.org.eclipse.edt.rui.widgets.Box();
				this.TextLabel = new egl.org.eclipse.edt.rui.widgets.TextLabel();
				this.GridLayout = new egl.org.eclipse.edt.rui.widgets.GridLayout();
				this.Boxbody = new egl.org.eclipse.edt.rui.widgets.Box();
				this.BoxNewProduct = new egl.org.eclipse.edt.rui.widgets.Box();
				this.NewProduct = new egl.dojo.widgets.DojoTitlePane();
				this.NewProduct1 = new egl.org.eclipse.edt.rui.widgets.HyperLink();
				this.NewProduct2 = new egl.org.eclipse.edt.rui.widgets.HyperLink();
				this.NewProduct3 = new egl.org.eclipse.edt.rui.widgets.HyperLink();
				this.NewProduct4 = new egl.org.eclipse.edt.rui.widgets.HyperLink();
				this.NewProduct5 = new egl.org.eclipse.edt.rui.widgets.HyperLink();
				this.NewProductMore = new egl.org.eclipse.edt.rui.widgets.HyperLink();
				this.Product = new egl.dojo.widgets.DojoTitlePane();
				this.Product1 = new egl.org.eclipse.edt.rui.widgets.HyperLink();
				this.Product2 = new egl.org.eclipse.edt.rui.widgets.HyperLink();
				this.Product3 = new egl.org.eclipse.edt.rui.widgets.HyperLink();
				this.Product4 = new egl.org.eclipse.edt.rui.widgets.HyperLink();
				this.ProductMore = new egl.org.eclipse.edt.rui.widgets.HyperLink();
				this.Box1 = new egl.org.eclipse.edt.rui.widgets.Box();
				this.ProductOne = new egl.dojo.widgets.DojoTitlePane();
				this.ProductOne1 = new egl.org.eclipse.edt.rui.widgets.HyperLink();
				this.ProductOne2 = new egl.org.eclipse.edt.rui.widgets.HyperLink();
				this.ProductOne3 = new egl.org.eclipse.edt.rui.widgets.HyperLink();
				this.ProductOne4 = new egl.org.eclipse.edt.rui.widgets.HyperLink();
				this.ProductOneMore = new egl.org.eclipse.edt.rui.widgets.HyperLink();
			}
			,
			"eze$$setInitial": function() {
				try { egl.enter("<init>",this,arguments);
					this.eze$$setEmpty();
					egl.atLine(this.eze$$fileName,21,593,11, this);
					this.ui.setColumns(1);
					egl.atLine(this.eze$$fileName,21,606,8, this);
					this.ui.setRows(2);
					egl.atLine(this.eze$$fileName,21,616,15, this);
					this.ui.setCellPadding(4);
					egl.atLine(this.eze$$fileName,21,633,30, this);
					this.ui.setChildren([egl.eglx.lang.convert(egl.eglx.ui.rui.Widget.fromWidget, [this.GridLayout,"org.eclipse.edt.rui.widgets.GridLayout"]), egl.eglx.lang.convert(egl.eglx.ui.rui.Widget.fromWidget, [this.Box,"org.eclipse.edt.rui.widgets.Box"])].setType("[Teglx/ui/rui/Widget;"));
					var eze$LNNTemp1 = null;
					{
						var eze$SettingTarget1 = new egl.org.eclipse.edt.rui.widgets.GridLayoutData();
						egl.atLine(this.eze$$fileName,22,692,41, this);
						eze$SettingTarget1 = egl.eglx.lang.AnyValue.ezeCopyTo(new egl.org.eclipse.edt.rui.widgets.GridLayoutData(), eze$SettingTarget1);
						egl.atLine(this.eze$$fileName,22,712,7, this);
						eze$SettingTarget1.row = 1;
						egl.atLine(this.eze$$fileName,22,721,10, this);
						eze$SettingTarget1.column = 1;
						egl.atLine(this.eze$$fileName,22,692,41, this);
						eze$LNNTemp1 = egl.eglx.lang.AnyValue.ezeCopyTo(eze$SettingTarget1, eze$LNNTemp1);
					}
					egl.atLine(this.eze$$fileName,22,679,54, this);
					this.Box.setLayoutData(egl.eglx.lang.convert(egl.eglx.lang.EAny.fromEAny, [eze$LNNTemp1.eze$$clone(),"Torg/eclipse/edt/rui/widgets/GridLayoutData;"]));
					egl.atLine(this.eze$$fileName,22,735,9, this);
					this.Box.setPadding(8);
					egl.atLine(this.eze$$fileName,23,751,24, this);
					this.Box.setChildren([egl.eglx.lang.convert(egl.eglx.ui.rui.Widget.fromWidget, [this.TextLabel,"org.eclipse.edt.rui.widgets.TextLabel"])].setType("[Teglx/ui/rui/Widget;"));
					egl.atLine(this.eze$$fileName,24,804,13, this);
					this.TextLabel.setText("\u6559\u80b2\u8d44\u8baf");
					egl.atLine(this.eze$$fileName,25,824,21, this);
					this.TextLabel.setColor("YellowGreen");
					egl.atLine(this.eze$$fileName,26,852,13, this);
					this.TextLabel.setFont("\u534e\u6587\u884c\u6977");
					egl.atLine(this.eze$$fileName,27,872,15, this);
					this.TextLabel.setFontSize("25");
					egl.atLine(this.eze$$fileName,28,894,17, this);
					this.TextLabel.setPaddingLeft(400);
					var eze$LNNTemp2 = null;
					{
						var eze$SettingTarget1 = new egl.org.eclipse.edt.rui.widgets.GridLayoutData();
						egl.atLine(this.eze$$fileName,29,955,41, this);
						eze$SettingTarget1 = egl.eglx.lang.AnyValue.ezeCopyTo(new egl.org.eclipse.edt.rui.widgets.GridLayoutData(), eze$SettingTarget1);
						egl.atLine(this.eze$$fileName,29,975,7, this);
						eze$SettingTarget1.row = 2;
						egl.atLine(this.eze$$fileName,29,984,10, this);
						eze$SettingTarget1.column = 1;
						egl.atLine(this.eze$$fileName,29,955,41, this);
						eze$LNNTemp2 = egl.eglx.lang.AnyValue.ezeCopyTo(eze$SettingTarget1, eze$LNNTemp2);
					}
					egl.atLine(this.eze$$fileName,29,942,54, this);
					this.GridLayout.setLayoutData(egl.eglx.lang.convert(egl.eglx.lang.EAny.fromEAny, [eze$LNNTemp2.eze$$clone(),"Torg/eclipse/edt/rui/widgets/GridLayoutData;"]));
					egl.atLine(this.eze$$fileName,29,998,15, this);
					this.GridLayout.setCellPadding(4);
					egl.atLine(this.eze$$fileName,29,1015,8, this);
					this.GridLayout.setRows(1);
					egl.atLine(this.eze$$fileName,29,1025,11, this);
					this.GridLayout.setColumns(3);
					egl.atLine(this.eze$$fileName,30,1043,43, this);
					this.GridLayout.setChildren([egl.eglx.lang.convert(egl.eglx.ui.rui.Widget.fromWidget, [this.Box1,"org.eclipse.edt.rui.widgets.Box"]), egl.eglx.lang.convert(egl.eglx.ui.rui.Widget.fromWidget, [this.BoxNewProduct,"org.eclipse.edt.rui.widgets.Box"]), egl.eglx.lang.convert(egl.eglx.ui.rui.Widget.fromWidget, [this.Boxbody,"org.eclipse.edt.rui.widgets.Box"])].setType("[Teglx/ui/rui/Widget;"));
					var eze$LNNTemp3 = null;
					{
						var eze$SettingTarget1 = new egl.org.eclipse.edt.rui.widgets.GridLayoutData();
						egl.atLine(this.eze$$fileName,31,1122,149, this);
						eze$SettingTarget1 = egl.eglx.lang.AnyValue.ezeCopyTo(new egl.org.eclipse.edt.rui.widgets.GridLayoutData(), eze$SettingTarget1);
						egl.atLine(this.eze$$fileName,31,1142,7, this);
						eze$SettingTarget1.row = 1;
						egl.atLine(this.eze$$fileName,31,1151,10, this);
						eze$SettingTarget1.column = 1;
						egl.atLine(this.eze$$fileName,32,1171,44, this);
						eze$SettingTarget1.verticalAlignment = egl.org.eclipse.edt.rui.widgets.GridLayoutLib['$inst'].VALIGN_TOP;
						egl.atLine(this.eze$$fileName,33,1222,47, this);
						eze$SettingTarget1.horizontalAlignment = egl.org.eclipse.edt.rui.widgets.GridLayoutLib['$inst'].ALIGN_RIGHT;
						egl.atLine(this.eze$$fileName,31,1122,149, this);
						eze$LNNTemp3 = egl.eglx.lang.AnyValue.ezeCopyTo(eze$SettingTarget1, eze$LNNTemp3);
					}
					egl.atLine(this.eze$$fileName,31,1109,162, this);
					this.Boxbody.setLayoutData(egl.eglx.lang.convert(egl.eglx.lang.EAny.fromEAny, [eze$LNNTemp3.eze$$clone(),"Torg/eclipse/edt/rui/widgets/GridLayoutData;"]));
					egl.atLine(this.eze$$fileName,33,1273,9, this);
					this.Boxbody.setPadding(8);
					egl.atLine(this.eze$$fileName,34,1289,22, this);
					this.Boxbody.setChildren([egl.eglx.lang.convert(egl.eglx.ui.rui.Widget.fromWidget, [this.Product,"dojo.widgets.DojoTitlePane"])].setType("[Teglx/ui/rui/Widget;"));
					egl.atLine(this.eze$$fileName,35,1318,13, this);
					this.Boxbody.setWidth("300");
					var eze$LNNTemp4 = null;
					{
						var eze$SettingTarget1 = new egl.org.eclipse.edt.rui.widgets.GridLayoutData();
						egl.atLine(this.eze$$fileName,36,1372,149, this);
						eze$SettingTarget1 = egl.eglx.lang.AnyValue.ezeCopyTo(new egl.org.eclipse.edt.rui.widgets.GridLayoutData(), eze$SettingTarget1);
						egl.atLine(this.eze$$fileName,36,1392,7, this);
						eze$SettingTarget1.row = 1;
						egl.atLine(this.eze$$fileName,36,1401,10, this);
						eze$SettingTarget1.column = 2;
						egl.atLine(this.eze$$fileName,37,1421,44, this);
						eze$SettingTarget1.verticalAlignment = egl.org.eclipse.edt.rui.widgets.GridLayoutLib['$inst'].VALIGN_TOP;
						egl.atLine(this.eze$$fileName,38,1472,47, this);
						eze$SettingTarget1.horizontalAlignment = egl.org.eclipse.edt.rui.widgets.GridLayoutLib['$inst'].ALIGN_RIGHT;
						egl.atLine(this.eze$$fileName,36,1372,149, this);
						eze$LNNTemp4 = egl.eglx.lang.AnyValue.ezeCopyTo(eze$SettingTarget1, eze$LNNTemp4);
					}
					egl.atLine(this.eze$$fileName,36,1359,162, this);
					this.BoxNewProduct.setLayoutData(egl.eglx.lang.convert(egl.eglx.lang.EAny.fromEAny, [eze$LNNTemp4.eze$$clone(),"Torg/eclipse/edt/rui/widgets/GridLayoutData;"]));
					egl.atLine(this.eze$$fileName,38,1523,9, this);
					this.BoxNewProduct.setPadding(8);
					egl.atLine(this.eze$$fileName,39,1539,25, this);
					this.BoxNewProduct.setChildren([egl.eglx.lang.convert(egl.eglx.ui.rui.Widget.fromWidget, [this.NewProduct,"dojo.widgets.DojoTitlePane"])].setType("[Teglx/ui/rui/Widget;"));
					egl.atLine(this.eze$$fileName,40,1571,13, this);
					this.BoxNewProduct.setWidth("300");
					egl.atLine(this.eze$$fileName,41,1618,14, this);
					this.NewProduct.title = "\u6559\u80b2\u5934\u6761";
					egl.atLine(this.eze$$fileName,41,1634,11, this);
					this.NewProduct.setOpen(true);
					egl.atLine(this.eze$$fileName,41,1647,13, this);
					this.NewProduct.duration = 1000;
					egl.atLine(this.eze$$fileName,41,1662,11, this);
					this.NewProduct.setWidth("300");
					var eze$LNNTemp5 = null;
					{
						var eze$SettingTarget1;
						egl.atLine(this.eze$$fileName,41,1688,117, this);
						eze$SettingTarget1 = (function () {
							var eze$Temp6 = new egl.org.eclipse.edt.rui.widgets.Div();
							return eze$Temp6;
						}).call(this);
						egl.atLine(this.eze$$fileName,42,1706,89, this);
						eze$SettingTarget1.setChildren([egl.eglx.lang.convert(egl.eglx.ui.rui.Widget.fromWidget, [this.NewProduct1,"org.eclipse.edt.rui.widgets.HyperLink"]), egl.eglx.lang.convert(egl.eglx.ui.rui.Widget.fromWidget, [this.NewProduct2,"org.eclipse.edt.rui.widgets.HyperLink"]), egl.eglx.lang.convert(egl.eglx.ui.rui.Widget.fromWidget, [this.NewProduct3,"org.eclipse.edt.rui.widgets.HyperLink"]), egl.eglx.lang.convert(egl.eglx.ui.rui.Widget.fromWidget, [this.NewProduct4,"org.eclipse.edt.rui.widgets.HyperLink"]), egl.eglx.lang.convert(egl.eglx.ui.rui.Widget.fromWidget, [this.NewProduct5,"org.eclipse.edt.rui.widgets.HyperLink"]), egl.eglx.lang.convert(egl.eglx.ui.rui.Widget.fromWidget, [this.NewProductMore,"org.eclipse.edt.rui.widgets.HyperLink"])].setType("[Teglx/ui/rui/Widget;"));
						egl.atLine(this.eze$$fileName,41,1688,117, this);
						eze$LNNTemp5 = eze$SettingTarget1;
					}
					egl.atLine(this.eze$$fileName,41,1675,132, this);
					this.NewProduct.setChildren([egl.eglx.lang.convert(egl.eglx.ui.rui.Widget.fromWidget, [eze$LNNTemp5,"org.eclipse.edt.rui.widgets.Div"])].setType("[Teglx/ui/rui/Widget;"));
					egl.atLine(this.eze$$fileName,44,1817,13, this);
					this.NewProduct.setFont("\u5fae\u8f6f\u96c5\u9ed1");
					egl.atLine(this.eze$$fileName,45,1837,15, this);
					this.NewProduct.setFontSize("14");
					egl.atLine(this.eze$$fileName,46,1883,29, this);
					this.NewProduct1.setText("\u5a92\u4f53\uff1a\u8ba9\u5b69\u5b50\u8fdc\u79bb\u201c\u6bd2\u8dd1\u9053\u201d\u8fd8\u9760\u6cd5\u5f8b\u53d1\u5a01\uff01");
					egl.atLine(this.eze$$fileName,47,1919,60, this);
					this.NewProduct1.setHref("http://www.zhly.cn/education/content/index/id/12031");
					egl.atLine(this.eze$$fileName,48,2010,32, this);
					this.NewProduct2.setText("\u7f8e\u56fd\u5927\u5b66\u5165\u5b66\u8003\u8bd5ACT\u9898\u5916\u6cc4 \u53d6\u6d88\u9999\u6e2f\u97e9\u56fd\u8003\u8bd5");
					egl.atLine(this.eze$$fileName,49,2049,60, this);
					this.NewProduct2.setHref("http://www.zhly.cn/education/content/index/id/12028");
					egl.atLine(this.eze$$fileName,50,2140,29, this);
					this.NewProduct3.setText("\u6559\u80b2\u90e8\uff1a\u91cd\u70b9\u6559\u80b2\u5355\u4f4d\u9886\u5bfc\u4efb\u5185\u81f3\u5c11\u5ba1\u8ba1\u4e00\u6b21");
					egl.atLine(this.eze$$fileName,51,2176,60, this);
					this.NewProduct3.setHref("http://www.zhly.cn/education/content/index/id/12024");
					egl.atLine(this.eze$$fileName,52,2267,28, this);
					this.NewProduct4.setText("\u5317\u4eac\u5e02\u6559\u59d4\u53eb\u505c\u501f\u201c\u65e9\u57f9\u73ed\u201d\u540d\u4e49\u9009\u62d4\u8003\u8bd5");
					egl.atLine(this.eze$$fileName,53,2302,60, this);
					this.NewProduct4.setHref("http://www.zhly.cn/education/content/index/id/12021");
					egl.atLine(this.eze$$fileName,54,2393,31, this);
					this.NewProduct5.setText("\u7981\u6b62\u5728\u804c\u6559\u5e08\u6709\u507f\u5728\u7ebf\u6388\u8bfe\uff1f\u6559\u80b2\u90e8\uff1a\u5c1a\u5728\u7814\u7a76\u4e2d");
					egl.atLine(this.eze$$fileName,55,2431,60, this);
					this.NewProduct5.setHref("http://www.zhly.cn/education/content/index/id/12015");
					egl.atLine(this.eze$$fileName,56,2525,13, this);
					this.NewProductMore.setText("\u4e86\u89e3\u66f4\u591a");
					egl.atLine(this.eze$$fileName,57,2545,13, this);
					this.NewProductMore.setHref("\u4e86\u89e3\u66f4\u591a");
					egl.atLine(this.eze$$fileName,58,2565,14, this);
					this.NewProductMore.setMarginTop(10);
					egl.atLine(this.eze$$fileName,59,2611,14, this);
					this.Product.title = "\u672c\u5468\u63a8\u8350";
					egl.atLine(this.eze$$fileName,59,2627,11, this);
					this.Product.setOpen(true);
					egl.atLine(this.eze$$fileName,59,2640,13, this);
					this.Product.duration = 1000;
					egl.atLine(this.eze$$fileName,59,2655,11, this);
					this.Product.setWidth("300");
					var eze$LNNTemp7 = null;
					{
						var eze$SettingTarget1;
						egl.atLine(this.eze$$fileName,59,2681,90, this);
						eze$SettingTarget1 = (function () {
							var eze$Temp8 = new egl.org.eclipse.edt.rui.widgets.Div();
							return eze$Temp8;
						}).call(this);
						egl.atLine(this.eze$$fileName,60,2699,62, this);
						eze$SettingTarget1.setChildren([egl.eglx.lang.convert(egl.eglx.ui.rui.Widget.fromWidget, [this.Product1,"org.eclipse.edt.rui.widgets.HyperLink"]), egl.eglx.lang.convert(egl.eglx.ui.rui.Widget.fromWidget, [this.Product2,"org.eclipse.edt.rui.widgets.HyperLink"]), egl.eglx.lang.convert(egl.eglx.ui.rui.Widget.fromWidget, [this.Product3,"org.eclipse.edt.rui.widgets.HyperLink"]), egl.eglx.lang.convert(egl.eglx.ui.rui.Widget.fromWidget, [this.Product4,"org.eclipse.edt.rui.widgets.HyperLink"]), egl.eglx.lang.convert(egl.eglx.ui.rui.Widget.fromWidget, [this.ProductMore,"org.eclipse.edt.rui.widgets.HyperLink"])].setType("[Teglx/ui/rui/Widget;"));
						egl.atLine(this.eze$$fileName,59,2681,90, this);
						eze$LNNTemp7 = eze$SettingTarget1;
					}
					egl.atLine(this.eze$$fileName,59,2668,105, this);
					this.Product.setChildren([egl.eglx.lang.convert(egl.eglx.ui.rui.Widget.fromWidget, [eze$LNNTemp7,"org.eclipse.edt.rui.widgets.Div"])].setType("[Teglx/ui/rui/Widget;"));
					egl.atLine(this.eze$$fileName,62,2783,13, this);
					this.Product.setFont("\u5fae\u8f6f\u96c5\u9ed1");
					egl.atLine(this.eze$$fileName,63,2803,15, this);
					this.Product.setFontSize("14");
					egl.atLine(this.eze$$fileName,64,2846,30, this);
					this.Product1.setText("\u6559\u80b2\u6cd5\u4fee\u8ba2\uff1a\u8fdd\u89c4\u62db\u751f\u5b66\u6821\u6700\u9ad8\u53ef\u64a4\u9500\u62db\u751f\u8d44\u683c");
					egl.atLine(this.eze$$fileName,65,2883,60, this);
					this.Product1.setHref("http://www.zhly.cn/education/content/index/id/11928");
					egl.atLine(this.eze$$fileName,66,2971,32, this);
					this.Product2.setText("\u79d1\u666e\u77e5\u8bc6\uff1a\u4e13\u5bb6\u6559\u4f60\u907f\u5f00\u7a7a\u6c14\u6c61\u67d3\u768410\u4e2a\u5b9e\u7528\u826f\u65b9");
					egl.atLine(this.eze$$fileName,67,3010,64, this);
					this.Product2.setHref("http://www.zhly.cn/education/content/index/id/11931#p=1");
					egl.atLine(this.eze$$fileName,68,3102,21, this);
					this.Product3.setText("\u5386\u53f2\u6545\u4e8b\uff1a\u6bdb\u6cfd\u4e1c\u52e4\u5b66\u6545\u4e8b");
					egl.atLine(this.eze$$fileName,69,3130,60, this);
					this.Product3.setHref("http://www.zhly.cn/education/content/index/id/11932");
					egl.atLine(this.eze$$fileName,70,3218,23, this);
					this.Product4.setText("\u6784\u5efa\u6559\u80b2\u53d1\u5c55\u9884\u8b66\u673a\u5236\u5927\u6709\u5fc5\u8981");
					egl.atLine(this.eze$$fileName,71,3248,60, this);
					this.Product4.setHref("http://www.zhly.cn/education/content/index/id/11875");
					egl.atLine(this.eze$$fileName,72,3339,13, this);
					this.ProductMore.setText("\u4e86\u89e3\u66f4\u591a");
					egl.atLine(this.eze$$fileName,73,3359,13, this);
					this.ProductMore.setHref("\u4e86\u89e3\u66f4\u591a");
					egl.atLine(this.eze$$fileName,74,3379,14, this);
					this.ProductMore.setMarginTop(10);
					var eze$LNNTemp9 = null;
					{
						var eze$SettingTarget1 = new egl.org.eclipse.edt.rui.widgets.GridLayoutData();
						egl.atLine(this.eze$$fileName,75,3424,149, this);
						eze$SettingTarget1 = egl.eglx.lang.AnyValue.ezeCopyTo(new egl.org.eclipse.edt.rui.widgets.GridLayoutData(), eze$SettingTarget1);
						egl.atLine(this.eze$$fileName,75,3444,7, this);
						eze$SettingTarget1.row = 1;
						egl.atLine(this.eze$$fileName,75,3453,10, this);
						eze$SettingTarget1.column = 3;
						egl.atLine(this.eze$$fileName,76,3474,44, this);
						eze$SettingTarget1.verticalAlignment = egl.org.eclipse.edt.rui.widgets.GridLayoutLib['$inst'].VALIGN_TOP;
						egl.atLine(this.eze$$fileName,77,3525,47, this);
						eze$SettingTarget1.horizontalAlignment = egl.org.eclipse.edt.rui.widgets.GridLayoutLib['$inst'].ALIGN_RIGHT;
						egl.atLine(this.eze$$fileName,75,3424,149, this);
						eze$LNNTemp9 = egl.eglx.lang.AnyValue.ezeCopyTo(eze$SettingTarget1, eze$LNNTemp9);
					}
					egl.atLine(this.eze$$fileName,75,3411,162, this);
					this.Box1.setLayoutData(egl.eglx.lang.convert(egl.eglx.lang.EAny.fromEAny, [eze$LNNTemp9.eze$$clone(),"Torg/eclipse/edt/rui/widgets/GridLayoutData;"]));
					egl.atLine(this.eze$$fileName,77,3575,9, this);
					this.Box1.setPadding(8);
					egl.atLine(this.eze$$fileName,78,3591,25, this);
					this.Box1.setChildren([egl.eglx.lang.convert(egl.eglx.ui.rui.Widget.fromWidget, [this.ProductOne,"dojo.widgets.DojoTitlePane"])].setType("[Teglx/ui/rui/Widget;"));
					egl.atLine(this.eze$$fileName,79,3624,13, this);
					this.Box1.setWidth("300");
					egl.atLine(this.eze$$fileName,80,3671,14, this);
					this.ProductOne.title = "\u793e\u4f1a\u767e\u6001";
					egl.atLine(this.eze$$fileName,80,3687,11, this);
					this.ProductOne.setOpen(true);
					egl.atLine(this.eze$$fileName,80,3700,13, this);
					this.ProductOne.duration = 1000;
					egl.atLine(this.eze$$fileName,80,3715,11, this);
					this.ProductOne.setWidth("300");
					var eze$LNNTemp10 = null;
					{
						var eze$SettingTarget1;
						egl.atLine(this.eze$$fileName,80,3741,105, this);
						eze$SettingTarget1 = (function () {
							var eze$Temp11 = new egl.org.eclipse.edt.rui.widgets.Div();
							return eze$Temp11;
						}).call(this);
						egl.atLine(this.eze$$fileName,81,3760,77, this);
						eze$SettingTarget1.setChildren([egl.eglx.lang.convert(egl.eglx.ui.rui.Widget.fromWidget, [this.ProductOne1,"org.eclipse.edt.rui.widgets.HyperLink"]), egl.eglx.lang.convert(egl.eglx.ui.rui.Widget.fromWidget, [this.ProductOne2,"org.eclipse.edt.rui.widgets.HyperLink"]), egl.eglx.lang.convert(egl.eglx.ui.rui.Widget.fromWidget, [this.ProductOne3,"org.eclipse.edt.rui.widgets.HyperLink"]), egl.eglx.lang.convert(egl.eglx.ui.rui.Widget.fromWidget, [this.ProductOne4,"org.eclipse.edt.rui.widgets.HyperLink"]), egl.eglx.lang.convert(egl.eglx.ui.rui.Widget.fromWidget, [this.ProductOneMore,"org.eclipse.edt.rui.widgets.HyperLink"])].setType("[Teglx/ui/rui/Widget;"));
						egl.atLine(this.eze$$fileName,80,3741,105, this);
						eze$LNNTemp10 = eze$SettingTarget1;
					}
					egl.atLine(this.eze$$fileName,80,3728,120, this);
					this.ProductOne.setChildren([egl.eglx.lang.convert(egl.eglx.ui.rui.Widget.fromWidget, [eze$LNNTemp10,"org.eclipse.edt.rui.widgets.Div"])].setType("[Teglx/ui/rui/Widget;"));
					egl.atLine(this.eze$$fileName,83,3859,13, this);
					this.ProductOne.setFont("\u5fae\u8f6f\u96c5\u9ed1");
					egl.atLine(this.eze$$fileName,84,3879,15, this);
					this.ProductOne.setFontSize("14");
					egl.atLine(this.eze$$fileName,85,3925,33, this);
					this.ProductOne1.setText(" 9\u5c81\u5973\u5b69\u7acb19\u6761\u5bb6\u89c4:\u7238\u7238\u6bcf\u665a\u53ea\u80fd\u73a9\u4e00\u5c0f\u65f6\u624b\u673a");
					egl.atLine(this.eze$$fileName,86,3965,60, this);
					this.ProductOne1.setHref("http://www.zhly.cn/education/content/index/id/12030");
					egl.atLine(this.eze$$fileName,87,4056,30, this);
					this.ProductOne2.setText("\u6559\u80b2\u90e8\u516c\u5b89\u90e8\u4e25\u67e5\u201c\u9ed1\u6821\u8f66\u201d \u519c\u6751\u8981\u56e0\u5730\u5236\u5b9c");
					egl.atLine(this.eze$$fileName,88,4093,60, this);
					this.ProductOne2.setHref("http://www.zhly.cn/education/content/index/id/12019");
					egl.atLine(this.eze$$fileName,89,4184,34, this);
					this.ProductOne3.setText(" \u6b66\u6c493000\u591a\u5c0f\u5b66\u751f\u96c6\u4f53\u6570\u843d\u6210\u4eba\u73a9\u624b\u673a\uff1a\u6ca1\u5b8c\u6ca1\u4e86");
					egl.atLine(this.eze$$fileName,90,4225,60, this);
					this.ProductOne3.setHref("http://www.zhly.cn/education/content/index/id/12016");
					egl.atLine(this.eze$$fileName,91,4316,31, this);
					this.ProductOne4.setText("3\u5c81\u513f\u7ae5\u516c\u4ea4\u8f66\u5185\u653e\u97ad\u70ae \u6bcd\u4eb2\u5fd9\u6253\u7535\u8bdd\u653e\u4efb\u4e0d\u7ba1");
					egl.atLine(this.eze$$fileName,92,4354,60, this);
					this.ProductOne4.setHref("http://www.zhly.cn/education/content/index/id/11982");
					egl.atLine(this.eze$$fileName,93,4448,13, this);
					this.ProductOneMore.setText("\u4e86\u89e3\u66f4\u591a");
					egl.atLine(this.eze$$fileName,94,4468,13, this);
					this.ProductOneMore.setHref("\u4e86\u89e3\u66f4\u591a");
					egl.atLine(this.eze$$fileName,95,4488,14, this);
					this.ProductOneMore.setMarginTop(10);
					egl.atLine(this.eze$$fileName,18,468,28, this);
					this.initialUI = [egl.eglx.lang.convert(egl.eglx.ui.rui.Widget.fromWidget, [this.ui,"org.eclipse.edt.rui.widgets.GridLayout"])].setType("[Teglx/ui/rui/Widget;");
					if (!egl.debugg) egl.leave();
				} finally {
					if (!egl.debugg){
					} else { egl.leave(); }
				}
			}
			,
			"eze$$clone": function() {
				var ezert$$1 = this;
				var ezert$$2 = new egl.client.client.Education();
				ezert$$2.ui = ezert$$1.ui === null ? null : ezert$$1.ui.eze$$clone();
				ezert$$2.Box = ezert$$1.Box === null ? null : ezert$$1.Box.eze$$clone();
				ezert$$2.TextLabel = ezert$$1.TextLabel === null ? null : ezert$$1.TextLabel.eze$$clone();
				ezert$$2.GridLayout = ezert$$1.GridLayout === null ? null : ezert$$1.GridLayout.eze$$clone();
				ezert$$2.Boxbody = ezert$$1.Boxbody === null ? null : ezert$$1.Boxbody.eze$$clone();
				ezert$$2.BoxNewProduct = ezert$$1.BoxNewProduct === null ? null : ezert$$1.BoxNewProduct.eze$$clone();
				ezert$$2.NewProduct = ezert$$1.NewProduct === null ? null : ezert$$1.NewProduct;
				ezert$$2.NewProduct1 = ezert$$1.NewProduct1 === null ? null : ezert$$1.NewProduct1.eze$$clone();
				ezert$$2.NewProduct2 = ezert$$1.NewProduct2 === null ? null : ezert$$1.NewProduct2.eze$$clone();
				ezert$$2.NewProduct3 = ezert$$1.NewProduct3 === null ? null : ezert$$1.NewProduct3.eze$$clone();
				ezert$$2.NewProduct4 = ezert$$1.NewProduct4 === null ? null : ezert$$1.NewProduct4.eze$$clone();
				ezert$$2.NewProduct5 = ezert$$1.NewProduct5 === null ? null : ezert$$1.NewProduct5.eze$$clone();
				ezert$$2.NewProductMore = ezert$$1.NewProductMore === null ? null : ezert$$1.NewProductMore.eze$$clone();
				ezert$$2.Product = ezert$$1.Product === null ? null : ezert$$1.Product;
				ezert$$2.Product1 = ezert$$1.Product1 === null ? null : ezert$$1.Product1.eze$$clone();
				ezert$$2.Product2 = ezert$$1.Product2 === null ? null : ezert$$1.Product2.eze$$clone();
				ezert$$2.Product3 = ezert$$1.Product3 === null ? null : ezert$$1.Product3.eze$$clone();
				ezert$$2.Product4 = ezert$$1.Product4 === null ? null : ezert$$1.Product4.eze$$clone();
				ezert$$2.ProductMore = ezert$$1.ProductMore === null ? null : ezert$$1.ProductMore.eze$$clone();
				ezert$$2.Box1 = ezert$$1.Box1 === null ? null : ezert$$1.Box1.eze$$clone();
				ezert$$2.ProductOne = ezert$$1.ProductOne === null ? null : ezert$$1.ProductOne;
				ezert$$2.ProductOne1 = ezert$$1.ProductOne1 === null ? null : ezert$$1.ProductOne1.eze$$clone();
				ezert$$2.ProductOne2 = ezert$$1.ProductOne2 === null ? null : ezert$$1.ProductOne2.eze$$clone();
				ezert$$2.ProductOne3 = ezert$$1.ProductOne3 === null ? null : ezert$$1.ProductOne3.eze$$clone();
				ezert$$2.ProductOne4 = ezert$$1.ProductOne4 === null ? null : ezert$$1.ProductOne4.eze$$clone();
				ezert$$2.ProductOneMore = ezert$$1.ProductOneMore === null ? null : ezert$$1.ProductOneMore.eze$$clone();
				return ezert$$2;
			}
			,
			"eze$$getFieldSignatures": function() {
				if(this.fieldSigs === undefined){
					this.fieldSigs = [
					{name: "ui", sig: "org.eclipse.edt.rui.widgets.GridLayout"},
					{name: "Box", sig: "org.eclipse.edt.rui.widgets.Box"},
					{name: "TextLabel", sig: "org.eclipse.edt.rui.widgets.TextLabel"},
					{name: "GridLayout", sig: "org.eclipse.edt.rui.widgets.GridLayout"},
					{name: "Boxbody", sig: "org.eclipse.edt.rui.widgets.Box"},
					{name: "BoxNewProduct", sig: "org.eclipse.edt.rui.widgets.Box"},
					{name: "NewProduct", sig: "dojo.widgets.DojoTitlePane"},
					{name: "NewProduct1", sig: "org.eclipse.edt.rui.widgets.HyperLink"},
					{name: "NewProduct2", sig: "org.eclipse.edt.rui.widgets.HyperLink"},
					{name: "NewProduct3", sig: "org.eclipse.edt.rui.widgets.HyperLink"},
					{name: "NewProduct4", sig: "org.eclipse.edt.rui.widgets.HyperLink"},
					{name: "NewProduct5", sig: "org.eclipse.edt.rui.widgets.HyperLink"},
					{name: "NewProductMore", sig: "org.eclipse.edt.rui.widgets.HyperLink"},
					{name: "Product", sig: "dojo.widgets.DojoTitlePane"},
					{name: "Product1", sig: "org.eclipse.edt.rui.widgets.HyperLink"},
					{name: "Product2", sig: "org.eclipse.edt.rui.widgets.HyperLink"},
					{name: "Product3", sig: "org.eclipse.edt.rui.widgets.HyperLink"},
					{name: "Product4", sig: "org.eclipse.edt.rui.widgets.HyperLink"},
					{name: "ProductMore", sig: "org.eclipse.edt.rui.widgets.HyperLink"},
					{name: "Box1", sig: "org.eclipse.edt.rui.widgets.Box"},
					{name: "ProductOne", sig: "dojo.widgets.DojoTitlePane"},
					{name: "ProductOne1", sig: "org.eclipse.edt.rui.widgets.HyperLink"},
					{name: "ProductOne2", sig: "org.eclipse.edt.rui.widgets.HyperLink"},
					{name: "ProductOne3", sig: "org.eclipse.edt.rui.widgets.HyperLink"},
					{name: "ProductOne4", sig: "org.eclipse.edt.rui.widgets.HyperLink"},
					{name: "ProductOneMore", sig: "org.eclipse.edt.rui.widgets.HyperLink"}];
				}
				return this.fieldSigs;
			}
			,
			"eze$$getAnnotations": function() {
				if(this.annotations === undefined){
					this.annotations = {};
					this.annotations["XMLRootElement"] = new egl.eglx.xml.binding.annotation.XMLRootElement("Education", null, false);
				}
				return this.annotations;
			}
			,
			"eze$$getFieldInfos": function() {
				if(this.fieldInfos === undefined){
					var annotations;
					this.fieldInfos = new Array();
					annotations = {};
					annotations["XMLStyle"] = new egl.eglx.xml.binding.annotation.XMLElement("ui", null, false, false);
					annotations["JsonName"] = new egl.eglx.json.JsonName("ui");
					this.fieldInfos[0] =new egl.eglx.services.FieldInfo("ui", "ui", "org.eclipse.edt.rui.widgets.GridLayout", egl.org.eclipse.edt.rui.widgets.GridLayout, annotations);
					annotations = {};
					annotations["XMLStyle"] = new egl.eglx.xml.binding.annotation.XMLElement("Box", null, false, false);
					annotations["JsonName"] = new egl.eglx.json.JsonName("Box");
					this.fieldInfos[1] =new egl.eglx.services.FieldInfo("Box", "Box", "org.eclipse.edt.rui.widgets.Box", egl.org.eclipse.edt.rui.widgets.Box, annotations);
					annotations = {};
					annotations["XMLStyle"] = new egl.eglx.xml.binding.annotation.XMLElement("TextLabel", null, false, false);
					annotations["JsonName"] = new egl.eglx.json.JsonName("TextLabel");
					this.fieldInfos[2] =new egl.eglx.services.FieldInfo("TextLabel", "TextLabel", "org.eclipse.edt.rui.widgets.TextLabel", egl.org.eclipse.edt.rui.widgets.TextLabel, annotations);
					annotations = {};
					annotations["XMLStyle"] = new egl.eglx.xml.binding.annotation.XMLElement("GridLayout", null, false, false);
					annotations["JsonName"] = new egl.eglx.json.JsonName("GridLayout");
					this.fieldInfos[3] =new egl.eglx.services.FieldInfo("GridLayout", "GridLayout", "org.eclipse.edt.rui.widgets.GridLayout", egl.org.eclipse.edt.rui.widgets.GridLayout, annotations);
					annotations = {};
					annotations["XMLStyle"] = new egl.eglx.xml.binding.annotation.XMLElement("Boxbody", null, false, false);
					annotations["JsonName"] = new egl.eglx.json.JsonName("Boxbody");
					this.fieldInfos[4] =new egl.eglx.services.FieldInfo("Boxbody", "Boxbody", "org.eclipse.edt.rui.widgets.Box", egl.org.eclipse.edt.rui.widgets.Box, annotations);
					annotations = {};
					annotations["XMLStyle"] = new egl.eglx.xml.binding.annotation.XMLElement("BoxNewProduct", null, false, false);
					annotations["JsonName"] = new egl.eglx.json.JsonName("BoxNewProduct");
					this.fieldInfos[5] =new egl.eglx.services.FieldInfo("BoxNewProduct", "BoxNewProduct", "org.eclipse.edt.rui.widgets.Box", egl.org.eclipse.edt.rui.widgets.Box, annotations);
					annotations = {};
					annotations["XMLStyle"] = new egl.eglx.xml.binding.annotation.XMLElement("NewProduct1", null, false, false);
					annotations["JsonName"] = new egl.eglx.json.JsonName("NewProduct1");
					this.fieldInfos[7] =new egl.eglx.services.FieldInfo("NewProduct1", "NewProduct1", "org.eclipse.edt.rui.widgets.HyperLink", egl.org.eclipse.edt.rui.widgets.HyperLink, annotations);
					annotations = {};
					annotations["XMLStyle"] = new egl.eglx.xml.binding.annotation.XMLElement("NewProduct2", null, false, false);
					annotations["JsonName"] = new egl.eglx.json.JsonName("NewProduct2");
					this.fieldInfos[8] =new egl.eglx.services.FieldInfo("NewProduct2", "NewProduct2", "org.eclipse.edt.rui.widgets.HyperLink", egl.org.eclipse.edt.rui.widgets.HyperLink, annotations);
					annotations = {};
					annotations["XMLStyle"] = new egl.eglx.xml.binding.annotation.XMLElement("NewProduct3", null, false, false);
					annotations["JsonName"] = new egl.eglx.json.JsonName("NewProduct3");
					this.fieldInfos[9] =new egl.eglx.services.FieldInfo("NewProduct3", "NewProduct3", "org.eclipse.edt.rui.widgets.HyperLink", egl.org.eclipse.edt.rui.widgets.HyperLink, annotations);
					annotations = {};
					annotations["XMLStyle"] = new egl.eglx.xml.binding.annotation.XMLElement("NewProduct4", null, false, false);
					annotations["JsonName"] = new egl.eglx.json.JsonName("NewProduct4");
					this.fieldInfos[10] =new egl.eglx.services.FieldInfo("NewProduct4", "NewProduct4", "org.eclipse.edt.rui.widgets.HyperLink", egl.org.eclipse.edt.rui.widgets.HyperLink, annotations);
					annotations = {};
					annotations["XMLStyle"] = new egl.eglx.xml.binding.annotation.XMLElement("NewProduct5", null, false, false);
					annotations["JsonName"] = new egl.eglx.json.JsonName("NewProduct5");
					this.fieldInfos[11] =new egl.eglx.services.FieldInfo("NewProduct5", "NewProduct5", "org.eclipse.edt.rui.widgets.HyperLink", egl.org.eclipse.edt.rui.widgets.HyperLink, annotations);
					annotations = {};
					annotations["XMLStyle"] = new egl.eglx.xml.binding.annotation.XMLElement("NewProductMore", null, false, false);
					annotations["JsonName"] = new egl.eglx.json.JsonName("NewProductMore");
					this.fieldInfos[12] =new egl.eglx.services.FieldInfo("NewProductMore", "NewProductMore", "org.eclipse.edt.rui.widgets.HyperLink", egl.org.eclipse.edt.rui.widgets.HyperLink, annotations);
					annotations = {};
					annotations["XMLStyle"] = new egl.eglx.xml.binding.annotation.XMLElement("Product1", null, false, false);
					annotations["JsonName"] = new egl.eglx.json.JsonName("Product1");
					this.fieldInfos[14] =new egl.eglx.services.FieldInfo("Product1", "Product1", "org.eclipse.edt.rui.widgets.HyperLink", egl.org.eclipse.edt.rui.widgets.HyperLink, annotations);
					annotations = {};
					annotations["XMLStyle"] = new egl.eglx.xml.binding.annotation.XMLElement("Product2", null, false, false);
					annotations["JsonName"] = new egl.eglx.json.JsonName("Product2");
					this.fieldInfos[15] =new egl.eglx.services.FieldInfo("Product2", "Product2", "org.eclipse.edt.rui.widgets.HyperLink", egl.org.eclipse.edt.rui.widgets.HyperLink, annotations);
					annotations = {};
					annotations["XMLStyle"] = new egl.eglx.xml.binding.annotation.XMLElement("Product3", null, false, false);
					annotations["JsonName"] = new egl.eglx.json.JsonName("Product3");
					this.fieldInfos[16] =new egl.eglx.services.FieldInfo("Product3", "Product3", "org.eclipse.edt.rui.widgets.HyperLink", egl.org.eclipse.edt.rui.widgets.HyperLink, annotations);
					annotations = {};
					annotations["XMLStyle"] = new egl.eglx.xml.binding.annotation.XMLElement("Product4", null, false, false);
					annotations["JsonName"] = new egl.eglx.json.JsonName("Product4");
					this.fieldInfos[17] =new egl.eglx.services.FieldInfo("Product4", "Product4", "org.eclipse.edt.rui.widgets.HyperLink", egl.org.eclipse.edt.rui.widgets.HyperLink, annotations);
					annotations = {};
					annotations["XMLStyle"] = new egl.eglx.xml.binding.annotation.XMLElement("ProductMore", null, false, false);
					annotations["JsonName"] = new egl.eglx.json.JsonName("ProductMore");
					this.fieldInfos[18] =new egl.eglx.services.FieldInfo("ProductMore", "ProductMore", "org.eclipse.edt.rui.widgets.HyperLink", egl.org.eclipse.edt.rui.widgets.HyperLink, annotations);
					annotations = {};
					annotations["XMLStyle"] = new egl.eglx.xml.binding.annotation.XMLElement("Box1", null, false, false);
					annotations["JsonName"] = new egl.eglx.json.JsonName("Box1");
					this.fieldInfos[19] =new egl.eglx.services.FieldInfo("Box1", "Box1", "org.eclipse.edt.rui.widgets.Box", egl.org.eclipse.edt.rui.widgets.Box, annotations);
					annotations = {};
					annotations["XMLStyle"] = new egl.eglx.xml.binding.annotation.XMLElement("ProductOne1", null, false, false);
					annotations["JsonName"] = new egl.eglx.json.JsonName("ProductOne1");
					this.fieldInfos[21] =new egl.eglx.services.FieldInfo("ProductOne1", "ProductOne1", "org.eclipse.edt.rui.widgets.HyperLink", egl.org.eclipse.edt.rui.widgets.HyperLink, annotations);
					annotations = {};
					annotations["XMLStyle"] = new egl.eglx.xml.binding.annotation.XMLElement("ProductOne2", null, false, false);
					annotations["JsonName"] = new egl.eglx.json.JsonName("ProductOne2");
					this.fieldInfos[22] =new egl.eglx.services.FieldInfo("ProductOne2", "ProductOne2", "org.eclipse.edt.rui.widgets.HyperLink", egl.org.eclipse.edt.rui.widgets.HyperLink, annotations);
					annotations = {};
					annotations["XMLStyle"] = new egl.eglx.xml.binding.annotation.XMLElement("ProductOne3", null, false, false);
					annotations["JsonName"] = new egl.eglx.json.JsonName("ProductOne3");
					this.fieldInfos[23] =new egl.eglx.services.FieldInfo("ProductOne3", "ProductOne3", "org.eclipse.edt.rui.widgets.HyperLink", egl.org.eclipse.edt.rui.widgets.HyperLink, annotations);
					annotations = {};
					annotations["XMLStyle"] = new egl.eglx.xml.binding.annotation.XMLElement("ProductOne4", null, false, false);
					annotations["JsonName"] = new egl.eglx.json.JsonName("ProductOne4");
					this.fieldInfos[24] =new egl.eglx.services.FieldInfo("ProductOne4", "ProductOne4", "org.eclipse.edt.rui.widgets.HyperLink", egl.org.eclipse.edt.rui.widgets.HyperLink, annotations);
					annotations = {};
					annotations["XMLStyle"] = new egl.eglx.xml.binding.annotation.XMLElement("ProductOneMore", null, false, false);
					annotations["JsonName"] = new egl.eglx.json.JsonName("ProductOneMore");
					this.fieldInfos[25] =new egl.eglx.services.FieldInfo("ProductOneMore", "ProductOneMore", "org.eclipse.edt.rui.widgets.HyperLink", egl.org.eclipse.edt.rui.widgets.HyperLink, annotations);
				}
				return this.fieldInfos;
			}
			,
			"start": function() {
				try { egl.enter("start",this,arguments);
					egl.atLine(this.eze$$fileName,97,4511,24, this);
					if (!egl.debugg) egl.leave();
				} finally {
					if (!egl.debugg){
					} else { egl.leave(); }
				}
			}
			,
			"toString": function() {
				return "[Education]";
			}
			,
			"eze$$getName": function() {
				return "Education";
			}
			,
			"eze$$getChildVariables": function() {
				var eze$$parent = this;
				return [
				{name: "GridLayoutLib", value : egl.org.eclipse.edt.rui.widgets.GridLayoutLib['$inst'], type : "org.eclipse.edt.rui.widgets.GridLayoutLib", jsName : "egl.org.eclipse.edt.rui.widgets.GridLayoutLib['$inst']"},
				{name: "ui", value : eze$$parent.ui, type : "org.eclipse.edt.rui.widgets.GridLayout", jsName : "ui"},
				{name: "Box", value : eze$$parent.Box, type : "org.eclipse.edt.rui.widgets.Box", jsName : "Box"},
				{name: "TextLabel", value : eze$$parent.TextLabel, type : "org.eclipse.edt.rui.widgets.TextLabel", jsName : "TextLabel"},
				{name: "GridLayout", value : eze$$parent.GridLayout, type : "org.eclipse.edt.rui.widgets.GridLayout", jsName : "GridLayout"},
				{name: "Boxbody", value : eze$$parent.Boxbody, type : "org.eclipse.edt.rui.widgets.Box", jsName : "Boxbody"},
				{name: "BoxNewProduct", value : eze$$parent.BoxNewProduct, type : "org.eclipse.edt.rui.widgets.Box", jsName : "BoxNewProduct"},
				{name: "NewProduct", value : eze$$parent.NewProduct, type : "dojo.widgets.DojoTitlePane", jsName : "NewProduct"},
				{name: "NewProduct1", value : eze$$parent.NewProduct1, type : "org.eclipse.edt.rui.widgets.HyperLink", jsName : "NewProduct1"},
				{name: "NewProduct2", value : eze$$parent.NewProduct2, type : "org.eclipse.edt.rui.widgets.HyperLink", jsName : "NewProduct2"},
				{name: "NewProduct3", value : eze$$parent.NewProduct3, type : "org.eclipse.edt.rui.widgets.HyperLink", jsName : "NewProduct3"},
				{name: "NewProduct4", value : eze$$parent.NewProduct4, type : "org.eclipse.edt.rui.widgets.HyperLink", jsName : "NewProduct4"},
				{name: "NewProduct5", value : eze$$parent.NewProduct5, type : "org.eclipse.edt.rui.widgets.HyperLink", jsName : "NewProduct5"},
				{name: "NewProductMore", value : eze$$parent.NewProductMore, type : "org.eclipse.edt.rui.widgets.HyperLink", jsName : "NewProductMore"},
				{name: "Product", value : eze$$parent.Product, type : "dojo.widgets.DojoTitlePane", jsName : "Product"},
				{name: "Product1", value : eze$$parent.Product1, type : "org.eclipse.edt.rui.widgets.HyperLink", jsName : "Product1"},
				{name: "Product2", value : eze$$parent.Product2, type : "org.eclipse.edt.rui.widgets.HyperLink", jsName : "Product2"},
				{name: "Product3", value : eze$$parent.Product3, type : "org.eclipse.edt.rui.widgets.HyperLink", jsName : "Product3"},
				{name: "Product4", value : eze$$parent.Product4, type : "org.eclipse.edt.rui.widgets.HyperLink", jsName : "Product4"},
				{name: "ProductMore", value : eze$$parent.ProductMore, type : "org.eclipse.edt.rui.widgets.HyperLink", jsName : "ProductMore"},
				{name: "Box1", value : eze$$parent.Box1, type : "org.eclipse.edt.rui.widgets.Box", jsName : "Box1"},
				{name: "ProductOne", value : eze$$parent.ProductOne, type : "dojo.widgets.DojoTitlePane", jsName : "ProductOne"},
				{name: "ProductOne1", value : eze$$parent.ProductOne1, type : "org.eclipse.edt.rui.widgets.HyperLink", jsName : "ProductOne1"},
				{name: "ProductOne2", value : eze$$parent.ProductOne2, type : "org.eclipse.edt.rui.widgets.HyperLink", jsName : "ProductOne2"},
				{name: "ProductOne3", value : eze$$parent.ProductOne3, type : "org.eclipse.edt.rui.widgets.HyperLink", jsName : "ProductOne3"},
				{name: "ProductOne4", value : eze$$parent.ProductOne4, type : "org.eclipse.edt.rui.widgets.HyperLink", jsName : "ProductOne4"},
				{name: "ProductOneMore", value : eze$$parent.ProductOneMore, type : "org.eclipse.edt.rui.widgets.HyperLink", jsName : "ProductOneMore"},
				{name: "document", value : eze$$parent.document, type : "eglx.ui.rui.Document", jsName : "document"},
				{name: "initialUI", value : eze$$parent.initialUI, type : "eglx.lang.EList<eglx.ui.rui.Widget>", jsName : "!initialUI"}
				];
			}
		}
	);
});
