define(["org/eclipse/edt/rui/widgets/Box", "org/eclipse/edt/rui/widgets/Image", "eglx/ui/rui/eze$$View", "org/eclipse/edt/rui/widgets/GridLayoutData", "org/eclipse/edt/rui/widgets/GridLayout", "org/eclipse/edt/rui/widgets/TextLabel"],function(){
	egl.loadCSS("css/NewProject1.css");
	egl.defineRUIHandler("client.client", "stationery", {
		"eze$$fileName" : "client/client/stationery.egl",
		"eze$$runtimePropertiesFile" : "client/client/stationery",
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
				this.Box2 = new egl.org.eclipse.edt.rui.widgets.Box();
				this.Image2 = new egl.org.eclipse.edt.rui.widgets.Image();
				this.Image3 = new egl.org.eclipse.edt.rui.widgets.Image();
				this.GridLayout4 = new egl.org.eclipse.edt.rui.widgets.GridLayout();
				this.TextLabel5 = new egl.org.eclipse.edt.rui.widgets.TextLabel();
				this.TextLabel6 = new egl.org.eclipse.edt.rui.widgets.TextLabel();
			}
			,
			"eze$$setInitial": function() {
				try { egl.enter("<init>",this,arguments);
					this.eze$$setEmpty();
					egl.atLine(this.eze$$fileName,18,466,11, this);
					this.ui.setColumns(1);
					egl.atLine(this.eze$$fileName,18,479,8, this);
					this.ui.setRows(2);
					egl.atLine(this.eze$$fileName,18,489,15, this);
					this.ui.setCellPadding(4);
					egl.atLine(this.eze$$fileName,18,506,36, this);
					this.ui.setChildren([egl.eglx.lang.convert(egl.eglx.ui.rui.Widget.fromWidget, [this.GridLayout,"org.eclipse.edt.rui.widgets.GridLayout"]), egl.eglx.lang.convert(egl.eglx.ui.rui.Widget.fromWidget, [this.TextLabel,"org.eclipse.edt.rui.widgets.TextLabel"])].setType("[Teglx/ui/rui/Widget;"));
					var eze$LNNTemp1 = null;
					{
						var eze$SettingTarget1 = new egl.org.eclipse.edt.rui.widgets.GridLayoutData();
						egl.atLine(this.eze$$fileName,19,583,41, this);
						eze$SettingTarget1 = egl.eglx.lang.AnyValue.ezeCopyTo(new egl.org.eclipse.edt.rui.widgets.GridLayoutData(), eze$SettingTarget1);
						egl.atLine(this.eze$$fileName,19,603,7, this);
						eze$SettingTarget1.row = 1;
						egl.atLine(this.eze$$fileName,19,612,10, this);
						eze$SettingTarget1.column = 1;
						egl.atLine(this.eze$$fileName,19,583,41, this);
						eze$LNNTemp1 = egl.eglx.lang.AnyValue.ezeCopyTo(eze$SettingTarget1, eze$LNNTemp1);
					}
					egl.atLine(this.eze$$fileName,19,570,54, this);
					this.TextLabel.setLayoutData(egl.eglx.lang.convert(egl.eglx.lang.EAny.fromEAny, [eze$LNNTemp1.eze$$clone(),"Torg/eclipse/edt/rui/widgets/GridLayoutData;"]));
					egl.atLine(this.eze$$fileName,19,626,11, this);
					this.TextLabel.setText("\u6587\u5177");
					egl.atLine(this.eze$$fileName,20,644,11, this);
					this.TextLabel.setFont("\u5b8b\u4f53");
					egl.atLine(this.eze$$fileName,21,662,15, this);
					this.TextLabel.setFontSize("28");
					egl.atLine(this.eze$$fileName,22,684,19, this);
					this.TextLabel.setFontWeight("bold");
					var eze$LNNTemp2 = null;
					{
						var eze$SettingTarget1 = new egl.org.eclipse.edt.rui.widgets.GridLayoutData();
						egl.atLine(this.eze$$fileName,23,747,41, this);
						eze$SettingTarget1 = egl.eglx.lang.AnyValue.ezeCopyTo(new egl.org.eclipse.edt.rui.widgets.GridLayoutData(), eze$SettingTarget1);
						egl.atLine(this.eze$$fileName,23,767,7, this);
						eze$SettingTarget1.row = 2;
						egl.atLine(this.eze$$fileName,23,776,10, this);
						eze$SettingTarget1.column = 1;
						egl.atLine(this.eze$$fileName,23,747,41, this);
						eze$LNNTemp2 = egl.eglx.lang.AnyValue.ezeCopyTo(eze$SettingTarget1, eze$LNNTemp2);
					}
					egl.atLine(this.eze$$fileName,23,734,54, this);
					this.GridLayout.setLayoutData(egl.eglx.lang.convert(egl.eglx.lang.EAny.fromEAny, [eze$LNNTemp2.eze$$clone(),"Torg/eclipse/edt/rui/widgets/GridLayoutData;"]));
					egl.atLine(this.eze$$fileName,23,790,15, this);
					this.GridLayout.setCellPadding(4);
					egl.atLine(this.eze$$fileName,23,807,8, this);
					this.GridLayout.setRows(5);
					egl.atLine(this.eze$$fileName,23,817,11, this);
					this.GridLayout.setColumns(1);
					egl.atLine(this.eze$$fileName,24,835,77, this);
					this.GridLayout.setChildren([egl.eglx.lang.convert(egl.eglx.ui.rui.Widget.fromWidget, [this.GridLayout4,"org.eclipse.edt.rui.widgets.GridLayout"]), egl.eglx.lang.convert(egl.eglx.ui.rui.Widget.fromWidget, [this.GridLayout3,"org.eclipse.edt.rui.widgets.GridLayout"]), egl.eglx.lang.convert(egl.eglx.ui.rui.Widget.fromWidget, [this.GridLayout2,"org.eclipse.edt.rui.widgets.GridLayout"]), egl.eglx.lang.convert(egl.eglx.ui.rui.Widget.fromWidget, [this.GridLayout1,"org.eclipse.edt.rui.widgets.GridLayout"]), egl.eglx.lang.convert(egl.eglx.ui.rui.Widget.fromWidget, [this.TextLabel1,"org.eclipse.edt.rui.widgets.TextLabel"])].setType("[Teglx/ui/rui/Widget;"));
					var eze$LNNTemp3 = null;
					{
						var eze$SettingTarget1 = new egl.org.eclipse.edt.rui.widgets.GridLayoutData();
						egl.atLine(this.eze$$fileName,25,955,41, this);
						eze$SettingTarget1 = egl.eglx.lang.AnyValue.ezeCopyTo(new egl.org.eclipse.edt.rui.widgets.GridLayoutData(), eze$SettingTarget1);
						egl.atLine(this.eze$$fileName,25,975,7, this);
						eze$SettingTarget1.row = 1;
						egl.atLine(this.eze$$fileName,25,984,10, this);
						eze$SettingTarget1.column = 1;
						egl.atLine(this.eze$$fileName,25,955,41, this);
						eze$LNNTemp3 = egl.eglx.lang.AnyValue.ezeCopyTo(eze$SettingTarget1, eze$LNNTemp3);
					}
					egl.atLine(this.eze$$fileName,25,942,54, this);
					this.TextLabel1.setLayoutData(egl.eglx.lang.convert(egl.eglx.lang.EAny.fromEAny, [eze$LNNTemp3.eze$$clone(),"Torg/eclipse/edt/rui/widgets/GridLayoutData;"]));
					egl.atLine(this.eze$$fileName,25,998,61, this);
					this.TextLabel1.setText("\u8bfe\u5802\u76f4\u901a\u8f66..........................................\u8bfe\u4e0a\u5b66\u4e00\u5b66");
					egl.atLine(this.eze$$fileName,26,1066,13, this);
					this.TextLabel1.setFont("\u534e\u6587\u884c\u6977");
					egl.atLine(this.eze$$fileName,27,1086,15, this);
					this.TextLabel1.setFontSize("24");
					var eze$LNNTemp4 = null;
					{
						var eze$SettingTarget1 = new egl.org.eclipse.edt.rui.widgets.GridLayoutData();
						egl.atLine(this.eze$$fileName,28,1146,41, this);
						eze$SettingTarget1 = egl.eglx.lang.AnyValue.ezeCopyTo(new egl.org.eclipse.edt.rui.widgets.GridLayoutData(), eze$SettingTarget1);
						egl.atLine(this.eze$$fileName,28,1166,7, this);
						eze$SettingTarget1.row = 2;
						egl.atLine(this.eze$$fileName,28,1175,10, this);
						eze$SettingTarget1.column = 1;
						egl.atLine(this.eze$$fileName,28,1146,41, this);
						eze$LNNTemp4 = egl.eglx.lang.AnyValue.ezeCopyTo(eze$SettingTarget1, eze$LNNTemp4);
					}
					egl.atLine(this.eze$$fileName,28,1133,54, this);
					this.GridLayout1.setLayoutData(egl.eglx.lang.convert(egl.eglx.lang.EAny.fromEAny, [eze$LNNTemp4.eze$$clone(),"Torg/eclipse/edt/rui/widgets/GridLayoutData;"]));
					egl.atLine(this.eze$$fileName,28,1189,15, this);
					this.GridLayout1.setCellPadding(4);
					egl.atLine(this.eze$$fileName,28,1206,8, this);
					this.GridLayout1.setRows(2);
					egl.atLine(this.eze$$fileName,28,1216,11, this);
					this.GridLayout1.setColumns(1);
					egl.atLine(this.eze$$fileName,29,1234,30, this);
					this.GridLayout1.setChildren([egl.eglx.lang.convert(egl.eglx.ui.rui.Widget.fromWidget, [this.Box,"org.eclipse.edt.rui.widgets.Box"]), egl.eglx.lang.convert(egl.eglx.ui.rui.Widget.fromWidget, [this.TextLabel2,"org.eclipse.edt.rui.widgets.TextLabel"])].setType("[Teglx/ui/rui/Widget;"));
					var eze$LNNTemp5 = null;
					{
						var eze$SettingTarget1 = new egl.org.eclipse.edt.rui.widgets.GridLayoutData();
						egl.atLine(this.eze$$fileName,30,1307,41, this);
						eze$SettingTarget1 = egl.eglx.lang.AnyValue.ezeCopyTo(new egl.org.eclipse.edt.rui.widgets.GridLayoutData(), eze$SettingTarget1);
						egl.atLine(this.eze$$fileName,30,1327,7, this);
						eze$SettingTarget1.row = 1;
						egl.atLine(this.eze$$fileName,30,1336,10, this);
						eze$SettingTarget1.column = 1;
						egl.atLine(this.eze$$fileName,30,1307,41, this);
						eze$LNNTemp5 = egl.eglx.lang.AnyValue.ezeCopyTo(eze$SettingTarget1, eze$LNNTemp5);
					}
					egl.atLine(this.eze$$fileName,30,1294,54, this);
					this.TextLabel2.setLayoutData(egl.eglx.lang.convert(egl.eglx.lang.EAny.fromEAny, [eze$LNNTemp5.eze$$clone(),"Torg/eclipse/edt/rui/widgets/GridLayoutData;"]));
					egl.atLine(this.eze$$fileName,30,1350,14, this);
					this.TextLabel2.setText("\u4e00\u3001\u586b\u6570\u3002");
					egl.atLine(this.eze$$fileName,31,1371,13, this);
					this.TextLabel2.setFont("\u5fae\u8f6f\u96c5\u9ed1");
					egl.atLine(this.eze$$fileName,32,1391,15, this);
					this.TextLabel2.setFontSize("18");
					var eze$LNNTemp6 = null;
					{
						var eze$SettingTarget1 = new egl.org.eclipse.edt.rui.widgets.GridLayoutData();
						egl.atLine(this.eze$$fileName,33,1436,41, this);
						eze$SettingTarget1 = egl.eglx.lang.AnyValue.ezeCopyTo(new egl.org.eclipse.edt.rui.widgets.GridLayoutData(), eze$SettingTarget1);
						egl.atLine(this.eze$$fileName,33,1456,7, this);
						eze$SettingTarget1.row = 2;
						egl.atLine(this.eze$$fileName,33,1465,10, this);
						eze$SettingTarget1.column = 1;
						egl.atLine(this.eze$$fileName,33,1436,41, this);
						eze$LNNTemp6 = egl.eglx.lang.AnyValue.ezeCopyTo(eze$SettingTarget1, eze$LNNTemp6);
					}
					egl.atLine(this.eze$$fileName,33,1423,54, this);
					this.Box.setLayoutData(egl.eglx.lang.convert(egl.eglx.lang.EAny.fromEAny, [eze$LNNTemp6.eze$$clone(),"Torg/eclipse/edt/rui/widgets/GridLayoutData;"]));
					egl.atLine(this.eze$$fileName,33,1479,9, this);
					this.Box.setPadding(8);
					egl.atLine(this.eze$$fileName,34,1495,28, this);
					this.Box.setChildren([egl.eglx.lang.convert(egl.eglx.ui.rui.Widget.fromWidget, [this.Image,"org.eclipse.edt.rui.widgets.Image"]), egl.eglx.lang.convert(egl.eglx.ui.rui.Widget.fromWidget, [this.Image3,"org.eclipse.edt.rui.widgets.Image"])].setType("[Teglx/ui/rui/Widget;"));
					egl.atLine(this.eze$$fileName,36,1549,39, this);
					this.Image.setSrc("E:\\workspace\\pictures\\20.jpg");
					var eze$LNNTemp7 = null;
					{
						var eze$SettingTarget1 = new egl.org.eclipse.edt.rui.widgets.GridLayoutData();
						egl.atLine(this.eze$$fileName,38,1637,41, this);
						eze$SettingTarget1 = egl.eglx.lang.AnyValue.ezeCopyTo(new egl.org.eclipse.edt.rui.widgets.GridLayoutData(), eze$SettingTarget1);
						egl.atLine(this.eze$$fileName,38,1657,7, this);
						eze$SettingTarget1.row = 3;
						egl.atLine(this.eze$$fileName,38,1666,10, this);
						eze$SettingTarget1.column = 1;
						egl.atLine(this.eze$$fileName,38,1637,41, this);
						eze$LNNTemp7 = egl.eglx.lang.AnyValue.ezeCopyTo(eze$SettingTarget1, eze$LNNTemp7);
					}
					egl.atLine(this.eze$$fileName,38,1624,54, this);
					this.GridLayout2.setLayoutData(egl.eglx.lang.convert(egl.eglx.lang.EAny.fromEAny, [eze$LNNTemp7.eze$$clone(),"Torg/eclipse/edt/rui/widgets/GridLayoutData;"]));
					egl.atLine(this.eze$$fileName,38,1680,15, this);
					this.GridLayout2.setCellPadding(4);
					egl.atLine(this.eze$$fileName,38,1697,8, this);
					this.GridLayout2.setRows(2);
					egl.atLine(this.eze$$fileName,38,1707,11, this);
					this.GridLayout2.setColumns(1);
					egl.atLine(this.eze$$fileName,39,1725,31, this);
					this.GridLayout2.setChildren([egl.eglx.lang.convert(egl.eglx.ui.rui.Widget.fromWidget, [this.Box1,"org.eclipse.edt.rui.widgets.Box"]), egl.eglx.lang.convert(egl.eglx.ui.rui.Widget.fromWidget, [this.TextLabel3,"org.eclipse.edt.rui.widgets.TextLabel"])].setType("[Teglx/ui/rui/Widget;"));
					var eze$LNNTemp8 = null;
					{
						var eze$SettingTarget1 = new egl.org.eclipse.edt.rui.widgets.GridLayoutData();
						egl.atLine(this.eze$$fileName,40,1799,41, this);
						eze$SettingTarget1 = egl.eglx.lang.AnyValue.ezeCopyTo(new egl.org.eclipse.edt.rui.widgets.GridLayoutData(), eze$SettingTarget1);
						egl.atLine(this.eze$$fileName,40,1819,7, this);
						eze$SettingTarget1.row = 1;
						egl.atLine(this.eze$$fileName,40,1828,10, this);
						eze$SettingTarget1.column = 1;
						egl.atLine(this.eze$$fileName,40,1799,41, this);
						eze$LNNTemp8 = egl.eglx.lang.AnyValue.ezeCopyTo(eze$SettingTarget1, eze$LNNTemp8);
					}
					egl.atLine(this.eze$$fileName,40,1786,54, this);
					this.TextLabel3.setLayoutData(egl.eglx.lang.convert(egl.eglx.lang.EAny.fromEAny, [eze$LNNTemp8.eze$$clone(),"Torg/eclipse/edt/rui/widgets/GridLayoutData;"]));
					egl.atLine(this.eze$$fileName,40,1842,18, this);
					this.TextLabel3.setText("\u4e8c\u3001\u6570\u4e00\u6570\u518d\u586b\u6570\u3002");
					egl.atLine(this.eze$$fileName,41,1867,13, this);
					this.TextLabel3.setFont("\u5fae\u8f6f\u96c5\u9ed1");
					egl.atLine(this.eze$$fileName,42,1887,15, this);
					this.TextLabel3.setFontSize("18");
					var eze$LNNTemp9 = null;
					{
						var eze$SettingTarget1 = new egl.org.eclipse.edt.rui.widgets.GridLayoutData();
						egl.atLine(this.eze$$fileName,43,1933,41, this);
						eze$SettingTarget1 = egl.eglx.lang.AnyValue.ezeCopyTo(new egl.org.eclipse.edt.rui.widgets.GridLayoutData(), eze$SettingTarget1);
						egl.atLine(this.eze$$fileName,43,1953,7, this);
						eze$SettingTarget1.row = 2;
						egl.atLine(this.eze$$fileName,43,1962,10, this);
						eze$SettingTarget1.column = 1;
						egl.atLine(this.eze$$fileName,43,1933,41, this);
						eze$LNNTemp9 = egl.eglx.lang.AnyValue.ezeCopyTo(eze$SettingTarget1, eze$LNNTemp9);
					}
					egl.atLine(this.eze$$fileName,43,1920,54, this);
					this.Box1.setLayoutData(egl.eglx.lang.convert(egl.eglx.lang.EAny.fromEAny, [eze$LNNTemp9.eze$$clone(),"Torg/eclipse/edt/rui/widgets/GridLayoutData;"]));
					egl.atLine(this.eze$$fileName,43,1976,9, this);
					this.Box1.setPadding(8);
					egl.atLine(this.eze$$fileName,44,1992,21, this);
					this.Box1.setChildren([egl.eglx.lang.convert(egl.eglx.ui.rui.Widget.fromWidget, [this.Image1,"org.eclipse.edt.rui.widgets.Image"])].setType("[Teglx/ui/rui/Widget;"));
					egl.atLine(this.eze$$fileName,46,2040,39, this);
					this.Image1.setSrc("E:\\workspace\\pictures\\22.jpg");
					var eze$LNNTemp10 = null;
					{
						var eze$SettingTarget1 = new egl.org.eclipse.edt.rui.widgets.GridLayoutData();
						egl.atLine(this.eze$$fileName,48,2128,41, this);
						eze$SettingTarget1 = egl.eglx.lang.AnyValue.ezeCopyTo(new egl.org.eclipse.edt.rui.widgets.GridLayoutData(), eze$SettingTarget1);
						egl.atLine(this.eze$$fileName,48,2148,7, this);
						eze$SettingTarget1.row = 4;
						egl.atLine(this.eze$$fileName,48,2157,10, this);
						eze$SettingTarget1.column = 1;
						egl.atLine(this.eze$$fileName,48,2128,41, this);
						eze$LNNTemp10 = egl.eglx.lang.AnyValue.ezeCopyTo(eze$SettingTarget1, eze$LNNTemp10);
					}
					egl.atLine(this.eze$$fileName,48,2115,54, this);
					this.GridLayout3.setLayoutData(egl.eglx.lang.convert(egl.eglx.lang.EAny.fromEAny, [eze$LNNTemp10.eze$$clone(),"Torg/eclipse/edt/rui/widgets/GridLayoutData;"]));
					egl.atLine(this.eze$$fileName,48,2171,15, this);
					this.GridLayout3.setCellPadding(4);
					egl.atLine(this.eze$$fileName,48,2188,8, this);
					this.GridLayout3.setRows(2);
					egl.atLine(this.eze$$fileName,48,2198,11, this);
					this.GridLayout3.setColumns(1);
					egl.atLine(this.eze$$fileName,49,2216,31, this);
					this.GridLayout3.setChildren([egl.eglx.lang.convert(egl.eglx.ui.rui.Widget.fromWidget, [this.Box2,"org.eclipse.edt.rui.widgets.Box"]), egl.eglx.lang.convert(egl.eglx.ui.rui.Widget.fromWidget, [this.TextLabel4,"org.eclipse.edt.rui.widgets.TextLabel"])].setType("[Teglx/ui/rui/Widget;"));
					var eze$LNNTemp11 = null;
					{
						var eze$SettingTarget1 = new egl.org.eclipse.edt.rui.widgets.GridLayoutData();
						egl.atLine(this.eze$$fileName,50,2290,41, this);
						eze$SettingTarget1 = egl.eglx.lang.AnyValue.ezeCopyTo(new egl.org.eclipse.edt.rui.widgets.GridLayoutData(), eze$SettingTarget1);
						egl.atLine(this.eze$$fileName,50,2310,7, this);
						eze$SettingTarget1.row = 1;
						egl.atLine(this.eze$$fileName,50,2319,10, this);
						eze$SettingTarget1.column = 1;
						egl.atLine(this.eze$$fileName,50,2290,41, this);
						eze$LNNTemp11 = egl.eglx.lang.AnyValue.ezeCopyTo(eze$SettingTarget1, eze$LNNTemp11);
					}
					egl.atLine(this.eze$$fileName,50,2277,54, this);
					this.TextLabel4.setLayoutData(egl.eglx.lang.convert(egl.eglx.lang.EAny.fromEAny, [eze$LNNTemp11.eze$$clone(),"Torg/eclipse/edt/rui/widgets/GridLayoutData;"]));
					egl.atLine(this.eze$$fileName,50,2333,18, this);
					this.TextLabel4.setText("\u4e09\u3001\u6309\u6570\u7684\u987a\u5e8f\u586b\u3002");
					egl.atLine(this.eze$$fileName,51,2358,13, this);
					this.TextLabel4.setFont("\u5fae\u8f6f\u96c5\u9ed1");
					egl.atLine(this.eze$$fileName,52,2378,15, this);
					this.TextLabel4.setFontSize("18");
					var eze$LNNTemp12 = null;
					{
						var eze$SettingTarget1 = new egl.org.eclipse.edt.rui.widgets.GridLayoutData();
						egl.atLine(this.eze$$fileName,53,2424,41, this);
						eze$SettingTarget1 = egl.eglx.lang.AnyValue.ezeCopyTo(new egl.org.eclipse.edt.rui.widgets.GridLayoutData(), eze$SettingTarget1);
						egl.atLine(this.eze$$fileName,53,2444,7, this);
						eze$SettingTarget1.row = 2;
						egl.atLine(this.eze$$fileName,53,2453,10, this);
						eze$SettingTarget1.column = 1;
						egl.atLine(this.eze$$fileName,53,2424,41, this);
						eze$LNNTemp12 = egl.eglx.lang.AnyValue.ezeCopyTo(eze$SettingTarget1, eze$LNNTemp12);
					}
					egl.atLine(this.eze$$fileName,53,2411,54, this);
					this.Box2.setLayoutData(egl.eglx.lang.convert(egl.eglx.lang.EAny.fromEAny, [eze$LNNTemp12.eze$$clone(),"Torg/eclipse/edt/rui/widgets/GridLayoutData;"]));
					egl.atLine(this.eze$$fileName,53,2467,9, this);
					this.Box2.setPadding(8);
					egl.atLine(this.eze$$fileName,54,2483,21, this);
					this.Box2.setChildren([egl.eglx.lang.convert(egl.eglx.ui.rui.Widget.fromWidget, [this.Image2,"org.eclipse.edt.rui.widgets.Image"])].setType("[Teglx/ui/rui/Widget;"));
					egl.atLine(this.eze$$fileName,56,2531,39, this);
					this.Image2.setSrc("E:\\workspace\\pictures\\23.jpg");
					egl.atLine(this.eze$$fileName,59,2601,39, this);
					this.Image3.setSrc("E:\\workspace\\pictures\\21.jpg");
					egl.atLine(this.eze$$fileName,60,2647,15, this);
					this.Image3.setMarginTop(180);
					egl.atLine(this.eze$$fileName,61,2669,17, this);
					this.Image3.setMarginLeft(-280);
					var eze$LNNTemp13 = null;
					{
						var eze$SettingTarget1 = new egl.org.eclipse.edt.rui.widgets.GridLayoutData();
						egl.atLine(this.eze$$fileName,63,2735,41, this);
						eze$SettingTarget1 = egl.eglx.lang.AnyValue.ezeCopyTo(new egl.org.eclipse.edt.rui.widgets.GridLayoutData(), eze$SettingTarget1);
						egl.atLine(this.eze$$fileName,63,2755,7, this);
						eze$SettingTarget1.row = 5;
						egl.atLine(this.eze$$fileName,63,2764,10, this);
						eze$SettingTarget1.column = 1;
						egl.atLine(this.eze$$fileName,63,2735,41, this);
						eze$LNNTemp13 = egl.eglx.lang.AnyValue.ezeCopyTo(eze$SettingTarget1, eze$LNNTemp13);
					}
					egl.atLine(this.eze$$fileName,63,2722,54, this);
					this.GridLayout4.setLayoutData(egl.eglx.lang.convert(egl.eglx.lang.EAny.fromEAny, [eze$LNNTemp13.eze$$clone(),"Torg/eclipse/edt/rui/widgets/GridLayoutData;"]));
					egl.atLine(this.eze$$fileName,63,2778,15, this);
					this.GridLayout4.setCellPadding(4);
					egl.atLine(this.eze$$fileName,63,2795,8, this);
					this.GridLayout4.setRows(2);
					egl.atLine(this.eze$$fileName,63,2805,11, this);
					this.GridLayout4.setColumns(1);
					egl.atLine(this.eze$$fileName,64,2823,37, this);
					this.GridLayout4.setChildren([egl.eglx.lang.convert(egl.eglx.ui.rui.Widget.fromWidget, [this.TextLabel6,"org.eclipse.edt.rui.widgets.TextLabel"]), egl.eglx.lang.convert(egl.eglx.ui.rui.Widget.fromWidget, [this.TextLabel5,"org.eclipse.edt.rui.widgets.TextLabel"])].setType("[Teglx/ui/rui/Widget;"));
					var eze$LNNTemp14 = null;
					{
						var eze$SettingTarget1 = new egl.org.eclipse.edt.rui.widgets.GridLayoutData();
						egl.atLine(this.eze$$fileName,65,2903,41, this);
						eze$SettingTarget1 = egl.eglx.lang.AnyValue.ezeCopyTo(new egl.org.eclipse.edt.rui.widgets.GridLayoutData(), eze$SettingTarget1);
						egl.atLine(this.eze$$fileName,65,2923,7, this);
						eze$SettingTarget1.row = 1;
						egl.atLine(this.eze$$fileName,65,2932,10, this);
						eze$SettingTarget1.column = 1;
						egl.atLine(this.eze$$fileName,65,2903,41, this);
						eze$LNNTemp14 = egl.eglx.lang.AnyValue.ezeCopyTo(eze$SettingTarget1, eze$LNNTemp14);
					}
					egl.atLine(this.eze$$fileName,65,2890,54, this);
					this.TextLabel5.setLayoutData(egl.eglx.lang.convert(egl.eglx.lang.EAny.fromEAny, [eze$LNNTemp14.eze$$clone(),"Torg/eclipse/edt/rui/widgets/GridLayoutData;"]));
					egl.atLine(this.eze$$fileName,65,2946,54, this);
					this.TextLabel5.setText("\u56db\u3001\u8fd9\u91cc\u4e00\u5171\u6709( )\u4e2a\u6570\uff0c\u6700\u5927\u7684\u6570\u662f( )\uff0c\u6700\u5c0f\u7684\u6570\u662f( )\u3002\u6bd42\u5927\u53c8\u6bd49\u5c0f\u7684\u6570\u662f\uff08 \uff09\u3002");
					egl.atLine(this.eze$$fileName,66,3007,13, this);
					this.TextLabel5.setFont("\u5fae\u8f6f\u96c5\u9ed1");
					egl.atLine(this.eze$$fileName,67,3027,15, this);
					this.TextLabel5.setFontSize("18");
					var eze$LNNTemp15 = null;
					{
						var eze$SettingTarget1 = new egl.org.eclipse.edt.rui.widgets.GridLayoutData();
						egl.atLine(this.eze$$fileName,68,3085,41, this);
						eze$SettingTarget1 = egl.eglx.lang.AnyValue.ezeCopyTo(new egl.org.eclipse.edt.rui.widgets.GridLayoutData(), eze$SettingTarget1);
						egl.atLine(this.eze$$fileName,68,3105,7, this);
						eze$SettingTarget1.row = 2;
						egl.atLine(this.eze$$fileName,68,3114,10, this);
						eze$SettingTarget1.column = 1;
						egl.atLine(this.eze$$fileName,68,3085,41, this);
						eze$LNNTemp15 = egl.eglx.lang.AnyValue.ezeCopyTo(eze$SettingTarget1, eze$LNNTemp15);
					}
					egl.atLine(this.eze$$fileName,68,3072,54, this);
					this.TextLabel6.setLayoutData(egl.eglx.lang.convert(egl.eglx.lang.EAny.fromEAny, [eze$LNNTemp15.eze$$clone(),"Torg/eclipse/edt/rui/widgets/GridLayoutData;"]));
					egl.atLine(this.eze$$fileName,68,3128,24, this);
					this.TextLabel6.setText("3\u30015\u30012\u30017\u30014\u30019\u30011\u30018");
					egl.atLine(this.eze$$fileName,69,3159,13, this);
					this.TextLabel6.setFont("\u5fae\u8f6f\u96c5\u9ed1");
					egl.atLine(this.eze$$fileName,70,3179,15, this);
					this.TextLabel6.setFontSize("16");
					egl.atLine(this.eze$$fileName,15,340,28, this);
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
				var ezert$$2 = new egl.client.client.stationery();
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
				ezert$$2.Box2 = ezert$$1.Box2 === null ? null : ezert$$1.Box2.eze$$clone();
				ezert$$2.Image2 = ezert$$1.Image2 === null ? null : ezert$$1.Image2.eze$$clone();
				ezert$$2.Image3 = ezert$$1.Image3 === null ? null : ezert$$1.Image3.eze$$clone();
				ezert$$2.GridLayout4 = ezert$$1.GridLayout4 === null ? null : ezert$$1.GridLayout4.eze$$clone();
				ezert$$2.TextLabel5 = ezert$$1.TextLabel5 === null ? null : ezert$$1.TextLabel5.eze$$clone();
				ezert$$2.TextLabel6 = ezert$$1.TextLabel6 === null ? null : ezert$$1.TextLabel6.eze$$clone();
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
					{name: "Box2", sig: "org.eclipse.edt.rui.widgets.Box"},
					{name: "Image2", sig: "org.eclipse.edt.rui.widgets.Image"},
					{name: "Image3", sig: "org.eclipse.edt.rui.widgets.Image"},
					{name: "GridLayout4", sig: "org.eclipse.edt.rui.widgets.GridLayout"},
					{name: "TextLabel5", sig: "org.eclipse.edt.rui.widgets.TextLabel"},
					{name: "TextLabel6", sig: "org.eclipse.edt.rui.widgets.TextLabel"}];
				}
				return this.fieldSigs;
			}
			,
			"eze$$getAnnotations": function() {
				if(this.annotations === undefined){
					this.annotations = {};
					this.annotations["XMLRootElement"] = new egl.eglx.xml.binding.annotation.XMLRootElement("stationery", null, false);
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
					annotations["XMLStyle"] = new egl.eglx.xml.binding.annotation.XMLElement("Box2", null, false, false);
					annotations["JsonName"] = new egl.eglx.json.JsonName("Box2");
					this.fieldInfos[14] =new egl.eglx.services.FieldInfo("Box2", "Box2", "org.eclipse.edt.rui.widgets.Box", egl.org.eclipse.edt.rui.widgets.Box, annotations);
					annotations = {};
					annotations["XMLStyle"] = new egl.eglx.xml.binding.annotation.XMLElement("Image2", null, false, false);
					annotations["JsonName"] = new egl.eglx.json.JsonName("Image2");
					this.fieldInfos[15] =new egl.eglx.services.FieldInfo("Image2", "Image2", "org.eclipse.edt.rui.widgets.Image", egl.org.eclipse.edt.rui.widgets.Image, annotations);
					annotations = {};
					annotations["XMLStyle"] = new egl.eglx.xml.binding.annotation.XMLElement("Image3", null, false, false);
					annotations["JsonName"] = new egl.eglx.json.JsonName("Image3");
					this.fieldInfos[16] =new egl.eglx.services.FieldInfo("Image3", "Image3", "org.eclipse.edt.rui.widgets.Image", egl.org.eclipse.edt.rui.widgets.Image, annotations);
					annotations = {};
					annotations["XMLStyle"] = new egl.eglx.xml.binding.annotation.XMLElement("GridLayout4", null, false, false);
					annotations["JsonName"] = new egl.eglx.json.JsonName("GridLayout4");
					this.fieldInfos[17] =new egl.eglx.services.FieldInfo("GridLayout4", "GridLayout4", "org.eclipse.edt.rui.widgets.GridLayout", egl.org.eclipse.edt.rui.widgets.GridLayout, annotations);
					annotations = {};
					annotations["XMLStyle"] = new egl.eglx.xml.binding.annotation.XMLElement("TextLabel5", null, false, false);
					annotations["JsonName"] = new egl.eglx.json.JsonName("TextLabel5");
					this.fieldInfos[18] =new egl.eglx.services.FieldInfo("TextLabel5", "TextLabel5", "org.eclipse.edt.rui.widgets.TextLabel", egl.org.eclipse.edt.rui.widgets.TextLabel, annotations);
					annotations = {};
					annotations["XMLStyle"] = new egl.eglx.xml.binding.annotation.XMLElement("TextLabel6", null, false, false);
					annotations["JsonName"] = new egl.eglx.json.JsonName("TextLabel6");
					this.fieldInfos[19] =new egl.eglx.services.FieldInfo("TextLabel6", "TextLabel6", "org.eclipse.edt.rui.widgets.TextLabel", egl.org.eclipse.edt.rui.widgets.TextLabel, annotations);
				}
				return this.fieldInfos;
			}
			,
			"start": function() {
				try { egl.enter("start",this,arguments);
					egl.atLine(this.eze$$fileName,72,3203,24, this);
					if (!egl.debugg) egl.leave();
				} finally {
					if (!egl.debugg){
					} else { egl.leave(); }
				}
			}
			,
			"toString": function() {
				return "[stationery]";
			}
			,
			"eze$$getName": function() {
				return "stationery";
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
				{name: "Box2", value : eze$$parent.Box2, type : "org.eclipse.edt.rui.widgets.Box", jsName : "Box2"},
				{name: "Image2", value : eze$$parent.Image2, type : "org.eclipse.edt.rui.widgets.Image", jsName : "Image2"},
				{name: "Image3", value : eze$$parent.Image3, type : "org.eclipse.edt.rui.widgets.Image", jsName : "Image3"},
				{name: "GridLayout4", value : eze$$parent.GridLayout4, type : "org.eclipse.edt.rui.widgets.GridLayout", jsName : "GridLayout4"},
				{name: "TextLabel5", value : eze$$parent.TextLabel5, type : "org.eclipse.edt.rui.widgets.TextLabel", jsName : "TextLabel5"},
				{name: "TextLabel6", value : eze$$parent.TextLabel6, type : "org.eclipse.edt.rui.widgets.TextLabel", jsName : "TextLabel6"},
				{name: "document", value : eze$$parent.document, type : "eglx.ui.rui.Document", jsName : "document"},
				{name: "initialUI", value : eze$$parent.initialUI, type : "eglx.lang.EList<eglx.ui.rui.Widget>", jsName : "!initialUI"}
				];
			}
		}
	);
});
