define(["eglx/ui/rui/eze$$View", "org/eclipse/edt/rui/widgets/GridLayoutData", "org/eclipse/edt/rui/widgets/HyperLink", "org/eclipse/edt/rui/widgets/GridLayoutLib", "org/eclipse/edt/rui/widgets/Box", "org/eclipse/edt/rui/widgets/Div", "ezekw$$dojo/widgets/eze$$DojoTitlePane", "org/eclipse/edt/rui/widgets/GridLayout"],function(){
	egl.loadCSS("css/NewProject.css");
	egl.defineRUIHandler("client.client", "Home", {
		"eze$$fileName" : "client/client/Home.egl",
		"eze$$runtimePropertiesFile" : "client/client/Home",
			"constructor": function() {
				this.start();
			}
			,
			"eze$$setEmpty": function() {
				new egl.org.eclipse.edt.rui.widgets.GridLayoutLib();
				this.ui = new egl.org.eclipse.edt.rui.widgets.GridLayout();
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
					egl.atLine(this.eze$$fileName,20,542,11, this);
					this.ui.setColumns(3);
					egl.atLine(this.eze$$fileName,20,555,8, this);
					this.ui.setRows(1);
					egl.atLine(this.eze$$fileName,20,565,15, this);
					this.ui.setCellPadding(4);
					egl.atLine(this.eze$$fileName,20,582,43, this);
					this.ui.setChildren([egl.eglx.lang.convert(egl.eglx.ui.rui.Widget.fromWidget, [this.Box1,"org.eclipse.edt.rui.widgets.Box"]), egl.eglx.lang.convert(egl.eglx.ui.rui.Widget.fromWidget, [this.BoxNewProduct,"org.eclipse.edt.rui.widgets.Box"]), egl.eglx.lang.convert(egl.eglx.ui.rui.Widget.fromWidget, [this.Boxbody,"org.eclipse.edt.rui.widgets.Box"])].setType("[Teglx/ui/rui/Widget;"));
					var eze$LNNTemp1 = null;
					{
						var eze$SettingTarget1 = new egl.org.eclipse.edt.rui.widgets.GridLayoutData();
						egl.atLine(this.eze$$fileName,21,658,149, this);
						eze$SettingTarget1 = egl.eglx.lang.AnyValue.ezeCopyTo(new egl.org.eclipse.edt.rui.widgets.GridLayoutData(), eze$SettingTarget1);
						egl.atLine(this.eze$$fileName,21,678,7, this);
						eze$SettingTarget1.row = 1;
						egl.atLine(this.eze$$fileName,21,687,10, this);
						eze$SettingTarget1.column = 1;
						egl.atLine(this.eze$$fileName,22,707,44, this);
						eze$SettingTarget1.verticalAlignment = egl.org.eclipse.edt.rui.widgets.GridLayoutLib['$inst'].VALIGN_TOP;
						egl.atLine(this.eze$$fileName,23,758,47, this);
						eze$SettingTarget1.horizontalAlignment = egl.org.eclipse.edt.rui.widgets.GridLayoutLib['$inst'].ALIGN_RIGHT;
						egl.atLine(this.eze$$fileName,21,658,149, this);
						eze$LNNTemp1 = egl.eglx.lang.AnyValue.ezeCopyTo(eze$SettingTarget1, eze$LNNTemp1);
					}
					egl.atLine(this.eze$$fileName,21,645,162, this);
					this.Boxbody.setLayoutData(egl.eglx.lang.convert(egl.eglx.lang.EAny.fromEAny, [eze$LNNTemp1.eze$$clone(),"Torg/eclipse/edt/rui/widgets/GridLayoutData;"]));
					egl.atLine(this.eze$$fileName,23,809,9, this);
					this.Boxbody.setPadding(8);
					egl.atLine(this.eze$$fileName,24,825,22, this);
					this.Boxbody.setChildren([egl.eglx.lang.convert(egl.eglx.ui.rui.Widget.fromWidget, [this.Product,"dojo.widgets.DojoTitlePane"])].setType("[Teglx/ui/rui/Widget;"));
					egl.atLine(this.eze$$fileName,25,854,13, this);
					this.Boxbody.setWidth("280");
					var eze$LNNTemp2 = null;
					{
						var eze$SettingTarget1 = new egl.org.eclipse.edt.rui.widgets.GridLayoutData();
						egl.atLine(this.eze$$fileName,26,908,149, this);
						eze$SettingTarget1 = egl.eglx.lang.AnyValue.ezeCopyTo(new egl.org.eclipse.edt.rui.widgets.GridLayoutData(), eze$SettingTarget1);
						egl.atLine(this.eze$$fileName,26,928,7, this);
						eze$SettingTarget1.row = 1;
						egl.atLine(this.eze$$fileName,26,937,10, this);
						eze$SettingTarget1.column = 2;
						egl.atLine(this.eze$$fileName,27,957,44, this);
						eze$SettingTarget1.verticalAlignment = egl.org.eclipse.edt.rui.widgets.GridLayoutLib['$inst'].VALIGN_TOP;
						egl.atLine(this.eze$$fileName,28,1008,47, this);
						eze$SettingTarget1.horizontalAlignment = egl.org.eclipse.edt.rui.widgets.GridLayoutLib['$inst'].ALIGN_RIGHT;
						egl.atLine(this.eze$$fileName,26,908,149, this);
						eze$LNNTemp2 = egl.eglx.lang.AnyValue.ezeCopyTo(eze$SettingTarget1, eze$LNNTemp2);
					}
					egl.atLine(this.eze$$fileName,26,895,162, this);
					this.BoxNewProduct.setLayoutData(egl.eglx.lang.convert(egl.eglx.lang.EAny.fromEAny, [eze$LNNTemp2.eze$$clone(),"Torg/eclipse/edt/rui/widgets/GridLayoutData;"]));
					egl.atLine(this.eze$$fileName,28,1059,9, this);
					this.BoxNewProduct.setPadding(8);
					egl.atLine(this.eze$$fileName,29,1075,25, this);
					this.BoxNewProduct.setChildren([egl.eglx.lang.convert(egl.eglx.ui.rui.Widget.fromWidget, [this.NewProduct,"dojo.widgets.DojoTitlePane"])].setType("[Teglx/ui/rui/Widget;"));
					egl.atLine(this.eze$$fileName,30,1107,13, this);
					this.BoxNewProduct.setWidth("280");
					egl.atLine(this.eze$$fileName,31,1154,14, this);
					this.NewProduct.title = "\u6559\u5b66\u5929\u5730";
					egl.atLine(this.eze$$fileName,31,1170,11, this);
					this.NewProduct.setOpen(true);
					egl.atLine(this.eze$$fileName,31,1183,13, this);
					this.NewProduct.duration = 1000;
					egl.atLine(this.eze$$fileName,31,1198,11, this);
					this.NewProduct.setWidth("280");
					var eze$LNNTemp3 = null;
					{
						var eze$SettingTarget1;
						egl.atLine(this.eze$$fileName,31,1224,117, this);
						eze$SettingTarget1 = (function () {
							var eze$Temp4 = new egl.org.eclipse.edt.rui.widgets.Div();
							return eze$Temp4;
						}).call(this);
						egl.atLine(this.eze$$fileName,32,1242,89, this);
						eze$SettingTarget1.setChildren([egl.eglx.lang.convert(egl.eglx.ui.rui.Widget.fromWidget, [this.NewProduct1,"org.eclipse.edt.rui.widgets.HyperLink"]), egl.eglx.lang.convert(egl.eglx.ui.rui.Widget.fromWidget, [this.NewProduct2,"org.eclipse.edt.rui.widgets.HyperLink"]), egl.eglx.lang.convert(egl.eglx.ui.rui.Widget.fromWidget, [this.NewProduct3,"org.eclipse.edt.rui.widgets.HyperLink"]), egl.eglx.lang.convert(egl.eglx.ui.rui.Widget.fromWidget, [this.NewProduct4,"org.eclipse.edt.rui.widgets.HyperLink"]), egl.eglx.lang.convert(egl.eglx.ui.rui.Widget.fromWidget, [this.NewProduct5,"org.eclipse.edt.rui.widgets.HyperLink"]), egl.eglx.lang.convert(egl.eglx.ui.rui.Widget.fromWidget, [this.NewProductMore,"org.eclipse.edt.rui.widgets.HyperLink"])].setType("[Teglx/ui/rui/Widget;"));
						egl.atLine(this.eze$$fileName,31,1224,117, this);
						eze$LNNTemp3 = eze$SettingTarget1;
					}
					egl.atLine(this.eze$$fileName,31,1211,132, this);
					this.NewProduct.setChildren([egl.eglx.lang.convert(egl.eglx.ui.rui.Widget.fromWidget, [eze$LNNTemp3,"org.eclipse.edt.rui.widgets.Div"])].setType("[Teglx/ui/rui/Widget;"));
					egl.atLine(this.eze$$fileName,34,1353,13, this);
					this.NewProduct.setFont("\u5fae\u8f6f\u96c5\u9ed1");
					egl.atLine(this.eze$$fileName,35,1373,15, this);
					this.NewProduct.setFontSize("14");
					egl.atLine(this.eze$$fileName,36,1419,20, this);
					this.NewProduct1.setText("\u5c0f\u5b66\u4e00\u5e74\u7ea7\u5b66\u751f\u5b66\u4e60\u6307\u5bfc");
					egl.atLine(this.eze$$fileName,37,1446,57, this);
					this.NewProduct1.setHref("http://www.dingboshi.com/education/detail413.htm");
					egl.atLine(this.eze$$fileName,38,1534,19, this);
					this.NewProduct2.setText("\u5c0f\u5b66\u6570\u5b66\u590d\u4e60\u65b9\u6cd5\u6307\u5bfc");
					egl.atLine(this.eze$$fileName,39,1560,57, this);
					this.NewProduct2.setHref("http://www.dingboshi.com/education/detail423.htm");
					egl.atLine(this.eze$$fileName,40,1648,26, this);
					this.NewProduct3.setText("\u5c0f\u5b66\u6570\u5b66\u9ad8\u6548\u590d\u4e60\u6280\u5de7\uff1a\u505a\u597d\u54ea\u4e9b\u8f85\u5bfc");
					egl.atLine(this.eze$$fileName,41,1681,57, this);
					this.NewProduct3.setHref("http://www.dingboshi.com/education/detail412.htm");
					egl.atLine(this.eze$$fileName,42,1769,20, this);
					this.NewProduct4.setText("\u5c0f\u5b66\u6570\u5b66\u5b66\u4e60\u65b9\u6cd5\u6709\u54ea\u4e9b");
					egl.atLine(this.eze$$fileName,43,1796,57, this);
					this.NewProduct4.setHref("http://www.dingboshi.com/education/detail350.htm");
					egl.atLine(this.eze$$fileName,44,1884,22, this);
					this.NewProduct5.setText("\u5c0f\u5b66\u6570\u5b66\u9ad8\u6548\u590d\u4e60\u7684\u4e94\u628a\u5229\u5251");
					egl.atLine(this.eze$$fileName,45,1913,57, this);
					this.NewProduct5.setHref("http://www.dingboshi.com/education/detail194.htm");
					egl.atLine(this.eze$$fileName,46,2004,13, this);
					this.NewProductMore.setText("\u4e86\u89e3\u66f4\u591a");
					egl.atLine(this.eze$$fileName,47,2024,13, this);
					this.NewProductMore.setHref("\u4e86\u89e3\u66f4\u591a");
					egl.atLine(this.eze$$fileName,48,2044,14, this);
					this.NewProductMore.setMarginTop(10);
					egl.atLine(this.eze$$fileName,49,2090,14, this);
					this.Product.title = "\u70ed\u95e8\u8bfe\u7a0b";
					egl.atLine(this.eze$$fileName,49,2106,11, this);
					this.Product.setOpen(true);
					egl.atLine(this.eze$$fileName,49,2119,13, this);
					this.Product.duration = 1000;
					egl.atLine(this.eze$$fileName,49,2134,11, this);
					this.Product.setWidth("280");
					var eze$LNNTemp5 = null;
					{
						var eze$SettingTarget1;
						egl.atLine(this.eze$$fileName,49,2160,90, this);
						eze$SettingTarget1 = (function () {
							var eze$Temp6 = new egl.org.eclipse.edt.rui.widgets.Div();
							return eze$Temp6;
						}).call(this);
						egl.atLine(this.eze$$fileName,50,2178,62, this);
						eze$SettingTarget1.setChildren([egl.eglx.lang.convert(egl.eglx.ui.rui.Widget.fromWidget, [this.Product1,"org.eclipse.edt.rui.widgets.HyperLink"]), egl.eglx.lang.convert(egl.eglx.ui.rui.Widget.fromWidget, [this.Product2,"org.eclipse.edt.rui.widgets.HyperLink"]), egl.eglx.lang.convert(egl.eglx.ui.rui.Widget.fromWidget, [this.Product3,"org.eclipse.edt.rui.widgets.HyperLink"]), egl.eglx.lang.convert(egl.eglx.ui.rui.Widget.fromWidget, [this.Product4,"org.eclipse.edt.rui.widgets.HyperLink"]), egl.eglx.lang.convert(egl.eglx.ui.rui.Widget.fromWidget, [this.ProductMore,"org.eclipse.edt.rui.widgets.HyperLink"])].setType("[Teglx/ui/rui/Widget;"));
						egl.atLine(this.eze$$fileName,49,2160,90, this);
						eze$LNNTemp5 = eze$SettingTarget1;
					}
					egl.atLine(this.eze$$fileName,49,2147,105, this);
					this.Product.setChildren([egl.eglx.lang.convert(egl.eglx.ui.rui.Widget.fromWidget, [eze$LNNTemp5,"org.eclipse.edt.rui.widgets.Div"])].setType("[Teglx/ui/rui/Widget;"));
					egl.atLine(this.eze$$fileName,52,2262,13, this);
					this.Product.setFont("\u5fae\u8f6f\u96c5\u9ed1");
					egl.atLine(this.eze$$fileName,53,2282,15, this);
					this.Product.setFontSize("14");
					egl.atLine(this.eze$$fileName,54,2325,17, this);
					this.Product1.setText("1\u30012\u30013\u7684\u8ba4\u8bc6");
					egl.atLine(this.eze$$fileName,55,2349,72, this);
					this.Product1.setHref("http://www.shuxueweb.com/Article/Class8/Class17/200308/127.html");
					egl.atLine(this.eze$$fileName,56,2449,12, this);
					this.Product2.setText("\u8ba4\u8bc6\u949f");
					egl.atLine(this.eze$$fileName,57,2468,72, this);
					this.Product2.setHref("http://www.shuxueweb.com/Article/Class8/Class17/200311/925.html");
					egl.atLine(this.eze$$fileName,58,2568,20, this);
					this.Product3.setText("\u4e24\u4f4d\u6570\u52a0\u4e24\u4f4d\u6570\uff08\u7ad6\u5f0f\uff09");
					egl.atLine(this.eze$$fileName,59,2595,80, this);
					this.Product3.setHref("http://www.shuxueweb.com/Article/Class8/Class17/Class51/200309/465.html");
					egl.atLine(this.eze$$fileName,60,2703,14, this);
					this.Product4.setText("\u56fe\u753b\u5e94\u7528\u9898");
					egl.atLine(this.eze$$fileName,61,2724,81, this);
					this.Product4.setHref("http://www.shuxueweb.com/Article/Class8/Class17/Class51/200401/1293.html");
					egl.atLine(this.eze$$fileName,62,2836,13, this);
					this.ProductMore.setText("\u4e86\u89e3\u66f4\u591a");
					egl.atLine(this.eze$$fileName,63,2856,13, this);
					this.ProductMore.setHref("\u4e86\u89e3\u66f4\u591a");
					egl.atLine(this.eze$$fileName,64,2876,14, this);
					this.ProductMore.setMarginTop(10);
					var eze$LNNTemp7 = null;
					{
						var eze$SettingTarget1 = new egl.org.eclipse.edt.rui.widgets.GridLayoutData();
						egl.atLine(this.eze$$fileName,65,2921,149, this);
						eze$SettingTarget1 = egl.eglx.lang.AnyValue.ezeCopyTo(new egl.org.eclipse.edt.rui.widgets.GridLayoutData(), eze$SettingTarget1);
						egl.atLine(this.eze$$fileName,65,2941,7, this);
						eze$SettingTarget1.row = 1;
						egl.atLine(this.eze$$fileName,65,2950,10, this);
						eze$SettingTarget1.column = 3;
						egl.atLine(this.eze$$fileName,66,2971,44, this);
						eze$SettingTarget1.verticalAlignment = egl.org.eclipse.edt.rui.widgets.GridLayoutLib['$inst'].VALIGN_TOP;
						egl.atLine(this.eze$$fileName,67,3022,47, this);
						eze$SettingTarget1.horizontalAlignment = egl.org.eclipse.edt.rui.widgets.GridLayoutLib['$inst'].ALIGN_RIGHT;
						egl.atLine(this.eze$$fileName,65,2921,149, this);
						eze$LNNTemp7 = egl.eglx.lang.AnyValue.ezeCopyTo(eze$SettingTarget1, eze$LNNTemp7);
					}
					egl.atLine(this.eze$$fileName,65,2908,162, this);
					this.Box1.setLayoutData(egl.eglx.lang.convert(egl.eglx.lang.EAny.fromEAny, [eze$LNNTemp7.eze$$clone(),"Torg/eclipse/edt/rui/widgets/GridLayoutData;"]));
					egl.atLine(this.eze$$fileName,67,3072,9, this);
					this.Box1.setPadding(8);
					egl.atLine(this.eze$$fileName,68,3088,25, this);
					this.Box1.setChildren([egl.eglx.lang.convert(egl.eglx.ui.rui.Widget.fromWidget, [this.ProductOne,"dojo.widgets.DojoTitlePane"])].setType("[Teglx/ui/rui/Widget;"));
					egl.atLine(this.eze$$fileName,69,3121,13, this);
					this.Box1.setWidth("280");
					egl.atLine(this.eze$$fileName,70,3168,14, this);
					this.ProductOne.title = "\u6559\u5b66\u8bba\u575b";
					egl.atLine(this.eze$$fileName,70,3184,11, this);
					this.ProductOne.setOpen(true);
					egl.atLine(this.eze$$fileName,70,3197,13, this);
					this.ProductOne.duration = 1000;
					egl.atLine(this.eze$$fileName,70,3212,11, this);
					this.ProductOne.setWidth("280");
					var eze$LNNTemp8 = null;
					{
						var eze$SettingTarget1;
						egl.atLine(this.eze$$fileName,70,3238,105, this);
						eze$SettingTarget1 = (function () {
							var eze$Temp9 = new egl.org.eclipse.edt.rui.widgets.Div();
							return eze$Temp9;
						}).call(this);
						egl.atLine(this.eze$$fileName,71,3257,77, this);
						eze$SettingTarget1.setChildren([egl.eglx.lang.convert(egl.eglx.ui.rui.Widget.fromWidget, [this.ProductOne1,"org.eclipse.edt.rui.widgets.HyperLink"]), egl.eglx.lang.convert(egl.eglx.ui.rui.Widget.fromWidget, [this.ProductOne2,"org.eclipse.edt.rui.widgets.HyperLink"]), egl.eglx.lang.convert(egl.eglx.ui.rui.Widget.fromWidget, [this.ProductOne3,"org.eclipse.edt.rui.widgets.HyperLink"]), egl.eglx.lang.convert(egl.eglx.ui.rui.Widget.fromWidget, [this.ProductOne4,"org.eclipse.edt.rui.widgets.HyperLink"]), egl.eglx.lang.convert(egl.eglx.ui.rui.Widget.fromWidget, [this.ProductOneMore,"org.eclipse.edt.rui.widgets.HyperLink"])].setType("[Teglx/ui/rui/Widget;"));
						egl.atLine(this.eze$$fileName,70,3238,105, this);
						eze$LNNTemp8 = eze$SettingTarget1;
					}
					egl.atLine(this.eze$$fileName,70,3225,120, this);
					this.ProductOne.setChildren([egl.eglx.lang.convert(egl.eglx.ui.rui.Widget.fromWidget, [eze$LNNTemp8,"org.eclipse.edt.rui.widgets.Div"])].setType("[Teglx/ui/rui/Widget;"));
					egl.atLine(this.eze$$fileName,73,3356,13, this);
					this.ProductOne.setFont("\u5fae\u8f6f\u96c5\u9ed1");
					egl.atLine(this.eze$$fileName,74,3376,15, this);
					this.ProductOne.setFontSize("14");
					egl.atLine(this.eze$$fileName,75,3422,21, this);
					this.ProductOne1.setText(" \u5bb6\u957f\u5982\u4f55\u8f85\u5bfc\u5b69\u5b50\u5199\u4f5c\u4e1a");
					egl.atLine(this.eze$$fileName,76,3450,57, this);
					this.ProductOne1.setHref("http://www.dingboshi.com/forum/detail1_5_249.htm");
					egl.atLine(this.eze$$fileName,77,3538,20, this);
					this.ProductOne2.setText("\u5982\u4f55\u5e2e\u5b69\u5b50\u63d0\u9ad8\u6570\u5b66\u6210\u7ee9");
					egl.atLine(this.eze$$fileName,78,3565,57, this);
					this.ProductOne2.setHref("http://www.dingboshi.com/forum/detail1_5_242.htm");
					egl.atLine(this.eze$$fileName,79,3653,21, this);
					this.ProductOne3.setText(" \u5b69\u5b50\u6210\u7ee9\u4e0d\u7406\u60f3\u8be5\u600e\u4e48\u529e");
					egl.atLine(this.eze$$fileName,80,3681,57, this);
					this.ProductOne3.setHref("http://www.dingboshi.com/forum/detail1_5_228.htm");
					egl.atLine(this.eze$$fileName,81,3769,21, this);
					this.ProductOne4.setText("\u5bb6\u957f\u6559\u80b2\u5b69\u5b50\u7684\u539f\u5219\u6709\u54ea\u4e9b");
					egl.atLine(this.eze$$fileName,82,3797,57, this);
					this.ProductOne4.setHref("http://www.dingboshi.com/forum/detail1_4_111.htm");
					egl.atLine(this.eze$$fileName,83,3888,13, this);
					this.ProductOneMore.setText("\u4e86\u89e3\u66f4\u591a");
					egl.atLine(this.eze$$fileName,84,3908,13, this);
					this.ProductOneMore.setHref("\u4e86\u89e3\u66f4\u591a");
					egl.atLine(this.eze$$fileName,85,3928,14, this);
					this.ProductOneMore.setMarginTop(10);
					egl.atLine(this.eze$$fileName,17,417,28, this);
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
				var ezert$$2 = new egl.client.client.Home();
				ezert$$2.ui = ezert$$1.ui === null ? null : ezert$$1.ui.eze$$clone();
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
					this.annotations["XMLRootElement"] = new egl.eglx.xml.binding.annotation.XMLRootElement("Home", null, false);
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
					annotations["XMLStyle"] = new egl.eglx.xml.binding.annotation.XMLElement("Boxbody", null, false, false);
					annotations["JsonName"] = new egl.eglx.json.JsonName("Boxbody");
					this.fieldInfos[1] =new egl.eglx.services.FieldInfo("Boxbody", "Boxbody", "org.eclipse.edt.rui.widgets.Box", egl.org.eclipse.edt.rui.widgets.Box, annotations);
					annotations = {};
					annotations["XMLStyle"] = new egl.eglx.xml.binding.annotation.XMLElement("BoxNewProduct", null, false, false);
					annotations["JsonName"] = new egl.eglx.json.JsonName("BoxNewProduct");
					this.fieldInfos[2] =new egl.eglx.services.FieldInfo("BoxNewProduct", "BoxNewProduct", "org.eclipse.edt.rui.widgets.Box", egl.org.eclipse.edt.rui.widgets.Box, annotations);
					annotations = {};
					annotations["XMLStyle"] = new egl.eglx.xml.binding.annotation.XMLElement("NewProduct1", null, false, false);
					annotations["JsonName"] = new egl.eglx.json.JsonName("NewProduct1");
					this.fieldInfos[4] =new egl.eglx.services.FieldInfo("NewProduct1", "NewProduct1", "org.eclipse.edt.rui.widgets.HyperLink", egl.org.eclipse.edt.rui.widgets.HyperLink, annotations);
					annotations = {};
					annotations["XMLStyle"] = new egl.eglx.xml.binding.annotation.XMLElement("NewProduct2", null, false, false);
					annotations["JsonName"] = new egl.eglx.json.JsonName("NewProduct2");
					this.fieldInfos[5] =new egl.eglx.services.FieldInfo("NewProduct2", "NewProduct2", "org.eclipse.edt.rui.widgets.HyperLink", egl.org.eclipse.edt.rui.widgets.HyperLink, annotations);
					annotations = {};
					annotations["XMLStyle"] = new egl.eglx.xml.binding.annotation.XMLElement("NewProduct3", null, false, false);
					annotations["JsonName"] = new egl.eglx.json.JsonName("NewProduct3");
					this.fieldInfos[6] =new egl.eglx.services.FieldInfo("NewProduct3", "NewProduct3", "org.eclipse.edt.rui.widgets.HyperLink", egl.org.eclipse.edt.rui.widgets.HyperLink, annotations);
					annotations = {};
					annotations["XMLStyle"] = new egl.eglx.xml.binding.annotation.XMLElement("NewProduct4", null, false, false);
					annotations["JsonName"] = new egl.eglx.json.JsonName("NewProduct4");
					this.fieldInfos[7] =new egl.eglx.services.FieldInfo("NewProduct4", "NewProduct4", "org.eclipse.edt.rui.widgets.HyperLink", egl.org.eclipse.edt.rui.widgets.HyperLink, annotations);
					annotations = {};
					annotations["XMLStyle"] = new egl.eglx.xml.binding.annotation.XMLElement("NewProduct5", null, false, false);
					annotations["JsonName"] = new egl.eglx.json.JsonName("NewProduct5");
					this.fieldInfos[8] =new egl.eglx.services.FieldInfo("NewProduct5", "NewProduct5", "org.eclipse.edt.rui.widgets.HyperLink", egl.org.eclipse.edt.rui.widgets.HyperLink, annotations);
					annotations = {};
					annotations["XMLStyle"] = new egl.eglx.xml.binding.annotation.XMLElement("NewProductMore", null, false, false);
					annotations["JsonName"] = new egl.eglx.json.JsonName("NewProductMore");
					this.fieldInfos[9] =new egl.eglx.services.FieldInfo("NewProductMore", "NewProductMore", "org.eclipse.edt.rui.widgets.HyperLink", egl.org.eclipse.edt.rui.widgets.HyperLink, annotations);
					annotations = {};
					annotations["XMLStyle"] = new egl.eglx.xml.binding.annotation.XMLElement("Product1", null, false, false);
					annotations["JsonName"] = new egl.eglx.json.JsonName("Product1");
					this.fieldInfos[11] =new egl.eglx.services.FieldInfo("Product1", "Product1", "org.eclipse.edt.rui.widgets.HyperLink", egl.org.eclipse.edt.rui.widgets.HyperLink, annotations);
					annotations = {};
					annotations["XMLStyle"] = new egl.eglx.xml.binding.annotation.XMLElement("Product2", null, false, false);
					annotations["JsonName"] = new egl.eglx.json.JsonName("Product2");
					this.fieldInfos[12] =new egl.eglx.services.FieldInfo("Product2", "Product2", "org.eclipse.edt.rui.widgets.HyperLink", egl.org.eclipse.edt.rui.widgets.HyperLink, annotations);
					annotations = {};
					annotations["XMLStyle"] = new egl.eglx.xml.binding.annotation.XMLElement("Product3", null, false, false);
					annotations["JsonName"] = new egl.eglx.json.JsonName("Product3");
					this.fieldInfos[13] =new egl.eglx.services.FieldInfo("Product3", "Product3", "org.eclipse.edt.rui.widgets.HyperLink", egl.org.eclipse.edt.rui.widgets.HyperLink, annotations);
					annotations = {};
					annotations["XMLStyle"] = new egl.eglx.xml.binding.annotation.XMLElement("Product4", null, false, false);
					annotations["JsonName"] = new egl.eglx.json.JsonName("Product4");
					this.fieldInfos[14] =new egl.eglx.services.FieldInfo("Product4", "Product4", "org.eclipse.edt.rui.widgets.HyperLink", egl.org.eclipse.edt.rui.widgets.HyperLink, annotations);
					annotations = {};
					annotations["XMLStyle"] = new egl.eglx.xml.binding.annotation.XMLElement("ProductMore", null, false, false);
					annotations["JsonName"] = new egl.eglx.json.JsonName("ProductMore");
					this.fieldInfos[15] =new egl.eglx.services.FieldInfo("ProductMore", "ProductMore", "org.eclipse.edt.rui.widgets.HyperLink", egl.org.eclipse.edt.rui.widgets.HyperLink, annotations);
					annotations = {};
					annotations["XMLStyle"] = new egl.eglx.xml.binding.annotation.XMLElement("Box1", null, false, false);
					annotations["JsonName"] = new egl.eglx.json.JsonName("Box1");
					this.fieldInfos[16] =new egl.eglx.services.FieldInfo("Box1", "Box1", "org.eclipse.edt.rui.widgets.Box", egl.org.eclipse.edt.rui.widgets.Box, annotations);
					annotations = {};
					annotations["XMLStyle"] = new egl.eglx.xml.binding.annotation.XMLElement("ProductOne1", null, false, false);
					annotations["JsonName"] = new egl.eglx.json.JsonName("ProductOne1");
					this.fieldInfos[18] =new egl.eglx.services.FieldInfo("ProductOne1", "ProductOne1", "org.eclipse.edt.rui.widgets.HyperLink", egl.org.eclipse.edt.rui.widgets.HyperLink, annotations);
					annotations = {};
					annotations["XMLStyle"] = new egl.eglx.xml.binding.annotation.XMLElement("ProductOne2", null, false, false);
					annotations["JsonName"] = new egl.eglx.json.JsonName("ProductOne2");
					this.fieldInfos[19] =new egl.eglx.services.FieldInfo("ProductOne2", "ProductOne2", "org.eclipse.edt.rui.widgets.HyperLink", egl.org.eclipse.edt.rui.widgets.HyperLink, annotations);
					annotations = {};
					annotations["XMLStyle"] = new egl.eglx.xml.binding.annotation.XMLElement("ProductOne3", null, false, false);
					annotations["JsonName"] = new egl.eglx.json.JsonName("ProductOne3");
					this.fieldInfos[20] =new egl.eglx.services.FieldInfo("ProductOne3", "ProductOne3", "org.eclipse.edt.rui.widgets.HyperLink", egl.org.eclipse.edt.rui.widgets.HyperLink, annotations);
					annotations = {};
					annotations["XMLStyle"] = new egl.eglx.xml.binding.annotation.XMLElement("ProductOne4", null, false, false);
					annotations["JsonName"] = new egl.eglx.json.JsonName("ProductOne4");
					this.fieldInfos[21] =new egl.eglx.services.FieldInfo("ProductOne4", "ProductOne4", "org.eclipse.edt.rui.widgets.HyperLink", egl.org.eclipse.edt.rui.widgets.HyperLink, annotations);
					annotations = {};
					annotations["XMLStyle"] = new egl.eglx.xml.binding.annotation.XMLElement("ProductOneMore", null, false, false);
					annotations["JsonName"] = new egl.eglx.json.JsonName("ProductOneMore");
					this.fieldInfos[22] =new egl.eglx.services.FieldInfo("ProductOneMore", "ProductOneMore", "org.eclipse.edt.rui.widgets.HyperLink", egl.org.eclipse.edt.rui.widgets.HyperLink, annotations);
				}
				return this.fieldInfos;
			}
			,
			"start": function() {
				try { egl.enter("start",this,arguments);
					egl.atLine(this.eze$$fileName,90,3970,24, this);
					if (!egl.debugg) egl.leave();
				} finally {
					if (!egl.debugg){
					} else { egl.leave(); }
				}
			}
			,
			"toString": function() {
				return "[Home]";
			}
			,
			"eze$$getName": function() {
				return "Home";
			}
			,
			"eze$$getChildVariables": function() {
				var eze$$parent = this;
				return [
				{name: "GridLayoutLib", value : egl.org.eclipse.edt.rui.widgets.GridLayoutLib['$inst'], type : "org.eclipse.edt.rui.widgets.GridLayoutLib", jsName : "egl.org.eclipse.edt.rui.widgets.GridLayoutLib['$inst']"},
				{name: "ui", value : eze$$parent.ui, type : "org.eclipse.edt.rui.widgets.GridLayout", jsName : "ui"},
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
