define(["org/eclipse/edt/rui/widgets/Box", "org/eclipse/edt/rui/widgets/Image", "eglx/ui/rui/eze$$View", "org/eclipse/edt/rui/widgets/GridLayoutData", "org/eclipse/edt/rui/widgets/GridLayout", "org/eclipse/edt/rui/widgets/TextLabel"],function(){
	egl.loadCSS("css/NewProject1.css");
	egl.defineRUIHandler("client.client", "cute", {
		"eze$$fileName" : "client/client/cute.egl",
		"eze$$runtimePropertiesFile" : "client/client/cute",
			"constructor": function() {
				this.start();
			}
			,
			"eze$$setEmpty": function() {
				this.ui = new egl.org.eclipse.edt.rui.widgets.GridLayout();
				this.TextLabel = new egl.org.eclipse.edt.rui.widgets.TextLabel();
				this.GridLayout = new egl.org.eclipse.edt.rui.widgets.GridLayout();
				this.TextLabel1 = new egl.org.eclipse.edt.rui.widgets.TextLabel();
				this.GridLayout1 = new egl.org.eclipse.edt.rui.widgets.GridLayout();
				this.TextLabel2 = new egl.org.eclipse.edt.rui.widgets.TextLabel();
				this.Box = new egl.org.eclipse.edt.rui.widgets.Box();
				this.Image = new egl.org.eclipse.edt.rui.widgets.Image();
				this.GridLayout2 = new egl.org.eclipse.edt.rui.widgets.GridLayout();
				this.TextLabel3 = new egl.org.eclipse.edt.rui.widgets.TextLabel();
				this.Box1 = new egl.org.eclipse.edt.rui.widgets.Box();
				this.Image1 = new egl.org.eclipse.edt.rui.widgets.Image();
				this.GridLayout3 = new egl.org.eclipse.edt.rui.widgets.GridLayout();
				this.TextLabel4 = new egl.org.eclipse.edt.rui.widgets.TextLabel();
				this.TextLabel5 = new egl.org.eclipse.edt.rui.widgets.TextLabel();
				this.GridLayout4 = new egl.org.eclipse.edt.rui.widgets.GridLayout();
				this.TextLabel6 = new egl.org.eclipse.edt.rui.widgets.TextLabel();
				this.TextLabel7 = new egl.org.eclipse.edt.rui.widgets.TextLabel();
				this.TextLabel8 = new egl.org.eclipse.edt.rui.widgets.TextLabel();
				this.TextLabel9 = new egl.org.eclipse.edt.rui.widgets.TextLabel();
			}
			,
			"eze$$setInitial": function() {
				try { egl.enter("<init>",this,arguments);
					this.eze$$setEmpty();
					egl.atLine(this.eze$$fileName,18,460,11, this);
					this.ui.setColumns(1);
					egl.atLine(this.eze$$fileName,18,473,8, this);
					this.ui.setRows(3);
					egl.atLine(this.eze$$fileName,18,483,15, this);
					this.ui.setCellPadding(4);
					egl.atLine(this.eze$$fileName,18,500,49, this);
					this.ui.setChildren([egl.eglx.lang.convert(egl.eglx.ui.rui.Widget.fromWidget, [this.GridLayout3,"org.eclipse.edt.rui.widgets.GridLayout"]), egl.eglx.lang.convert(egl.eglx.ui.rui.Widget.fromWidget, [this.GridLayout,"org.eclipse.edt.rui.widgets.GridLayout"]), egl.eglx.lang.convert(egl.eglx.ui.rui.Widget.fromWidget, [this.TextLabel,"org.eclipse.edt.rui.widgets.TextLabel"])].setType("[Teglx/ui/rui/Widget;"));
					var eze$LNNTemp1 = null;
					{
						var eze$SettingTarget1 = new egl.org.eclipse.edt.rui.widgets.GridLayoutData();
						egl.atLine(this.eze$$fileName,19,590,41, this);
						eze$SettingTarget1 = egl.eglx.lang.AnyValue.ezeCopyTo(new egl.org.eclipse.edt.rui.widgets.GridLayoutData(), eze$SettingTarget1);
						egl.atLine(this.eze$$fileName,19,610,7, this);
						eze$SettingTarget1.row = 1;
						egl.atLine(this.eze$$fileName,19,619,10, this);
						eze$SettingTarget1.column = 1;
						egl.atLine(this.eze$$fileName,19,590,41, this);
						eze$LNNTemp1 = egl.eglx.lang.AnyValue.ezeCopyTo(eze$SettingTarget1, eze$LNNTemp1);
					}
					egl.atLine(this.eze$$fileName,19,577,54, this);
					this.TextLabel.setLayoutData(egl.eglx.lang.convert(egl.eglx.lang.EAny.fromEAny, [eze$LNNTemp1.eze$$clone(),"Torg/eclipse/edt/rui/widgets/GridLayoutData;"]));
					egl.atLine(this.eze$$fileName,19,633,14, this);
					this.TextLabel.setText("\u53ef\u7231\u7684\u6821\u56ed");
					egl.atLine(this.eze$$fileName,20,654,11, this);
					this.TextLabel.setFont("\u5b8b\u4f53");
					egl.atLine(this.eze$$fileName,21,672,15, this);
					this.TextLabel.setFontSize("28");
					egl.atLine(this.eze$$fileName,22,694,19, this);
					this.TextLabel.setFontWeight("bold");
					var eze$LNNTemp2 = null;
					{
						var eze$SettingTarget1 = new egl.org.eclipse.edt.rui.widgets.GridLayoutData();
						egl.atLine(this.eze$$fileName,23,757,41, this);
						eze$SettingTarget1 = egl.eglx.lang.AnyValue.ezeCopyTo(new egl.org.eclipse.edt.rui.widgets.GridLayoutData(), eze$SettingTarget1);
						egl.atLine(this.eze$$fileName,23,777,7, this);
						eze$SettingTarget1.row = 2;
						egl.atLine(this.eze$$fileName,23,786,10, this);
						eze$SettingTarget1.column = 1;
						egl.atLine(this.eze$$fileName,23,757,41, this);
						eze$LNNTemp2 = egl.eglx.lang.AnyValue.ezeCopyTo(eze$SettingTarget1, eze$LNNTemp2);
					}
					egl.atLine(this.eze$$fileName,23,744,54, this);
					this.GridLayout.setLayoutData(egl.eglx.lang.convert(egl.eglx.lang.EAny.fromEAny, [eze$LNNTemp2.eze$$clone(),"Torg/eclipse/edt/rui/widgets/GridLayoutData;"]));
					egl.atLine(this.eze$$fileName,23,800,15, this);
					this.GridLayout.setCellPadding(4);
					egl.atLine(this.eze$$fileName,23,817,8, this);
					this.GridLayout.setRows(3);
					egl.atLine(this.eze$$fileName,23,827,11, this);
					this.GridLayout.setColumns(1);
					egl.atLine(this.eze$$fileName,24,845,51, this);
					this.GridLayout.setChildren([egl.eglx.lang.convert(egl.eglx.ui.rui.Widget.fromWidget, [this.GridLayout2,"org.eclipse.edt.rui.widgets.GridLayout"]), egl.eglx.lang.convert(egl.eglx.ui.rui.Widget.fromWidget, [this.GridLayout1,"org.eclipse.edt.rui.widgets.GridLayout"]), egl.eglx.lang.convert(egl.eglx.ui.rui.Widget.fromWidget, [this.TextLabel1,"org.eclipse.edt.rui.widgets.TextLabel"])].setType("[Teglx/ui/rui/Widget;"));
					var eze$LNNTemp3 = null;
					{
						var eze$SettingTarget1 = new egl.org.eclipse.edt.rui.widgets.GridLayoutData();
						egl.atLine(this.eze$$fileName,25,939,41, this);
						eze$SettingTarget1 = egl.eglx.lang.AnyValue.ezeCopyTo(new egl.org.eclipse.edt.rui.widgets.GridLayoutData(), eze$SettingTarget1);
						egl.atLine(this.eze$$fileName,25,959,7, this);
						eze$SettingTarget1.row = 1;
						egl.atLine(this.eze$$fileName,25,968,10, this);
						eze$SettingTarget1.column = 1;
						egl.atLine(this.eze$$fileName,25,939,41, this);
						eze$LNNTemp3 = egl.eglx.lang.AnyValue.ezeCopyTo(eze$SettingTarget1, eze$LNNTemp3);
					}
					egl.atLine(this.eze$$fileName,25,926,54, this);
					this.TextLabel1.setLayoutData(egl.eglx.lang.convert(egl.eglx.lang.EAny.fromEAny, [eze$LNNTemp3.eze$$clone(),"Torg/eclipse/edt/rui/widgets/GridLayoutData;"]));
					egl.atLine(this.eze$$fileName,25,982,61, this);
					this.TextLabel1.setText("\u8bfe\u5802\u76f4\u901a\u8f66..........................................\u8bfe\u4e0a\u5b66\u4e00\u5b66");
					egl.atLine(this.eze$$fileName,26,1050,13, this);
					this.TextLabel1.setFont("\u534e\u6587\u884c\u6977");
					egl.atLine(this.eze$$fileName,27,1070,15, this);
					this.TextLabel1.setFontSize("24");
					var eze$LNNTemp4 = null;
					{
						var eze$SettingTarget1 = new egl.org.eclipse.edt.rui.widgets.GridLayoutData();
						egl.atLine(this.eze$$fileName,28,1130,41, this);
						eze$SettingTarget1 = egl.eglx.lang.AnyValue.ezeCopyTo(new egl.org.eclipse.edt.rui.widgets.GridLayoutData(), eze$SettingTarget1);
						egl.atLine(this.eze$$fileName,28,1150,7, this);
						eze$SettingTarget1.row = 2;
						egl.atLine(this.eze$$fileName,28,1159,10, this);
						eze$SettingTarget1.column = 1;
						egl.atLine(this.eze$$fileName,28,1130,41, this);
						eze$LNNTemp4 = egl.eglx.lang.AnyValue.ezeCopyTo(eze$SettingTarget1, eze$LNNTemp4);
					}
					egl.atLine(this.eze$$fileName,28,1117,54, this);
					this.GridLayout1.setLayoutData(egl.eglx.lang.convert(egl.eglx.lang.EAny.fromEAny, [eze$LNNTemp4.eze$$clone(),"Torg/eclipse/edt/rui/widgets/GridLayoutData;"]));
					egl.atLine(this.eze$$fileName,28,1173,15, this);
					this.GridLayout1.setCellPadding(4);
					egl.atLine(this.eze$$fileName,28,1190,8, this);
					this.GridLayout1.setRows(2);
					egl.atLine(this.eze$$fileName,28,1200,11, this);
					this.GridLayout1.setColumns(1);
					egl.atLine(this.eze$$fileName,29,1218,30, this);
					this.GridLayout1.setChildren([egl.eglx.lang.convert(egl.eglx.ui.rui.Widget.fromWidget, [this.Box,"org.eclipse.edt.rui.widgets.Box"]), egl.eglx.lang.convert(egl.eglx.ui.rui.Widget.fromWidget, [this.TextLabel2,"org.eclipse.edt.rui.widgets.TextLabel"])].setType("[Teglx/ui/rui/Widget;"));
					var eze$LNNTemp5 = null;
					{
						var eze$SettingTarget1 = new egl.org.eclipse.edt.rui.widgets.GridLayoutData();
						egl.atLine(this.eze$$fileName,30,1291,41, this);
						eze$SettingTarget1 = egl.eglx.lang.AnyValue.ezeCopyTo(new egl.org.eclipse.edt.rui.widgets.GridLayoutData(), eze$SettingTarget1);
						egl.atLine(this.eze$$fileName,30,1311,7, this);
						eze$SettingTarget1.row = 1;
						egl.atLine(this.eze$$fileName,30,1320,10, this);
						eze$SettingTarget1.column = 1;
						egl.atLine(this.eze$$fileName,30,1291,41, this);
						eze$LNNTemp5 = egl.eglx.lang.AnyValue.ezeCopyTo(eze$SettingTarget1, eze$LNNTemp5);
					}
					egl.atLine(this.eze$$fileName,30,1278,54, this);
					this.TextLabel2.setLayoutData(egl.eglx.lang.convert(egl.eglx.lang.EAny.fromEAny, [eze$LNNTemp5.eze$$clone(),"Torg/eclipse/edt/rui/widgets/GridLayoutData;"]));
					egl.atLine(this.eze$$fileName,30,1334,16, this);
					this.TextLabel2.setText("\u4e00\u3001\u770b\u56fe\u5708\u6570\u3002");
					egl.atLine(this.eze$$fileName,31,1357,13, this);
					this.TextLabel2.setFont("\u5fae\u8f6f\u96c5\u9ed1");
					egl.atLine(this.eze$$fileName,32,1377,15, this);
					this.TextLabel2.setFontSize("18");
					var eze$LNNTemp6 = null;
					{
						var eze$SettingTarget1 = new egl.org.eclipse.edt.rui.widgets.GridLayoutData();
						egl.atLine(this.eze$$fileName,33,1422,41, this);
						eze$SettingTarget1 = egl.eglx.lang.AnyValue.ezeCopyTo(new egl.org.eclipse.edt.rui.widgets.GridLayoutData(), eze$SettingTarget1);
						egl.atLine(this.eze$$fileName,33,1442,7, this);
						eze$SettingTarget1.row = 2;
						egl.atLine(this.eze$$fileName,33,1451,10, this);
						eze$SettingTarget1.column = 1;
						egl.atLine(this.eze$$fileName,33,1422,41, this);
						eze$LNNTemp6 = egl.eglx.lang.AnyValue.ezeCopyTo(eze$SettingTarget1, eze$LNNTemp6);
					}
					egl.atLine(this.eze$$fileName,33,1409,54, this);
					this.Box.setLayoutData(egl.eglx.lang.convert(egl.eglx.lang.EAny.fromEAny, [eze$LNNTemp6.eze$$clone(),"Torg/eclipse/edt/rui/widgets/GridLayoutData;"]));
					egl.atLine(this.eze$$fileName,33,1465,9, this);
					this.Box.setPadding(8);
					egl.atLine(this.eze$$fileName,34,1481,20, this);
					this.Box.setChildren([egl.eglx.lang.convert(egl.eglx.ui.rui.Widget.fromWidget, [this.Image,"org.eclipse.edt.rui.widgets.Image"])].setType("[Teglx/ui/rui/Widget;"));
					egl.atLine(this.eze$$fileName,36,1527,38, this);
					this.Image.setSrc("E:\\workspace\\pictures\\7.jpg");
					var eze$LNNTemp7 = null;
					{
						var eze$SettingTarget1 = new egl.org.eclipse.edt.rui.widgets.GridLayoutData();
						egl.atLine(this.eze$$fileName,38,1614,41, this);
						eze$SettingTarget1 = egl.eglx.lang.AnyValue.ezeCopyTo(new egl.org.eclipse.edt.rui.widgets.GridLayoutData(), eze$SettingTarget1);
						egl.atLine(this.eze$$fileName,38,1634,7, this);
						eze$SettingTarget1.row = 3;
						egl.atLine(this.eze$$fileName,38,1643,10, this);
						eze$SettingTarget1.column = 1;
						egl.atLine(this.eze$$fileName,38,1614,41, this);
						eze$LNNTemp7 = egl.eglx.lang.AnyValue.ezeCopyTo(eze$SettingTarget1, eze$LNNTemp7);
					}
					egl.atLine(this.eze$$fileName,38,1601,54, this);
					this.GridLayout2.setLayoutData(egl.eglx.lang.convert(egl.eglx.lang.EAny.fromEAny, [eze$LNNTemp7.eze$$clone(),"Torg/eclipse/edt/rui/widgets/GridLayoutData;"]));
					egl.atLine(this.eze$$fileName,38,1657,15, this);
					this.GridLayout2.setCellPadding(4);
					egl.atLine(this.eze$$fileName,38,1674,8, this);
					this.GridLayout2.setRows(2);
					egl.atLine(this.eze$$fileName,38,1684,11, this);
					this.GridLayout2.setColumns(1);
					egl.atLine(this.eze$$fileName,39,1702,31, this);
					this.GridLayout2.setChildren([egl.eglx.lang.convert(egl.eglx.ui.rui.Widget.fromWidget, [this.Box1,"org.eclipse.edt.rui.widgets.Box"]), egl.eglx.lang.convert(egl.eglx.ui.rui.Widget.fromWidget, [this.TextLabel3,"org.eclipse.edt.rui.widgets.TextLabel"])].setType("[Teglx/ui/rui/Widget;"));
					var eze$LNNTemp8 = null;
					{
						var eze$SettingTarget1 = new egl.org.eclipse.edt.rui.widgets.GridLayoutData();
						egl.atLine(this.eze$$fileName,40,1776,41, this);
						eze$SettingTarget1 = egl.eglx.lang.AnyValue.ezeCopyTo(new egl.org.eclipse.edt.rui.widgets.GridLayoutData(), eze$SettingTarget1);
						egl.atLine(this.eze$$fileName,40,1796,7, this);
						eze$SettingTarget1.row = 1;
						egl.atLine(this.eze$$fileName,40,1805,10, this);
						eze$SettingTarget1.column = 1;
						egl.atLine(this.eze$$fileName,40,1776,41, this);
						eze$LNNTemp8 = egl.eglx.lang.AnyValue.ezeCopyTo(eze$SettingTarget1, eze$LNNTemp8);
					}
					egl.atLine(this.eze$$fileName,40,1763,54, this);
					this.TextLabel3.setLayoutData(egl.eglx.lang.convert(egl.eglx.lang.EAny.fromEAny, [eze$LNNTemp8.eze$$clone(),"Torg/eclipse/edt/rui/widgets/GridLayoutData;"]));
					egl.atLine(this.eze$$fileName,40,1819,16, this);
					this.TextLabel3.setText("\u4e8c\u3001\u770b\u56fe\u586b\u6570\u3002");
					egl.atLine(this.eze$$fileName,41,1842,13, this);
					this.TextLabel3.setFont("\u5fae\u8f6f\u96c5\u9ed1");
					egl.atLine(this.eze$$fileName,42,1862,15, this);
					this.TextLabel3.setFontSize("18");
					var eze$LNNTemp9 = null;
					{
						var eze$SettingTarget1 = new egl.org.eclipse.edt.rui.widgets.GridLayoutData();
						egl.atLine(this.eze$$fileName,43,1908,41, this);
						eze$SettingTarget1 = egl.eglx.lang.AnyValue.ezeCopyTo(new egl.org.eclipse.edt.rui.widgets.GridLayoutData(), eze$SettingTarget1);
						egl.atLine(this.eze$$fileName,43,1928,7, this);
						eze$SettingTarget1.row = 2;
						egl.atLine(this.eze$$fileName,43,1937,10, this);
						eze$SettingTarget1.column = 1;
						egl.atLine(this.eze$$fileName,43,1908,41, this);
						eze$LNNTemp9 = egl.eglx.lang.AnyValue.ezeCopyTo(eze$SettingTarget1, eze$LNNTemp9);
					}
					egl.atLine(this.eze$$fileName,43,1895,54, this);
					this.Box1.setLayoutData(egl.eglx.lang.convert(egl.eglx.lang.EAny.fromEAny, [eze$LNNTemp9.eze$$clone(),"Torg/eclipse/edt/rui/widgets/GridLayoutData;"]));
					egl.atLine(this.eze$$fileName,43,1951,9, this);
					this.Box1.setPadding(8);
					egl.atLine(this.eze$$fileName,44,1967,21, this);
					this.Box1.setChildren([egl.eglx.lang.convert(egl.eglx.ui.rui.Widget.fromWidget, [this.Image1,"org.eclipse.edt.rui.widgets.Image"])].setType("[Teglx/ui/rui/Widget;"));
					egl.atLine(this.eze$$fileName,46,2015,38, this);
					this.Image1.setSrc("E:\\workspace\\pictures\\8.jpg");
					egl.atLine(this.eze$$fileName,48,2089,15, this);
					this.GridLayout3.setCellPadding(4);
					egl.atLine(this.eze$$fileName,48,2106,8, this);
					this.GridLayout3.setRows(3);
					egl.atLine(this.eze$$fileName,48,2116,11, this);
					this.GridLayout3.setColumns(1);
					egl.atLine(this.eze$$fileName,49,2134,50, this);
					this.GridLayout3.setChildren([egl.eglx.lang.convert(egl.eglx.ui.rui.Widget.fromWidget, [this.GridLayout4,"org.eclipse.edt.rui.widgets.GridLayout"]), egl.eglx.lang.convert(egl.eglx.ui.rui.Widget.fromWidget, [this.TextLabel5,"org.eclipse.edt.rui.widgets.TextLabel"]), egl.eglx.lang.convert(egl.eglx.ui.rui.Widget.fromWidget, [this.TextLabel4,"org.eclipse.edt.rui.widgets.TextLabel"])].setType("[Teglx/ui/rui/Widget;"));
					var eze$LNNTemp10 = null;
					{
						var eze$SettingTarget1 = new egl.org.eclipse.edt.rui.widgets.GridLayoutData();
						egl.atLine(this.eze$$fileName,50,2204,41, this);
						eze$SettingTarget1 = egl.eglx.lang.AnyValue.ezeCopyTo(new egl.org.eclipse.edt.rui.widgets.GridLayoutData(), eze$SettingTarget1);
						egl.atLine(this.eze$$fileName,50,2224,7, this);
						eze$SettingTarget1.row = 3;
						egl.atLine(this.eze$$fileName,50,2233,10, this);
						eze$SettingTarget1.column = 1;
						egl.atLine(this.eze$$fileName,50,2204,41, this);
						eze$LNNTemp10 = egl.eglx.lang.AnyValue.ezeCopyTo(eze$SettingTarget1, eze$LNNTemp10);
					}
					egl.atLine(this.eze$$fileName,50,2191,54, this);
					this.GridLayout3.setLayoutData(egl.eglx.lang.convert(egl.eglx.lang.EAny.fromEAny, [eze$LNNTemp10.eze$$clone(),"Torg/eclipse/edt/rui/widgets/GridLayoutData;"]));
					var eze$LNNTemp11 = null;
					{
						var eze$SettingTarget1 = new egl.org.eclipse.edt.rui.widgets.GridLayoutData();
						egl.atLine(this.eze$$fileName,51,2288,41, this);
						eze$SettingTarget1 = egl.eglx.lang.AnyValue.ezeCopyTo(new egl.org.eclipse.edt.rui.widgets.GridLayoutData(), eze$SettingTarget1);
						egl.atLine(this.eze$$fileName,51,2308,7, this);
						eze$SettingTarget1.row = 1;
						egl.atLine(this.eze$$fileName,51,2317,10, this);
						eze$SettingTarget1.column = 1;
						egl.atLine(this.eze$$fileName,51,2288,41, this);
						eze$LNNTemp11 = egl.eglx.lang.AnyValue.ezeCopyTo(eze$SettingTarget1, eze$LNNTemp11);
					}
					egl.atLine(this.eze$$fileName,51,2275,54, this);
					this.TextLabel4.setLayoutData(egl.eglx.lang.convert(egl.eglx.lang.EAny.fromEAny, [eze$LNNTemp11.eze$$clone(),"Torg/eclipse/edt/rui/widgets/GridLayoutData;"]));
					egl.atLine(this.eze$$fileName,51,2331,61, this);
					this.TextLabel4.setText("\u8bfe\u540e\u6f14\u7ec3\u573a..........................................\u8bfe\u4e0b\u7ec3\u4e00\u7ec3");
					egl.atLine(this.eze$$fileName,52,2399,13, this);
					this.TextLabel4.setFont("\u534e\u6587\u884c\u6977");
					egl.atLine(this.eze$$fileName,53,2419,15, this);
					this.TextLabel4.setFontSize("24");
					var eze$LNNTemp12 = null;
					{
						var eze$SettingTarget1 = new egl.org.eclipse.edt.rui.widgets.GridLayoutData();
						egl.atLine(this.eze$$fileName,54,2477,41, this);
						eze$SettingTarget1 = egl.eglx.lang.AnyValue.ezeCopyTo(new egl.org.eclipse.edt.rui.widgets.GridLayoutData(), eze$SettingTarget1);
						egl.atLine(this.eze$$fileName,54,2497,7, this);
						eze$SettingTarget1.row = 2;
						egl.atLine(this.eze$$fileName,54,2506,10, this);
						eze$SettingTarget1.column = 1;
						egl.atLine(this.eze$$fileName,54,2477,41, this);
						eze$LNNTemp12 = egl.eglx.lang.AnyValue.ezeCopyTo(eze$SettingTarget1, eze$LNNTemp12);
					}
					egl.atLine(this.eze$$fileName,54,2464,54, this);
					this.TextLabel5.setLayoutData(egl.eglx.lang.convert(egl.eglx.lang.EAny.fromEAny, [eze$LNNTemp12.eze$$clone(),"Torg/eclipse/edt/rui/widgets/GridLayoutData;"]));
					egl.atLine(this.eze$$fileName,54,2520,15, this);
					this.TextLabel5.setText("\u5c0f\u5c0f\u8c03\u67e5\u5458\u3002");
					egl.atLine(this.eze$$fileName,55,2542,13, this);
					this.TextLabel5.setFont("\u5fae\u8f6f\u96c5\u9ed1");
					egl.atLine(this.eze$$fileName,56,2562,15, this);
					this.TextLabel5.setFontSize("18");
					var eze$LNNTemp13 = null;
					{
						var eze$SettingTarget1 = new egl.org.eclipse.edt.rui.widgets.GridLayoutData();
						egl.atLine(this.eze$$fileName,57,2622,41, this);
						eze$SettingTarget1 = egl.eglx.lang.AnyValue.ezeCopyTo(new egl.org.eclipse.edt.rui.widgets.GridLayoutData(), eze$SettingTarget1);
						egl.atLine(this.eze$$fileName,57,2642,7, this);
						eze$SettingTarget1.row = 3;
						egl.atLine(this.eze$$fileName,57,2651,10, this);
						eze$SettingTarget1.column = 1;
						egl.atLine(this.eze$$fileName,57,2622,41, this);
						eze$LNNTemp13 = egl.eglx.lang.AnyValue.ezeCopyTo(eze$SettingTarget1, eze$LNNTemp13);
					}
					egl.atLine(this.eze$$fileName,57,2609,54, this);
					this.GridLayout4.setLayoutData(egl.eglx.lang.convert(egl.eglx.lang.EAny.fromEAny, [eze$LNNTemp13.eze$$clone(),"Torg/eclipse/edt/rui/widgets/GridLayoutData;"]));
					egl.atLine(this.eze$$fileName,57,2665,15, this);
					this.GridLayout4.setCellPadding(4);
					egl.atLine(this.eze$$fileName,57,2682,8, this);
					this.GridLayout4.setRows(4);
					egl.atLine(this.eze$$fileName,57,2692,11, this);
					this.GridLayout4.setColumns(1);
					egl.atLine(this.eze$$fileName,58,2710,61, this);
					this.GridLayout4.setChildren([egl.eglx.lang.convert(egl.eglx.ui.rui.Widget.fromWidget, [this.TextLabel9,"org.eclipse.edt.rui.widgets.TextLabel"]), egl.eglx.lang.convert(egl.eglx.ui.rui.Widget.fromWidget, [this.TextLabel8,"org.eclipse.edt.rui.widgets.TextLabel"]), egl.eglx.lang.convert(egl.eglx.ui.rui.Widget.fromWidget, [this.TextLabel7,"org.eclipse.edt.rui.widgets.TextLabel"]), egl.eglx.lang.convert(egl.eglx.ui.rui.Widget.fromWidget, [this.TextLabel6,"org.eclipse.edt.rui.widgets.TextLabel"])].setType("[Teglx/ui/rui/Widget;"));
					var eze$LNNTemp14 = null;
					{
						var eze$SettingTarget1 = new egl.org.eclipse.edt.rui.widgets.GridLayoutData();
						egl.atLine(this.eze$$fileName,59,2814,41, this);
						eze$SettingTarget1 = egl.eglx.lang.AnyValue.ezeCopyTo(new egl.org.eclipse.edt.rui.widgets.GridLayoutData(), eze$SettingTarget1);
						egl.atLine(this.eze$$fileName,59,2834,7, this);
						eze$SettingTarget1.row = 1;
						egl.atLine(this.eze$$fileName,59,2843,10, this);
						eze$SettingTarget1.column = 1;
						egl.atLine(this.eze$$fileName,59,2814,41, this);
						eze$LNNTemp14 = egl.eglx.lang.AnyValue.ezeCopyTo(eze$SettingTarget1, eze$LNNTemp14);
					}
					egl.atLine(this.eze$$fileName,59,2801,54, this);
					this.TextLabel6.setLayoutData(egl.eglx.lang.convert(egl.eglx.lang.EAny.fromEAny, [eze$LNNTemp14.eze$$clone(),"Torg/eclipse/edt/rui/widgets/GridLayoutData;"]));
					egl.atLine(this.eze$$fileName,59,2857,25, this);
					this.TextLabel6.setText("1.\u4eca\u5929\uff0c\u6211\u8ba4\u8bc6\u4e86\uff08\uff09\u4e2a\u65b0\u540c\u5b66\u3002");
					egl.atLine(this.eze$$fileName,60,2889,13, this);
					this.TextLabel6.setFont("\u5fae\u8f6f\u96c5\u9ed1");
					egl.atLine(this.eze$$fileName,61,2909,15, this);
					this.TextLabel6.setFontSize("16");
					var eze$LNNTemp15 = null;
					{
						var eze$SettingTarget1 = new egl.org.eclipse.edt.rui.widgets.GridLayoutData();
						egl.atLine(this.eze$$fileName,62,2967,41, this);
						eze$SettingTarget1 = egl.eglx.lang.AnyValue.ezeCopyTo(new egl.org.eclipse.edt.rui.widgets.GridLayoutData(), eze$SettingTarget1);
						egl.atLine(this.eze$$fileName,62,2987,7, this);
						eze$SettingTarget1.row = 2;
						egl.atLine(this.eze$$fileName,62,2996,10, this);
						eze$SettingTarget1.column = 1;
						egl.atLine(this.eze$$fileName,62,2967,41, this);
						eze$LNNTemp15 = egl.eglx.lang.AnyValue.ezeCopyTo(eze$SettingTarget1, eze$LNNTemp15);
					}
					egl.atLine(this.eze$$fileName,62,2954,54, this);
					this.TextLabel7.setLayoutData(egl.eglx.lang.convert(egl.eglx.lang.EAny.fromEAny, [eze$LNNTemp15.eze$$clone(),"Torg/eclipse/edt/rui/widgets/GridLayoutData;"]));
					egl.atLine(this.eze$$fileName,62,3010,26, this);
					this.TextLabel7.setText("2.\u6211\u4eca\u5e74\uff08\uff09\u5c81\uff0c\u5bb6\u91cc\u6709\uff08\uff09\u53e3\u4eba\u3002");
					egl.atLine(this.eze$$fileName,63,3043,13, this);
					this.TextLabel7.setFont("\u5fae\u8f6f\u96c5\u9ed1");
					egl.atLine(this.eze$$fileName,64,3063,15, this);
					this.TextLabel7.setFontSize("16");
					var eze$LNNTemp16 = null;
					{
						var eze$SettingTarget1 = new egl.org.eclipse.edt.rui.widgets.GridLayoutData();
						egl.atLine(this.eze$$fileName,65,3121,41, this);
						eze$SettingTarget1 = egl.eglx.lang.AnyValue.ezeCopyTo(new egl.org.eclipse.edt.rui.widgets.GridLayoutData(), eze$SettingTarget1);
						egl.atLine(this.eze$$fileName,65,3141,7, this);
						eze$SettingTarget1.row = 3;
						egl.atLine(this.eze$$fileName,65,3150,10, this);
						eze$SettingTarget1.column = 1;
						egl.atLine(this.eze$$fileName,65,3121,41, this);
						eze$LNNTemp16 = egl.eglx.lang.AnyValue.ezeCopyTo(eze$SettingTarget1, eze$LNNTemp16);
					}
					egl.atLine(this.eze$$fileName,65,3108,54, this);
					this.TextLabel8.setLayoutData(egl.eglx.lang.convert(egl.eglx.lang.EAny.fromEAny, [eze$LNNTemp16.eze$$clone(),"Torg/eclipse/edt/rui/widgets/GridLayoutData;"]));
					egl.atLine(this.eze$$fileName,65,3164,38, this);
					this.TextLabel8.setText("3.\u6211\u7684\u8eab\u4e0a\u6709\uff08\uff09\u53ea\u8033\u6735\uff0c\uff08\uff09\u53ea\u624b\uff0c1\u53ea\u624b\u6709\uff08\uff09\u4e2a\u624b\u6307\u5934\u3002");
					egl.atLine(this.eze$$fileName,66,3209,13, this);
					this.TextLabel8.setFont("\u5fae\u8f6f\u96c5\u9ed1");
					egl.atLine(this.eze$$fileName,67,3229,15, this);
					this.TextLabel8.setFontSize("16");
					var eze$LNNTemp17 = null;
					{
						var eze$SettingTarget1 = new egl.org.eclipse.edt.rui.widgets.GridLayoutData();
						egl.atLine(this.eze$$fileName,68,3287,41, this);
						eze$SettingTarget1 = egl.eglx.lang.AnyValue.ezeCopyTo(new egl.org.eclipse.edt.rui.widgets.GridLayoutData(), eze$SettingTarget1);
						egl.atLine(this.eze$$fileName,68,3307,7, this);
						eze$SettingTarget1.row = 4;
						egl.atLine(this.eze$$fileName,68,3316,10, this);
						eze$SettingTarget1.column = 1;
						egl.atLine(this.eze$$fileName,68,3287,41, this);
						eze$LNNTemp17 = egl.eglx.lang.AnyValue.ezeCopyTo(eze$SettingTarget1, eze$LNNTemp17);
					}
					egl.atLine(this.eze$$fileName,68,3274,54, this);
					this.TextLabel9.setLayoutData(egl.eglx.lang.convert(egl.eglx.lang.EAny.fromEAny, [eze$LNNTemp17.eze$$clone(),"Torg/eclipse/edt/rui/widgets/GridLayoutData;"]));
					egl.atLine(this.eze$$fileName,68,3330,33, this);
					this.TextLabel9.setText("4.\u6570\u4e00\u6570\u5bb6\u91cc\u6446\u653e\u7269\u54c1\u7684\u6570\u91cf\uff0c\u628a\u5b83\u544a\u8bc9\u7238\u7238\u5988\u5988\u3002");
					egl.atLine(this.eze$$fileName,69,3370,13, this);
					this.TextLabel9.setFont("\u5fae\u8f6f\u96c5\u9ed1");
					egl.atLine(this.eze$$fileName,70,3390,15, this);
					this.TextLabel9.setFontSize("16");
					egl.atLine(this.eze$$fileName,15,334,28, this);
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
				var ezert$$2 = new egl.client.client.cute();
				ezert$$2.ui = ezert$$1.ui === null ? null : ezert$$1.ui.eze$$clone();
				ezert$$2.TextLabel = ezert$$1.TextLabel === null ? null : ezert$$1.TextLabel.eze$$clone();
				ezert$$2.GridLayout = ezert$$1.GridLayout === null ? null : ezert$$1.GridLayout.eze$$clone();
				ezert$$2.TextLabel1 = ezert$$1.TextLabel1 === null ? null : ezert$$1.TextLabel1.eze$$clone();
				ezert$$2.GridLayout1 = ezert$$1.GridLayout1 === null ? null : ezert$$1.GridLayout1.eze$$clone();
				ezert$$2.TextLabel2 = ezert$$1.TextLabel2 === null ? null : ezert$$1.TextLabel2.eze$$clone();
				ezert$$2.Box = ezert$$1.Box === null ? null : ezert$$1.Box.eze$$clone();
				ezert$$2.Image = ezert$$1.Image === null ? null : ezert$$1.Image.eze$$clone();
				ezert$$2.GridLayout2 = ezert$$1.GridLayout2 === null ? null : ezert$$1.GridLayout2.eze$$clone();
				ezert$$2.TextLabel3 = ezert$$1.TextLabel3 === null ? null : ezert$$1.TextLabel3.eze$$clone();
				ezert$$2.Box1 = ezert$$1.Box1 === null ? null : ezert$$1.Box1.eze$$clone();
				ezert$$2.Image1 = ezert$$1.Image1 === null ? null : ezert$$1.Image1.eze$$clone();
				ezert$$2.GridLayout3 = ezert$$1.GridLayout3 === null ? null : ezert$$1.GridLayout3.eze$$clone();
				ezert$$2.TextLabel4 = ezert$$1.TextLabel4 === null ? null : ezert$$1.TextLabel4.eze$$clone();
				ezert$$2.TextLabel5 = ezert$$1.TextLabel5 === null ? null : ezert$$1.TextLabel5.eze$$clone();
				ezert$$2.GridLayout4 = ezert$$1.GridLayout4 === null ? null : ezert$$1.GridLayout4.eze$$clone();
				ezert$$2.TextLabel6 = ezert$$1.TextLabel6 === null ? null : ezert$$1.TextLabel6.eze$$clone();
				ezert$$2.TextLabel7 = ezert$$1.TextLabel7 === null ? null : ezert$$1.TextLabel7.eze$$clone();
				ezert$$2.TextLabel8 = ezert$$1.TextLabel8 === null ? null : ezert$$1.TextLabel8.eze$$clone();
				ezert$$2.TextLabel9 = ezert$$1.TextLabel9 === null ? null : ezert$$1.TextLabel9.eze$$clone();
				return ezert$$2;
			}
			,
			"eze$$getFieldSignatures": function() {
				if(this.fieldSigs === undefined){
					this.fieldSigs = [
					{name: "ui", sig: "org.eclipse.edt.rui.widgets.GridLayout"},
					{name: "TextLabel", sig: "org.eclipse.edt.rui.widgets.TextLabel"},
					{name: "GridLayout", sig: "org.eclipse.edt.rui.widgets.GridLayout"},
					{name: "TextLabel1", sig: "org.eclipse.edt.rui.widgets.TextLabel"},
					{name: "GridLayout1", sig: "org.eclipse.edt.rui.widgets.GridLayout"},
					{name: "TextLabel2", sig: "org.eclipse.edt.rui.widgets.TextLabel"},
					{name: "Box", sig: "org.eclipse.edt.rui.widgets.Box"},
					{name: "Image", sig: "org.eclipse.edt.rui.widgets.Image"},
					{name: "GridLayout2", sig: "org.eclipse.edt.rui.widgets.GridLayout"},
					{name: "TextLabel3", sig: "org.eclipse.edt.rui.widgets.TextLabel"},
					{name: "Box1", sig: "org.eclipse.edt.rui.widgets.Box"},
					{name: "Image1", sig: "org.eclipse.edt.rui.widgets.Image"},
					{name: "GridLayout3", sig: "org.eclipse.edt.rui.widgets.GridLayout"},
					{name: "TextLabel4", sig: "org.eclipse.edt.rui.widgets.TextLabel"},
					{name: "TextLabel5", sig: "org.eclipse.edt.rui.widgets.TextLabel"},
					{name: "GridLayout4", sig: "org.eclipse.edt.rui.widgets.GridLayout"},
					{name: "TextLabel6", sig: "org.eclipse.edt.rui.widgets.TextLabel"},
					{name: "TextLabel7", sig: "org.eclipse.edt.rui.widgets.TextLabel"},
					{name: "TextLabel8", sig: "org.eclipse.edt.rui.widgets.TextLabel"},
					{name: "TextLabel9", sig: "org.eclipse.edt.rui.widgets.TextLabel"}];
				}
				return this.fieldSigs;
			}
			,
			"eze$$getAnnotations": function() {
				if(this.annotations === undefined){
					this.annotations = {};
					this.annotations["XMLRootElement"] = new egl.eglx.xml.binding.annotation.XMLRootElement("cute", null, false);
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
					annotations["XMLStyle"] = new egl.eglx.xml.binding.annotation.XMLElement("TextLabel", null, false, false);
					annotations["JsonName"] = new egl.eglx.json.JsonName("TextLabel");
					this.fieldInfos[1] =new egl.eglx.services.FieldInfo("TextLabel", "TextLabel", "org.eclipse.edt.rui.widgets.TextLabel", egl.org.eclipse.edt.rui.widgets.TextLabel, annotations);
					annotations = {};
					annotations["XMLStyle"] = new egl.eglx.xml.binding.annotation.XMLElement("GridLayout", null, false, false);
					annotations["JsonName"] = new egl.eglx.json.JsonName("GridLayout");
					this.fieldInfos[2] =new egl.eglx.services.FieldInfo("GridLayout", "GridLayout", "org.eclipse.edt.rui.widgets.GridLayout", egl.org.eclipse.edt.rui.widgets.GridLayout, annotations);
					annotations = {};
					annotations["XMLStyle"] = new egl.eglx.xml.binding.annotation.XMLElement("TextLabel1", null, false, false);
					annotations["JsonName"] = new egl.eglx.json.JsonName("TextLabel1");
					this.fieldInfos[3] =new egl.eglx.services.FieldInfo("TextLabel1", "TextLabel1", "org.eclipse.edt.rui.widgets.TextLabel", egl.org.eclipse.edt.rui.widgets.TextLabel, annotations);
					annotations = {};
					annotations["XMLStyle"] = new egl.eglx.xml.binding.annotation.XMLElement("GridLayout1", null, false, false);
					annotations["JsonName"] = new egl.eglx.json.JsonName("GridLayout1");
					this.fieldInfos[4] =new egl.eglx.services.FieldInfo("GridLayout1", "GridLayout1", "org.eclipse.edt.rui.widgets.GridLayout", egl.org.eclipse.edt.rui.widgets.GridLayout, annotations);
					annotations = {};
					annotations["XMLStyle"] = new egl.eglx.xml.binding.annotation.XMLElement("TextLabel2", null, false, false);
					annotations["JsonName"] = new egl.eglx.json.JsonName("TextLabel2");
					this.fieldInfos[5] =new egl.eglx.services.FieldInfo("TextLabel2", "TextLabel2", "org.eclipse.edt.rui.widgets.TextLabel", egl.org.eclipse.edt.rui.widgets.TextLabel, annotations);
					annotations = {};
					annotations["XMLStyle"] = new egl.eglx.xml.binding.annotation.XMLElement("Box", null, false, false);
					annotations["JsonName"] = new egl.eglx.json.JsonName("Box");
					this.fieldInfos[6] =new egl.eglx.services.FieldInfo("Box", "Box", "org.eclipse.edt.rui.widgets.Box", egl.org.eclipse.edt.rui.widgets.Box, annotations);
					annotations = {};
					annotations["XMLStyle"] = new egl.eglx.xml.binding.annotation.XMLElement("Image", null, false, false);
					annotations["JsonName"] = new egl.eglx.json.JsonName("Image");
					this.fieldInfos[7] =new egl.eglx.services.FieldInfo("Image", "Image", "org.eclipse.edt.rui.widgets.Image", egl.org.eclipse.edt.rui.widgets.Image, annotations);
					annotations = {};
					annotations["XMLStyle"] = new egl.eglx.xml.binding.annotation.XMLElement("GridLayout2", null, false, false);
					annotations["JsonName"] = new egl.eglx.json.JsonName("GridLayout2");
					this.fieldInfos[8] =new egl.eglx.services.FieldInfo("GridLayout2", "GridLayout2", "org.eclipse.edt.rui.widgets.GridLayout", egl.org.eclipse.edt.rui.widgets.GridLayout, annotations);
					annotations = {};
					annotations["XMLStyle"] = new egl.eglx.xml.binding.annotation.XMLElement("TextLabel3", null, false, false);
					annotations["JsonName"] = new egl.eglx.json.JsonName("TextLabel3");
					this.fieldInfos[9] =new egl.eglx.services.FieldInfo("TextLabel3", "TextLabel3", "org.eclipse.edt.rui.widgets.TextLabel", egl.org.eclipse.edt.rui.widgets.TextLabel, annotations);
					annotations = {};
					annotations["XMLStyle"] = new egl.eglx.xml.binding.annotation.XMLElement("Box1", null, false, false);
					annotations["JsonName"] = new egl.eglx.json.JsonName("Box1");
					this.fieldInfos[10] =new egl.eglx.services.FieldInfo("Box1", "Box1", "org.eclipse.edt.rui.widgets.Box", egl.org.eclipse.edt.rui.widgets.Box, annotations);
					annotations = {};
					annotations["XMLStyle"] = new egl.eglx.xml.binding.annotation.XMLElement("Image1", null, false, false);
					annotations["JsonName"] = new egl.eglx.json.JsonName("Image1");
					this.fieldInfos[11] =new egl.eglx.services.FieldInfo("Image1", "Image1", "org.eclipse.edt.rui.widgets.Image", egl.org.eclipse.edt.rui.widgets.Image, annotations);
					annotations = {};
					annotations["XMLStyle"] = new egl.eglx.xml.binding.annotation.XMLElement("GridLayout3", null, false, false);
					annotations["JsonName"] = new egl.eglx.json.JsonName("GridLayout3");
					this.fieldInfos[12] =new egl.eglx.services.FieldInfo("GridLayout3", "GridLayout3", "org.eclipse.edt.rui.widgets.GridLayout", egl.org.eclipse.edt.rui.widgets.GridLayout, annotations);
					annotations = {};
					annotations["XMLStyle"] = new egl.eglx.xml.binding.annotation.XMLElement("TextLabel4", null, false, false);
					annotations["JsonName"] = new egl.eglx.json.JsonName("TextLabel4");
					this.fieldInfos[13] =new egl.eglx.services.FieldInfo("TextLabel4", "TextLabel4", "org.eclipse.edt.rui.widgets.TextLabel", egl.org.eclipse.edt.rui.widgets.TextLabel, annotations);
					annotations = {};
					annotations["XMLStyle"] = new egl.eglx.xml.binding.annotation.XMLElement("TextLabel5", null, false, false);
					annotations["JsonName"] = new egl.eglx.json.JsonName("TextLabel5");
					this.fieldInfos[14] =new egl.eglx.services.FieldInfo("TextLabel5", "TextLabel5", "org.eclipse.edt.rui.widgets.TextLabel", egl.org.eclipse.edt.rui.widgets.TextLabel, annotations);
					annotations = {};
					annotations["XMLStyle"] = new egl.eglx.xml.binding.annotation.XMLElement("GridLayout4", null, false, false);
					annotations["JsonName"] = new egl.eglx.json.JsonName("GridLayout4");
					this.fieldInfos[15] =new egl.eglx.services.FieldInfo("GridLayout4", "GridLayout4", "org.eclipse.edt.rui.widgets.GridLayout", egl.org.eclipse.edt.rui.widgets.GridLayout, annotations);
					annotations = {};
					annotations["XMLStyle"] = new egl.eglx.xml.binding.annotation.XMLElement("TextLabel6", null, false, false);
					annotations["JsonName"] = new egl.eglx.json.JsonName("TextLabel6");
					this.fieldInfos[16] =new egl.eglx.services.FieldInfo("TextLabel6", "TextLabel6", "org.eclipse.edt.rui.widgets.TextLabel", egl.org.eclipse.edt.rui.widgets.TextLabel, annotations);
					annotations = {};
					annotations["XMLStyle"] = new egl.eglx.xml.binding.annotation.XMLElement("TextLabel7", null, false, false);
					annotations["JsonName"] = new egl.eglx.json.JsonName("TextLabel7");
					this.fieldInfos[17] =new egl.eglx.services.FieldInfo("TextLabel7", "TextLabel7", "org.eclipse.edt.rui.widgets.TextLabel", egl.org.eclipse.edt.rui.widgets.TextLabel, annotations);
					annotations = {};
					annotations["XMLStyle"] = new egl.eglx.xml.binding.annotation.XMLElement("TextLabel8", null, false, false);
					annotations["JsonName"] = new egl.eglx.json.JsonName("TextLabel8");
					this.fieldInfos[18] =new egl.eglx.services.FieldInfo("TextLabel8", "TextLabel8", "org.eclipse.edt.rui.widgets.TextLabel", egl.org.eclipse.edt.rui.widgets.TextLabel, annotations);
					annotations = {};
					annotations["XMLStyle"] = new egl.eglx.xml.binding.annotation.XMLElement("TextLabel9", null, false, false);
					annotations["JsonName"] = new egl.eglx.json.JsonName("TextLabel9");
					this.fieldInfos[19] =new egl.eglx.services.FieldInfo("TextLabel9", "TextLabel9", "org.eclipse.edt.rui.widgets.TextLabel", egl.org.eclipse.edt.rui.widgets.TextLabel, annotations);
				}
				return this.fieldInfos;
			}
			,
			"start": function() {
				try { egl.enter("start",this,arguments);
					egl.atLine(this.eze$$fileName,72,3414,24, this);
					if (!egl.debugg) egl.leave();
				} finally {
					if (!egl.debugg){
					} else { egl.leave(); }
				}
			}
			,
			"toString": function() {
				return "[cute]";
			}
			,
			"eze$$getName": function() {
				return "cute";
			}
			,
			"eze$$getChildVariables": function() {
				var eze$$parent = this;
				return [
				{name: "ui", value : eze$$parent.ui, type : "org.eclipse.edt.rui.widgets.GridLayout", jsName : "ui"},
				{name: "TextLabel", value : eze$$parent.TextLabel, type : "org.eclipse.edt.rui.widgets.TextLabel", jsName : "TextLabel"},
				{name: "GridLayout", value : eze$$parent.GridLayout, type : "org.eclipse.edt.rui.widgets.GridLayout", jsName : "GridLayout"},
				{name: "TextLabel1", value : eze$$parent.TextLabel1, type : "org.eclipse.edt.rui.widgets.TextLabel", jsName : "TextLabel1"},
				{name: "GridLayout1", value : eze$$parent.GridLayout1, type : "org.eclipse.edt.rui.widgets.GridLayout", jsName : "GridLayout1"},
				{name: "TextLabel2", value : eze$$parent.TextLabel2, type : "org.eclipse.edt.rui.widgets.TextLabel", jsName : "TextLabel2"},
				{name: "Box", value : eze$$parent.Box, type : "org.eclipse.edt.rui.widgets.Box", jsName : "Box"},
				{name: "Image", value : eze$$parent.Image, type : "org.eclipse.edt.rui.widgets.Image", jsName : "Image"},
				{name: "GridLayout2", value : eze$$parent.GridLayout2, type : "org.eclipse.edt.rui.widgets.GridLayout", jsName : "GridLayout2"},
				{name: "TextLabel3", value : eze$$parent.TextLabel3, type : "org.eclipse.edt.rui.widgets.TextLabel", jsName : "TextLabel3"},
				{name: "Box1", value : eze$$parent.Box1, type : "org.eclipse.edt.rui.widgets.Box", jsName : "Box1"},
				{name: "Image1", value : eze$$parent.Image1, type : "org.eclipse.edt.rui.widgets.Image", jsName : "Image1"},
				{name: "GridLayout3", value : eze$$parent.GridLayout3, type : "org.eclipse.edt.rui.widgets.GridLayout", jsName : "GridLayout3"},
				{name: "TextLabel4", value : eze$$parent.TextLabel4, type : "org.eclipse.edt.rui.widgets.TextLabel", jsName : "TextLabel4"},
				{name: "TextLabel5", value : eze$$parent.TextLabel5, type : "org.eclipse.edt.rui.widgets.TextLabel", jsName : "TextLabel5"},
				{name: "GridLayout4", value : eze$$parent.GridLayout4, type : "org.eclipse.edt.rui.widgets.GridLayout", jsName : "GridLayout4"},
				{name: "TextLabel6", value : eze$$parent.TextLabel6, type : "org.eclipse.edt.rui.widgets.TextLabel", jsName : "TextLabel6"},
				{name: "TextLabel7", value : eze$$parent.TextLabel7, type : "org.eclipse.edt.rui.widgets.TextLabel", jsName : "TextLabel7"},
				{name: "TextLabel8", value : eze$$parent.TextLabel8, type : "org.eclipse.edt.rui.widgets.TextLabel", jsName : "TextLabel8"},
				{name: "TextLabel9", value : eze$$parent.TextLabel9, type : "org.eclipse.edt.rui.widgets.TextLabel", jsName : "TextLabel9"},
				{name: "document", value : eze$$parent.document, type : "eglx.ui.rui.Document", jsName : "document"},
				{name: "initialUI", value : eze$$parent.initialUI, type : "eglx.lang.EList<eglx.ui.rui.Widget>", jsName : "!initialUI"}
				];
			}
		}
	);
});
