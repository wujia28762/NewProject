define(["client/client/Test1", "org/eclipse/edt/rui/widgets/Box", "client/client/Test4", "client/client/Test2", "ezekw$$dojo/widgets/DojoLib", "eglx/ui/rui/eze$$View", "org/eclipse/edt/rui/widgets/TextLabel", "eglx/ui/rui/eze$$Event", "ezekw$$dojo/widgets/eze$$DojoContentPane", "org/eclipse/edt/rui/widgets/HyperLink", "client/client/Test3", "ezekw$$dojo/widgets/eze$$DojoTabContainer", "ezekw$$dojo/widgets/eze$$DojoButton", "org/eclipse/edt/rui/widgets/GridLayoutData", "org/eclipse/edt/rui/widgets/GridLayout"],function(){
	egl.loadCSS("css/NewProject.css");
	egl.defineRUIHandler("client.client", "Test", {
		"eze$$fileName" : "client/client/Test.egl",
		"eze$$runtimePropertiesFile" : "client/client/Test",
			"constructor": function() {
				this.start();
			}
			,
			"eze$$setEmpty": function() {
				new egl.dojo.widgets.DojoLib();
				this.ui = new egl.org.eclipse.edt.rui.widgets.GridLayout();
				this.Box = new egl.org.eclipse.edt.rui.widgets.Box();
				this.TextLabel = new egl.org.eclipse.edt.rui.widgets.TextLabel();
				this.TabContainer = new egl.dojo.widgets.DojoTabContainer();
				this.TabContainer1 = new egl.dojo.widgets.DojoTabContainer();
				this.GridLayout = new egl.org.eclipse.edt.rui.widgets.GridLayout();
				this.GridLayout1 = new egl.org.eclipse.edt.rui.widgets.GridLayout();
				this.Box1 = new egl.org.eclipse.edt.rui.widgets.Box();
				this.TextLabel1 = new egl.org.eclipse.edt.rui.widgets.TextLabel();
				this.Box2 = new egl.org.eclipse.edt.rui.widgets.Box();
				this.Button1 = new egl.dojo.widgets.DojoButton();
				this.Button2 = new egl.dojo.widgets.DojoButton();
				this.Button3 = new egl.dojo.widgets.DojoButton();
				this.Button4 = new egl.dojo.widgets.DojoButton();
				this.GridLayout2 = new egl.org.eclipse.edt.rui.widgets.GridLayout();
				this.BoxBody = new egl.org.eclipse.edt.rui.widgets.Box();
				this.BoxCircuitTest = new egl.org.eclipse.edt.rui.widgets.Box();
				this.HyperLinkCircuitTest1 = new egl.org.eclipse.edt.rui.widgets.HyperLink();
				this.TextLabelCircuitTest = new egl.org.eclipse.edt.rui.widgets.TextLabel();
				this.HyperLinkCircuitTest2 = new egl.org.eclipse.edt.rui.widgets.HyperLink();
				this.HyperLinkCircuitTest3 = new egl.org.eclipse.edt.rui.widgets.HyperLink();
				this.HyperLinkCircuitTest4 = new egl.org.eclipse.edt.rui.widgets.HyperLink();
				this.HyperLinkCircuitTest5 = new egl.org.eclipse.edt.rui.widgets.HyperLink();
				this.BoxElecTecTest = new egl.org.eclipse.edt.rui.widgets.Box();
				this.HyperLinkElecTecTest1 = new egl.org.eclipse.edt.rui.widgets.HyperLink();
				this.TextLabelElecTecTest = new egl.org.eclipse.edt.rui.widgets.TextLabel();
				this.HyperLinkElecTecTest2 = new egl.org.eclipse.edt.rui.widgets.HyperLink();
				this.HyperLinkElecTecTest3 = new egl.org.eclipse.edt.rui.widgets.HyperLink();
				this.BoxElecMeaTest = new egl.org.eclipse.edt.rui.widgets.Box();
				this.HyperLinkElecMeaTest1 = new egl.org.eclipse.edt.rui.widgets.HyperLink();
				this.TextLabelElecMeaTest = new egl.org.eclipse.edt.rui.widgets.TextLabel();
				this.HyperLinkElecMeaTest2 = new egl.org.eclipse.edt.rui.widgets.HyperLink();
				this.HyperLinkElecMeaTest3 = new egl.org.eclipse.edt.rui.widgets.HyperLink();
				this.HyperLinkElecMeaTest4 = new egl.org.eclipse.edt.rui.widgets.HyperLink();
				this.HyperLinkElecMeaTest5 = new egl.org.eclipse.edt.rui.widgets.HyperLink();
				this.BoxSignalAnaTest = new egl.org.eclipse.edt.rui.widgets.Box();
				this.HyperLinkSignalAnaTest1 = new egl.org.eclipse.edt.rui.widgets.HyperLink();
				this.TextLabelSignalAnaTest = new egl.org.eclipse.edt.rui.widgets.TextLabel();
				this.HyperLinkSignalAnaTest2 = new egl.org.eclipse.edt.rui.widgets.HyperLink();
				this.BoxComprehensiveTest = new egl.org.eclipse.edt.rui.widgets.Box();
				this.HyperLinkComprehensiveTest1 = new egl.org.eclipse.edt.rui.widgets.HyperLink();
				this.TextLabelComprehensiveTest = new egl.org.eclipse.edt.rui.widgets.TextLabel();
				this.HyperLinkComprehensiveTest2 = new egl.org.eclipse.edt.rui.widgets.HyperLink();
				this.HyperLinkComprehensiveTest3 = new egl.org.eclipse.edt.rui.widgets.HyperLink();
				this.HyperLinkComprehensiveTest4 = new egl.org.eclipse.edt.rui.widgets.HyperLink();
				this.BoxMyTest = new egl.org.eclipse.edt.rui.widgets.Box();
				this.BoxMyResult = new egl.org.eclipse.edt.rui.widgets.Box();
			}
			,
			"eze$$setInitial": function() {
				try { egl.enter("<init>",this,arguments);
					this.eze$$setEmpty();
					egl.atLine(this.eze$$fileName,23,647,11, this);
					this.ui.setColumns(1);
					egl.atLine(this.eze$$fileName,23,660,8, this);
					this.ui.setRows(2);
					egl.atLine(this.eze$$fileName,23,670,15, this);
					this.ui.setCellPadding(4);
					egl.atLine(this.eze$$fileName,23,687,32, this);
					this.ui.setChildren([egl.eglx.lang.convert(egl.eglx.ui.rui.Widget.fromWidget, [this.TabContainer,"dojo.widgets.DojoTabContainer"]), egl.eglx.lang.convert(egl.eglx.ui.rui.Widget.fromWidget, [this.Box,"org.eclipse.edt.rui.widgets.Box"])].setType("[Teglx/ui/rui/Widget;"));
					var eze$LNNTemp1 = null;
					{
						var eze$SettingTarget1 = new egl.org.eclipse.edt.rui.widgets.GridLayoutData();
						egl.atLine(this.eze$$fileName,24,748,41, this);
						eze$SettingTarget1 = egl.eglx.lang.AnyValue.ezeCopyTo(new egl.org.eclipse.edt.rui.widgets.GridLayoutData(), eze$SettingTarget1);
						egl.atLine(this.eze$$fileName,24,768,7, this);
						eze$SettingTarget1.row = 1;
						egl.atLine(this.eze$$fileName,24,777,10, this);
						eze$SettingTarget1.column = 1;
						egl.atLine(this.eze$$fileName,24,748,41, this);
						eze$LNNTemp1 = egl.eglx.lang.AnyValue.ezeCopyTo(eze$SettingTarget1, eze$LNNTemp1);
					}
					egl.atLine(this.eze$$fileName,24,735,54, this);
					this.Box.setLayoutData(egl.eglx.lang.convert(egl.eglx.lang.EAny.fromEAny, [eze$LNNTemp1.eze$$clone(),"Torg/eclipse/edt/rui/widgets/GridLayoutData;"]));
					egl.atLine(this.eze$$fileName,24,791,9, this);
					this.Box.setPadding(8);
					egl.atLine(this.eze$$fileName,25,807,24, this);
					this.Box.setChildren([egl.eglx.lang.convert(egl.eglx.ui.rui.Widget.fromWidget, [this.TextLabel,"org.eclipse.edt.rui.widgets.TextLabel"])].setType("[Teglx/ui/rui/Widget;"));
					egl.atLine(this.eze$$fileName,26,860,13, this);
					this.TextLabel.setText("\u5728\u7ebf\u6d4b\u8bd5");
					egl.atLine(this.eze$$fileName,27,880,21, this);
					this.TextLabel.setFontWeight("bolder");
					egl.atLine(this.eze$$fileName,28,908,13, this);
					this.TextLabel.setFont("\u534e\u6587\u884c\u6977");
					egl.atLine(this.eze$$fileName,29,928,21, this);
					this.TextLabel.setColor("YellowGreen");
					egl.atLine(this.eze$$fileName,30,956,15, this);
					this.TextLabel.setFontSize("25");
					egl.atLine(this.eze$$fileName,31,978,17, this);
					this.TextLabel.setPaddingLeft(380);
					var eze$LNNTemp2 = null;
					{
						var eze$SettingTarget1 = new egl.org.eclipse.edt.rui.widgets.GridLayoutData();
						egl.atLine(this.eze$$fileName,32,1047,41, this);
						eze$SettingTarget1 = egl.eglx.lang.AnyValue.ezeCopyTo(new egl.org.eclipse.edt.rui.widgets.GridLayoutData(), eze$SettingTarget1);
						egl.atLine(this.eze$$fileName,32,1067,7, this);
						eze$SettingTarget1.row = 2;
						egl.atLine(this.eze$$fileName,32,1076,10, this);
						eze$SettingTarget1.column = 1;
						egl.atLine(this.eze$$fileName,32,1047,41, this);
						eze$LNNTemp2 = egl.eglx.lang.AnyValue.ezeCopyTo(eze$SettingTarget1, eze$LNNTemp2);
					}
					egl.atLine(this.eze$$fileName,32,1034,54, this);
					this.TabContainer.setLayoutData(egl.eglx.lang.convert(egl.eglx.lang.EAny.fromEAny, [eze$LNNTemp2.eze$$clone(),"Torg/eclipse/edt/rui/widgets/GridLayoutData;"]));
					egl.atLine(this.eze$$fileName,33,1092,13, this);
					this.TabContainer.setWidth("900");
					egl.atLine(this.eze$$fileName,33,1107,14, this);
					this.TabContainer.setHeight("400");
					egl.atLine(this.eze$$fileName,33,1123,34, this);
					this.TabContainer.setTabPosition(egl.dojo.widgets.DojoLib['$inst'].POSITION_TOP);
					var eze$LNNTemp8 = null;
					{
						var eze$SettingTarget1;
						egl.atLine(this.eze$$fileName,40,1506,51, this);
						eze$SettingTarget1 = (function () {
							var eze$Temp9 = new egl.dojo.widgets.DojoContentPane();
							return eze$Temp9;
						}).call(this);
						egl.atLine(this.eze$$fileName,40,1528,13, this);
						eze$SettingTarget1.setTitle("\u516d\u5e74\u7ea7");
						egl.atLine(this.eze$$fileName,40,1543,13, this);
						eze$SettingTarget1.setChildren((function() { var eze$Temp10 = []; eze$Temp10.setType("[eglx.ui.rui.Widget");
							for (var i = 0; i < 0; i++) {
							eze$Temp10[i] = new egl.eglx.ui.rui.Widget();}
						return eze$Temp10;})());
						egl.atLine(this.eze$$fileName,40,1506,51, this);
						eze$LNNTemp8 = eze$SettingTarget1;
					}
					var eze$LNNTemp7 = null;
					{
						var eze$SettingTarget1;
						egl.atLine(this.eze$$fileName,39,1450,51, this);
						eze$SettingTarget1 = (function () {
							var eze$Temp11 = new egl.dojo.widgets.DojoContentPane();
							return eze$Temp11;
						}).call(this);
						egl.atLine(this.eze$$fileName,39,1472,13, this);
						eze$SettingTarget1.setTitle("\u4e94\u5e74\u7ea7");
						egl.atLine(this.eze$$fileName,39,1487,13, this);
						eze$SettingTarget1.setChildren((function() { var eze$Temp12 = []; eze$Temp12.setType("[eglx.ui.rui.Widget");
							for (var i = 0; i < 0; i++) {
							eze$Temp12[i] = new egl.eglx.ui.rui.Widget();}
						return eze$Temp12;})());
						egl.atLine(this.eze$$fileName,39,1450,51, this);
						eze$LNNTemp7 = eze$SettingTarget1;
					}
					var eze$LNNTemp6 = null;
					{
						var eze$SettingTarget1;
						egl.atLine(this.eze$$fileName,38,1394,51, this);
						eze$SettingTarget1 = (function () {
							var eze$Temp13 = new egl.dojo.widgets.DojoContentPane();
							return eze$Temp13;
						}).call(this);
						egl.atLine(this.eze$$fileName,38,1416,13, this);
						eze$SettingTarget1.setTitle("\u56db\u5e74\u7ea7");
						egl.atLine(this.eze$$fileName,38,1431,13, this);
						eze$SettingTarget1.setChildren((function() { var eze$Temp14 = []; eze$Temp14.setType("[eglx.ui.rui.Widget");
							for (var i = 0; i < 0; i++) {
							eze$Temp14[i] = new egl.eglx.ui.rui.Widget();}
						return eze$Temp14;})());
						egl.atLine(this.eze$$fileName,38,1394,51, this);
						eze$LNNTemp6 = eze$SettingTarget1;
					}
					var eze$LNNTemp5 = null;
					{
						var eze$SettingTarget1;
						egl.atLine(this.eze$$fileName,37,1338,51, this);
						eze$SettingTarget1 = (function () {
							var eze$Temp15 = new egl.dojo.widgets.DojoContentPane();
							return eze$Temp15;
						}).call(this);
						egl.atLine(this.eze$$fileName,37,1360,13, this);
						eze$SettingTarget1.setTitle("\u4e09\u5e74\u7ea7");
						egl.atLine(this.eze$$fileName,37,1375,13, this);
						eze$SettingTarget1.setChildren((function() { var eze$Temp16 = []; eze$Temp16.setType("[eglx.ui.rui.Widget");
							for (var i = 0; i < 0; i++) {
							eze$Temp16[i] = new egl.eglx.ui.rui.Widget();}
						return eze$Temp16;})());
						egl.atLine(this.eze$$fileName,37,1338,51, this);
						eze$LNNTemp5 = eze$SettingTarget1;
					}
					var eze$LNNTemp4 = null;
					{
						var eze$SettingTarget1;
						egl.atLine(this.eze$$fileName,36,1282,51, this);
						eze$SettingTarget1 = (function () {
							var eze$Temp17 = new egl.dojo.widgets.DojoContentPane();
							return eze$Temp17;
						}).call(this);
						egl.atLine(this.eze$$fileName,36,1304,13, this);
						eze$SettingTarget1.setTitle("\u4e8c\u5e74\u7ea7");
						egl.atLine(this.eze$$fileName,36,1319,13, this);
						eze$SettingTarget1.setChildren((function() { var eze$Temp18 = []; eze$Temp18.setType("[eglx.ui.rui.Widget");
							for (var i = 0; i < 0; i++) {
							eze$Temp18[i] = new egl.eglx.ui.rui.Widget();}
						return eze$Temp18;})());
						egl.atLine(this.eze$$fileName,36,1282,51, this);
						eze$LNNTemp4 = eze$SettingTarget1;
					}
					var eze$LNNTemp3 = null;
					var eze$LNNTemp20 = null;
					{
						var eze$SettingTarget1;
						egl.atLine(this.eze$$fileName,51,1868,135, this);
						eze$SettingTarget1 = (function () {
							var eze$Temp21 = new egl.dojo.widgets.DojoContentPane();
							return eze$Temp21;
						}).call(this);
						egl.atLine(this.eze$$fileName,51,1890,14, this);
						eze$SettingTarget1.setTitle("\u6211\u7684\u8bd5\u9898");
						egl.atLine(this.eze$$fileName,51,1906,96, this);
						eze$SettingTarget1.setChildren([egl.eglx.lang.convert(egl.eglx.ui.rui.Widget.fromWidget, [this.BoxCircuitTest,"org.eclipse.edt.rui.widgets.Box"]), egl.eglx.lang.convert(egl.eglx.ui.rui.Widget.fromWidget, [this.BoxElecTecTest,"org.eclipse.edt.rui.widgets.Box"]), egl.eglx.lang.convert(egl.eglx.ui.rui.Widget.fromWidget, [this.BoxElecMeaTest,"org.eclipse.edt.rui.widgets.Box"]), egl.eglx.lang.convert(egl.eglx.ui.rui.Widget.fromWidget, [this.BoxSignalAnaTest,"org.eclipse.edt.rui.widgets.Box"]), egl.eglx.lang.convert(egl.eglx.ui.rui.Widget.fromWidget, [this.BoxComprehensiveTest,"org.eclipse.edt.rui.widgets.Box"])].setType("[Teglx/ui/rui/Widget;"));
						egl.atLine(this.eze$$fileName,51,1868,135, this);
						eze$LNNTemp20 = eze$SettingTarget1;
					}
					var eze$LNNTemp19 = null;
					var eze$LNNTemp27 = null;
					{
						var eze$SettingTarget1 = new egl.org.eclipse.edt.rui.widgets.GridLayoutData();
						egl.atLine(this.eze$$fileName,59,2383,41, this);
						eze$SettingTarget1 = egl.eglx.lang.AnyValue.ezeCopyTo(new egl.org.eclipse.edt.rui.widgets.GridLayoutData(), eze$SettingTarget1);
						egl.atLine(this.eze$$fileName,59,2403,7, this);
						eze$SettingTarget1.row = 1;
						egl.atLine(this.eze$$fileName,59,2412,10, this);
						eze$SettingTarget1.column = 1;
						egl.atLine(this.eze$$fileName,59,2383,41, this);
						eze$LNNTemp27 = egl.eglx.lang.AnyValue.ezeCopyTo(eze$SettingTarget1, eze$LNNTemp27);
					}
					var eze$LNNTemp26 = null;
					{
						var eze$SettingTarget1 = new egl.org.eclipse.edt.rui.widgets.GridLayoutData();
						egl.atLine(this.eze$$fileName,64,2587,41, this);
						eze$SettingTarget1 = egl.eglx.lang.AnyValue.ezeCopyTo(new egl.org.eclipse.edt.rui.widgets.GridLayoutData(), eze$SettingTarget1);
						egl.atLine(this.eze$$fileName,64,2607,7, this);
						eze$SettingTarget1.row = 1;
						egl.atLine(this.eze$$fileName,64,2616,10, this);
						eze$SettingTarget1.column = 2;
						egl.atLine(this.eze$$fileName,64,2587,41, this);
						eze$LNNTemp26 = egl.eglx.lang.AnyValue.ezeCopyTo(eze$SettingTarget1, eze$LNNTemp26);
					}
					var eze$LNNTemp25 = null;
					{
						var eze$SettingTarget1 = new egl.org.eclipse.edt.rui.widgets.GridLayoutData();
						egl.atLine(this.eze$$fileName,57,2239,41, this);
						eze$SettingTarget1 = egl.eglx.lang.AnyValue.ezeCopyTo(new egl.org.eclipse.edt.rui.widgets.GridLayoutData(), eze$SettingTarget1);
						egl.atLine(this.eze$$fileName,57,2259,7, this);
						eze$SettingTarget1.row = 1;
						egl.atLine(this.eze$$fileName,57,2268,10, this);
						eze$SettingTarget1.column = 1;
						egl.atLine(this.eze$$fileName,57,2239,41, this);
						eze$LNNTemp25 = egl.eglx.lang.AnyValue.ezeCopyTo(eze$SettingTarget1, eze$LNNTemp25);
					}
					var eze$LNNTemp24 = null;
					{
						var eze$SettingTarget1 = new egl.org.eclipse.edt.rui.widgets.GridLayoutData();
						egl.atLine(this.eze$$fileName,80,3311,41, this);
						eze$SettingTarget1 = egl.eglx.lang.AnyValue.ezeCopyTo(new egl.org.eclipse.edt.rui.widgets.GridLayoutData(), eze$SettingTarget1);
						egl.atLine(this.eze$$fileName,80,3331,7, this);
						eze$SettingTarget1.row = 1;
						egl.atLine(this.eze$$fileName,80,3340,10, this);
						eze$SettingTarget1.column = 1;
						egl.atLine(this.eze$$fileName,80,3311,41, this);
						eze$LNNTemp24 = egl.eglx.lang.AnyValue.ezeCopyTo(eze$SettingTarget1, eze$LNNTemp24);
					}
					var eze$LNNTemp23 = null;
					{
						var eze$SettingTarget1 = new egl.org.eclipse.edt.rui.widgets.GridLayoutData();
						egl.atLine(this.eze$$fileName,78,3167,41, this);
						eze$SettingTarget1 = egl.eglx.lang.AnyValue.ezeCopyTo(new egl.org.eclipse.edt.rui.widgets.GridLayoutData(), eze$SettingTarget1);
						egl.atLine(this.eze$$fileName,78,3187,7, this);
						eze$SettingTarget1.row = 2;
						egl.atLine(this.eze$$fileName,78,3196,10, this);
						eze$SettingTarget1.column = 1;
						egl.atLine(this.eze$$fileName,78,3167,41, this);
						eze$LNNTemp23 = egl.eglx.lang.AnyValue.ezeCopyTo(eze$SettingTarget1, eze$LNNTemp23);
					}
					var eze$LNNTemp22 = null;
					{
						var eze$SettingTarget1 = new egl.org.eclipse.edt.rui.widgets.GridLayoutData();
						egl.atLine(this.eze$$fileName,55,2067,41, this);
						eze$SettingTarget1 = egl.eglx.lang.AnyValue.ezeCopyTo(new egl.org.eclipse.edt.rui.widgets.GridLayoutData(), eze$SettingTarget1);
						egl.atLine(this.eze$$fileName,55,2087,7, this);
						eze$SettingTarget1.row = 2;
						egl.atLine(this.eze$$fileName,55,2096,10, this);
						eze$SettingTarget1.column = 1;
						egl.atLine(this.eze$$fileName,55,2067,41, this);
						eze$LNNTemp22 = egl.eglx.lang.AnyValue.ezeCopyTo(eze$SettingTarget1, eze$LNNTemp22);
					}
					{
						var eze$SettingTarget1;
						egl.atLine(this.eze$$fileName,48,1759,104, this);
						eze$SettingTarget1 = (function () {
							var eze$Temp28 = new egl.dojo.widgets.DojoContentPane();
							return eze$Temp28;
						}).call(this);
						egl.atLine(this.eze$$fileName,48,1781,14, this);
						eze$SettingTarget1.setTitle("\u6d4b\u8bd5\u9898\u5e93");
						egl.atLine(this.eze$$fileName,48,1797,25, this);
						eze$SettingTarget1.setChildren([egl.eglx.lang.convert(egl.eglx.ui.rui.Widget.fromWidget, [this.GridLayout,"org.eclipse.edt.rui.widgets.GridLayout"])].setType("[Teglx/ui/rui/Widget;"));
						egl.atLine(this.eze$$fileName,49,1828,13, this);
						eze$SettingTarget1.setWidth("730");
						egl.atLine(this.eze$$fileName,50,1847,14, this);
						eze$SettingTarget1.setHeight("600");
						egl.atLine(this.eze$$fileName,48,1759,104, this);
						eze$LNNTemp19 = eze$SettingTarget1;
					}
					{
						var eze$SettingTarget1;
						egl.atLine(this.eze$$fileName,35,1210,67, this);
						eze$SettingTarget1 = (function () {
							var eze$Temp29 = new egl.dojo.widgets.DojoContentPane();
							return eze$Temp29;
						}).call(this);
						egl.atLine(this.eze$$fileName,35,1232,13, this);
						eze$SettingTarget1.setTitle("\u4e00\u5e74\u7ea7");
						egl.atLine(this.eze$$fileName,35,1247,28, this);
						eze$SettingTarget1.setChildren([egl.eglx.lang.convert(egl.eglx.ui.rui.Widget.fromWidget, [this.TabContainer1,"dojo.widgets.DojoTabContainer"])].setType("[Teglx/ui/rui/Widget;"));
						egl.atLine(this.eze$$fileName,35,1210,67, this);
						eze$LNNTemp3 = eze$SettingTarget1;
					}
					egl.atLine(this.eze$$fileName,34,1194,367, this);
					this.TabContainer.setChildren([egl.eglx.lang.convert(egl.eglx.ui.rui.Widget.fromWidget, [eze$LNNTemp3,"dojo.widgets.DojoContentPane"]), egl.eglx.lang.convert(egl.eglx.ui.rui.Widget.fromWidget, [eze$LNNTemp4,"dojo.widgets.DojoContentPane"]), egl.eglx.lang.convert(egl.eglx.ui.rui.Widget.fromWidget, [eze$LNNTemp5,"dojo.widgets.DojoContentPane"]), egl.eglx.lang.convert(egl.eglx.ui.rui.Widget.fromWidget, [eze$LNNTemp6,"dojo.widgets.DojoContentPane"]), egl.eglx.lang.convert(egl.eglx.ui.rui.Widget.fromWidget, [eze$LNNTemp7,"dojo.widgets.DojoContentPane"]), egl.eglx.lang.convert(egl.eglx.ui.rui.Widget.fromWidget, [eze$LNNTemp8,"dojo.widgets.DojoContentPane"])].setType("[Teglx/ui/rui/Widget;"));
					egl.atLine(this.eze$$fileName,42,1565,15, this);
					this.TabContainer.setHeight("1000");
					egl.atLine(this.eze$$fileName,43,1584,13, this);
					this.TabContainer.setSelection(1);
					egl.atLine(this.eze$$fileName,46,1640,13, this);
					this.TabContainer1.setWidth("730");
					egl.atLine(this.eze$$fileName,46,1655,14, this);
					this.TabContainer1.setHeight("800");
					egl.atLine(this.eze$$fileName,46,1671,35, this);
					this.TabContainer1.setTabPosition(egl.dojo.widgets.DojoLib['$inst'].POSITION_LEFT);
					egl.atLine(this.eze$$fileName,47,1743,264, this);
					this.TabContainer1.setChildren([egl.eglx.lang.convert(egl.eglx.ui.rui.Widget.fromWidget, [eze$LNNTemp19,"dojo.widgets.DojoContentPane"]), egl.eglx.lang.convert(egl.eglx.ui.rui.Widget.fromWidget, [eze$LNNTemp20,"dojo.widgets.DojoContentPane"])].setType("[Teglx/ui/rui/Widget;"));
					egl.atLine(this.eze$$fileName,53,2011,13, this);
					this.TabContainer1.setSelection(2);
					egl.atLine(this.eze$$fileName,55,2054,54, this);
					this.GridLayout.setLayoutData(egl.eglx.lang.convert(egl.eglx.lang.EAny.fromEAny, [eze$LNNTemp22.eze$$clone(),"Torg/eclipse/edt/rui/widgets/GridLayoutData;"]));
					egl.atLine(this.eze$$fileName,55,2110,15, this);
					this.GridLayout.setCellPadding(4);
					egl.atLine(this.eze$$fileName,55,2127,8, this);
					this.GridLayout.setRows(2);
					egl.atLine(this.eze$$fileName,55,2137,11, this);
					this.GridLayout.setColumns(1);
					egl.atLine(this.eze$$fileName,56,2155,39, this);
					this.GridLayout.setChildren([egl.eglx.lang.convert(egl.eglx.ui.rui.Widget.fromWidget, [this.GridLayout2,"org.eclipse.edt.rui.widgets.GridLayout"]), egl.eglx.lang.convert(egl.eglx.ui.rui.Widget.fromWidget, [this.GridLayout1,"org.eclipse.edt.rui.widgets.GridLayout"])].setType("[Teglx/ui/rui/Widget;"));
					egl.atLine(this.eze$$fileName,57,2226,54, this);
					this.GridLayout1.setLayoutData(egl.eglx.lang.convert(egl.eglx.lang.EAny.fromEAny, [eze$LNNTemp25.eze$$clone(),"Torg/eclipse/edt/rui/widgets/GridLayoutData;"]));
					egl.atLine(this.eze$$fileName,57,2282,15, this);
					this.GridLayout1.setCellPadding(4);
					egl.atLine(this.eze$$fileName,57,2299,8, this);
					this.GridLayout1.setRows(1);
					egl.atLine(this.eze$$fileName,57,2309,11, this);
					this.GridLayout1.setColumns(2);
					egl.atLine(this.eze$$fileName,58,2327,25, this);
					this.GridLayout1.setChildren([egl.eglx.lang.convert(egl.eglx.ui.rui.Widget.fromWidget, [this.Box2,"org.eclipse.edt.rui.widgets.Box"]), egl.eglx.lang.convert(egl.eglx.ui.rui.Widget.fromWidget, [this.Box1,"org.eclipse.edt.rui.widgets.Box"])].setType("[Teglx/ui/rui/Widget;"));
					egl.atLine(this.eze$$fileName,59,2370,54, this);
					this.Box1.setLayoutData(egl.eglx.lang.convert(egl.eglx.lang.EAny.fromEAny, [eze$LNNTemp27.eze$$clone(),"Torg/eclipse/edt/rui/widgets/GridLayoutData;"]));
					egl.atLine(this.eze$$fileName,59,2426,9, this);
					this.Box1.setPadding(8);
					egl.atLine(this.eze$$fileName,60,2442,25, this);
					this.Box1.setChildren([egl.eglx.lang.convert(egl.eglx.ui.rui.Widget.fromWidget, [this.TextLabel1,"org.eclipse.edt.rui.widgets.TextLabel"])].setType("[Teglx/ui/rui/Widget;"));
					egl.atLine(this.eze$$fileName,61,2497,17, this);
					this.TextLabel1.setText("\u8bf7\u9009\u62e9\u6d4b\u8bd5\u7ae0\u8282\uff1a");
					egl.atLine(this.eze$$fileName,62,2521,13, this);
					this.TextLabel1.setFont("\u5fae\u8f6f\u96c5\u9ed1");
					egl.atLine(this.eze$$fileName,63,2541,15, this);
					this.TextLabel1.setFontSize("18");
					egl.atLine(this.eze$$fileName,64,2574,54, this);
					this.Box2.setLayoutData(egl.eglx.lang.convert(egl.eglx.lang.EAny.fromEAny, [eze$LNNTemp26.eze$$clone(),"Torg/eclipse/edt/rui/widgets/GridLayoutData;"]));
					egl.atLine(this.eze$$fileName,64,2630,9, this);
					this.Box2.setPadding(8);
					egl.atLine(this.eze$$fileName,65,2646,49, this);
					this.Box2.setChildren([egl.eglx.lang.convert(egl.eglx.ui.rui.Widget.fromWidget, [this.Button1,"dojo.widgets.DojoButton"]), egl.eglx.lang.convert(egl.eglx.ui.rui.Widget.fromWidget, [this.Button2,"dojo.widgets.DojoButton"]), egl.eglx.lang.convert(egl.eglx.ui.rui.Widget.fromWidget, [this.Button3,"dojo.widgets.DojoButton"]), egl.eglx.lang.convert(egl.eglx.ui.rui.Widget.fromWidget, [this.Button4,"dojo.widgets.DojoButton"])].setType("[Teglx/ui/rui/Widget;"));
					egl.atLine(this.eze$$fileName,66,2723,16, this);
					this.Button1.setText("\u4e00\u3001\u751f\u6d3b\u4e2d\u7684\u6570");
					egl.atLine(this.eze$$fileName,67,2746,13, this);
					this.Button1.setFont("\u5fae\u8f6f\u96c5\u9ed1");
					egl.atLine(this.eze$$fileName,68,2766,15, this);
					this.Button1.setFontSize("15");
					egl.atLine(this.eze$$fileName,68,2783,20, this);
					this.Button1.getOnClick().appendElement(new egl.egl.jsrt.Delegate(this, egl.client.client.Test.prototype.showcall, ""));
					egl.atLine(this.eze$$fileName,69,2831,13, this);
					this.Button2.setText("\u4e8c\u3001\u6bd4\u8f83");
					egl.atLine(this.eze$$fileName,70,2851,13, this);
					this.Button2.setFont("\u5fae\u8f6f\u96c5\u9ed1");
					egl.atLine(this.eze$$fileName,71,2871,15, this);
					this.Button2.setFontSize("15");
					egl.atLine(this.eze$$fileName,71,2888,20, this);
					this.Button2.getOnClick().appendElement(new egl.egl.jsrt.Delegate(this, egl.client.client.Test.prototype.showcall, ""));
					egl.atLine(this.eze$$fileName,72,2936,17, this);
					this.Button3.setText("\u4e09\u3001\u52a0\u51cf\u6cd5\uff08\u4e00\uff09");
					egl.atLine(this.eze$$fileName,73,2960,13, this);
					this.Button3.setFont("\u5fae\u8f6f\u96c5\u9ed1");
					egl.atLine(this.eze$$fileName,74,2980,15, this);
					this.Button3.setFontSize("15");
					egl.atLine(this.eze$$fileName,74,2997,20, this);
					this.Button3.getOnClick().appendElement(new egl.egl.jsrt.Delegate(this, egl.client.client.Test.prototype.showcall, ""));
					egl.atLine(this.eze$$fileName,75,3045,13, this);
					this.Button4.setText("\u56db\u3001\u5206\u7c7b");
					egl.atLine(this.eze$$fileName,76,3065,13, this);
					this.Button4.setFont("\u5fae\u8f6f\u96c5\u9ed1");
					egl.atLine(this.eze$$fileName,77,3085,15, this);
					this.Button4.setFontSize("15");
					egl.atLine(this.eze$$fileName,77,3103,20, this);
					this.Button4.getOnClick().appendElement(new egl.egl.jsrt.Delegate(this, egl.client.client.Test.prototype.showcall, ""));
					egl.atLine(this.eze$$fileName,78,3154,54, this);
					this.GridLayout2.setLayoutData(egl.eglx.lang.convert(egl.eglx.lang.EAny.fromEAny, [eze$LNNTemp23.eze$$clone(),"Torg/eclipse/edt/rui/widgets/GridLayoutData;"]));
					egl.atLine(this.eze$$fileName,78,3210,15, this);
					this.GridLayout2.setCellPadding(4);
					egl.atLine(this.eze$$fileName,78,3227,8, this);
					this.GridLayout2.setRows(1);
					egl.atLine(this.eze$$fileName,78,3237,11, this);
					this.GridLayout2.setColumns(1);
					egl.atLine(this.eze$$fileName,79,3255,22, this);
					this.GridLayout2.setChildren([egl.eglx.lang.convert(egl.eglx.ui.rui.Widget.fromWidget, [this.BoxBody,"org.eclipse.edt.rui.widgets.Box"])].setType("[Teglx/ui/rui/Widget;"));
					egl.atLine(this.eze$$fileName,80,3298,54, this);
					this.BoxBody.setLayoutData(egl.eglx.lang.convert(egl.eglx.lang.EAny.fromEAny, [eze$LNNTemp24.eze$$clone(),"Torg/eclipse/edt/rui/widgets/GridLayoutData;"]));
					egl.atLine(this.eze$$fileName,80,3354,9, this);
					this.BoxBody.setPadding(8);
					egl.atLine(this.eze$$fileName,81,3370,13, this);
					this.BoxBody.setWidth("790");
					egl.atLine(this.eze$$fileName,82,3409,9, this);
					this.BoxCircuitTest.setPadding(8);
					egl.atLine(this.eze$$fileName,83,3425,13, this);
					this.BoxCircuitTest.setWidth("640");
					egl.atLine(this.eze$$fileName,84,3445,13, this);
					this.BoxCircuitTest.setHeight("30");
					egl.atLine(this.eze$$fileName,85,3465,150, this);
					this.BoxCircuitTest.setChildren([egl.eglx.lang.convert(egl.eglx.ui.rui.Widget.fromWidget, [this.TextLabelCircuitTest,"org.eclipse.edt.rui.widgets.TextLabel"]), egl.eglx.lang.convert(egl.eglx.ui.rui.Widget.fromWidget, [this.HyperLinkCircuitTest1,"org.eclipse.edt.rui.widgets.HyperLink"]), egl.eglx.lang.convert(egl.eglx.ui.rui.Widget.fromWidget, [this.HyperLinkCircuitTest2,"org.eclipse.edt.rui.widgets.HyperLink"]), egl.eglx.lang.convert(egl.eglx.ui.rui.Widget.fromWidget, [this.HyperLinkCircuitTest3,"org.eclipse.edt.rui.widgets.HyperLink"]), egl.eglx.lang.convert(egl.eglx.ui.rui.Widget.fromWidget, [this.HyperLinkCircuitTest4,"org.eclipse.edt.rui.widgets.HyperLink"]), egl.eglx.lang.convert(egl.eglx.ui.rui.Widget.fromWidget, [this.HyperLinkCircuitTest5,"org.eclipse.edt.rui.widgets.HyperLink"])].setType("[Teglx/ui/rui/Widget;"));
					egl.atLine(this.eze$$fileName,86,3656,14, this);
					this.HyperLinkCircuitTest1.setText("\u53ef\u7231\u7684\u6821\u56ed");
					egl.atLine(this.eze$$fileName,87,3677,69, this);
					this.HyperLinkCircuitTest1.setHref("http://192.168.1.119:5590/NewProject/client/client/cute.html");
					egl.atLine(this.eze$$fileName,88,3753,13, this);
					this.HyperLinkCircuitTest1.setFont("\u5fae\u8f6f\u96c5\u9ed1");
					egl.atLine(this.eze$$fileName,89,3773,15, this);
					this.HyperLinkCircuitTest1.setFontSize("14");
					egl.atLine(this.eze$$fileName,90,3828,18, this);
					this.TextLabelCircuitTest.setText("\u3010\u4e00\u3001\u751f\u6d3b\u4e2d\u7684\u6570\u3011");
					egl.atLine(this.eze$$fileName,91,3853,13, this);
					this.TextLabelCircuitTest.setFont("\u5fae\u8f6f\u96c5\u9ed1");
					egl.atLine(this.eze$$fileName,92,3873,15, this);
					this.TextLabelCircuitTest.setFontSize("14");
					egl.atLine(this.eze$$fileName,93,3895,19, this);
					this.TextLabelCircuitTest.setFontWeight("bold");
					egl.atLine(this.eze$$fileName,94,3955,14, this);
					this.HyperLinkCircuitTest2.setText("\u5feb\u4e50\u7684\u5bb6\u56ed");
					egl.atLine(this.eze$$fileName,95,3976,70, this);
					this.HyperLinkCircuitTest2.setHref("http://192.168.1.119:5590/NewProject/client/client/happy.html");
					egl.atLine(this.eze$$fileName,96,4053,13, this);
					this.HyperLinkCircuitTest2.setFont("\u5fae\u8f6f\u96c5\u9ed1");
					egl.atLine(this.eze$$fileName,97,4073,15, this);
					this.HyperLinkCircuitTest2.setFontSize("14");
					egl.atLine(this.eze$$fileName,98,4095,15, this);
					this.HyperLinkCircuitTest2.setMarginLeft(10);
					egl.atLine(this.eze$$fileName,99,4151,11, this);
					this.HyperLinkCircuitTest3.setText("\u73a9\u5177");
					egl.atLine(this.eze$$fileName,100,4169,68, this);
					this.HyperLinkCircuitTest3.setHref("http://192.168.1.119:5590/NewProject/client/client/toy.html");
					egl.atLine(this.eze$$fileName,101,4244,13, this);
					this.HyperLinkCircuitTest3.setFont("\u5fae\u8f6f\u96c5\u9ed1");
					egl.atLine(this.eze$$fileName,102,4264,15, this);
					this.HyperLinkCircuitTest3.setFontSize("14");
					egl.atLine(this.eze$$fileName,103,4286,15, this);
					this.HyperLinkCircuitTest3.setMarginLeft(10);
					egl.atLine(this.eze$$fileName,104,4342,13, this);
					this.HyperLinkCircuitTest4.setText("\u5c0f\u732b\u9493\u9c7c");
					egl.atLine(this.eze$$fileName,105,4362,68, this);
					this.HyperLinkCircuitTest4.setHref("http://192.168.1.119:5590/NewProject/client/client/cat.html");
					egl.atLine(this.eze$$fileName,106,4437,13, this);
					this.HyperLinkCircuitTest4.setFont("\u5fae\u8f6f\u96c5\u9ed1");
					egl.atLine(this.eze$$fileName,107,4457,15, this);
					this.HyperLinkCircuitTest4.setFontSize("14");
					egl.atLine(this.eze$$fileName,108,4479,15, this);
					this.HyperLinkCircuitTest4.setMarginLeft(10);
					egl.atLine(this.eze$$fileName,109,4535,11, this);
					this.HyperLinkCircuitTest5.setText("\u6587\u5177");
					egl.atLine(this.eze$$fileName,110,4553,75, this);
					this.HyperLinkCircuitTest5.setHref("http://192.168.1.119:5590/NewProject/client/client/stationery.html");
					egl.atLine(this.eze$$fileName,111,4635,13, this);
					this.HyperLinkCircuitTest5.setFont("\u5fae\u8f6f\u96c5\u9ed1");
					egl.atLine(this.eze$$fileName,112,4655,15, this);
					this.HyperLinkCircuitTest5.setFontSize("14");
					egl.atLine(this.eze$$fileName,113,4677,15, this);
					this.HyperLinkCircuitTest5.setMarginLeft(10);
					egl.atLine(this.eze$$fileName,114,4720,9, this);
					this.BoxElecTecTest.setPadding(8);
					egl.atLine(this.eze$$fileName,115,4736,13, this);
					this.BoxElecTecTest.setWidth("640");
					egl.atLine(this.eze$$fileName,116,4756,13, this);
					this.BoxElecTecTest.setHeight("30");
					egl.atLine(this.eze$$fileName,117,4776,104, this);
					this.BoxElecTecTest.setChildren([egl.eglx.lang.convert(egl.eglx.ui.rui.Widget.fromWidget, [this.TextLabelElecTecTest,"org.eclipse.edt.rui.widgets.TextLabel"]), egl.eglx.lang.convert(egl.eglx.ui.rui.Widget.fromWidget, [this.HyperLinkElecTecTest1,"org.eclipse.edt.rui.widgets.HyperLink"]), egl.eglx.lang.convert(egl.eglx.ui.rui.Widget.fromWidget, [this.HyperLinkElecTecTest2,"org.eclipse.edt.rui.widgets.HyperLink"]), egl.eglx.lang.convert(egl.eglx.ui.rui.Widget.fromWidget, [this.HyperLinkElecTecTest3,"org.eclipse.edt.rui.widgets.HyperLink"])].setType("[Teglx/ui/rui/Widget;"));
					egl.atLine(this.eze$$fileName,118,4921,13, this);
					this.HyperLinkElecTecTest1.setText("\u52a8\u7269\u4e50\u56ed");
					egl.atLine(this.eze$$fileName,119,4941,71, this);
					this.HyperLinkElecTecTest1.setHref("http://192.168.1.119:5590/NewProject/client/client/animal.html");
					egl.atLine(this.eze$$fileName,120,5019,13, this);
					this.HyperLinkElecTecTest1.setFont("\u5fae\u8f6f\u96c5\u9ed1");
					egl.atLine(this.eze$$fileName,121,5039,15, this);
					this.HyperLinkElecTecTest1.setFontSize("14");
					egl.atLine(this.eze$$fileName,122,5094,15, this);
					this.TextLabelElecTecTest.setText("\u3010\u4e8c\u3001\u6bd4\u8f83\u3011");
					egl.atLine(this.eze$$fileName,123,5116,13, this);
					this.TextLabelElecTecTest.setFont("\u5fae\u8f6f\u96c5\u9ed1");
					egl.atLine(this.eze$$fileName,124,5136,15, this);
					this.TextLabelElecTecTest.setFontSize("14");
					egl.atLine(this.eze$$fileName,125,5158,19, this);
					this.TextLabelElecTecTest.setFontWeight("bold");
					egl.atLine(this.eze$$fileName,126,5218,11, this);
					this.HyperLinkElecTecTest2.setText("\u9ad8\u77ee");
					egl.atLine(this.eze$$fileName,127,5236,68, this);
					this.HyperLinkElecTecTest2.setHref("http://192.168.1.119:5590/NewProject/client/client/top.html");
					egl.atLine(this.eze$$fileName,128,5311,13, this);
					this.HyperLinkElecTecTest2.setFont("\u5fae\u8f6f\u96c5\u9ed1");
					egl.atLine(this.eze$$fileName,129,5331,15, this);
					this.HyperLinkElecTecTest2.setFontSize("14");
					egl.atLine(this.eze$$fileName,130,5353,15, this);
					this.HyperLinkElecTecTest2.setMarginLeft(10);
					egl.atLine(this.eze$$fileName,131,5409,11, this);
					this.HyperLinkElecTecTest3.setText("\u8f7b\u91cd");
					egl.atLine(this.eze$$fileName,132,5427,70, this);
					this.HyperLinkElecTecTest3.setHref("http://192.168.1.119:5590/NewProject/client/client/light.html");
					egl.atLine(this.eze$$fileName,133,5504,13, this);
					this.HyperLinkElecTecTest3.setFont("\u5fae\u8f6f\u96c5\u9ed1");
					egl.atLine(this.eze$$fileName,134,5524,15, this);
					this.HyperLinkElecTecTest3.setFontSize("14");
					egl.atLine(this.eze$$fileName,135,5546,15, this);
					this.HyperLinkElecTecTest3.setMarginLeft(10);
					egl.atLine(this.eze$$fileName,136,5590,9, this);
					this.BoxElecMeaTest.setPadding(8);
					egl.atLine(this.eze$$fileName,137,5606,13, this);
					this.BoxElecMeaTest.setWidth("640");
					egl.atLine(this.eze$$fileName,138,5626,13, this);
					this.BoxElecMeaTest.setHeight("30");
					egl.atLine(this.eze$$fileName,139,5646,150, this);
					this.BoxElecMeaTest.setChildren([egl.eglx.lang.convert(egl.eglx.ui.rui.Widget.fromWidget, [this.TextLabelElecMeaTest,"org.eclipse.edt.rui.widgets.TextLabel"]), egl.eglx.lang.convert(egl.eglx.ui.rui.Widget.fromWidget, [this.HyperLinkElecMeaTest1,"org.eclipse.edt.rui.widgets.HyperLink"]), egl.eglx.lang.convert(egl.eglx.ui.rui.Widget.fromWidget, [this.HyperLinkElecMeaTest2,"org.eclipse.edt.rui.widgets.HyperLink"]), egl.eglx.lang.convert(egl.eglx.ui.rui.Widget.fromWidget, [this.HyperLinkElecMeaTest3,"org.eclipse.edt.rui.widgets.HyperLink"]), egl.eglx.lang.convert(egl.eglx.ui.rui.Widget.fromWidget, [this.HyperLinkElecMeaTest4,"org.eclipse.edt.rui.widgets.HyperLink"]), egl.eglx.lang.convert(egl.eglx.ui.rui.Widget.fromWidget, [this.HyperLinkElecMeaTest5,"org.eclipse.edt.rui.widgets.HyperLink"])].setType("[Teglx/ui/rui/Widget;"));
					egl.atLine(this.eze$$fileName,140,5837,14, this);
					this.HyperLinkElecMeaTest1.setText("\u6709\u51e0\u652f\u94c5\u7b14");
					egl.atLine(this.eze$$fileName,141,5858,71, this);
					this.HyperLinkElecMeaTest1.setHref("http://192.168.1.119:5590/NewProject/client/client/pencil.html");
					egl.atLine(this.eze$$fileName,142,5936,13, this);
					this.HyperLinkElecMeaTest1.setFont("\u5fae\u8f6f\u96c5\u9ed1");
					egl.atLine(this.eze$$fileName,143,5956,15, this);
					this.HyperLinkElecMeaTest1.setFontSize("14");
					egl.atLine(this.eze$$fileName,144,6011,19, this);
					this.TextLabelElecMeaTest.setText("\u3010\u4e09\u3001\u52a0\u51cf\u6cd5\uff08\u4e00\uff09\u3011");
					egl.atLine(this.eze$$fileName,145,6037,13, this);
					this.TextLabelElecMeaTest.setFont("\u5fae\u8f6f\u96c5\u9ed1");
					egl.atLine(this.eze$$fileName,146,6057,15, this);
					this.TextLabelElecMeaTest.setFontSize("14");
					egl.atLine(this.eze$$fileName,147,6079,19, this);
					this.TextLabelElecMeaTest.setFontWeight("bold");
					egl.atLine(this.eze$$fileName,148,6139,13, this);
					this.HyperLinkElecMeaTest2.setText("\u6709\u51e0\u8f86\u8f66");
					egl.atLine(this.eze$$fileName,149,6159,68, this);
					this.HyperLinkElecMeaTest2.setHref("http://192.168.1.119:5590/NewProject/client/client/car.html");
					egl.atLine(this.eze$$fileName,150,6234,13, this);
					this.HyperLinkElecMeaTest2.setFont("\u5fae\u8f6f\u96c5\u9ed1");
					egl.atLine(this.eze$$fileName,151,6254,15, this);
					this.HyperLinkElecMeaTest2.setFontSize("14");
					egl.atLine(this.eze$$fileName,152,6276,15, this);
					this.HyperLinkElecMeaTest2.setMarginLeft(10);
					egl.atLine(this.eze$$fileName,153,6332,12, this);
					this.HyperLinkElecMeaTest3.setText("\u6458\u679c\u5b50");
					egl.atLine(this.eze$$fileName,154,6351,70, this);
					this.HyperLinkElecMeaTest3.setHref("http://192.168.1.119:5590/NewProject/client/client/fruit.html");
					egl.atLine(this.eze$$fileName,155,6428,13, this);
					this.HyperLinkElecMeaTest3.setFont("\u5fae\u8f6f\u96c5\u9ed1");
					egl.atLine(this.eze$$fileName,156,6448,15, this);
					this.HyperLinkElecMeaTest3.setFontSize("14");
					egl.atLine(this.eze$$fileName,157,6470,15, this);
					this.HyperLinkElecMeaTest3.setMarginLeft(10);
					egl.atLine(this.eze$$fileName,158,6526,13, this);
					this.HyperLinkElecMeaTest4.setText("\u5c0f\u732b\u5403\u9c7c");
					egl.atLine(this.eze$$fileName,159,6546,69, this);
					this.HyperLinkElecMeaTest4.setHref("http://192.168.1.119:5590/NewProject/client/client/fish.html");
					egl.atLine(this.eze$$fileName,160,6622,13, this);
					this.HyperLinkElecMeaTest4.setFont("\u5fae\u8f6f\u96c5\u9ed1");
					egl.atLine(this.eze$$fileName,161,6642,15, this);
					this.HyperLinkElecMeaTest4.setFontSize("14");
					egl.atLine(this.eze$$fileName,162,6664,15, this);
					this.HyperLinkElecMeaTest4.setMarginLeft(10);
					egl.atLine(this.eze$$fileName,163,6720,13, this);
					this.HyperLinkElecMeaTest5.setText("\u731c\u6570\u6e38\u620f");
					egl.atLine(this.eze$$fileName,164,6740,71, this);
					this.HyperLinkElecMeaTest5.setHref("http://192.168.1.119:5590/NewProject/client/client/number.html");
					egl.atLine(this.eze$$fileName,165,6818,13, this);
					this.HyperLinkElecMeaTest5.setFont("\u5fae\u8f6f\u96c5\u9ed1");
					egl.atLine(this.eze$$fileName,166,6838,15, this);
					this.HyperLinkElecMeaTest5.setFontSize("14");
					egl.atLine(this.eze$$fileName,167,6860,15, this);
					this.HyperLinkElecMeaTest5.setMarginLeft(10);
					egl.atLine(this.eze$$fileName,168,6905,9, this);
					this.BoxSignalAnaTest.setPadding(8);
					egl.atLine(this.eze$$fileName,169,6921,13, this);
					this.BoxSignalAnaTest.setWidth("640");
					egl.atLine(this.eze$$fileName,170,6941,13, this);
					this.BoxSignalAnaTest.setHeight("30");
					egl.atLine(this.eze$$fileName,171,6961,87, this);
					this.BoxSignalAnaTest.setChildren([egl.eglx.lang.convert(egl.eglx.ui.rui.Widget.fromWidget, [this.TextLabelSignalAnaTest,"org.eclipse.edt.rui.widgets.TextLabel"]), egl.eglx.lang.convert(egl.eglx.ui.rui.Widget.fromWidget, [this.HyperLinkSignalAnaTest1,"org.eclipse.edt.rui.widgets.HyperLink"]), egl.eglx.lang.convert(egl.eglx.ui.rui.Widget.fromWidget, [this.HyperLinkSignalAnaTest2,"org.eclipse.edt.rui.widgets.HyperLink"])].setType("[Teglx/ui/rui/Widget;"));
					egl.atLine(this.eze$$fileName,172,7091,13, this);
					this.HyperLinkSignalAnaTest1.setText("\u6574\u7406\u623f\u95f4");
					egl.atLine(this.eze$$fileName,173,7111,69, this);
					this.HyperLinkSignalAnaTest1.setHref("http://192.168.1.119:5590/NewProject/client/client/room.html");
					egl.atLine(this.eze$$fileName,174,7187,13, this);
					this.HyperLinkSignalAnaTest1.setFont("\u5fae\u8f6f\u96c5\u9ed1");
					egl.atLine(this.eze$$fileName,175,7207,15, this);
					this.HyperLinkSignalAnaTest1.setFontSize("14");
					egl.atLine(this.eze$$fileName,176,7264,15, this);
					this.TextLabelSignalAnaTest.setText("\u3010\u56db\u3001\u5206\u7c7b\u3011");
					egl.atLine(this.eze$$fileName,177,7286,13, this);
					this.TextLabelSignalAnaTest.setFont("\u5fae\u8f6f\u96c5\u9ed1");
					egl.atLine(this.eze$$fileName,178,7306,15, this);
					this.TextLabelSignalAnaTest.setFontSize("14");
					egl.atLine(this.eze$$fileName,179,7328,19, this);
					this.TextLabelSignalAnaTest.setFontWeight("bold");
					egl.atLine(this.eze$$fileName,180,7390,13, this);
					this.HyperLinkSignalAnaTest2.setText("\u6574\u7406\u4e66\u5305");
					egl.atLine(this.eze$$fileName,181,7410,68, this);
					this.HyperLinkSignalAnaTest2.setHref("http://192.168.1.119:5590/NewProject/client/client/bag.html");
					egl.atLine(this.eze$$fileName,182,7485,13, this);
					this.HyperLinkSignalAnaTest2.setFont("\u5fae\u8f6f\u96c5\u9ed1");
					egl.atLine(this.eze$$fileName,183,7505,15, this);
					this.HyperLinkSignalAnaTest2.setFontSize("14");
					egl.atLine(this.eze$$fileName,184,7527,15, this);
					this.HyperLinkSignalAnaTest2.setMarginLeft(10);
					egl.atLine(this.eze$$fileName,186,7580,9, this);
					this.BoxComprehensiveTest.setPadding(8);
					egl.atLine(this.eze$$fileName,187,7596,13, this);
					this.BoxComprehensiveTest.setWidth("640");
					egl.atLine(this.eze$$fileName,188,7616,13, this);
					this.BoxComprehensiveTest.setHeight("30");
					egl.atLine(this.eze$$fileName,189,7636,155, this);
					this.BoxComprehensiveTest.setChildren([egl.eglx.lang.convert(egl.eglx.ui.rui.Widget.fromWidget, [this.TextLabelComprehensiveTest,"org.eclipse.edt.rui.widgets.TextLabel"]), egl.eglx.lang.convert(egl.eglx.ui.rui.Widget.fromWidget, [this.HyperLinkComprehensiveTest1,"org.eclipse.edt.rui.widgets.HyperLink"]), egl.eglx.lang.convert(egl.eglx.ui.rui.Widget.fromWidget, [this.HyperLinkComprehensiveTest2,"org.eclipse.edt.rui.widgets.HyperLink"]), egl.eglx.lang.convert(egl.eglx.ui.rui.Widget.fromWidget, [this.HyperLinkComprehensiveTest3,"org.eclipse.edt.rui.widgets.HyperLink"]), egl.eglx.lang.convert(egl.eglx.ui.rui.Widget.fromWidget, [this.HyperLinkComprehensiveTest4,"org.eclipse.edt.rui.widgets.HyperLink"])].setType("[Teglx/ui/rui/Widget;"));
					egl.atLine(this.eze$$fileName,190,7838,17, this);
					this.HyperLinkComprehensiveTest1.setText("\u7efc\u5408\u6d4b\u8bd5\u9898\uff081\uff09");
					egl.atLine(this.eze$$fileName,191,7862,27, this);
					this.HyperLinkComprehensiveTest1.setHref("ComprehensiveTest1");
					egl.atLine(this.eze$$fileName,192,7896,13, this);
					this.HyperLinkComprehensiveTest1.setFont("\u5fae\u8f6f\u96c5\u9ed1");
					egl.atLine(this.eze$$fileName,193,7916,15, this);
					this.HyperLinkComprehensiveTest1.setFontSize("14");
					egl.atLine(this.eze$$fileName,194,7977,16, this);
					this.TextLabelComprehensiveTest.setText("\u3010\u7efc\u5408\u6d4b\u8bd5\u9898\u3011");
					egl.atLine(this.eze$$fileName,195,8000,13, this);
					this.TextLabelComprehensiveTest.setFont("\u5fae\u8f6f\u96c5\u9ed1");
					egl.atLine(this.eze$$fileName,196,8020,15, this);
					this.TextLabelComprehensiveTest.setFontSize("14");
					egl.atLine(this.eze$$fileName,197,8042,19, this);
					this.TextLabelComprehensiveTest.setFontWeight("bold");
					egl.atLine(this.eze$$fileName,198,8108,17, this);
					this.HyperLinkComprehensiveTest2.setText("\u7efc\u5408\u6d4b\u8bd5\u9898\uff082\uff09");
					egl.atLine(this.eze$$fileName,199,8132,27, this);
					this.HyperLinkComprehensiveTest2.setHref("ComprehensiveTest2");
					egl.atLine(this.eze$$fileName,200,8166,13, this);
					this.HyperLinkComprehensiveTest2.setFont("\u5fae\u8f6f\u96c5\u9ed1");
					egl.atLine(this.eze$$fileName,201,8186,15, this);
					this.HyperLinkComprehensiveTest2.setFontSize("14");
					egl.atLine(this.eze$$fileName,202,8208,15, this);
					this.HyperLinkComprehensiveTest2.setMarginLeft(10);
					egl.atLine(this.eze$$fileName,203,8270,17, this);
					this.HyperLinkComprehensiveTest3.setText("\u7efc\u5408\u6d4b\u8bd5\u9898\uff083\uff09");
					egl.atLine(this.eze$$fileName,204,8294,27, this);
					this.HyperLinkComprehensiveTest3.setHref("ComprehensiveTest3");
					egl.atLine(this.eze$$fileName,205,8328,13, this);
					this.HyperLinkComprehensiveTest3.setFont("\u5fae\u8f6f\u96c5\u9ed1");
					egl.atLine(this.eze$$fileName,206,8348,15, this);
					this.HyperLinkComprehensiveTest3.setFontSize("14");
					egl.atLine(this.eze$$fileName,207,8370,15, this);
					this.HyperLinkComprehensiveTest3.setMarginLeft(10);
					egl.atLine(this.eze$$fileName,208,8432,17, this);
					this.HyperLinkComprehensiveTest4.setText("\u7efc\u5408\u6d4b\u8bd5\u9898\uff084\uff09");
					egl.atLine(this.eze$$fileName,209,8456,27, this);
					this.HyperLinkComprehensiveTest4.setHref("ComprehensiveTest4");
					egl.atLine(this.eze$$fileName,210,8490,13, this);
					this.HyperLinkComprehensiveTest4.setFont("\u5fae\u8f6f\u96c5\u9ed1");
					egl.atLine(this.eze$$fileName,211,8510,15, this);
					this.HyperLinkComprehensiveTest4.setFontSize("14");
					egl.atLine(this.eze$$fileName,212,8532,15, this);
					this.HyperLinkComprehensiveTest4.setMarginLeft(10);
					egl.atLine(this.eze$$fileName,213,8571,9, this);
					this.BoxMyTest.setPadding(8);
					egl.atLine(this.eze$$fileName,214,8587,26, this);
					this.BoxMyTest.setBorderColor("DodgerBlue");
					egl.atLine(this.eze$$fileName,215,8620,21, this);
					this.BoxMyTest.setBorderStyle("solid");
					egl.atLine(this.eze$$fileName,216,8648,13, this);
					this.BoxMyTest.setWidth("610");
					egl.atLine(this.eze$$fileName,217,8668,13, this);
					this.BoxMyTest.setChildren((function() { var eze$Temp30 = []; eze$Temp30.setType("[eglx.ui.rui.Widget");
						for (var i = 0; i < 0; i++) {
						eze$Temp30[i] = new egl.eglx.ui.rui.Widget();}
					return eze$Temp30;})());
					egl.atLine(this.eze$$fileName,219,8713,9, this);
					this.BoxMyResult.setPadding(8);
					egl.atLine(this.eze$$fileName,220,8729,26, this);
					this.BoxMyResult.setBorderColor("DodgerBlue");
					egl.atLine(this.eze$$fileName,221,8762,21, this);
					this.BoxMyResult.setBorderStyle("solid");
					egl.atLine(this.eze$$fileName,222,8790,13, this);
					this.BoxMyResult.setWidth("610");
					egl.atLine(this.eze$$fileName,223,8810,13, this);
					this.BoxMyResult.setChildren((function() { var eze$Temp31 = []; eze$Temp31.setType("[eglx.ui.rui.Widget");
						for (var i = 0; i < 0; i++) {
						eze$Temp31[i] = new egl.eglx.ui.rui.Widget();}
					return eze$Temp31;})());
					egl.atLine(this.eze$$fileName,20,510,28, this);
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
				var ezert$$2 = new egl.client.client.Test();
				ezert$$2.ui = ezert$$1.ui === null ? null : ezert$$1.ui.eze$$clone();
				ezert$$2.Box = ezert$$1.Box === null ? null : ezert$$1.Box.eze$$clone();
				ezert$$2.TextLabel = ezert$$1.TextLabel === null ? null : ezert$$1.TextLabel.eze$$clone();
				ezert$$2.TabContainer = ezert$$1.TabContainer === null ? null : ezert$$1.TabContainer;
				ezert$$2.TabContainer1 = ezert$$1.TabContainer1 === null ? null : ezert$$1.TabContainer1;
				ezert$$2.GridLayout = ezert$$1.GridLayout === null ? null : ezert$$1.GridLayout.eze$$clone();
				ezert$$2.GridLayout1 = ezert$$1.GridLayout1 === null ? null : ezert$$1.GridLayout1.eze$$clone();
				ezert$$2.Box1 = ezert$$1.Box1 === null ? null : ezert$$1.Box1.eze$$clone();
				ezert$$2.TextLabel1 = ezert$$1.TextLabel1 === null ? null : ezert$$1.TextLabel1.eze$$clone();
				ezert$$2.Box2 = ezert$$1.Box2 === null ? null : ezert$$1.Box2.eze$$clone();
				ezert$$2.Button1 = ezert$$1.Button1 === null ? null : ezert$$1.Button1;
				ezert$$2.Button2 = ezert$$1.Button2 === null ? null : ezert$$1.Button2;
				ezert$$2.Button3 = ezert$$1.Button3 === null ? null : ezert$$1.Button3;
				ezert$$2.Button4 = ezert$$1.Button4 === null ? null : ezert$$1.Button4;
				ezert$$2.GridLayout2 = ezert$$1.GridLayout2 === null ? null : ezert$$1.GridLayout2.eze$$clone();
				ezert$$2.BoxBody = ezert$$1.BoxBody === null ? null : ezert$$1.BoxBody.eze$$clone();
				ezert$$2.BoxCircuitTest = ezert$$1.BoxCircuitTest === null ? null : ezert$$1.BoxCircuitTest.eze$$clone();
				ezert$$2.HyperLinkCircuitTest1 = ezert$$1.HyperLinkCircuitTest1 === null ? null : ezert$$1.HyperLinkCircuitTest1.eze$$clone();
				ezert$$2.TextLabelCircuitTest = ezert$$1.TextLabelCircuitTest === null ? null : ezert$$1.TextLabelCircuitTest.eze$$clone();
				ezert$$2.HyperLinkCircuitTest2 = ezert$$1.HyperLinkCircuitTest2 === null ? null : ezert$$1.HyperLinkCircuitTest2.eze$$clone();
				ezert$$2.HyperLinkCircuitTest3 = ezert$$1.HyperLinkCircuitTest3 === null ? null : ezert$$1.HyperLinkCircuitTest3.eze$$clone();
				ezert$$2.HyperLinkCircuitTest4 = ezert$$1.HyperLinkCircuitTest4 === null ? null : ezert$$1.HyperLinkCircuitTest4.eze$$clone();
				ezert$$2.HyperLinkCircuitTest5 = ezert$$1.HyperLinkCircuitTest5 === null ? null : ezert$$1.HyperLinkCircuitTest5.eze$$clone();
				ezert$$2.BoxElecTecTest = ezert$$1.BoxElecTecTest === null ? null : ezert$$1.BoxElecTecTest.eze$$clone();
				ezert$$2.HyperLinkElecTecTest1 = ezert$$1.HyperLinkElecTecTest1 === null ? null : ezert$$1.HyperLinkElecTecTest1.eze$$clone();
				ezert$$2.TextLabelElecTecTest = ezert$$1.TextLabelElecTecTest === null ? null : ezert$$1.TextLabelElecTecTest.eze$$clone();
				ezert$$2.HyperLinkElecTecTest2 = ezert$$1.HyperLinkElecTecTest2 === null ? null : ezert$$1.HyperLinkElecTecTest2.eze$$clone();
				ezert$$2.HyperLinkElecTecTest3 = ezert$$1.HyperLinkElecTecTest3 === null ? null : ezert$$1.HyperLinkElecTecTest3.eze$$clone();
				ezert$$2.BoxElecMeaTest = ezert$$1.BoxElecMeaTest === null ? null : ezert$$1.BoxElecMeaTest.eze$$clone();
				ezert$$2.HyperLinkElecMeaTest1 = ezert$$1.HyperLinkElecMeaTest1 === null ? null : ezert$$1.HyperLinkElecMeaTest1.eze$$clone();
				ezert$$2.TextLabelElecMeaTest = ezert$$1.TextLabelElecMeaTest === null ? null : ezert$$1.TextLabelElecMeaTest.eze$$clone();
				ezert$$2.HyperLinkElecMeaTest2 = ezert$$1.HyperLinkElecMeaTest2 === null ? null : ezert$$1.HyperLinkElecMeaTest2.eze$$clone();
				ezert$$2.HyperLinkElecMeaTest3 = ezert$$1.HyperLinkElecMeaTest3 === null ? null : ezert$$1.HyperLinkElecMeaTest3.eze$$clone();
				ezert$$2.HyperLinkElecMeaTest4 = ezert$$1.HyperLinkElecMeaTest4 === null ? null : ezert$$1.HyperLinkElecMeaTest4.eze$$clone();
				ezert$$2.HyperLinkElecMeaTest5 = ezert$$1.HyperLinkElecMeaTest5 === null ? null : ezert$$1.HyperLinkElecMeaTest5.eze$$clone();
				ezert$$2.BoxSignalAnaTest = ezert$$1.BoxSignalAnaTest === null ? null : ezert$$1.BoxSignalAnaTest.eze$$clone();
				ezert$$2.HyperLinkSignalAnaTest1 = ezert$$1.HyperLinkSignalAnaTest1 === null ? null : ezert$$1.HyperLinkSignalAnaTest1.eze$$clone();
				ezert$$2.TextLabelSignalAnaTest = ezert$$1.TextLabelSignalAnaTest === null ? null : ezert$$1.TextLabelSignalAnaTest.eze$$clone();
				ezert$$2.HyperLinkSignalAnaTest2 = ezert$$1.HyperLinkSignalAnaTest2 === null ? null : ezert$$1.HyperLinkSignalAnaTest2.eze$$clone();
				ezert$$2.BoxComprehensiveTest = ezert$$1.BoxComprehensiveTest === null ? null : ezert$$1.BoxComprehensiveTest.eze$$clone();
				ezert$$2.HyperLinkComprehensiveTest1 = ezert$$1.HyperLinkComprehensiveTest1 === null ? null : ezert$$1.HyperLinkComprehensiveTest1.eze$$clone();
				ezert$$2.TextLabelComprehensiveTest = ezert$$1.TextLabelComprehensiveTest === null ? null : ezert$$1.TextLabelComprehensiveTest.eze$$clone();
				ezert$$2.HyperLinkComprehensiveTest2 = ezert$$1.HyperLinkComprehensiveTest2 === null ? null : ezert$$1.HyperLinkComprehensiveTest2.eze$$clone();
				ezert$$2.HyperLinkComprehensiveTest3 = ezert$$1.HyperLinkComprehensiveTest3 === null ? null : ezert$$1.HyperLinkComprehensiveTest3.eze$$clone();
				ezert$$2.HyperLinkComprehensiveTest4 = ezert$$1.HyperLinkComprehensiveTest4 === null ? null : ezert$$1.HyperLinkComprehensiveTest4.eze$$clone();
				ezert$$2.BoxMyTest = ezert$$1.BoxMyTest === null ? null : ezert$$1.BoxMyTest.eze$$clone();
				ezert$$2.BoxMyResult = ezert$$1.BoxMyResult === null ? null : ezert$$1.BoxMyResult.eze$$clone();
				return ezert$$2;
			}
			,
			"eze$$getFieldSignatures": function() {
				if(this.fieldSigs === undefined){
					this.fieldSigs = [
					{name: "ui", sig: "org.eclipse.edt.rui.widgets.GridLayout"},
					{name: "Box", sig: "org.eclipse.edt.rui.widgets.Box"},
					{name: "TextLabel", sig: "org.eclipse.edt.rui.widgets.TextLabel"},
					{name: "TabContainer", sig: "dojo.widgets.DojoTabContainer"},
					{name: "TabContainer1", sig: "dojo.widgets.DojoTabContainer"},
					{name: "GridLayout", sig: "org.eclipse.edt.rui.widgets.GridLayout"},
					{name: "GridLayout1", sig: "org.eclipse.edt.rui.widgets.GridLayout"},
					{name: "Box1", sig: "org.eclipse.edt.rui.widgets.Box"},
					{name: "TextLabel1", sig: "org.eclipse.edt.rui.widgets.TextLabel"},
					{name: "Box2", sig: "org.eclipse.edt.rui.widgets.Box"},
					{name: "Button1", sig: "dojo.widgets.DojoButton"},
					{name: "Button2", sig: "dojo.widgets.DojoButton"},
					{name: "Button3", sig: "dojo.widgets.DojoButton"},
					{name: "Button4", sig: "dojo.widgets.DojoButton"},
					{name: "GridLayout2", sig: "org.eclipse.edt.rui.widgets.GridLayout"},
					{name: "BoxBody", sig: "org.eclipse.edt.rui.widgets.Box"},
					{name: "BoxCircuitTest", sig: "org.eclipse.edt.rui.widgets.Box"},
					{name: "HyperLinkCircuitTest1", sig: "org.eclipse.edt.rui.widgets.HyperLink"},
					{name: "TextLabelCircuitTest", sig: "org.eclipse.edt.rui.widgets.TextLabel"},
					{name: "HyperLinkCircuitTest2", sig: "org.eclipse.edt.rui.widgets.HyperLink"},
					{name: "HyperLinkCircuitTest3", sig: "org.eclipse.edt.rui.widgets.HyperLink"},
					{name: "HyperLinkCircuitTest4", sig: "org.eclipse.edt.rui.widgets.HyperLink"},
					{name: "HyperLinkCircuitTest5", sig: "org.eclipse.edt.rui.widgets.HyperLink"},
					{name: "BoxElecTecTest", sig: "org.eclipse.edt.rui.widgets.Box"},
					{name: "HyperLinkElecTecTest1", sig: "org.eclipse.edt.rui.widgets.HyperLink"},
					{name: "TextLabelElecTecTest", sig: "org.eclipse.edt.rui.widgets.TextLabel"},
					{name: "HyperLinkElecTecTest2", sig: "org.eclipse.edt.rui.widgets.HyperLink"},
					{name: "HyperLinkElecTecTest3", sig: "org.eclipse.edt.rui.widgets.HyperLink"},
					{name: "BoxElecMeaTest", sig: "org.eclipse.edt.rui.widgets.Box"},
					{name: "HyperLinkElecMeaTest1", sig: "org.eclipse.edt.rui.widgets.HyperLink"},
					{name: "TextLabelElecMeaTest", sig: "org.eclipse.edt.rui.widgets.TextLabel"},
					{name: "HyperLinkElecMeaTest2", sig: "org.eclipse.edt.rui.widgets.HyperLink"},
					{name: "HyperLinkElecMeaTest3", sig: "org.eclipse.edt.rui.widgets.HyperLink"},
					{name: "HyperLinkElecMeaTest4", sig: "org.eclipse.edt.rui.widgets.HyperLink"},
					{name: "HyperLinkElecMeaTest5", sig: "org.eclipse.edt.rui.widgets.HyperLink"},
					{name: "BoxSignalAnaTest", sig: "org.eclipse.edt.rui.widgets.Box"},
					{name: "HyperLinkSignalAnaTest1", sig: "org.eclipse.edt.rui.widgets.HyperLink"},
					{name: "TextLabelSignalAnaTest", sig: "org.eclipse.edt.rui.widgets.TextLabel"},
					{name: "HyperLinkSignalAnaTest2", sig: "org.eclipse.edt.rui.widgets.HyperLink"},
					{name: "BoxComprehensiveTest", sig: "org.eclipse.edt.rui.widgets.Box"},
					{name: "HyperLinkComprehensiveTest1", sig: "org.eclipse.edt.rui.widgets.HyperLink"},
					{name: "TextLabelComprehensiveTest", sig: "org.eclipse.edt.rui.widgets.TextLabel"},
					{name: "HyperLinkComprehensiveTest2", sig: "org.eclipse.edt.rui.widgets.HyperLink"},
					{name: "HyperLinkComprehensiveTest3", sig: "org.eclipse.edt.rui.widgets.HyperLink"},
					{name: "HyperLinkComprehensiveTest4", sig: "org.eclipse.edt.rui.widgets.HyperLink"},
					{name: "BoxMyTest", sig: "org.eclipse.edt.rui.widgets.Box"},
					{name: "BoxMyResult", sig: "org.eclipse.edt.rui.widgets.Box"}];
				}
				return this.fieldSigs;
			}
			,
			"eze$$getAnnotations": function() {
				if(this.annotations === undefined){
					this.annotations = {};
					this.annotations["XMLRootElement"] = new egl.eglx.xml.binding.annotation.XMLRootElement("Test", null, false);
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
					this.fieldInfos[5] =new egl.eglx.services.FieldInfo("GridLayout", "GridLayout", "org.eclipse.edt.rui.widgets.GridLayout", egl.org.eclipse.edt.rui.widgets.GridLayout, annotations);
					annotations = {};
					annotations["XMLStyle"] = new egl.eglx.xml.binding.annotation.XMLElement("GridLayout1", null, false, false);
					annotations["JsonName"] = new egl.eglx.json.JsonName("GridLayout1");
					this.fieldInfos[6] =new egl.eglx.services.FieldInfo("GridLayout1", "GridLayout1", "org.eclipse.edt.rui.widgets.GridLayout", egl.org.eclipse.edt.rui.widgets.GridLayout, annotations);
					annotations = {};
					annotations["XMLStyle"] = new egl.eglx.xml.binding.annotation.XMLElement("Box1", null, false, false);
					annotations["JsonName"] = new egl.eglx.json.JsonName("Box1");
					this.fieldInfos[7] =new egl.eglx.services.FieldInfo("Box1", "Box1", "org.eclipse.edt.rui.widgets.Box", egl.org.eclipse.edt.rui.widgets.Box, annotations);
					annotations = {};
					annotations["XMLStyle"] = new egl.eglx.xml.binding.annotation.XMLElement("TextLabel1", null, false, false);
					annotations["JsonName"] = new egl.eglx.json.JsonName("TextLabel1");
					this.fieldInfos[8] =new egl.eglx.services.FieldInfo("TextLabel1", "TextLabel1", "org.eclipse.edt.rui.widgets.TextLabel", egl.org.eclipse.edt.rui.widgets.TextLabel, annotations);
					annotations = {};
					annotations["XMLStyle"] = new egl.eglx.xml.binding.annotation.XMLElement("Box2", null, false, false);
					annotations["JsonName"] = new egl.eglx.json.JsonName("Box2");
					this.fieldInfos[9] =new egl.eglx.services.FieldInfo("Box2", "Box2", "org.eclipse.edt.rui.widgets.Box", egl.org.eclipse.edt.rui.widgets.Box, annotations);
					annotations = {};
					annotations["XMLStyle"] = new egl.eglx.xml.binding.annotation.XMLElement("GridLayout2", null, false, false);
					annotations["JsonName"] = new egl.eglx.json.JsonName("GridLayout2");
					this.fieldInfos[14] =new egl.eglx.services.FieldInfo("GridLayout2", "GridLayout2", "org.eclipse.edt.rui.widgets.GridLayout", egl.org.eclipse.edt.rui.widgets.GridLayout, annotations);
					annotations = {};
					annotations["XMLStyle"] = new egl.eglx.xml.binding.annotation.XMLElement("BoxBody", null, false, false);
					annotations["JsonName"] = new egl.eglx.json.JsonName("BoxBody");
					this.fieldInfos[15] =new egl.eglx.services.FieldInfo("BoxBody", "BoxBody", "org.eclipse.edt.rui.widgets.Box", egl.org.eclipse.edt.rui.widgets.Box, annotations);
					annotations = {};
					annotations["XMLStyle"] = new egl.eglx.xml.binding.annotation.XMLElement("BoxCircuitTest", null, false, false);
					annotations["JsonName"] = new egl.eglx.json.JsonName("BoxCircuitTest");
					this.fieldInfos[16] =new egl.eglx.services.FieldInfo("BoxCircuitTest", "BoxCircuitTest", "org.eclipse.edt.rui.widgets.Box", egl.org.eclipse.edt.rui.widgets.Box, annotations);
					annotations = {};
					annotations["XMLStyle"] = new egl.eglx.xml.binding.annotation.XMLElement("HyperLinkCircuitTest1", null, false, false);
					annotations["JsonName"] = new egl.eglx.json.JsonName("HyperLinkCircuitTest1");
					this.fieldInfos[17] =new egl.eglx.services.FieldInfo("HyperLinkCircuitTest1", "HyperLinkCircuitTest1", "org.eclipse.edt.rui.widgets.HyperLink", egl.org.eclipse.edt.rui.widgets.HyperLink, annotations);
					annotations = {};
					annotations["XMLStyle"] = new egl.eglx.xml.binding.annotation.XMLElement("TextLabelCircuitTest", null, false, false);
					annotations["JsonName"] = new egl.eglx.json.JsonName("TextLabelCircuitTest");
					this.fieldInfos[18] =new egl.eglx.services.FieldInfo("TextLabelCircuitTest", "TextLabelCircuitTest", "org.eclipse.edt.rui.widgets.TextLabel", egl.org.eclipse.edt.rui.widgets.TextLabel, annotations);
					annotations = {};
					annotations["XMLStyle"] = new egl.eglx.xml.binding.annotation.XMLElement("HyperLinkCircuitTest2", null, false, false);
					annotations["JsonName"] = new egl.eglx.json.JsonName("HyperLinkCircuitTest2");
					this.fieldInfos[19] =new egl.eglx.services.FieldInfo("HyperLinkCircuitTest2", "HyperLinkCircuitTest2", "org.eclipse.edt.rui.widgets.HyperLink", egl.org.eclipse.edt.rui.widgets.HyperLink, annotations);
					annotations = {};
					annotations["XMLStyle"] = new egl.eglx.xml.binding.annotation.XMLElement("HyperLinkCircuitTest3", null, false, false);
					annotations["JsonName"] = new egl.eglx.json.JsonName("HyperLinkCircuitTest3");
					this.fieldInfos[20] =new egl.eglx.services.FieldInfo("HyperLinkCircuitTest3", "HyperLinkCircuitTest3", "org.eclipse.edt.rui.widgets.HyperLink", egl.org.eclipse.edt.rui.widgets.HyperLink, annotations);
					annotations = {};
					annotations["XMLStyle"] = new egl.eglx.xml.binding.annotation.XMLElement("HyperLinkCircuitTest4", null, false, false);
					annotations["JsonName"] = new egl.eglx.json.JsonName("HyperLinkCircuitTest4");
					this.fieldInfos[21] =new egl.eglx.services.FieldInfo("HyperLinkCircuitTest4", "HyperLinkCircuitTest4", "org.eclipse.edt.rui.widgets.HyperLink", egl.org.eclipse.edt.rui.widgets.HyperLink, annotations);
					annotations = {};
					annotations["XMLStyle"] = new egl.eglx.xml.binding.annotation.XMLElement("HyperLinkCircuitTest5", null, false, false);
					annotations["JsonName"] = new egl.eglx.json.JsonName("HyperLinkCircuitTest5");
					this.fieldInfos[22] =new egl.eglx.services.FieldInfo("HyperLinkCircuitTest5", "HyperLinkCircuitTest5", "org.eclipse.edt.rui.widgets.HyperLink", egl.org.eclipse.edt.rui.widgets.HyperLink, annotations);
					annotations = {};
					annotations["XMLStyle"] = new egl.eglx.xml.binding.annotation.XMLElement("BoxElecTecTest", null, false, false);
					annotations["JsonName"] = new egl.eglx.json.JsonName("BoxElecTecTest");
					this.fieldInfos[23] =new egl.eglx.services.FieldInfo("BoxElecTecTest", "BoxElecTecTest", "org.eclipse.edt.rui.widgets.Box", egl.org.eclipse.edt.rui.widgets.Box, annotations);
					annotations = {};
					annotations["XMLStyle"] = new egl.eglx.xml.binding.annotation.XMLElement("HyperLinkElecTecTest1", null, false, false);
					annotations["JsonName"] = new egl.eglx.json.JsonName("HyperLinkElecTecTest1");
					this.fieldInfos[24] =new egl.eglx.services.FieldInfo("HyperLinkElecTecTest1", "HyperLinkElecTecTest1", "org.eclipse.edt.rui.widgets.HyperLink", egl.org.eclipse.edt.rui.widgets.HyperLink, annotations);
					annotations = {};
					annotations["XMLStyle"] = new egl.eglx.xml.binding.annotation.XMLElement("TextLabelElecTecTest", null, false, false);
					annotations["JsonName"] = new egl.eglx.json.JsonName("TextLabelElecTecTest");
					this.fieldInfos[25] =new egl.eglx.services.FieldInfo("TextLabelElecTecTest", "TextLabelElecTecTest", "org.eclipse.edt.rui.widgets.TextLabel", egl.org.eclipse.edt.rui.widgets.TextLabel, annotations);
					annotations = {};
					annotations["XMLStyle"] = new egl.eglx.xml.binding.annotation.XMLElement("HyperLinkElecTecTest2", null, false, false);
					annotations["JsonName"] = new egl.eglx.json.JsonName("HyperLinkElecTecTest2");
					this.fieldInfos[26] =new egl.eglx.services.FieldInfo("HyperLinkElecTecTest2", "HyperLinkElecTecTest2", "org.eclipse.edt.rui.widgets.HyperLink", egl.org.eclipse.edt.rui.widgets.HyperLink, annotations);
					annotations = {};
					annotations["XMLStyle"] = new egl.eglx.xml.binding.annotation.XMLElement("HyperLinkElecTecTest3", null, false, false);
					annotations["JsonName"] = new egl.eglx.json.JsonName("HyperLinkElecTecTest3");
					this.fieldInfos[27] =new egl.eglx.services.FieldInfo("HyperLinkElecTecTest3", "HyperLinkElecTecTest3", "org.eclipse.edt.rui.widgets.HyperLink", egl.org.eclipse.edt.rui.widgets.HyperLink, annotations);
					annotations = {};
					annotations["XMLStyle"] = new egl.eglx.xml.binding.annotation.XMLElement("BoxElecMeaTest", null, false, false);
					annotations["JsonName"] = new egl.eglx.json.JsonName("BoxElecMeaTest");
					this.fieldInfos[28] =new egl.eglx.services.FieldInfo("BoxElecMeaTest", "BoxElecMeaTest", "org.eclipse.edt.rui.widgets.Box", egl.org.eclipse.edt.rui.widgets.Box, annotations);
					annotations = {};
					annotations["XMLStyle"] = new egl.eglx.xml.binding.annotation.XMLElement("HyperLinkElecMeaTest1", null, false, false);
					annotations["JsonName"] = new egl.eglx.json.JsonName("HyperLinkElecMeaTest1");
					this.fieldInfos[29] =new egl.eglx.services.FieldInfo("HyperLinkElecMeaTest1", "HyperLinkElecMeaTest1", "org.eclipse.edt.rui.widgets.HyperLink", egl.org.eclipse.edt.rui.widgets.HyperLink, annotations);
					annotations = {};
					annotations["XMLStyle"] = new egl.eglx.xml.binding.annotation.XMLElement("TextLabelElecMeaTest", null, false, false);
					annotations["JsonName"] = new egl.eglx.json.JsonName("TextLabelElecMeaTest");
					this.fieldInfos[30] =new egl.eglx.services.FieldInfo("TextLabelElecMeaTest", "TextLabelElecMeaTest", "org.eclipse.edt.rui.widgets.TextLabel", egl.org.eclipse.edt.rui.widgets.TextLabel, annotations);
					annotations = {};
					annotations["XMLStyle"] = new egl.eglx.xml.binding.annotation.XMLElement("HyperLinkElecMeaTest2", null, false, false);
					annotations["JsonName"] = new egl.eglx.json.JsonName("HyperLinkElecMeaTest2");
					this.fieldInfos[31] =new egl.eglx.services.FieldInfo("HyperLinkElecMeaTest2", "HyperLinkElecMeaTest2", "org.eclipse.edt.rui.widgets.HyperLink", egl.org.eclipse.edt.rui.widgets.HyperLink, annotations);
					annotations = {};
					annotations["XMLStyle"] = new egl.eglx.xml.binding.annotation.XMLElement("HyperLinkElecMeaTest3", null, false, false);
					annotations["JsonName"] = new egl.eglx.json.JsonName("HyperLinkElecMeaTest3");
					this.fieldInfos[32] =new egl.eglx.services.FieldInfo("HyperLinkElecMeaTest3", "HyperLinkElecMeaTest3", "org.eclipse.edt.rui.widgets.HyperLink", egl.org.eclipse.edt.rui.widgets.HyperLink, annotations);
					annotations = {};
					annotations["XMLStyle"] = new egl.eglx.xml.binding.annotation.XMLElement("HyperLinkElecMeaTest4", null, false, false);
					annotations["JsonName"] = new egl.eglx.json.JsonName("HyperLinkElecMeaTest4");
					this.fieldInfos[33] =new egl.eglx.services.FieldInfo("HyperLinkElecMeaTest4", "HyperLinkElecMeaTest4", "org.eclipse.edt.rui.widgets.HyperLink", egl.org.eclipse.edt.rui.widgets.HyperLink, annotations);
					annotations = {};
					annotations["XMLStyle"] = new egl.eglx.xml.binding.annotation.XMLElement("HyperLinkElecMeaTest5", null, false, false);
					annotations["JsonName"] = new egl.eglx.json.JsonName("HyperLinkElecMeaTest5");
					this.fieldInfos[34] =new egl.eglx.services.FieldInfo("HyperLinkElecMeaTest5", "HyperLinkElecMeaTest5", "org.eclipse.edt.rui.widgets.HyperLink", egl.org.eclipse.edt.rui.widgets.HyperLink, annotations);
					annotations = {};
					annotations["XMLStyle"] = new egl.eglx.xml.binding.annotation.XMLElement("BoxSignalAnaTest", null, false, false);
					annotations["JsonName"] = new egl.eglx.json.JsonName("BoxSignalAnaTest");
					this.fieldInfos[35] =new egl.eglx.services.FieldInfo("BoxSignalAnaTest", "BoxSignalAnaTest", "org.eclipse.edt.rui.widgets.Box", egl.org.eclipse.edt.rui.widgets.Box, annotations);
					annotations = {};
					annotations["XMLStyle"] = new egl.eglx.xml.binding.annotation.XMLElement("HyperLinkSignalAnaTest1", null, false, false);
					annotations["JsonName"] = new egl.eglx.json.JsonName("HyperLinkSignalAnaTest1");
					this.fieldInfos[36] =new egl.eglx.services.FieldInfo("HyperLinkSignalAnaTest1", "HyperLinkSignalAnaTest1", "org.eclipse.edt.rui.widgets.HyperLink", egl.org.eclipse.edt.rui.widgets.HyperLink, annotations);
					annotations = {};
					annotations["XMLStyle"] = new egl.eglx.xml.binding.annotation.XMLElement("TextLabelSignalAnaTest", null, false, false);
					annotations["JsonName"] = new egl.eglx.json.JsonName("TextLabelSignalAnaTest");
					this.fieldInfos[37] =new egl.eglx.services.FieldInfo("TextLabelSignalAnaTest", "TextLabelSignalAnaTest", "org.eclipse.edt.rui.widgets.TextLabel", egl.org.eclipse.edt.rui.widgets.TextLabel, annotations);
					annotations = {};
					annotations["XMLStyle"] = new egl.eglx.xml.binding.annotation.XMLElement("HyperLinkSignalAnaTest2", null, false, false);
					annotations["JsonName"] = new egl.eglx.json.JsonName("HyperLinkSignalAnaTest2");
					this.fieldInfos[38] =new egl.eglx.services.FieldInfo("HyperLinkSignalAnaTest2", "HyperLinkSignalAnaTest2", "org.eclipse.edt.rui.widgets.HyperLink", egl.org.eclipse.edt.rui.widgets.HyperLink, annotations);
					annotations = {};
					annotations["XMLStyle"] = new egl.eglx.xml.binding.annotation.XMLElement("BoxComprehensiveTest", null, false, false);
					annotations["JsonName"] = new egl.eglx.json.JsonName("BoxComprehensiveTest");
					this.fieldInfos[39] =new egl.eglx.services.FieldInfo("BoxComprehensiveTest", "BoxComprehensiveTest", "org.eclipse.edt.rui.widgets.Box", egl.org.eclipse.edt.rui.widgets.Box, annotations);
					annotations = {};
					annotations["XMLStyle"] = new egl.eglx.xml.binding.annotation.XMLElement("HyperLinkComprehensiveTest1", null, false, false);
					annotations["JsonName"] = new egl.eglx.json.JsonName("HyperLinkComprehensiveTest1");
					this.fieldInfos[40] =new egl.eglx.services.FieldInfo("HyperLinkComprehensiveTest1", "HyperLinkComprehensiveTest1", "org.eclipse.edt.rui.widgets.HyperLink", egl.org.eclipse.edt.rui.widgets.HyperLink, annotations);
					annotations = {};
					annotations["XMLStyle"] = new egl.eglx.xml.binding.annotation.XMLElement("TextLabelComprehensiveTest", null, false, false);
					annotations["JsonName"] = new egl.eglx.json.JsonName("TextLabelComprehensiveTest");
					this.fieldInfos[41] =new egl.eglx.services.FieldInfo("TextLabelComprehensiveTest", "TextLabelComprehensiveTest", "org.eclipse.edt.rui.widgets.TextLabel", egl.org.eclipse.edt.rui.widgets.TextLabel, annotations);
					annotations = {};
					annotations["XMLStyle"] = new egl.eglx.xml.binding.annotation.XMLElement("HyperLinkComprehensiveTest2", null, false, false);
					annotations["JsonName"] = new egl.eglx.json.JsonName("HyperLinkComprehensiveTest2");
					this.fieldInfos[42] =new egl.eglx.services.FieldInfo("HyperLinkComprehensiveTest2", "HyperLinkComprehensiveTest2", "org.eclipse.edt.rui.widgets.HyperLink", egl.org.eclipse.edt.rui.widgets.HyperLink, annotations);
					annotations = {};
					annotations["XMLStyle"] = new egl.eglx.xml.binding.annotation.XMLElement("HyperLinkComprehensiveTest3", null, false, false);
					annotations["JsonName"] = new egl.eglx.json.JsonName("HyperLinkComprehensiveTest3");
					this.fieldInfos[43] =new egl.eglx.services.FieldInfo("HyperLinkComprehensiveTest3", "HyperLinkComprehensiveTest3", "org.eclipse.edt.rui.widgets.HyperLink", egl.org.eclipse.edt.rui.widgets.HyperLink, annotations);
					annotations = {};
					annotations["XMLStyle"] = new egl.eglx.xml.binding.annotation.XMLElement("HyperLinkComprehensiveTest4", null, false, false);
					annotations["JsonName"] = new egl.eglx.json.JsonName("HyperLinkComprehensiveTest4");
					this.fieldInfos[44] =new egl.eglx.services.FieldInfo("HyperLinkComprehensiveTest4", "HyperLinkComprehensiveTest4", "org.eclipse.edt.rui.widgets.HyperLink", egl.org.eclipse.edt.rui.widgets.HyperLink, annotations);
					annotations = {};
					annotations["XMLStyle"] = new egl.eglx.xml.binding.annotation.XMLElement("BoxMyTest", null, false, false);
					annotations["JsonName"] = new egl.eglx.json.JsonName("BoxMyTest");
					this.fieldInfos[45] =new egl.eglx.services.FieldInfo("BoxMyTest", "BoxMyTest", "org.eclipse.edt.rui.widgets.Box", egl.org.eclipse.edt.rui.widgets.Box, annotations);
					annotations = {};
					annotations["XMLStyle"] = new egl.eglx.xml.binding.annotation.XMLElement("BoxMyResult", null, false, false);
					annotations["JsonName"] = new egl.eglx.json.JsonName("BoxMyResult");
					this.fieldInfos[46] =new egl.eglx.services.FieldInfo("BoxMyResult", "BoxMyResult", "org.eclipse.edt.rui.widgets.Box", egl.org.eclipse.edt.rui.widgets.Box, annotations);
				}
				return this.fieldInfos;
			}
			,
			"start": function() {
				try { egl.enter("start",this,arguments);
					egl.atLine(this.eze$$fileName,227,8847,24, this);
					if (!egl.debugg) egl.leave();
				} finally {
					if (!egl.debugg){
					} else { egl.leave(); }
				}
			}
			,
			"showcall": function(event) {
				try { egl.enter("showcall",this,arguments);
					egl.addLocalFunctionVariable("event", event, "eglx.ui.rui.Event", "event");
					var button;
					egl.addLocalFunctionVariable("button", button, "dojo.widgets.DojoButton", "button");
					egl.atLine(this.eze$$fileName,231,8940,12, this);
					button = egl.eglx.lang.EAny.ezeCast({eze$$value : event.widget, eze$$signature : "eglx.ui.rui.Widget"}, egl.dojo.widgets.DojoButton);
					egl.setLocalFunctionVariable("button", button, "dojo.widgets.DojoButton");
					egl.atLine(this.eze$$fileName,232,8961,23, this);
					this.BoxBody.setChildren((function() { var eze$Temp32 = []; eze$Temp32.setType("[eglx.ui.rui.Widget");
						for (var i = 0; i < 0; i++) {
						eze$Temp32[i] = new egl.eglx.ui.rui.Widget();}
					return eze$Temp32;})());
					{
						egl.atLine(this.eze$$fileName,233,8993,281, this);
						egl.atLine(this.eze$$fileName,233,8993,281, this);
						EzeLabel_eze_CaseLabel_0: if (((button.getText()) == "\u4e00\u3001\u751f\u6d3b\u4e2d\u7684\u6570")) {
							try{egl.enterBlock();
								egl.atLine(this.eze$$fileName,234,9039,36, this);
								this.BoxBody.appendChild(egl.eglx.lang.convert(egl.eglx.ui.rui.Widget.fromWidget, [new egl.client.client.Test1().ui,"org.eclipse.edt.rui.widgets.GridLayout"]));
							}finally{egl.exitBlock();}
						}
						else {
							try{egl.enterBlock();
								egl.atLine(this.eze$$fileName,235,9085,51, this);
								if (((button.getText()) == "\u4e8c\u3001\u6bd4\u8f83")) {
									try{egl.enterBlock();
										egl.atLine(this.eze$$fileName,235,9100,36, this);
										this.BoxBody.appendChild(egl.eglx.lang.convert(egl.eglx.ui.rui.Widget.fromWidget, [new egl.client.client.Test2().ui,"org.eclipse.edt.rui.widgets.GridLayout"]));
									}finally{egl.exitBlock();}
								}
								else {
									try{egl.enterBlock();
										egl.atLine(this.eze$$fileName,236,9146,55, this);
										if (((button.getText()) == "\u4e09\u3001\u52a0\u51cf\u6cd5\uff08\u4e00\uff09")) {
											try{egl.enterBlock();
												egl.atLine(this.eze$$fileName,236,9165,36, this);
												this.BoxBody.appendChild(egl.eglx.lang.convert(egl.eglx.ui.rui.Widget.fromWidget, [new egl.client.client.Test3().ui,"org.eclipse.edt.rui.widgets.GridLayout"]));
											}finally{egl.exitBlock();}
										}
										else {
											try{egl.enterBlock();
												egl.atLine(this.eze$$fileName,237,9211,51, this);
												if (((button.getText()) == "\u56db\u3001\u5206\u7c7b")) {
													try{egl.enterBlock();
														egl.atLine(this.eze$$fileName,237,9226,36, this);
														this.BoxBody.appendChild(egl.eglx.lang.convert(egl.eglx.ui.rui.Widget.fromWidget, [new egl.client.client.Test4().ui,"org.eclipse.edt.rui.widgets.GridLayout"]));
													}finally{egl.exitBlock();}
												}
											}finally{egl.exitBlock();}
										}
									}finally{egl.exitBlock();}
								}
							}finally{egl.exitBlock();}
						}
					}
					egl.atLine(this.eze$$fileName,230,8883,401, this);
					if (!egl.debugg) egl.leave();
				} finally {
					if (!egl.debugg){
					} else { egl.leave(); }
				}
			}
			,
			"toString": function() {
				return "[Test]";
			}
			,
			"eze$$getName": function() {
				return "Test";
			}
			,
			"eze$$getChildVariables": function() {
				var eze$$parent = this;
				return [
				{name: "DojoLib", value : egl.dojo.widgets.DojoLib['$inst'], type : "dojo.widgets.DojoLib", jsName : "egl.dojo.widgets.DojoLib['$inst']"},
				{name: "ui", value : eze$$parent.ui, type : "org.eclipse.edt.rui.widgets.GridLayout", jsName : "ui"},
				{name: "Box", value : eze$$parent.Box, type : "org.eclipse.edt.rui.widgets.Box", jsName : "Box"},
				{name: "TextLabel", value : eze$$parent.TextLabel, type : "org.eclipse.edt.rui.widgets.TextLabel", jsName : "TextLabel"},
				{name: "TabContainer", value : eze$$parent.TabContainer, type : "dojo.widgets.DojoTabContainer", jsName : "TabContainer"},
				{name: "TabContainer1", value : eze$$parent.TabContainer1, type : "dojo.widgets.DojoTabContainer", jsName : "TabContainer1"},
				{name: "GridLayout", value : eze$$parent.GridLayout, type : "org.eclipse.edt.rui.widgets.GridLayout", jsName : "GridLayout"},
				{name: "GridLayout1", value : eze$$parent.GridLayout1, type : "org.eclipse.edt.rui.widgets.GridLayout", jsName : "GridLayout1"},
				{name: "Box1", value : eze$$parent.Box1, type : "org.eclipse.edt.rui.widgets.Box", jsName : "Box1"},
				{name: "TextLabel1", value : eze$$parent.TextLabel1, type : "org.eclipse.edt.rui.widgets.TextLabel", jsName : "TextLabel1"},
				{name: "Box2", value : eze$$parent.Box2, type : "org.eclipse.edt.rui.widgets.Box", jsName : "Box2"},
				{name: "Button1", value : eze$$parent.Button1, type : "dojo.widgets.DojoButton", jsName : "Button1"},
				{name: "Button2", value : eze$$parent.Button2, type : "dojo.widgets.DojoButton", jsName : "Button2"},
				{name: "Button3", value : eze$$parent.Button3, type : "dojo.widgets.DojoButton", jsName : "Button3"},
				{name: "Button4", value : eze$$parent.Button4, type : "dojo.widgets.DojoButton", jsName : "Button4"},
				{name: "GridLayout2", value : eze$$parent.GridLayout2, type : "org.eclipse.edt.rui.widgets.GridLayout", jsName : "GridLayout2"},
				{name: "BoxBody", value : eze$$parent.BoxBody, type : "org.eclipse.edt.rui.widgets.Box", jsName : "BoxBody"},
				{name: "BoxCircuitTest", value : eze$$parent.BoxCircuitTest, type : "org.eclipse.edt.rui.widgets.Box", jsName : "BoxCircuitTest"},
				{name: "HyperLinkCircuitTest1", value : eze$$parent.HyperLinkCircuitTest1, type : "org.eclipse.edt.rui.widgets.HyperLink", jsName : "HyperLinkCircuitTest1"},
				{name: "TextLabelCircuitTest", value : eze$$parent.TextLabelCircuitTest, type : "org.eclipse.edt.rui.widgets.TextLabel", jsName : "TextLabelCircuitTest"},
				{name: "HyperLinkCircuitTest2", value : eze$$parent.HyperLinkCircuitTest2, type : "org.eclipse.edt.rui.widgets.HyperLink", jsName : "HyperLinkCircuitTest2"},
				{name: "HyperLinkCircuitTest3", value : eze$$parent.HyperLinkCircuitTest3, type : "org.eclipse.edt.rui.widgets.HyperLink", jsName : "HyperLinkCircuitTest3"},
				{name: "HyperLinkCircuitTest4", value : eze$$parent.HyperLinkCircuitTest4, type : "org.eclipse.edt.rui.widgets.HyperLink", jsName : "HyperLinkCircuitTest4"},
				{name: "HyperLinkCircuitTest5", value : eze$$parent.HyperLinkCircuitTest5, type : "org.eclipse.edt.rui.widgets.HyperLink", jsName : "HyperLinkCircuitTest5"},
				{name: "BoxElecTecTest", value : eze$$parent.BoxElecTecTest, type : "org.eclipse.edt.rui.widgets.Box", jsName : "BoxElecTecTest"},
				{name: "HyperLinkElecTecTest1", value : eze$$parent.HyperLinkElecTecTest1, type : "org.eclipse.edt.rui.widgets.HyperLink", jsName : "HyperLinkElecTecTest1"},
				{name: "TextLabelElecTecTest", value : eze$$parent.TextLabelElecTecTest, type : "org.eclipse.edt.rui.widgets.TextLabel", jsName : "TextLabelElecTecTest"},
				{name: "HyperLinkElecTecTest2", value : eze$$parent.HyperLinkElecTecTest2, type : "org.eclipse.edt.rui.widgets.HyperLink", jsName : "HyperLinkElecTecTest2"},
				{name: "HyperLinkElecTecTest3", value : eze$$parent.HyperLinkElecTecTest3, type : "org.eclipse.edt.rui.widgets.HyperLink", jsName : "HyperLinkElecTecTest3"},
				{name: "BoxElecMeaTest", value : eze$$parent.BoxElecMeaTest, type : "org.eclipse.edt.rui.widgets.Box", jsName : "BoxElecMeaTest"},
				{name: "HyperLinkElecMeaTest1", value : eze$$parent.HyperLinkElecMeaTest1, type : "org.eclipse.edt.rui.widgets.HyperLink", jsName : "HyperLinkElecMeaTest1"},
				{name: "TextLabelElecMeaTest", value : eze$$parent.TextLabelElecMeaTest, type : "org.eclipse.edt.rui.widgets.TextLabel", jsName : "TextLabelElecMeaTest"},
				{name: "HyperLinkElecMeaTest2", value : eze$$parent.HyperLinkElecMeaTest2, type : "org.eclipse.edt.rui.widgets.HyperLink", jsName : "HyperLinkElecMeaTest2"},
				{name: "HyperLinkElecMeaTest3", value : eze$$parent.HyperLinkElecMeaTest3, type : "org.eclipse.edt.rui.widgets.HyperLink", jsName : "HyperLinkElecMeaTest3"},
				{name: "HyperLinkElecMeaTest4", value : eze$$parent.HyperLinkElecMeaTest4, type : "org.eclipse.edt.rui.widgets.HyperLink", jsName : "HyperLinkElecMeaTest4"},
				{name: "HyperLinkElecMeaTest5", value : eze$$parent.HyperLinkElecMeaTest5, type : "org.eclipse.edt.rui.widgets.HyperLink", jsName : "HyperLinkElecMeaTest5"},
				{name: "BoxSignalAnaTest", value : eze$$parent.BoxSignalAnaTest, type : "org.eclipse.edt.rui.widgets.Box", jsName : "BoxSignalAnaTest"},
				{name: "HyperLinkSignalAnaTest1", value : eze$$parent.HyperLinkSignalAnaTest1, type : "org.eclipse.edt.rui.widgets.HyperLink", jsName : "HyperLinkSignalAnaTest1"},
				{name: "TextLabelSignalAnaTest", value : eze$$parent.TextLabelSignalAnaTest, type : "org.eclipse.edt.rui.widgets.TextLabel", jsName : "TextLabelSignalAnaTest"},
				{name: "HyperLinkSignalAnaTest2", value : eze$$parent.HyperLinkSignalAnaTest2, type : "org.eclipse.edt.rui.widgets.HyperLink", jsName : "HyperLinkSignalAnaTest2"},
				{name: "BoxComprehensiveTest", value : eze$$parent.BoxComprehensiveTest, type : "org.eclipse.edt.rui.widgets.Box", jsName : "BoxComprehensiveTest"},
				{name: "HyperLinkComprehensiveTest1", value : eze$$parent.HyperLinkComprehensiveTest1, type : "org.eclipse.edt.rui.widgets.HyperLink", jsName : "HyperLinkComprehensiveTest1"},
				{name: "TextLabelComprehensiveTest", value : eze$$parent.TextLabelComprehensiveTest, type : "org.eclipse.edt.rui.widgets.TextLabel", jsName : "TextLabelComprehensiveTest"},
				{name: "HyperLinkComprehensiveTest2", value : eze$$parent.HyperLinkComprehensiveTest2, type : "org.eclipse.edt.rui.widgets.HyperLink", jsName : "HyperLinkComprehensiveTest2"},
				{name: "HyperLinkComprehensiveTest3", value : eze$$parent.HyperLinkComprehensiveTest3, type : "org.eclipse.edt.rui.widgets.HyperLink", jsName : "HyperLinkComprehensiveTest3"},
				{name: "HyperLinkComprehensiveTest4", value : eze$$parent.HyperLinkComprehensiveTest4, type : "org.eclipse.edt.rui.widgets.HyperLink", jsName : "HyperLinkComprehensiveTest4"},
				{name: "BoxMyTest", value : eze$$parent.BoxMyTest, type : "org.eclipse.edt.rui.widgets.Box", jsName : "BoxMyTest"},
				{name: "BoxMyResult", value : eze$$parent.BoxMyResult, type : "org.eclipse.edt.rui.widgets.Box", jsName : "BoxMyResult"},
				{name: "document", value : eze$$parent.document, type : "eglx.ui.rui.Document", jsName : "document"},
				{name: "initialUI", value : eze$$parent.initialUI, type : "eglx.lang.EList<eglx.ui.rui.Widget>", jsName : "!initialUI"}
				];
			}
		}
	);
});
