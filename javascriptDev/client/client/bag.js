define(["org/eclipse/edt/rui/widgets/Box", "org/eclipse/edt/rui/widgets/Image", "eglx/ui/rui/eze$$View", "org/eclipse/edt/rui/widgets/GridLayoutData", "org/eclipse/edt/rui/widgets/GridLayout", "org/eclipse/edt/rui/widgets/TextLabel"],function(){
	egl.loadCSS("css/NewProject1.css");
	egl.defineRUIHandler("client.client", "bag", {
		"eze$$fileName" : "client/client/bag.egl",
		"eze$$runtimePropertiesFile" : "client/client/bag",
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
				this.GridLayout4 = new egl.org.eclipse.edt.rui.widgets.GridLayout();
				this.TextLabel6 = new egl.org.eclipse.edt.rui.widgets.TextLabel();
				this.Box2 = new egl.org.eclipse.edt.rui.widgets.Box();
				this.Image2 = new egl.org.eclipse.edt.rui.widgets.Image();
				this.GridLayout3 = new egl.org.eclipse.edt.rui.widgets.GridLayout();
				this.Box3 = new egl.org.eclipse.edt.rui.widgets.Box();
				this.Image3 = new egl.org.eclipse.edt.rui.widgets.Image();
				this.TextLabel4 = new egl.org.eclipse.edt.rui.widgets.TextLabel();
			}
			,
			"eze$$setInitial": function() {
				try { egl.enter("<init>",this,arguments);
					this.eze$$setEmpty();
					egl.atLine(this.eze$$fileName,18,459,11, this);
					this.ui.setColumns(1);
					egl.atLine(this.eze$$fileName,18,472,8, this);
					this.ui.setRows(2);
					egl.atLine(this.eze$$fileName,18,482,15, this);
					this.ui.setCellPadding(4);
					egl.atLine(this.eze$$fileName,18,499,36, this);
					this.ui.setChildren([egl.eglx.lang.convert(egl.eglx.ui.rui.Widget.fromWidget, [this.GridLayout,"org.eclipse.edt.rui.widgets.GridLayout"]), egl.eglx.lang.convert(egl.eglx.ui.rui.Widget.fromWidget, [this.TextLabel,"org.eclipse.edt.rui.widgets.TextLabel"])].setType("[Teglx/ui/rui/Widget;"));
					var eze$LNNTemp1 = null;
					{
						var eze$SettingTarget1 = new egl.org.eclipse.edt.rui.widgets.GridLayoutData();
						egl.atLine(this.eze$$fileName,19,576,41, this);
						eze$SettingTarget1 = egl.eglx.lang.AnyValue.ezeCopyTo(new egl.org.eclipse.edt.rui.widgets.GridLayoutData(), eze$SettingTarget1);
						egl.atLine(this.eze$$fileName,19,596,7, this);
						eze$SettingTarget1.row = 1;
						egl.atLine(this.eze$$fileName,19,605,10, this);
						eze$SettingTarget1.column = 1;
						egl.atLine(this.eze$$fileName,19,576,41, this);
						eze$LNNTemp1 = egl.eglx.lang.AnyValue.ezeCopyTo(eze$SettingTarget1, eze$LNNTemp1);
					}
					egl.atLine(this.eze$$fileName,19,563,54, this);
					this.TextLabel.setLayoutData(egl.eglx.lang.convert(egl.eglx.lang.EAny.fromEAny, [eze$LNNTemp1.eze$$clone(),"Torg/eclipse/edt/rui/widgets/GridLayoutData;"]));
					egl.atLine(this.eze$$fileName,19,619,13, this);
					this.TextLabel.setText("\u6574\u7406\u4e66\u5305");
					egl.atLine(this.eze$$fileName,20,639,11, this);
					this.TextLabel.setFont("\u5b8b\u4f53");
					egl.atLine(this.eze$$fileName,21,657,15, this);
					this.TextLabel.setFontSize("28");
					egl.atLine(this.eze$$fileName,22,679,19, this);
					this.TextLabel.setFontWeight("bold");
					var eze$LNNTemp2 = null;
					{
						var eze$SettingTarget1 = new egl.org.eclipse.edt.rui.widgets.GridLayoutData();
						egl.atLine(this.eze$$fileName,23,742,41, this);
						eze$SettingTarget1 = egl.eglx.lang.AnyValue.ezeCopyTo(new egl.org.eclipse.edt.rui.widgets.GridLayoutData(), eze$SettingTarget1);
						egl.atLine(this.eze$$fileName,23,762,7, this);
						eze$SettingTarget1.row = 2;
						egl.atLine(this.eze$$fileName,23,771,10, this);
						eze$SettingTarget1.column = 1;
						egl.atLine(this.eze$$fileName,23,742,41, this);
						eze$LNNTemp2 = egl.eglx.lang.AnyValue.ezeCopyTo(eze$SettingTarget1, eze$LNNTemp2);
					}
					egl.atLine(this.eze$$fileName,23,729,54, this);
					this.GridLayout.setLayoutData(egl.eglx.lang.convert(egl.eglx.lang.EAny.fromEAny, [eze$LNNTemp2.eze$$clone(),"Torg/eclipse/edt/rui/widgets/GridLayoutData;"]));
					egl.atLine(this.eze$$fileName,23,785,15, this);
					this.GridLayout.setCellPadding(4);
					egl.atLine(this.eze$$fileName,23,802,8, this);
					this.GridLayout.setRows(5);
					egl.atLine(this.eze$$fileName,23,812,11, this);
					this.GridLayout.setColumns(1);
					egl.atLine(this.eze$$fileName,24,830,77, this);
					this.GridLayout.setChildren([egl.eglx.lang.convert(egl.eglx.ui.rui.Widget.fromWidget, [this.GridLayout3,"org.eclipse.edt.rui.widgets.GridLayout"]), egl.eglx.lang.convert(egl.eglx.ui.rui.Widget.fromWidget, [this.GridLayout4,"org.eclipse.edt.rui.widgets.GridLayout"]), egl.eglx.lang.convert(egl.eglx.ui.rui.Widget.fromWidget, [this.GridLayout2,"org.eclipse.edt.rui.widgets.GridLayout"]), egl.eglx.lang.convert(egl.eglx.ui.rui.Widget.fromWidget, [this.GridLayout1,"org.eclipse.edt.rui.widgets.GridLayout"]), egl.eglx.lang.convert(egl.eglx.ui.rui.Widget.fromWidget, [this.TextLabel1,"org.eclipse.edt.rui.widgets.TextLabel"])].setType("[Teglx/ui/rui/Widget;"));
					var eze$LNNTemp3 = null;
					{
						var eze$SettingTarget1 = new egl.org.eclipse.edt.rui.widgets.GridLayoutData();
						egl.atLine(this.eze$$fileName,25,950,41, this);
						eze$SettingTarget1 = egl.eglx.lang.AnyValue.ezeCopyTo(new egl.org.eclipse.edt.rui.widgets.GridLayoutData(), eze$SettingTarget1);
						egl.atLine(this.eze$$fileName,25,970,7, this);
						eze$SettingTarget1.row = 1;
						egl.atLine(this.eze$$fileName,25,979,10, this);
						eze$SettingTarget1.column = 1;
						egl.atLine(this.eze$$fileName,25,950,41, this);
						eze$LNNTemp3 = egl.eglx.lang.AnyValue.ezeCopyTo(eze$SettingTarget1, eze$LNNTemp3);
					}
					egl.atLine(this.eze$$fileName,25,937,54, this);
					this.TextLabel1.setLayoutData(egl.eglx.lang.convert(egl.eglx.lang.EAny.fromEAny, [eze$LNNTemp3.eze$$clone(),"Torg/eclipse/edt/rui/widgets/GridLayoutData;"]));
					egl.atLine(this.eze$$fileName,25,993,61, this);
					this.TextLabel1.setText("\u8bfe\u5802\u76f4\u901a\u8f66..........................................\u8bfe\u4e0a\u5b66\u4e00\u5b66");
					egl.atLine(this.eze$$fileName,26,1061,13, this);
					this.TextLabel1.setFont("\u534e\u6587\u884c\u6977");
					egl.atLine(this.eze$$fileName,27,1081,15, this);
					this.TextLabel1.setFontSize("24");
					var eze$LNNTemp4 = null;
					{
						var eze$SettingTarget1 = new egl.org.eclipse.edt.rui.widgets.GridLayoutData();
						egl.atLine(this.eze$$fileName,28,1141,41, this);
						eze$SettingTarget1 = egl.eglx.lang.AnyValue.ezeCopyTo(new egl.org.eclipse.edt.rui.widgets.GridLayoutData(), eze$SettingTarget1);
						egl.atLine(this.eze$$fileName,28,1161,7, this);
						eze$SettingTarget1.row = 2;
						egl.atLine(this.eze$$fileName,28,1170,10, this);
						eze$SettingTarget1.column = 1;
						egl.atLine(this.eze$$fileName,28,1141,41, this);
						eze$LNNTemp4 = egl.eglx.lang.AnyValue.ezeCopyTo(eze$SettingTarget1, eze$LNNTemp4);
					}
					egl.atLine(this.eze$$fileName,28,1128,54, this);
					this.GridLayout1.setLayoutData(egl.eglx.lang.convert(egl.eglx.lang.EAny.fromEAny, [eze$LNNTemp4.eze$$clone(),"Torg/eclipse/edt/rui/widgets/GridLayoutData;"]));
					egl.atLine(this.eze$$fileName,28,1184,15, this);
					this.GridLayout1.setCellPadding(4);
					egl.atLine(this.eze$$fileName,28,1201,8, this);
					this.GridLayout1.setRows(2);
					egl.atLine(this.eze$$fileName,28,1211,11, this);
					this.GridLayout1.setColumns(1);
					egl.atLine(this.eze$$fileName,29,1229,30, this);
					this.GridLayout1.setChildren([egl.eglx.lang.convert(egl.eglx.ui.rui.Widget.fromWidget, [this.Box,"org.eclipse.edt.rui.widgets.Box"]), egl.eglx.lang.convert(egl.eglx.ui.rui.Widget.fromWidget, [this.TextLabel2,"org.eclipse.edt.rui.widgets.TextLabel"])].setType("[Teglx/ui/rui/Widget;"));
					var eze$LNNTemp5 = null;
					{
						var eze$SettingTarget1 = new egl.org.eclipse.edt.rui.widgets.GridLayoutData();
						egl.atLine(this.eze$$fileName,30,1302,41, this);
						eze$SettingTarget1 = egl.eglx.lang.AnyValue.ezeCopyTo(new egl.org.eclipse.edt.rui.widgets.GridLayoutData(), eze$SettingTarget1);
						egl.atLine(this.eze$$fileName,30,1322,7, this);
						eze$SettingTarget1.row = 1;
						egl.atLine(this.eze$$fileName,30,1331,10, this);
						eze$SettingTarget1.column = 1;
						egl.atLine(this.eze$$fileName,30,1302,41, this);
						eze$LNNTemp5 = egl.eglx.lang.AnyValue.ezeCopyTo(eze$SettingTarget1, eze$LNNTemp5);
					}
					egl.atLine(this.eze$$fileName,30,1289,54, this);
					this.TextLabel2.setLayoutData(egl.eglx.lang.convert(egl.eglx.lang.EAny.fromEAny, [eze$LNNTemp5.eze$$clone(),"Torg/eclipse/edt/rui/widgets/GridLayoutData;"]));
					egl.atLine(this.eze$$fileName,30,1345,39, this);
					this.TextLabel2.setText("\u4e00\u3001\u54ea\u4e2a\u5708\u91cc\u7269\u54c1\u7684\u6570\u76ee\u4e0e\u5176\u5b83\u5708\u91cc\u7684\u4e0d\u4e00\u6837\uff0c\u8bf7\u5728\uff08 \uff09\u91cc\u6253\u221a\u3002");
					egl.atLine(this.eze$$fileName,31,1391,13, this);
					this.TextLabel2.setFont("\u5fae\u8f6f\u96c5\u9ed1");
					egl.atLine(this.eze$$fileName,32,1411,15, this);
					this.TextLabel2.setFontSize("18");
					var eze$LNNTemp6 = null;
					{
						var eze$SettingTarget1 = new egl.org.eclipse.edt.rui.widgets.GridLayoutData();
						egl.atLine(this.eze$$fileName,33,1456,41, this);
						eze$SettingTarget1 = egl.eglx.lang.AnyValue.ezeCopyTo(new egl.org.eclipse.edt.rui.widgets.GridLayoutData(), eze$SettingTarget1);
						egl.atLine(this.eze$$fileName,33,1476,7, this);
						eze$SettingTarget1.row = 2;
						egl.atLine(this.eze$$fileName,33,1485,10, this);
						eze$SettingTarget1.column = 1;
						egl.atLine(this.eze$$fileName,33,1456,41, this);
						eze$LNNTemp6 = egl.eglx.lang.AnyValue.ezeCopyTo(eze$SettingTarget1, eze$LNNTemp6);
					}
					egl.atLine(this.eze$$fileName,33,1443,54, this);
					this.Box.setLayoutData(egl.eglx.lang.convert(egl.eglx.lang.EAny.fromEAny, [eze$LNNTemp6.eze$$clone(),"Torg/eclipse/edt/rui/widgets/GridLayoutData;"]));
					egl.atLine(this.eze$$fileName,33,1499,9, this);
					this.Box.setPadding(8);
					egl.atLine(this.eze$$fileName,34,1515,20, this);
					this.Box.setChildren([egl.eglx.lang.convert(egl.eglx.ui.rui.Widget.fromWidget, [this.Image,"org.eclipse.edt.rui.widgets.Image"])].setType("[Teglx/ui/rui/Widget;"));
					egl.atLine(this.eze$$fileName,36,1561,39, this);
					this.Image.setSrc("E:\\workspace\\pictures\\55.jpg");
					var eze$LNNTemp7 = null;
					{
						var eze$SettingTarget1 = new egl.org.eclipse.edt.rui.widgets.GridLayoutData();
						egl.atLine(this.eze$$fileName,38,1649,41, this);
						eze$SettingTarget1 = egl.eglx.lang.AnyValue.ezeCopyTo(new egl.org.eclipse.edt.rui.widgets.GridLayoutData(), eze$SettingTarget1);
						egl.atLine(this.eze$$fileName,38,1669,7, this);
						eze$SettingTarget1.row = 3;
						egl.atLine(this.eze$$fileName,38,1678,10, this);
						eze$SettingTarget1.column = 1;
						egl.atLine(this.eze$$fileName,38,1649,41, this);
						eze$LNNTemp7 = egl.eglx.lang.AnyValue.ezeCopyTo(eze$SettingTarget1, eze$LNNTemp7);
					}
					egl.atLine(this.eze$$fileName,38,1636,54, this);
					this.GridLayout2.setLayoutData(egl.eglx.lang.convert(egl.eglx.lang.EAny.fromEAny, [eze$LNNTemp7.eze$$clone(),"Torg/eclipse/edt/rui/widgets/GridLayoutData;"]));
					egl.atLine(this.eze$$fileName,38,1692,15, this);
					this.GridLayout2.setCellPadding(4);
					egl.atLine(this.eze$$fileName,38,1709,8, this);
					this.GridLayout2.setRows(2);
					egl.atLine(this.eze$$fileName,38,1719,11, this);
					this.GridLayout2.setColumns(1);
					egl.atLine(this.eze$$fileName,39,1737,31, this);
					this.GridLayout2.setChildren([egl.eglx.lang.convert(egl.eglx.ui.rui.Widget.fromWidget, [this.Box1,"org.eclipse.edt.rui.widgets.Box"]), egl.eglx.lang.convert(egl.eglx.ui.rui.Widget.fromWidget, [this.TextLabel3,"org.eclipse.edt.rui.widgets.TextLabel"])].setType("[Teglx/ui/rui/Widget;"));
					var eze$LNNTemp8 = null;
					{
						var eze$SettingTarget1 = new egl.org.eclipse.edt.rui.widgets.GridLayoutData();
						egl.atLine(this.eze$$fileName,40,1811,41, this);
						eze$SettingTarget1 = egl.eglx.lang.AnyValue.ezeCopyTo(new egl.org.eclipse.edt.rui.widgets.GridLayoutData(), eze$SettingTarget1);
						egl.atLine(this.eze$$fileName,40,1831,7, this);
						eze$SettingTarget1.row = 1;
						egl.atLine(this.eze$$fileName,40,1840,10, this);
						eze$SettingTarget1.column = 1;
						egl.atLine(this.eze$$fileName,40,1811,41, this);
						eze$LNNTemp8 = egl.eglx.lang.AnyValue.ezeCopyTo(eze$SettingTarget1, eze$LNNTemp8);
					}
					egl.atLine(this.eze$$fileName,40,1798,54, this);
					this.TextLabel3.setLayoutData(egl.eglx.lang.convert(egl.eglx.lang.EAny.fromEAny, [eze$LNNTemp8.eze$$clone(),"Torg/eclipse/edt/rui/widgets/GridLayoutData;"]));
					egl.atLine(this.eze$$fileName,40,1854,20, this);
					this.TextLabel3.setText("\u4e8c\u3001\u628a\u5b66\u4e60\u7528\u54c1\u5708\u8d77\u6765\u3002");
					egl.atLine(this.eze$$fileName,41,1881,13, this);
					this.TextLabel3.setFont("\u5fae\u8f6f\u96c5\u9ed1");
					egl.atLine(this.eze$$fileName,42,1901,15, this);
					this.TextLabel3.setFontSize("18");
					var eze$LNNTemp9 = null;
					{
						var eze$SettingTarget1 = new egl.org.eclipse.edt.rui.widgets.GridLayoutData();
						egl.atLine(this.eze$$fileName,43,1947,41, this);
						eze$SettingTarget1 = egl.eglx.lang.AnyValue.ezeCopyTo(new egl.org.eclipse.edt.rui.widgets.GridLayoutData(), eze$SettingTarget1);
						egl.atLine(this.eze$$fileName,43,1967,7, this);
						eze$SettingTarget1.row = 2;
						egl.atLine(this.eze$$fileName,43,1976,10, this);
						eze$SettingTarget1.column = 1;
						egl.atLine(this.eze$$fileName,43,1947,41, this);
						eze$LNNTemp9 = egl.eglx.lang.AnyValue.ezeCopyTo(eze$SettingTarget1, eze$LNNTemp9);
					}
					egl.atLine(this.eze$$fileName,43,1934,54, this);
					this.Box1.setLayoutData(egl.eglx.lang.convert(egl.eglx.lang.EAny.fromEAny, [eze$LNNTemp9.eze$$clone(),"Torg/eclipse/edt/rui/widgets/GridLayoutData;"]));
					egl.atLine(this.eze$$fileName,43,1990,9, this);
					this.Box1.setPadding(8);
					egl.atLine(this.eze$$fileName,44,2006,21, this);
					this.Box1.setChildren([egl.eglx.lang.convert(egl.eglx.ui.rui.Widget.fromWidget, [this.Image1,"org.eclipse.edt.rui.widgets.Image"])].setType("[Teglx/ui/rui/Widget;"));
					egl.atLine(this.eze$$fileName,46,2054,39, this);
					this.Image1.setSrc("E:\\workspace\\pictures\\56.jpg");
					var eze$LNNTemp10 = null;
					{
						var eze$SettingTarget1 = new egl.org.eclipse.edt.rui.widgets.GridLayoutData();
						egl.atLine(this.eze$$fileName,48,2142,41, this);
						eze$SettingTarget1 = egl.eglx.lang.AnyValue.ezeCopyTo(new egl.org.eclipse.edt.rui.widgets.GridLayoutData(), eze$SettingTarget1);
						egl.atLine(this.eze$$fileName,48,2162,7, this);
						eze$SettingTarget1.row = 4;
						egl.atLine(this.eze$$fileName,48,2171,10, this);
						eze$SettingTarget1.column = 1;
						egl.atLine(this.eze$$fileName,48,2142,41, this);
						eze$LNNTemp10 = egl.eglx.lang.AnyValue.ezeCopyTo(eze$SettingTarget1, eze$LNNTemp10);
					}
					egl.atLine(this.eze$$fileName,48,2129,54, this);
					this.GridLayout4.setLayoutData(egl.eglx.lang.convert(egl.eglx.lang.EAny.fromEAny, [eze$LNNTemp10.eze$$clone(),"Torg/eclipse/edt/rui/widgets/GridLayoutData;"]));
					egl.atLine(this.eze$$fileName,48,2185,15, this);
					this.GridLayout4.setCellPadding(4);
					egl.atLine(this.eze$$fileName,48,2202,8, this);
					this.GridLayout4.setRows(2);
					egl.atLine(this.eze$$fileName,48,2212,11, this);
					this.GridLayout4.setColumns(1);
					egl.atLine(this.eze$$fileName,49,2230,31, this);
					this.GridLayout4.setChildren([egl.eglx.lang.convert(egl.eglx.ui.rui.Widget.fromWidget, [this.Box2,"org.eclipse.edt.rui.widgets.Box"]), egl.eglx.lang.convert(egl.eglx.ui.rui.Widget.fromWidget, [this.TextLabel6,"org.eclipse.edt.rui.widgets.TextLabel"])].setType("[Teglx/ui/rui/Widget;"));
					var eze$LNNTemp11 = null;
					{
						var eze$SettingTarget1 = new egl.org.eclipse.edt.rui.widgets.GridLayoutData();
						egl.atLine(this.eze$$fileName,50,2304,41, this);
						eze$SettingTarget1 = egl.eglx.lang.AnyValue.ezeCopyTo(new egl.org.eclipse.edt.rui.widgets.GridLayoutData(), eze$SettingTarget1);
						egl.atLine(this.eze$$fileName,50,2324,7, this);
						eze$SettingTarget1.row = 1;
						egl.atLine(this.eze$$fileName,50,2333,10, this);
						eze$SettingTarget1.column = 1;
						egl.atLine(this.eze$$fileName,50,2304,41, this);
						eze$LNNTemp11 = egl.eglx.lang.AnyValue.ezeCopyTo(eze$SettingTarget1, eze$LNNTemp11);
					}
					egl.atLine(this.eze$$fileName,50,2291,54, this);
					this.TextLabel6.setLayoutData(egl.eglx.lang.convert(egl.eglx.lang.EAny.fromEAny, [eze$LNNTemp11.eze$$clone(),"Torg/eclipse/edt/rui/widgets/GridLayoutData;"]));
					egl.atLine(this.eze$$fileName,50,2347,21, this);
					this.TextLabel6.setText("\u4e09\u3001\u8bf4\u4e00\u8bf4\uff0c\u53ef\u4ee5\u600e\u6837\u5206\u3002");
					egl.atLine(this.eze$$fileName,51,2375,13, this);
					this.TextLabel6.setFont("\u5fae\u8f6f\u96c5\u9ed1");
					egl.atLine(this.eze$$fileName,52,2395,15, this);
					this.TextLabel6.setFontSize("18");
					var eze$LNNTemp12 = null;
					{
						var eze$SettingTarget1 = new egl.org.eclipse.edt.rui.widgets.GridLayoutData();
						egl.atLine(this.eze$$fileName,53,2441,41, this);
						eze$SettingTarget1 = egl.eglx.lang.AnyValue.ezeCopyTo(new egl.org.eclipse.edt.rui.widgets.GridLayoutData(), eze$SettingTarget1);
						egl.atLine(this.eze$$fileName,53,2461,7, this);
						eze$SettingTarget1.row = 2;
						egl.atLine(this.eze$$fileName,53,2470,10, this);
						eze$SettingTarget1.column = 1;
						egl.atLine(this.eze$$fileName,53,2441,41, this);
						eze$LNNTemp12 = egl.eglx.lang.AnyValue.ezeCopyTo(eze$SettingTarget1, eze$LNNTemp12);
					}
					egl.atLine(this.eze$$fileName,53,2428,54, this);
					this.Box2.setLayoutData(egl.eglx.lang.convert(egl.eglx.lang.EAny.fromEAny, [eze$LNNTemp12.eze$$clone(),"Torg/eclipse/edt/rui/widgets/GridLayoutData;"]));
					egl.atLine(this.eze$$fileName,53,2484,9, this);
					this.Box2.setPadding(8);
					egl.atLine(this.eze$$fileName,54,2500,21, this);
					this.Box2.setChildren([egl.eglx.lang.convert(egl.eglx.ui.rui.Widget.fromWidget, [this.Image2,"org.eclipse.edt.rui.widgets.Image"])].setType("[Teglx/ui/rui/Widget;"));
					egl.atLine(this.eze$$fileName,56,2548,39, this);
					this.Image2.setSrc("E:\\workspace\\pictures\\57.jpg");
					var eze$LNNTemp13 = null;
					{
						var eze$SettingTarget1 = new egl.org.eclipse.edt.rui.widgets.GridLayoutData();
						egl.atLine(this.eze$$fileName,58,2636,41, this);
						eze$SettingTarget1 = egl.eglx.lang.AnyValue.ezeCopyTo(new egl.org.eclipse.edt.rui.widgets.GridLayoutData(), eze$SettingTarget1);
						egl.atLine(this.eze$$fileName,58,2656,7, this);
						eze$SettingTarget1.row = 5;
						egl.atLine(this.eze$$fileName,58,2665,10, this);
						eze$SettingTarget1.column = 1;
						egl.atLine(this.eze$$fileName,58,2636,41, this);
						eze$LNNTemp13 = egl.eglx.lang.AnyValue.ezeCopyTo(eze$SettingTarget1, eze$LNNTemp13);
					}
					egl.atLine(this.eze$$fileName,58,2623,54, this);
					this.GridLayout3.setLayoutData(egl.eglx.lang.convert(egl.eglx.lang.EAny.fromEAny, [eze$LNNTemp13.eze$$clone(),"Torg/eclipse/edt/rui/widgets/GridLayoutData;"]));
					egl.atLine(this.eze$$fileName,58,2679,15, this);
					this.GridLayout3.setCellPadding(4);
					egl.atLine(this.eze$$fileName,58,2696,8, this);
					this.GridLayout3.setRows(2);
					egl.atLine(this.eze$$fileName,58,2706,11, this);
					this.GridLayout3.setColumns(1);
					egl.atLine(this.eze$$fileName,59,2724,31, this);
					this.GridLayout3.setChildren([egl.eglx.lang.convert(egl.eglx.ui.rui.Widget.fromWidget, [this.TextLabel4,"org.eclipse.edt.rui.widgets.TextLabel"]), egl.eglx.lang.convert(egl.eglx.ui.rui.Widget.fromWidget, [this.Box3,"org.eclipse.edt.rui.widgets.Box"])].setType("[Teglx/ui/rui/Widget;"));
					var eze$LNNTemp14 = null;
					{
						var eze$SettingTarget1 = new egl.org.eclipse.edt.rui.widgets.GridLayoutData();
						egl.atLine(this.eze$$fileName,60,2786,41, this);
						eze$SettingTarget1 = egl.eglx.lang.AnyValue.ezeCopyTo(new egl.org.eclipse.edt.rui.widgets.GridLayoutData(), eze$SettingTarget1);
						egl.atLine(this.eze$$fileName,60,2806,7, this);
						eze$SettingTarget1.row = 2;
						egl.atLine(this.eze$$fileName,60,2815,10, this);
						eze$SettingTarget1.column = 1;
						egl.atLine(this.eze$$fileName,60,2786,41, this);
						eze$LNNTemp14 = egl.eglx.lang.AnyValue.ezeCopyTo(eze$SettingTarget1, eze$LNNTemp14);
					}
					egl.atLine(this.eze$$fileName,60,2773,54, this);
					this.Box3.setLayoutData(egl.eglx.lang.convert(egl.eglx.lang.EAny.fromEAny, [eze$LNNTemp14.eze$$clone(),"Torg/eclipse/edt/rui/widgets/GridLayoutData;"]));
					egl.atLine(this.eze$$fileName,60,2829,9, this);
					this.Box3.setPadding(8);
					egl.atLine(this.eze$$fileName,61,2845,21, this);
					this.Box3.setChildren([egl.eglx.lang.convert(egl.eglx.ui.rui.Widget.fromWidget, [this.Image3,"org.eclipse.edt.rui.widgets.Image"])].setType("[Teglx/ui/rui/Widget;"));
					egl.atLine(this.eze$$fileName,63,2893,39, this);
					this.Image3.setSrc("E:\\workspace\\pictures\\58.jpg");
					var eze$LNNTemp15 = null;
					{
						var eze$SettingTarget1 = new egl.org.eclipse.edt.rui.widgets.GridLayoutData();
						egl.atLine(this.eze$$fileName,65,2979,41, this);
						eze$SettingTarget1 = egl.eglx.lang.AnyValue.ezeCopyTo(new egl.org.eclipse.edt.rui.widgets.GridLayoutData(), eze$SettingTarget1);
						egl.atLine(this.eze$$fileName,65,2999,7, this);
						eze$SettingTarget1.row = 1;
						egl.atLine(this.eze$$fileName,65,3008,10, this);
						eze$SettingTarget1.column = 1;
						egl.atLine(this.eze$$fileName,65,2979,41, this);
						eze$LNNTemp15 = egl.eglx.lang.AnyValue.ezeCopyTo(eze$SettingTarget1, eze$LNNTemp15);
					}
					egl.atLine(this.eze$$fileName,65,2966,54, this);
					this.TextLabel4.setLayoutData(egl.eglx.lang.convert(egl.eglx.lang.EAny.fromEAny, [eze$LNNTemp15.eze$$clone(),"Torg/eclipse/edt/rui/widgets/GridLayoutData;"]));
					egl.atLine(this.eze$$fileName,65,3022,20, this);
					this.TextLabel4.setText("\u56db\u3001\u4f60\u80fd\u60f3\u51fa\u51e0\u79cd\u5206\u6cd5\u3002");
					egl.atLine(this.eze$$fileName,66,3049,13, this);
					this.TextLabel4.setFont("\u5fae\u8f6f\u96c5\u9ed1");
					egl.atLine(this.eze$$fileName,67,3069,15, this);
					this.TextLabel4.setFontSize("18");
					egl.atLine(this.eze$$fileName,15,333,28, this);
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
				var ezert$$2 = new egl.client.client.bag();
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
				ezert$$2.GridLayout4 = ezert$$1.GridLayout4 === null ? null : ezert$$1.GridLayout4.eze$$clone();
				ezert$$2.TextLabel6 = ezert$$1.TextLabel6 === null ? null : ezert$$1.TextLabel6.eze$$clone();
				ezert$$2.Box2 = ezert$$1.Box2 === null ? null : ezert$$1.Box2.eze$$clone();
				ezert$$2.Image2 = ezert$$1.Image2 === null ? null : ezert$$1.Image2.eze$$clone();
				ezert$$2.GridLayout3 = ezert$$1.GridLayout3 === null ? null : ezert$$1.GridLayout3.eze$$clone();
				ezert$$2.Box3 = ezert$$1.Box3 === null ? null : ezert$$1.Box3.eze$$clone();
				ezert$$2.Image3 = ezert$$1.Image3 === null ? null : ezert$$1.Image3.eze$$clone();
				ezert$$2.TextLabel4 = ezert$$1.TextLabel4 === null ? null : ezert$$1.TextLabel4.eze$$clone();
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
					{name: "GridLayout4", sig: "org.eclipse.edt.rui.widgets.GridLayout"},
					{name: "TextLabel6", sig: "org.eclipse.edt.rui.widgets.TextLabel"},
					{name: "Box2", sig: "org.eclipse.edt.rui.widgets.Box"},
					{name: "Image2", sig: "org.eclipse.edt.rui.widgets.Image"},
					{name: "GridLayout3", sig: "org.eclipse.edt.rui.widgets.GridLayout"},
					{name: "Box3", sig: "org.eclipse.edt.rui.widgets.Box"},
					{name: "Image3", sig: "org.eclipse.edt.rui.widgets.Image"},
					{name: "TextLabel4", sig: "org.eclipse.edt.rui.widgets.TextLabel"}];
				}
				return this.fieldSigs;
			}
			,
			"eze$$getAnnotations": function() {
				if(this.annotations === undefined){
					this.annotations = {};
					this.annotations["XMLRootElement"] = new egl.eglx.xml.binding.annotation.XMLRootElement("bag", null, false);
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
					annotations["XMLStyle"] = new egl.eglx.xml.binding.annotation.XMLElement("GridLayout4", null, false, false);
					annotations["JsonName"] = new egl.eglx.json.JsonName("GridLayout4");
					this.fieldInfos[12] =new egl.eglx.services.FieldInfo("GridLayout4", "GridLayout4", "org.eclipse.edt.rui.widgets.GridLayout", egl.org.eclipse.edt.rui.widgets.GridLayout, annotations);
					annotations = {};
					annotations["XMLStyle"] = new egl.eglx.xml.binding.annotation.XMLElement("TextLabel6", null, false, false);
					annotations["JsonName"] = new egl.eglx.json.JsonName("TextLabel6");
					this.fieldInfos[13] =new egl.eglx.services.FieldInfo("TextLabel6", "TextLabel6", "org.eclipse.edt.rui.widgets.TextLabel", egl.org.eclipse.edt.rui.widgets.TextLabel, annotations);
					annotations = {};
					annotations["XMLStyle"] = new egl.eglx.xml.binding.annotation.XMLElement("Box2", null, false, false);
					annotations["JsonName"] = new egl.eglx.json.JsonName("Box2");
					this.fieldInfos[14] =new egl.eglx.services.FieldInfo("Box2", "Box2", "org.eclipse.edt.rui.widgets.Box", egl.org.eclipse.edt.rui.widgets.Box, annotations);
					annotations = {};
					annotations["XMLStyle"] = new egl.eglx.xml.binding.annotation.XMLElement("Image2", null, false, false);
					annotations["JsonName"] = new egl.eglx.json.JsonName("Image2");
					this.fieldInfos[15] =new egl.eglx.services.FieldInfo("Image2", "Image2", "org.eclipse.edt.rui.widgets.Image", egl.org.eclipse.edt.rui.widgets.Image, annotations);
					annotations = {};
					annotations["XMLStyle"] = new egl.eglx.xml.binding.annotation.XMLElement("GridLayout3", null, false, false);
					annotations["JsonName"] = new egl.eglx.json.JsonName("GridLayout3");
					this.fieldInfos[16] =new egl.eglx.services.FieldInfo("GridLayout3", "GridLayout3", "org.eclipse.edt.rui.widgets.GridLayout", egl.org.eclipse.edt.rui.widgets.GridLayout, annotations);
					annotations = {};
					annotations["XMLStyle"] = new egl.eglx.xml.binding.annotation.XMLElement("Box3", null, false, false);
					annotations["JsonName"] = new egl.eglx.json.JsonName("Box3");
					this.fieldInfos[17] =new egl.eglx.services.FieldInfo("Box3", "Box3", "org.eclipse.edt.rui.widgets.Box", egl.org.eclipse.edt.rui.widgets.Box, annotations);
					annotations = {};
					annotations["XMLStyle"] = new egl.eglx.xml.binding.annotation.XMLElement("Image3", null, false, false);
					annotations["JsonName"] = new egl.eglx.json.JsonName("Image3");
					this.fieldInfos[18] =new egl.eglx.services.FieldInfo("Image3", "Image3", "org.eclipse.edt.rui.widgets.Image", egl.org.eclipse.edt.rui.widgets.Image, annotations);
					annotations = {};
					annotations["XMLStyle"] = new egl.eglx.xml.binding.annotation.XMLElement("TextLabel4", null, false, false);
					annotations["JsonName"] = new egl.eglx.json.JsonName("TextLabel4");
					this.fieldInfos[19] =new egl.eglx.services.FieldInfo("TextLabel4", "TextLabel4", "org.eclipse.edt.rui.widgets.TextLabel", egl.org.eclipse.edt.rui.widgets.TextLabel, annotations);
				}
				return this.fieldInfos;
			}
			,
			"start": function() {
				try { egl.enter("start",this,arguments);
					egl.atLine(this.eze$$fileName,69,3093,24, this);
					if (!egl.debugg) egl.leave();
				} finally {
					if (!egl.debugg){
					} else { egl.leave(); }
				}
			}
			,
			"toString": function() {
				return "[bag]";
			}
			,
			"eze$$getName": function() {
				return "bag";
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
				{name: "GridLayout4", value : eze$$parent.GridLayout4, type : "org.eclipse.edt.rui.widgets.GridLayout", jsName : "GridLayout4"},
				{name: "TextLabel6", value : eze$$parent.TextLabel6, type : "org.eclipse.edt.rui.widgets.TextLabel", jsName : "TextLabel6"},
				{name: "Box2", value : eze$$parent.Box2, type : "org.eclipse.edt.rui.widgets.Box", jsName : "Box2"},
				{name: "Image2", value : eze$$parent.Image2, type : "org.eclipse.edt.rui.widgets.Image", jsName : "Image2"},
				{name: "GridLayout3", value : eze$$parent.GridLayout3, type : "org.eclipse.edt.rui.widgets.GridLayout", jsName : "GridLayout3"},
				{name: "Box3", value : eze$$parent.Box3, type : "org.eclipse.edt.rui.widgets.Box", jsName : "Box3"},
				{name: "Image3", value : eze$$parent.Image3, type : "org.eclipse.edt.rui.widgets.Image", jsName : "Image3"},
				{name: "TextLabel4", value : eze$$parent.TextLabel4, type : "org.eclipse.edt.rui.widgets.TextLabel", jsName : "TextLabel4"},
				{name: "document", value : eze$$parent.document, type : "eglx.ui.rui.Document", jsName : "document"},
				{name: "initialUI", value : eze$$parent.initialUI, type : "eglx.lang.EList<eglx.ui.rui.Widget>", jsName : "!initialUI"}
				];
			}
		}
	);
});
