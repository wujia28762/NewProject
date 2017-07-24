define(["client/client/Learn", "org/eclipse/edt/rui/widgets/Box", "ezekw$$dojo/widgets/DojoLib", "eglx/ui/rui/eze$$View", "org/eclipse/edt/rui/widgets/TextLabel", "eglx/ui/rui/eze$$Event", "ezekw$$dojo/widgets/eze$$DojoContentPane", "ezekw$$dojo/widgets/eze$$DojoTabContainer", "client/client/Learn1", "ezekw$$dojo/widgets/eze$$DojoButton", "org/eclipse/edt/rui/widgets/GridLayoutData", "org/eclipse/edt/rui/widgets/GridLayout"],function(){
	egl.loadCSS("css/NewProject.css");
	egl.defineRUIHandler("client.client", "Learning", {
		"eze$$fileName" : "client/client/Learning.egl",
		"eze$$runtimePropertiesFile" : "client/client/Learning",
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
				this.GridLayout = new egl.org.eclipse.edt.rui.widgets.GridLayout();
				this.GridLayout1 = new egl.org.eclipse.edt.rui.widgets.GridLayout();
				this.Box1 = new egl.org.eclipse.edt.rui.widgets.Box();
				this.Box2 = new egl.org.eclipse.edt.rui.widgets.Box();
				this.Button1 = new egl.dojo.widgets.DojoButton();
				this.Button2 = new egl.dojo.widgets.DojoButton();
				this.Button3 = new egl.dojo.widgets.DojoButton();
				this.Button4 = new egl.dojo.widgets.DojoButton();
				this.GridLayout2 = new egl.org.eclipse.edt.rui.widgets.GridLayout();
				this.BoxBody = new egl.org.eclipse.edt.rui.widgets.Box();
				this.TextLabel1 = new egl.org.eclipse.edt.rui.widgets.TextLabel();
			}
			,
			"eze$$setInitial": function() {
				try { egl.enter("<init>",this,arguments);
					this.eze$$setEmpty();
					egl.atLine(this.eze$$fileName,22,595,11, this);
					this.ui.setColumns(1);
					egl.atLine(this.eze$$fileName,22,608,8, this);
					this.ui.setRows(2);
					egl.atLine(this.eze$$fileName,22,618,15, this);
					this.ui.setCellPadding(4);
					egl.atLine(this.eze$$fileName,22,635,32, this);
					this.ui.setChildren([egl.eglx.lang.convert(egl.eglx.ui.rui.Widget.fromWidget, [this.TabContainer,"dojo.widgets.DojoTabContainer"]), egl.eglx.lang.convert(egl.eglx.ui.rui.Widget.fromWidget, [this.Box,"org.eclipse.edt.rui.widgets.Box"])].setType("[Teglx/ui/rui/Widget;"));
					var eze$LNNTemp1 = null;
					{
						var eze$SettingTarget1 = new egl.org.eclipse.edt.rui.widgets.GridLayoutData();
						egl.atLine(this.eze$$fileName,23,696,41, this);
						eze$SettingTarget1 = egl.eglx.lang.AnyValue.ezeCopyTo(new egl.org.eclipse.edt.rui.widgets.GridLayoutData(), eze$SettingTarget1);
						egl.atLine(this.eze$$fileName,23,716,7, this);
						eze$SettingTarget1.row = 1;
						egl.atLine(this.eze$$fileName,23,725,10, this);
						eze$SettingTarget1.column = 1;
						egl.atLine(this.eze$$fileName,23,696,41, this);
						eze$LNNTemp1 = egl.eglx.lang.AnyValue.ezeCopyTo(eze$SettingTarget1, eze$LNNTemp1);
					}
					egl.atLine(this.eze$$fileName,23,683,54, this);
					this.Box.setLayoutData(egl.eglx.lang.convert(egl.eglx.lang.EAny.fromEAny, [eze$LNNTemp1.eze$$clone(),"Torg/eclipse/edt/rui/widgets/GridLayoutData;"]));
					egl.atLine(this.eze$$fileName,23,739,9, this);
					this.Box.setPadding(8);
					egl.atLine(this.eze$$fileName,24,755,24, this);
					this.Box.setChildren([egl.eglx.lang.convert(egl.eglx.ui.rui.Widget.fromWidget, [this.TextLabel,"org.eclipse.edt.rui.widgets.TextLabel"])].setType("[Teglx/ui/rui/Widget;"));
					egl.atLine(this.eze$$fileName,25,808,13, this);
					this.TextLabel.setText("\u5728\u7ebf\u5b66\u4e60");
					egl.atLine(this.eze$$fileName,26,828,21, this);
					this.TextLabel.setFontWeight("bolder");
					egl.atLine(this.eze$$fileName,27,856,13, this);
					this.TextLabel.setFont("\u534e\u6587\u884c\u6977");
					egl.atLine(this.eze$$fileName,28,876,21, this);
					this.TextLabel.setColor("YellowGreen");
					egl.atLine(this.eze$$fileName,29,904,15, this);
					this.TextLabel.setFontSize("25");
					egl.atLine(this.eze$$fileName,30,926,17, this);
					this.TextLabel.setPaddingLeft(380);
					var eze$LNNTemp2 = null;
					{
						var eze$SettingTarget1 = new egl.org.eclipse.edt.rui.widgets.GridLayoutData();
						egl.atLine(this.eze$$fileName,31,995,41, this);
						eze$SettingTarget1 = egl.eglx.lang.AnyValue.ezeCopyTo(new egl.org.eclipse.edt.rui.widgets.GridLayoutData(), eze$SettingTarget1);
						egl.atLine(this.eze$$fileName,31,1015,7, this);
						eze$SettingTarget1.row = 2;
						egl.atLine(this.eze$$fileName,31,1024,10, this);
						eze$SettingTarget1.column = 1;
						egl.atLine(this.eze$$fileName,31,995,41, this);
						eze$LNNTemp2 = egl.eglx.lang.AnyValue.ezeCopyTo(eze$SettingTarget1, eze$LNNTemp2);
					}
					egl.atLine(this.eze$$fileName,31,982,54, this);
					this.TabContainer.setLayoutData(egl.eglx.lang.convert(egl.eglx.lang.EAny.fromEAny, [eze$LNNTemp2.eze$$clone(),"Torg/eclipse/edt/rui/widgets/GridLayoutData;"]));
					egl.atLine(this.eze$$fileName,32,1040,13, this);
					this.TabContainer.setWidth("900");
					egl.atLine(this.eze$$fileName,32,1055,14, this);
					this.TabContainer.setHeight("400");
					egl.atLine(this.eze$$fileName,32,1071,34, this);
					this.TabContainer.setTabPosition(egl.dojo.widgets.DojoLib['$inst'].POSITION_TOP);
					var eze$LNNTemp8 = null;
					{
						var eze$SettingTarget1;
						egl.atLine(this.eze$$fileName,39,1451,51, this);
						eze$SettingTarget1 = (function () {
							var eze$Temp9 = new egl.dojo.widgets.DojoContentPane();
							return eze$Temp9;
						}).call(this);
						egl.atLine(this.eze$$fileName,39,1473,13, this);
						eze$SettingTarget1.setTitle("\u516d\u5e74\u7ea7");
						egl.atLine(this.eze$$fileName,39,1488,13, this);
						eze$SettingTarget1.setChildren((function() { var eze$Temp10 = []; eze$Temp10.setType("[eglx.ui.rui.Widget");
							for (var i = 0; i < 0; i++) {
							eze$Temp10[i] = new egl.eglx.ui.rui.Widget();}
						return eze$Temp10;})());
						egl.atLine(this.eze$$fileName,39,1451,51, this);
						eze$LNNTemp8 = eze$SettingTarget1;
					}
					var eze$LNNTemp7 = null;
					{
						var eze$SettingTarget1;
						egl.atLine(this.eze$$fileName,38,1395,51, this);
						eze$SettingTarget1 = (function () {
							var eze$Temp11 = new egl.dojo.widgets.DojoContentPane();
							return eze$Temp11;
						}).call(this);
						egl.atLine(this.eze$$fileName,38,1417,13, this);
						eze$SettingTarget1.setTitle("\u4e94\u5e74\u7ea7");
						egl.atLine(this.eze$$fileName,38,1432,13, this);
						eze$SettingTarget1.setChildren((function() { var eze$Temp12 = []; eze$Temp12.setType("[eglx.ui.rui.Widget");
							for (var i = 0; i < 0; i++) {
							eze$Temp12[i] = new egl.eglx.ui.rui.Widget();}
						return eze$Temp12;})());
						egl.atLine(this.eze$$fileName,38,1395,51, this);
						eze$LNNTemp7 = eze$SettingTarget1;
					}
					var eze$LNNTemp6 = null;
					{
						var eze$SettingTarget1;
						egl.atLine(this.eze$$fileName,37,1339,51, this);
						eze$SettingTarget1 = (function () {
							var eze$Temp13 = new egl.dojo.widgets.DojoContentPane();
							return eze$Temp13;
						}).call(this);
						egl.atLine(this.eze$$fileName,37,1361,13, this);
						eze$SettingTarget1.setTitle("\u56db\u5e74\u7ea7");
						egl.atLine(this.eze$$fileName,37,1376,13, this);
						eze$SettingTarget1.setChildren((function() { var eze$Temp14 = []; eze$Temp14.setType("[eglx.ui.rui.Widget");
							for (var i = 0; i < 0; i++) {
							eze$Temp14[i] = new egl.eglx.ui.rui.Widget();}
						return eze$Temp14;})());
						egl.atLine(this.eze$$fileName,37,1339,51, this);
						eze$LNNTemp6 = eze$SettingTarget1;
					}
					var eze$LNNTemp5 = null;
					{
						var eze$SettingTarget1;
						egl.atLine(this.eze$$fileName,36,1283,51, this);
						eze$SettingTarget1 = (function () {
							var eze$Temp15 = new egl.dojo.widgets.DojoContentPane();
							return eze$Temp15;
						}).call(this);
						egl.atLine(this.eze$$fileName,36,1305,13, this);
						eze$SettingTarget1.setTitle("\u4e09\u5e74\u7ea7");
						egl.atLine(this.eze$$fileName,36,1320,13, this);
						eze$SettingTarget1.setChildren((function() { var eze$Temp16 = []; eze$Temp16.setType("[eglx.ui.rui.Widget");
							for (var i = 0; i < 0; i++) {
							eze$Temp16[i] = new egl.eglx.ui.rui.Widget();}
						return eze$Temp16;})());
						egl.atLine(this.eze$$fileName,36,1283,51, this);
						eze$LNNTemp5 = eze$SettingTarget1;
					}
					var eze$LNNTemp4 = null;
					{
						var eze$SettingTarget1;
						egl.atLine(this.eze$$fileName,35,1227,51, this);
						eze$SettingTarget1 = (function () {
							var eze$Temp17 = new egl.dojo.widgets.DojoContentPane();
							return eze$Temp17;
						}).call(this);
						egl.atLine(this.eze$$fileName,35,1249,13, this);
						eze$SettingTarget1.setTitle("\u4e8c\u5e74\u7ea7");
						egl.atLine(this.eze$$fileName,35,1264,13, this);
						eze$SettingTarget1.setChildren((function() { var eze$Temp18 = []; eze$Temp18.setType("[eglx.ui.rui.Widget");
							for (var i = 0; i < 0; i++) {
							eze$Temp18[i] = new egl.eglx.ui.rui.Widget();}
						return eze$Temp18;})());
						egl.atLine(this.eze$$fileName,35,1227,51, this);
						eze$LNNTemp4 = eze$SettingTarget1;
					}
					var eze$LNNTemp3 = null;
					var eze$LNNTemp24 = null;
					{
						var eze$SettingTarget1 = new egl.org.eclipse.edt.rui.widgets.GridLayoutData();
						egl.atLine(this.eze$$fileName,48,1900,41, this);
						eze$SettingTarget1 = egl.eglx.lang.AnyValue.ezeCopyTo(new egl.org.eclipse.edt.rui.widgets.GridLayoutData(), eze$SettingTarget1);
						egl.atLine(this.eze$$fileName,48,1920,7, this);
						eze$SettingTarget1.row = 1;
						egl.atLine(this.eze$$fileName,48,1929,10, this);
						eze$SettingTarget1.column = 1;
						egl.atLine(this.eze$$fileName,48,1900,41, this);
						eze$LNNTemp24 = egl.eglx.lang.AnyValue.ezeCopyTo(eze$SettingTarget1, eze$LNNTemp24);
					}
					var eze$LNNTemp23 = null;
					{
						var eze$SettingTarget1 = new egl.org.eclipse.edt.rui.widgets.GridLayoutData();
						egl.atLine(this.eze$$fileName,51,2020,41, this);
						eze$SettingTarget1 = egl.eglx.lang.AnyValue.ezeCopyTo(new egl.org.eclipse.edt.rui.widgets.GridLayoutData(), eze$SettingTarget1);
						egl.atLine(this.eze$$fileName,51,2040,7, this);
						eze$SettingTarget1.row = 1;
						egl.atLine(this.eze$$fileName,51,2049,10, this);
						eze$SettingTarget1.column = 2;
						egl.atLine(this.eze$$fileName,51,2020,41, this);
						eze$LNNTemp23 = egl.eglx.lang.AnyValue.ezeCopyTo(eze$SettingTarget1, eze$LNNTemp23);
					}
					var eze$LNNTemp22 = null;
					{
						var eze$SettingTarget1 = new egl.org.eclipse.edt.rui.widgets.GridLayoutData();
						egl.atLine(this.eze$$fileName,46,1756,41, this);
						eze$SettingTarget1 = egl.eglx.lang.AnyValue.ezeCopyTo(new egl.org.eclipse.edt.rui.widgets.GridLayoutData(), eze$SettingTarget1);
						egl.atLine(this.eze$$fileName,46,1776,7, this);
						eze$SettingTarget1.row = 1;
						egl.atLine(this.eze$$fileName,46,1785,10, this);
						eze$SettingTarget1.column = 1;
						egl.atLine(this.eze$$fileName,46,1756,41, this);
						eze$LNNTemp22 = egl.eglx.lang.AnyValue.ezeCopyTo(eze$SettingTarget1, eze$LNNTemp22);
					}
					var eze$LNNTemp21 = null;
					{
						var eze$SettingTarget1 = new egl.org.eclipse.edt.rui.widgets.GridLayoutData();
						egl.atLine(this.eze$$fileName,67,2744,41, this);
						eze$SettingTarget1 = egl.eglx.lang.AnyValue.ezeCopyTo(new egl.org.eclipse.edt.rui.widgets.GridLayoutData(), eze$SettingTarget1);
						egl.atLine(this.eze$$fileName,67,2764,7, this);
						eze$SettingTarget1.row = 1;
						egl.atLine(this.eze$$fileName,67,2773,10, this);
						eze$SettingTarget1.column = 1;
						egl.atLine(this.eze$$fileName,67,2744,41, this);
						eze$LNNTemp21 = egl.eglx.lang.AnyValue.ezeCopyTo(eze$SettingTarget1, eze$LNNTemp21);
					}
					var eze$LNNTemp20 = null;
					{
						var eze$SettingTarget1 = new egl.org.eclipse.edt.rui.widgets.GridLayoutData();
						egl.atLine(this.eze$$fileName,65,2600,41, this);
						eze$SettingTarget1 = egl.eglx.lang.AnyValue.ezeCopyTo(new egl.org.eclipse.edt.rui.widgets.GridLayoutData(), eze$SettingTarget1);
						egl.atLine(this.eze$$fileName,65,2620,7, this);
						eze$SettingTarget1.row = 2;
						egl.atLine(this.eze$$fileName,65,2629,10, this);
						eze$SettingTarget1.column = 1;
						egl.atLine(this.eze$$fileName,65,2600,41, this);
						eze$LNNTemp20 = egl.eglx.lang.AnyValue.ezeCopyTo(eze$SettingTarget1, eze$LNNTemp20);
					}
					var eze$LNNTemp19 = null;
					{
						var eze$SettingTarget1 = new egl.org.eclipse.edt.rui.widgets.GridLayoutData();
						egl.atLine(this.eze$$fileName,44,1584,41, this);
						eze$SettingTarget1 = egl.eglx.lang.AnyValue.ezeCopyTo(new egl.org.eclipse.edt.rui.widgets.GridLayoutData(), eze$SettingTarget1);
						egl.atLine(this.eze$$fileName,44,1604,7, this);
						eze$SettingTarget1.row = 2;
						egl.atLine(this.eze$$fileName,44,1613,10, this);
						eze$SettingTarget1.column = 1;
						egl.atLine(this.eze$$fileName,44,1584,41, this);
						eze$LNNTemp19 = egl.eglx.lang.AnyValue.ezeCopyTo(eze$SettingTarget1, eze$LNNTemp19);
					}
					{
						var eze$SettingTarget1;
						egl.atLine(this.eze$$fileName,34,1158,64, this);
						eze$SettingTarget1 = (function () {
							var eze$Temp25 = new egl.dojo.widgets.DojoContentPane();
							return eze$Temp25;
						}).call(this);
						egl.atLine(this.eze$$fileName,34,1180,13, this);
						eze$SettingTarget1.setTitle("\u4e00\u5e74\u7ea7");
						egl.atLine(this.eze$$fileName,34,1195,25, this);
						eze$SettingTarget1.setChildren([egl.eglx.lang.convert(egl.eglx.ui.rui.Widget.fromWidget, [this.GridLayout,"org.eclipse.edt.rui.widgets.GridLayout"])].setType("[Teglx/ui/rui/Widget;"));
						egl.atLine(this.eze$$fileName,34,1158,64, this);
						eze$LNNTemp3 = eze$SettingTarget1;
					}
					egl.atLine(this.eze$$fileName,33,1142,364, this);
					this.TabContainer.setChildren([egl.eglx.lang.convert(egl.eglx.ui.rui.Widget.fromWidget, [eze$LNNTemp3,"dojo.widgets.DojoContentPane"]), egl.eglx.lang.convert(egl.eglx.ui.rui.Widget.fromWidget, [eze$LNNTemp4,"dojo.widgets.DojoContentPane"]), egl.eglx.lang.convert(egl.eglx.ui.rui.Widget.fromWidget, [eze$LNNTemp5,"dojo.widgets.DojoContentPane"]), egl.eglx.lang.convert(egl.eglx.ui.rui.Widget.fromWidget, [eze$LNNTemp6,"dojo.widgets.DojoContentPane"]), egl.eglx.lang.convert(egl.eglx.ui.rui.Widget.fromWidget, [eze$LNNTemp7,"dojo.widgets.DojoContentPane"]), egl.eglx.lang.convert(egl.eglx.ui.rui.Widget.fromWidget, [eze$LNNTemp8,"dojo.widgets.DojoContentPane"])].setType("[Teglx/ui/rui/Widget;"));
					egl.atLine(this.eze$$fileName,41,1510,15, this);
					this.TabContainer.setHeight("1000");
					egl.atLine(this.eze$$fileName,42,1529,13, this);
					this.TabContainer.setSelection(1);
					egl.atLine(this.eze$$fileName,44,1571,54, this);
					this.GridLayout.setLayoutData(egl.eglx.lang.convert(egl.eglx.lang.EAny.fromEAny, [eze$LNNTemp19.eze$$clone(),"Torg/eclipse/edt/rui/widgets/GridLayoutData;"]));
					egl.atLine(this.eze$$fileName,44,1627,15, this);
					this.GridLayout.setCellPadding(4);
					egl.atLine(this.eze$$fileName,44,1644,8, this);
					this.GridLayout.setRows(2);
					egl.atLine(this.eze$$fileName,44,1654,11, this);
					this.GridLayout.setColumns(1);
					egl.atLine(this.eze$$fileName,45,1672,39, this);
					this.GridLayout.setChildren([egl.eglx.lang.convert(egl.eglx.ui.rui.Widget.fromWidget, [this.GridLayout2,"org.eclipse.edt.rui.widgets.GridLayout"]), egl.eglx.lang.convert(egl.eglx.ui.rui.Widget.fromWidget, [this.GridLayout1,"org.eclipse.edt.rui.widgets.GridLayout"])].setType("[Teglx/ui/rui/Widget;"));
					egl.atLine(this.eze$$fileName,46,1743,54, this);
					this.GridLayout1.setLayoutData(egl.eglx.lang.convert(egl.eglx.lang.EAny.fromEAny, [eze$LNNTemp22.eze$$clone(),"Torg/eclipse/edt/rui/widgets/GridLayoutData;"]));
					egl.atLine(this.eze$$fileName,46,1799,15, this);
					this.GridLayout1.setCellPadding(4);
					egl.atLine(this.eze$$fileName,46,1816,8, this);
					this.GridLayout1.setRows(1);
					egl.atLine(this.eze$$fileName,46,1826,11, this);
					this.GridLayout1.setColumns(2);
					egl.atLine(this.eze$$fileName,47,1844,25, this);
					this.GridLayout1.setChildren([egl.eglx.lang.convert(egl.eglx.ui.rui.Widget.fromWidget, [this.Box2,"org.eclipse.edt.rui.widgets.Box"]), egl.eglx.lang.convert(egl.eglx.ui.rui.Widget.fromWidget, [this.Box1,"org.eclipse.edt.rui.widgets.Box"])].setType("[Teglx/ui/rui/Widget;"));
					egl.atLine(this.eze$$fileName,48,1887,54, this);
					this.Box1.setLayoutData(egl.eglx.lang.convert(egl.eglx.lang.EAny.fromEAny, [eze$LNNTemp24.eze$$clone(),"Torg/eclipse/edt/rui/widgets/GridLayoutData;"]));
					egl.atLine(this.eze$$fileName,48,1943,9, this);
					this.Box1.setPadding(8);
					egl.atLine(this.eze$$fileName,49,1959,25, this);
					this.Box1.setChildren([egl.eglx.lang.convert(egl.eglx.ui.rui.Widget.fromWidget, [this.TextLabel1,"org.eclipse.edt.rui.widgets.TextLabel"])].setType("[Teglx/ui/rui/Widget;"));
					egl.atLine(this.eze$$fileName,51,2007,54, this);
					this.Box2.setLayoutData(egl.eglx.lang.convert(egl.eglx.lang.EAny.fromEAny, [eze$LNNTemp23.eze$$clone(),"Torg/eclipse/edt/rui/widgets/GridLayoutData;"]));
					egl.atLine(this.eze$$fileName,51,2063,9, this);
					this.Box2.setPadding(8);
					egl.atLine(this.eze$$fileName,52,2079,49, this);
					this.Box2.setChildren([egl.eglx.lang.convert(egl.eglx.ui.rui.Widget.fromWidget, [this.Button1,"dojo.widgets.DojoButton"]), egl.eglx.lang.convert(egl.eglx.ui.rui.Widget.fromWidget, [this.Button2,"dojo.widgets.DojoButton"]), egl.eglx.lang.convert(egl.eglx.ui.rui.Widget.fromWidget, [this.Button3,"dojo.widgets.DojoButton"]), egl.eglx.lang.convert(egl.eglx.ui.rui.Widget.fromWidget, [this.Button4,"dojo.widgets.DojoButton"])].setType("[Teglx/ui/rui/Widget;"));
					egl.atLine(this.eze$$fileName,53,2156,16, this);
					this.Button1.setText("\u4e00\u3001\u751f\u6d3b\u4e2d\u7684\u6570");
					egl.atLine(this.eze$$fileName,54,2179,13, this);
					this.Button1.setFont("\u5fae\u8f6f\u96c5\u9ed1");
					egl.atLine(this.eze$$fileName,55,2199,15, this);
					this.Button1.setFontSize("15");
					egl.atLine(this.eze$$fileName,55,2216,20, this);
					this.Button1.getOnClick().appendElement(new egl.egl.jsrt.Delegate(this, egl.client.client.Learning.prototype.showcall, ""));
					egl.atLine(this.eze$$fileName,56,2264,13, this);
					this.Button2.setText("\u4e8c\u3001\u6bd4\u8f83");
					egl.atLine(this.eze$$fileName,57,2284,13, this);
					this.Button2.setFont("\u5fae\u8f6f\u96c5\u9ed1");
					egl.atLine(this.eze$$fileName,58,2304,15, this);
					this.Button2.setFontSize("15");
					egl.atLine(this.eze$$fileName,58,2321,20, this);
					this.Button2.getOnClick().appendElement(new egl.egl.jsrt.Delegate(this, egl.client.client.Learning.prototype.showcall, ""));
					egl.atLine(this.eze$$fileName,59,2369,17, this);
					this.Button3.setText("\u4e09\u3001\u52a0\u51cf\u6cd5\uff08\u4e00\uff09");
					egl.atLine(this.eze$$fileName,60,2393,13, this);
					this.Button3.setFont("\u5fae\u8f6f\u96c5\u9ed1");
					egl.atLine(this.eze$$fileName,61,2413,15, this);
					this.Button3.setFontSize("15");
					egl.atLine(this.eze$$fileName,61,2430,20, this);
					this.Button3.getOnClick().appendElement(new egl.egl.jsrt.Delegate(this, egl.client.client.Learning.prototype.showcall, ""));
					egl.atLine(this.eze$$fileName,62,2478,13, this);
					this.Button4.setText("\u56db\u3001\u5206\u7c7b");
					egl.atLine(this.eze$$fileName,63,2498,13, this);
					this.Button4.setFont("\u5fae\u8f6f\u96c5\u9ed1");
					egl.atLine(this.eze$$fileName,64,2518,15, this);
					this.Button4.setFontSize("15");
					egl.atLine(this.eze$$fileName,64,2536,20, this);
					this.Button4.getOnClick().appendElement(new egl.egl.jsrt.Delegate(this, egl.client.client.Learning.prototype.showcall, ""));
					egl.atLine(this.eze$$fileName,65,2587,54, this);
					this.GridLayout2.setLayoutData(egl.eglx.lang.convert(egl.eglx.lang.EAny.fromEAny, [eze$LNNTemp20.eze$$clone(),"Torg/eclipse/edt/rui/widgets/GridLayoutData;"]));
					egl.atLine(this.eze$$fileName,65,2643,15, this);
					this.GridLayout2.setCellPadding(4);
					egl.atLine(this.eze$$fileName,65,2660,8, this);
					this.GridLayout2.setRows(1);
					egl.atLine(this.eze$$fileName,65,2670,11, this);
					this.GridLayout2.setColumns(1);
					egl.atLine(this.eze$$fileName,66,2688,22, this);
					this.GridLayout2.setChildren([egl.eglx.lang.convert(egl.eglx.ui.rui.Widget.fromWidget, [this.BoxBody,"org.eclipse.edt.rui.widgets.Box"])].setType("[Teglx/ui/rui/Widget;"));
					egl.atLine(this.eze$$fileName,67,2731,54, this);
					this.BoxBody.setLayoutData(egl.eglx.lang.convert(egl.eglx.lang.EAny.fromEAny, [eze$LNNTemp21.eze$$clone(),"Torg/eclipse/edt/rui/widgets/GridLayoutData;"]));
					egl.atLine(this.eze$$fileName,67,2787,9, this);
					this.BoxBody.setPadding(8);
					egl.atLine(this.eze$$fileName,68,2803,13, this);
					this.BoxBody.setWidth("790");
					egl.atLine(this.eze$$fileName,69,2846,17, this);
					this.TextLabel1.setText("\u8bf7\u9009\u62e9\u6d4b\u8bd5\u7ae0\u8282\uff1a");
					egl.atLine(this.eze$$fileName,70,2870,13, this);
					this.TextLabel1.setFont("\u5fae\u8f6f\u96c5\u9ed1");
					egl.atLine(this.eze$$fileName,71,2890,15, this);
					this.TextLabel1.setFontSize("18");
					egl.atLine(this.eze$$fileName,19,458,28, this);
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
				var ezert$$2 = new egl.client.client.Learning();
				ezert$$2.ui = ezert$$1.ui === null ? null : ezert$$1.ui.eze$$clone();
				ezert$$2.Box = ezert$$1.Box === null ? null : ezert$$1.Box.eze$$clone();
				ezert$$2.TextLabel = ezert$$1.TextLabel === null ? null : ezert$$1.TextLabel.eze$$clone();
				ezert$$2.TabContainer = ezert$$1.TabContainer === null ? null : ezert$$1.TabContainer;
				ezert$$2.GridLayout = ezert$$1.GridLayout === null ? null : ezert$$1.GridLayout.eze$$clone();
				ezert$$2.GridLayout1 = ezert$$1.GridLayout1 === null ? null : ezert$$1.GridLayout1.eze$$clone();
				ezert$$2.Box1 = ezert$$1.Box1 === null ? null : ezert$$1.Box1.eze$$clone();
				ezert$$2.Box2 = ezert$$1.Box2 === null ? null : ezert$$1.Box2.eze$$clone();
				ezert$$2.Button1 = ezert$$1.Button1 === null ? null : ezert$$1.Button1;
				ezert$$2.Button2 = ezert$$1.Button2 === null ? null : ezert$$1.Button2;
				ezert$$2.Button3 = ezert$$1.Button3 === null ? null : ezert$$1.Button3;
				ezert$$2.Button4 = ezert$$1.Button4 === null ? null : ezert$$1.Button4;
				ezert$$2.GridLayout2 = ezert$$1.GridLayout2 === null ? null : ezert$$1.GridLayout2.eze$$clone();
				ezert$$2.BoxBody = ezert$$1.BoxBody === null ? null : ezert$$1.BoxBody.eze$$clone();
				ezert$$2.TextLabel1 = ezert$$1.TextLabel1 === null ? null : ezert$$1.TextLabel1.eze$$clone();
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
					{name: "GridLayout", sig: "org.eclipse.edt.rui.widgets.GridLayout"},
					{name: "GridLayout1", sig: "org.eclipse.edt.rui.widgets.GridLayout"},
					{name: "Box1", sig: "org.eclipse.edt.rui.widgets.Box"},
					{name: "Box2", sig: "org.eclipse.edt.rui.widgets.Box"},
					{name: "Button1", sig: "dojo.widgets.DojoButton"},
					{name: "Button2", sig: "dojo.widgets.DojoButton"},
					{name: "Button3", sig: "dojo.widgets.DojoButton"},
					{name: "Button4", sig: "dojo.widgets.DojoButton"},
					{name: "GridLayout2", sig: "org.eclipse.edt.rui.widgets.GridLayout"},
					{name: "BoxBody", sig: "org.eclipse.edt.rui.widgets.Box"},
					{name: "TextLabel1", sig: "org.eclipse.edt.rui.widgets.TextLabel"}];
				}
				return this.fieldSigs;
			}
			,
			"eze$$getAnnotations": function() {
				if(this.annotations === undefined){
					this.annotations = {};
					this.annotations["XMLRootElement"] = new egl.eglx.xml.binding.annotation.XMLRootElement("Learning", null, false);
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
					this.fieldInfos[4] =new egl.eglx.services.FieldInfo("GridLayout", "GridLayout", "org.eclipse.edt.rui.widgets.GridLayout", egl.org.eclipse.edt.rui.widgets.GridLayout, annotations);
					annotations = {};
					annotations["XMLStyle"] = new egl.eglx.xml.binding.annotation.XMLElement("GridLayout1", null, false, false);
					annotations["JsonName"] = new egl.eglx.json.JsonName("GridLayout1");
					this.fieldInfos[5] =new egl.eglx.services.FieldInfo("GridLayout1", "GridLayout1", "org.eclipse.edt.rui.widgets.GridLayout", egl.org.eclipse.edt.rui.widgets.GridLayout, annotations);
					annotations = {};
					annotations["XMLStyle"] = new egl.eglx.xml.binding.annotation.XMLElement("Box1", null, false, false);
					annotations["JsonName"] = new egl.eglx.json.JsonName("Box1");
					this.fieldInfos[6] =new egl.eglx.services.FieldInfo("Box1", "Box1", "org.eclipse.edt.rui.widgets.Box", egl.org.eclipse.edt.rui.widgets.Box, annotations);
					annotations = {};
					annotations["XMLStyle"] = new egl.eglx.xml.binding.annotation.XMLElement("Box2", null, false, false);
					annotations["JsonName"] = new egl.eglx.json.JsonName("Box2");
					this.fieldInfos[7] =new egl.eglx.services.FieldInfo("Box2", "Box2", "org.eclipse.edt.rui.widgets.Box", egl.org.eclipse.edt.rui.widgets.Box, annotations);
					annotations = {};
					annotations["XMLStyle"] = new egl.eglx.xml.binding.annotation.XMLElement("GridLayout2", null, false, false);
					annotations["JsonName"] = new egl.eglx.json.JsonName("GridLayout2");
					this.fieldInfos[12] =new egl.eglx.services.FieldInfo("GridLayout2", "GridLayout2", "org.eclipse.edt.rui.widgets.GridLayout", egl.org.eclipse.edt.rui.widgets.GridLayout, annotations);
					annotations = {};
					annotations["XMLStyle"] = new egl.eglx.xml.binding.annotation.XMLElement("BoxBody", null, false, false);
					annotations["JsonName"] = new egl.eglx.json.JsonName("BoxBody");
					this.fieldInfos[13] =new egl.eglx.services.FieldInfo("BoxBody", "BoxBody", "org.eclipse.edt.rui.widgets.Box", egl.org.eclipse.edt.rui.widgets.Box, annotations);
					annotations = {};
					annotations["XMLStyle"] = new egl.eglx.xml.binding.annotation.XMLElement("TextLabel1", null, false, false);
					annotations["JsonName"] = new egl.eglx.json.JsonName("TextLabel1");
					this.fieldInfos[14] =new egl.eglx.services.FieldInfo("TextLabel1", "TextLabel1", "org.eclipse.edt.rui.widgets.TextLabel", egl.org.eclipse.edt.rui.widgets.TextLabel, annotations);
				}
				return this.fieldInfos;
			}
			,
			"start": function() {
				try { egl.enter("start",this,arguments);
					egl.atLine(this.eze$$fileName,75,2921,24, this);
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
					egl.atLine(this.eze$$fileName,79,3016,12, this);
					button = egl.eglx.lang.EAny.ezeCast({eze$$value : event.widget, eze$$signature : "eglx.ui.rui.Widget"}, egl.dojo.widgets.DojoButton);
					egl.setLocalFunctionVariable("button", button, "dojo.widgets.DojoButton");
					egl.atLine(this.eze$$fileName,80,3037,23, this);
					this.BoxBody.setChildren((function() { var eze$Temp26 = []; eze$Temp26.setType("[eglx.ui.rui.Widget");
						for (var i = 0; i < 0; i++) {
						eze$Temp26[i] = new egl.eglx.ui.rui.Widget();}
					return eze$Temp26;})());
					{
						egl.atLine(this.eze$$fileName,81,3069,156, this);
						egl.atLine(this.eze$$fileName,81,3069,156, this);
						EzeLabel_eze_CaseLabel_0: if (((button.getText()) == "\u4e00\u3001\u751f\u6d3b\u4e2d\u7684\u6570")) {
							try{egl.enterBlock();
								egl.atLine(this.eze$$fileName,82,3115,36, this);
								this.BoxBody.appendChild(egl.eglx.lang.convert(egl.eglx.ui.rui.Widget.fromWidget, [new egl.client.client.Learn().ui,"org.eclipse.edt.rui.widgets.GridLayout"]));
							}finally{egl.exitBlock();}
						}
						else {
							try{egl.enterBlock();
								egl.atLine(this.eze$$fileName,83,3161,52, this);
								if (((button.getText()) == "\u4e8c\u3001\u6bd4\u8f83")) {
									try{egl.enterBlock();
										egl.atLine(this.eze$$fileName,83,3176,37, this);
										this.BoxBody.appendChild(egl.eglx.lang.convert(egl.eglx.ui.rui.Widget.fromWidget, [new egl.client.client.Learn1().ui,"org.eclipse.edt.rui.widgets.GridLayout"]));
									}finally{egl.exitBlock();}
								}
							}finally{egl.exitBlock();}
						}
					}
					egl.atLine(this.eze$$fileName,78,2957,277, this);
					if (!egl.debugg) egl.leave();
				} finally {
					if (!egl.debugg){
					} else { egl.leave(); }
				}
			}
			,
			"toString": function() {
				return "[Learning]";
			}
			,
			"eze$$getName": function() {
				return "Learning";
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
				{name: "GridLayout", value : eze$$parent.GridLayout, type : "org.eclipse.edt.rui.widgets.GridLayout", jsName : "GridLayout"},
				{name: "GridLayout1", value : eze$$parent.GridLayout1, type : "org.eclipse.edt.rui.widgets.GridLayout", jsName : "GridLayout1"},
				{name: "Box1", value : eze$$parent.Box1, type : "org.eclipse.edt.rui.widgets.Box", jsName : "Box1"},
				{name: "Box2", value : eze$$parent.Box2, type : "org.eclipse.edt.rui.widgets.Box", jsName : "Box2"},
				{name: "Button1", value : eze$$parent.Button1, type : "dojo.widgets.DojoButton", jsName : "Button1"},
				{name: "Button2", value : eze$$parent.Button2, type : "dojo.widgets.DojoButton", jsName : "Button2"},
				{name: "Button3", value : eze$$parent.Button3, type : "dojo.widgets.DojoButton", jsName : "Button3"},
				{name: "Button4", value : eze$$parent.Button4, type : "dojo.widgets.DojoButton", jsName : "Button4"},
				{name: "GridLayout2", value : eze$$parent.GridLayout2, type : "org.eclipse.edt.rui.widgets.GridLayout", jsName : "GridLayout2"},
				{name: "BoxBody", value : eze$$parent.BoxBody, type : "org.eclipse.edt.rui.widgets.Box", jsName : "BoxBody"},
				{name: "TextLabel1", value : eze$$parent.TextLabel1, type : "org.eclipse.edt.rui.widgets.TextLabel", jsName : "TextLabel1"},
				{name: "document", value : eze$$parent.document, type : "eglx.ui.rui.Document", jsName : "document"},
				{name: "initialUI", value : eze$$parent.initialUI, type : "eglx.lang.EList<eglx.ui.rui.Widget>", jsName : "!initialUI"}
				];
			}
		}
	);
});
