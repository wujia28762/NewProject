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
				this.eze$$setEmpty();
				this.ui.setColumns(1);
				this.ui.setRows(2);
				this.ui.setCellPadding(4);
				this.ui.setChildren([egl.eglx.lang.convert(egl.eglx.ui.rui.Widget.fromWidget, [this.TabContainer,"dojo.widgets.DojoTabContainer"]), egl.eglx.lang.convert(egl.eglx.ui.rui.Widget.fromWidget, [this.Box,"org.eclipse.edt.rui.widgets.Box"])].setType("[Teglx/ui/rui/Widget;"));
				var eze$LNNTemp1 = null;
				{
					var eze$SettingTarget1 = new egl.org.eclipse.edt.rui.widgets.GridLayoutData();
					eze$SettingTarget1 = egl.eglx.lang.AnyValue.ezeCopyTo(new egl.org.eclipse.edt.rui.widgets.GridLayoutData(), eze$SettingTarget1);
					eze$SettingTarget1.row = 1;
					eze$SettingTarget1.column = 1;
					eze$LNNTemp1 = egl.eglx.lang.AnyValue.ezeCopyTo(eze$SettingTarget1, eze$LNNTemp1);
				}
				this.Box.setLayoutData(egl.eglx.lang.convert(egl.eglx.lang.EAny.fromEAny, [eze$LNNTemp1.eze$$clone(),"Torg/eclipse/edt/rui/widgets/GridLayoutData;"]));
				this.Box.setPadding(8);
				this.Box.setChildren([egl.eglx.lang.convert(egl.eglx.ui.rui.Widget.fromWidget, [this.TextLabel,"org.eclipse.edt.rui.widgets.TextLabel"])].setType("[Teglx/ui/rui/Widget;"));
				this.TextLabel.setText("\u5728\u7ebf\u6d4b\u8bd5");
				this.TextLabel.setFontWeight("bolder");
				this.TextLabel.setFont("\u534e\u6587\u884c\u6977");
				this.TextLabel.setColor("YellowGreen");
				this.TextLabel.setFontSize("25");
				this.TextLabel.setPaddingLeft(380);
				var eze$LNNTemp2 = null;
				{
					var eze$SettingTarget1 = new egl.org.eclipse.edt.rui.widgets.GridLayoutData();
					eze$SettingTarget1 = egl.eglx.lang.AnyValue.ezeCopyTo(new egl.org.eclipse.edt.rui.widgets.GridLayoutData(), eze$SettingTarget1);
					eze$SettingTarget1.row = 2;
					eze$SettingTarget1.column = 1;
					eze$LNNTemp2 = egl.eglx.lang.AnyValue.ezeCopyTo(eze$SettingTarget1, eze$LNNTemp2);
				}
				this.TabContainer.setLayoutData(egl.eglx.lang.convert(egl.eglx.lang.EAny.fromEAny, [eze$LNNTemp2.eze$$clone(),"Torg/eclipse/edt/rui/widgets/GridLayoutData;"]));
				this.TabContainer.setWidth("900");
				this.TabContainer.setHeight("400");
				this.TabContainer.setTabPosition(egl.dojo.widgets.DojoLib['$inst'].POSITION_TOP);
				var eze$LNNTemp8 = null;
				{
					var eze$SettingTarget1;
					eze$SettingTarget1 = (function () {
						var eze$Temp9 = new egl.dojo.widgets.DojoContentPane();
						return eze$Temp9;
					}).call(this);
					eze$SettingTarget1.setTitle("\u516d\u5e74\u7ea7");
					eze$SettingTarget1.setChildren((function() { var eze$Temp10 = []; eze$Temp10.setType("[eglx.ui.rui.Widget");
						for (var i = 0; i < 0; i++) {
						eze$Temp10[i] = new egl.eglx.ui.rui.Widget();}
					return eze$Temp10;})());
					eze$LNNTemp8 = eze$SettingTarget1;
				}
				var eze$LNNTemp7 = null;
				{
					var eze$SettingTarget1;
					eze$SettingTarget1 = (function () {
						var eze$Temp11 = new egl.dojo.widgets.DojoContentPane();
						return eze$Temp11;
					}).call(this);
					eze$SettingTarget1.setTitle("\u4e94\u5e74\u7ea7");
					eze$SettingTarget1.setChildren((function() { var eze$Temp12 = []; eze$Temp12.setType("[eglx.ui.rui.Widget");
						for (var i = 0; i < 0; i++) {
						eze$Temp12[i] = new egl.eglx.ui.rui.Widget();}
					return eze$Temp12;})());
					eze$LNNTemp7 = eze$SettingTarget1;
				}
				var eze$LNNTemp6 = null;
				{
					var eze$SettingTarget1;
					eze$SettingTarget1 = (function () {
						var eze$Temp13 = new egl.dojo.widgets.DojoContentPane();
						return eze$Temp13;
					}).call(this);
					eze$SettingTarget1.setTitle("\u56db\u5e74\u7ea7");
					eze$SettingTarget1.setChildren((function() { var eze$Temp14 = []; eze$Temp14.setType("[eglx.ui.rui.Widget");
						for (var i = 0; i < 0; i++) {
						eze$Temp14[i] = new egl.eglx.ui.rui.Widget();}
					return eze$Temp14;})());
					eze$LNNTemp6 = eze$SettingTarget1;
				}
				var eze$LNNTemp5 = null;
				{
					var eze$SettingTarget1;
					eze$SettingTarget1 = (function () {
						var eze$Temp15 = new egl.dojo.widgets.DojoContentPane();
						return eze$Temp15;
					}).call(this);
					eze$SettingTarget1.setTitle("\u4e09\u5e74\u7ea7");
					eze$SettingTarget1.setChildren((function() { var eze$Temp16 = []; eze$Temp16.setType("[eglx.ui.rui.Widget");
						for (var i = 0; i < 0; i++) {
						eze$Temp16[i] = new egl.eglx.ui.rui.Widget();}
					return eze$Temp16;})());
					eze$LNNTemp5 = eze$SettingTarget1;
				}
				var eze$LNNTemp4 = null;
				{
					var eze$SettingTarget1;
					eze$SettingTarget1 = (function () {
						var eze$Temp17 = new egl.dojo.widgets.DojoContentPane();
						return eze$Temp17;
					}).call(this);
					eze$SettingTarget1.setTitle("\u4e8c\u5e74\u7ea7");
					eze$SettingTarget1.setChildren((function() { var eze$Temp18 = []; eze$Temp18.setType("[eglx.ui.rui.Widget");
						for (var i = 0; i < 0; i++) {
						eze$Temp18[i] = new egl.eglx.ui.rui.Widget();}
					return eze$Temp18;})());
					eze$LNNTemp4 = eze$SettingTarget1;
				}
				var eze$LNNTemp3 = null;
				var eze$LNNTemp20 = null;
				{
					var eze$SettingTarget1;
					eze$SettingTarget1 = (function () {
						var eze$Temp21 = new egl.dojo.widgets.DojoContentPane();
						return eze$Temp21;
					}).call(this);
					eze$SettingTarget1.setTitle("\u6211\u7684\u8bd5\u9898");
					eze$SettingTarget1.setChildren([egl.eglx.lang.convert(egl.eglx.ui.rui.Widget.fromWidget, [this.BoxCircuitTest,"org.eclipse.edt.rui.widgets.Box"]), egl.eglx.lang.convert(egl.eglx.ui.rui.Widget.fromWidget, [this.BoxElecTecTest,"org.eclipse.edt.rui.widgets.Box"]), egl.eglx.lang.convert(egl.eglx.ui.rui.Widget.fromWidget, [this.BoxElecMeaTest,"org.eclipse.edt.rui.widgets.Box"]), egl.eglx.lang.convert(egl.eglx.ui.rui.Widget.fromWidget, [this.BoxSignalAnaTest,"org.eclipse.edt.rui.widgets.Box"]), egl.eglx.lang.convert(egl.eglx.ui.rui.Widget.fromWidget, [this.BoxComprehensiveTest,"org.eclipse.edt.rui.widgets.Box"])].setType("[Teglx/ui/rui/Widget;"));
					eze$LNNTemp20 = eze$SettingTarget1;
				}
				var eze$LNNTemp19 = null;
				var eze$LNNTemp27 = null;
				{
					var eze$SettingTarget1 = new egl.org.eclipse.edt.rui.widgets.GridLayoutData();
					eze$SettingTarget1 = egl.eglx.lang.AnyValue.ezeCopyTo(new egl.org.eclipse.edt.rui.widgets.GridLayoutData(), eze$SettingTarget1);
					eze$SettingTarget1.row = 1;
					eze$SettingTarget1.column = 1;
					eze$LNNTemp27 = egl.eglx.lang.AnyValue.ezeCopyTo(eze$SettingTarget1, eze$LNNTemp27);
				}
				var eze$LNNTemp26 = null;
				{
					var eze$SettingTarget1 = new egl.org.eclipse.edt.rui.widgets.GridLayoutData();
					eze$SettingTarget1 = egl.eglx.lang.AnyValue.ezeCopyTo(new egl.org.eclipse.edt.rui.widgets.GridLayoutData(), eze$SettingTarget1);
					eze$SettingTarget1.row = 1;
					eze$SettingTarget1.column = 2;
					eze$LNNTemp26 = egl.eglx.lang.AnyValue.ezeCopyTo(eze$SettingTarget1, eze$LNNTemp26);
				}
				var eze$LNNTemp25 = null;
				{
					var eze$SettingTarget1 = new egl.org.eclipse.edt.rui.widgets.GridLayoutData();
					eze$SettingTarget1 = egl.eglx.lang.AnyValue.ezeCopyTo(new egl.org.eclipse.edt.rui.widgets.GridLayoutData(), eze$SettingTarget1);
					eze$SettingTarget1.row = 1;
					eze$SettingTarget1.column = 1;
					eze$LNNTemp25 = egl.eglx.lang.AnyValue.ezeCopyTo(eze$SettingTarget1, eze$LNNTemp25);
				}
				var eze$LNNTemp24 = null;
				{
					var eze$SettingTarget1 = new egl.org.eclipse.edt.rui.widgets.GridLayoutData();
					eze$SettingTarget1 = egl.eglx.lang.AnyValue.ezeCopyTo(new egl.org.eclipse.edt.rui.widgets.GridLayoutData(), eze$SettingTarget1);
					eze$SettingTarget1.row = 1;
					eze$SettingTarget1.column = 1;
					eze$LNNTemp24 = egl.eglx.lang.AnyValue.ezeCopyTo(eze$SettingTarget1, eze$LNNTemp24);
				}
				var eze$LNNTemp23 = null;
				{
					var eze$SettingTarget1 = new egl.org.eclipse.edt.rui.widgets.GridLayoutData();
					eze$SettingTarget1 = egl.eglx.lang.AnyValue.ezeCopyTo(new egl.org.eclipse.edt.rui.widgets.GridLayoutData(), eze$SettingTarget1);
					eze$SettingTarget1.row = 2;
					eze$SettingTarget1.column = 1;
					eze$LNNTemp23 = egl.eglx.lang.AnyValue.ezeCopyTo(eze$SettingTarget1, eze$LNNTemp23);
				}
				var eze$LNNTemp22 = null;
				{
					var eze$SettingTarget1 = new egl.org.eclipse.edt.rui.widgets.GridLayoutData();
					eze$SettingTarget1 = egl.eglx.lang.AnyValue.ezeCopyTo(new egl.org.eclipse.edt.rui.widgets.GridLayoutData(), eze$SettingTarget1);
					eze$SettingTarget1.row = 2;
					eze$SettingTarget1.column = 1;
					eze$LNNTemp22 = egl.eglx.lang.AnyValue.ezeCopyTo(eze$SettingTarget1, eze$LNNTemp22);
				}
				{
					var eze$SettingTarget1;
					eze$SettingTarget1 = (function () {
						var eze$Temp28 = new egl.dojo.widgets.DojoContentPane();
						return eze$Temp28;
					}).call(this);
					eze$SettingTarget1.setTitle("\u6d4b\u8bd5\u9898\u5e93");
					eze$SettingTarget1.setChildren([egl.eglx.lang.convert(egl.eglx.ui.rui.Widget.fromWidget, [this.GridLayout,"org.eclipse.edt.rui.widgets.GridLayout"])].setType("[Teglx/ui/rui/Widget;"));
					eze$SettingTarget1.setWidth("730");
					eze$SettingTarget1.setHeight("600");
					eze$LNNTemp19 = eze$SettingTarget1;
				}
				{
					var eze$SettingTarget1;
					eze$SettingTarget1 = (function () {
						var eze$Temp29 = new egl.dojo.widgets.DojoContentPane();
						return eze$Temp29;
					}).call(this);
					eze$SettingTarget1.setTitle("\u4e00\u5e74\u7ea7");
					eze$SettingTarget1.setChildren([egl.eglx.lang.convert(egl.eglx.ui.rui.Widget.fromWidget, [this.TabContainer1,"dojo.widgets.DojoTabContainer"])].setType("[Teglx/ui/rui/Widget;"));
					eze$LNNTemp3 = eze$SettingTarget1;
				}
				this.TabContainer.setChildren([egl.eglx.lang.convert(egl.eglx.ui.rui.Widget.fromWidget, [eze$LNNTemp3,"dojo.widgets.DojoContentPane"]), egl.eglx.lang.convert(egl.eglx.ui.rui.Widget.fromWidget, [eze$LNNTemp4,"dojo.widgets.DojoContentPane"]), egl.eglx.lang.convert(egl.eglx.ui.rui.Widget.fromWidget, [eze$LNNTemp5,"dojo.widgets.DojoContentPane"]), egl.eglx.lang.convert(egl.eglx.ui.rui.Widget.fromWidget, [eze$LNNTemp6,"dojo.widgets.DojoContentPane"]), egl.eglx.lang.convert(egl.eglx.ui.rui.Widget.fromWidget, [eze$LNNTemp7,"dojo.widgets.DojoContentPane"]), egl.eglx.lang.convert(egl.eglx.ui.rui.Widget.fromWidget, [eze$LNNTemp8,"dojo.widgets.DojoContentPane"])].setType("[Teglx/ui/rui/Widget;"));
				this.TabContainer.setHeight("1000");
				this.TabContainer.setSelection(1);
				this.TabContainer1.setWidth("730");
				this.TabContainer1.setHeight("800");
				this.TabContainer1.setTabPosition(egl.dojo.widgets.DojoLib['$inst'].POSITION_LEFT);
				this.TabContainer1.setChildren([egl.eglx.lang.convert(egl.eglx.ui.rui.Widget.fromWidget, [eze$LNNTemp19,"dojo.widgets.DojoContentPane"]), egl.eglx.lang.convert(egl.eglx.ui.rui.Widget.fromWidget, [eze$LNNTemp20,"dojo.widgets.DojoContentPane"])].setType("[Teglx/ui/rui/Widget;"));
				this.TabContainer1.setSelection(2);
				this.GridLayout.setLayoutData(egl.eglx.lang.convert(egl.eglx.lang.EAny.fromEAny, [eze$LNNTemp22.eze$$clone(),"Torg/eclipse/edt/rui/widgets/GridLayoutData;"]));
				this.GridLayout.setCellPadding(4);
				this.GridLayout.setRows(2);
				this.GridLayout.setColumns(1);
				this.GridLayout.setChildren([egl.eglx.lang.convert(egl.eglx.ui.rui.Widget.fromWidget, [this.GridLayout2,"org.eclipse.edt.rui.widgets.GridLayout"]), egl.eglx.lang.convert(egl.eglx.ui.rui.Widget.fromWidget, [this.GridLayout1,"org.eclipse.edt.rui.widgets.GridLayout"])].setType("[Teglx/ui/rui/Widget;"));
				this.GridLayout1.setLayoutData(egl.eglx.lang.convert(egl.eglx.lang.EAny.fromEAny, [eze$LNNTemp25.eze$$clone(),"Torg/eclipse/edt/rui/widgets/GridLayoutData;"]));
				this.GridLayout1.setCellPadding(4);
				this.GridLayout1.setRows(1);
				this.GridLayout1.setColumns(2);
				this.GridLayout1.setChildren([egl.eglx.lang.convert(egl.eglx.ui.rui.Widget.fromWidget, [this.Box2,"org.eclipse.edt.rui.widgets.Box"]), egl.eglx.lang.convert(egl.eglx.ui.rui.Widget.fromWidget, [this.Box1,"org.eclipse.edt.rui.widgets.Box"])].setType("[Teglx/ui/rui/Widget;"));
				this.Box1.setLayoutData(egl.eglx.lang.convert(egl.eglx.lang.EAny.fromEAny, [eze$LNNTemp27.eze$$clone(),"Torg/eclipse/edt/rui/widgets/GridLayoutData;"]));
				this.Box1.setPadding(8);
				this.Box1.setChildren([egl.eglx.lang.convert(egl.eglx.ui.rui.Widget.fromWidget, [this.TextLabel1,"org.eclipse.edt.rui.widgets.TextLabel"])].setType("[Teglx/ui/rui/Widget;"));
				this.TextLabel1.setText("\u8bf7\u9009\u62e9\u6d4b\u8bd5\u7ae0\u8282\uff1a");
				this.TextLabel1.setFont("\u5fae\u8f6f\u96c5\u9ed1");
				this.TextLabel1.setFontSize("18");
				this.Box2.setLayoutData(egl.eglx.lang.convert(egl.eglx.lang.EAny.fromEAny, [eze$LNNTemp26.eze$$clone(),"Torg/eclipse/edt/rui/widgets/GridLayoutData;"]));
				this.Box2.setPadding(8);
				this.Box2.setChildren([egl.eglx.lang.convert(egl.eglx.ui.rui.Widget.fromWidget, [this.Button1,"dojo.widgets.DojoButton"]), egl.eglx.lang.convert(egl.eglx.ui.rui.Widget.fromWidget, [this.Button2,"dojo.widgets.DojoButton"]), egl.eglx.lang.convert(egl.eglx.ui.rui.Widget.fromWidget, [this.Button3,"dojo.widgets.DojoButton"]), egl.eglx.lang.convert(egl.eglx.ui.rui.Widget.fromWidget, [this.Button4,"dojo.widgets.DojoButton"])].setType("[Teglx/ui/rui/Widget;"));
				this.Button1.setText("\u4e00\u3001\u751f\u6d3b\u4e2d\u7684\u6570");
				this.Button1.setFont("\u5fae\u8f6f\u96c5\u9ed1");
				this.Button1.setFontSize("15");
				this.Button1.getOnClick().appendElement(new egl.egl.jsrt.Delegate(this, egl.client.client.Test.prototype.showcall, ""));
				this.Button2.setText("\u4e8c\u3001\u6bd4\u8f83");
				this.Button2.setFont("\u5fae\u8f6f\u96c5\u9ed1");
				this.Button2.setFontSize("15");
				this.Button2.getOnClick().appendElement(new egl.egl.jsrt.Delegate(this, egl.client.client.Test.prototype.showcall, ""));
				this.Button3.setText("\u4e09\u3001\u52a0\u51cf\u6cd5\uff08\u4e00\uff09");
				this.Button3.setFont("\u5fae\u8f6f\u96c5\u9ed1");
				this.Button3.setFontSize("15");
				this.Button3.getOnClick().appendElement(new egl.egl.jsrt.Delegate(this, egl.client.client.Test.prototype.showcall, ""));
				this.Button4.setText("\u56db\u3001\u5206\u7c7b");
				this.Button4.setFont("\u5fae\u8f6f\u96c5\u9ed1");
				this.Button4.setFontSize("15");
				this.Button4.getOnClick().appendElement(new egl.egl.jsrt.Delegate(this, egl.client.client.Test.prototype.showcall, ""));
				this.GridLayout2.setLayoutData(egl.eglx.lang.convert(egl.eglx.lang.EAny.fromEAny, [eze$LNNTemp23.eze$$clone(),"Torg/eclipse/edt/rui/widgets/GridLayoutData;"]));
				this.GridLayout2.setCellPadding(4);
				this.GridLayout2.setRows(1);
				this.GridLayout2.setColumns(1);
				this.GridLayout2.setChildren([egl.eglx.lang.convert(egl.eglx.ui.rui.Widget.fromWidget, [this.BoxBody,"org.eclipse.edt.rui.widgets.Box"])].setType("[Teglx/ui/rui/Widget;"));
				this.BoxBody.setLayoutData(egl.eglx.lang.convert(egl.eglx.lang.EAny.fromEAny, [eze$LNNTemp24.eze$$clone(),"Torg/eclipse/edt/rui/widgets/GridLayoutData;"]));
				this.BoxBody.setPadding(8);
				this.BoxBody.setWidth("790");
				this.BoxCircuitTest.setPadding(8);
				this.BoxCircuitTest.setWidth("640");
				this.BoxCircuitTest.setHeight("30");
				this.BoxCircuitTest.setChildren([egl.eglx.lang.convert(egl.eglx.ui.rui.Widget.fromWidget, [this.TextLabelCircuitTest,"org.eclipse.edt.rui.widgets.TextLabel"]), egl.eglx.lang.convert(egl.eglx.ui.rui.Widget.fromWidget, [this.HyperLinkCircuitTest1,"org.eclipse.edt.rui.widgets.HyperLink"]), egl.eglx.lang.convert(egl.eglx.ui.rui.Widget.fromWidget, [this.HyperLinkCircuitTest2,"org.eclipse.edt.rui.widgets.HyperLink"]), egl.eglx.lang.convert(egl.eglx.ui.rui.Widget.fromWidget, [this.HyperLinkCircuitTest3,"org.eclipse.edt.rui.widgets.HyperLink"]), egl.eglx.lang.convert(egl.eglx.ui.rui.Widget.fromWidget, [this.HyperLinkCircuitTest4,"org.eclipse.edt.rui.widgets.HyperLink"]), egl.eglx.lang.convert(egl.eglx.ui.rui.Widget.fromWidget, [this.HyperLinkCircuitTest5,"org.eclipse.edt.rui.widgets.HyperLink"])].setType("[Teglx/ui/rui/Widget;"));
				this.HyperLinkCircuitTest1.setText("\u53ef\u7231\u7684\u6821\u56ed");
				this.HyperLinkCircuitTest1.setHref("http://192.168.1.119:5590/NewProject/client/client/cute.html");
				this.HyperLinkCircuitTest1.setFont("\u5fae\u8f6f\u96c5\u9ed1");
				this.HyperLinkCircuitTest1.setFontSize("14");
				this.TextLabelCircuitTest.setText("\u3010\u4e00\u3001\u751f\u6d3b\u4e2d\u7684\u6570\u3011");
				this.TextLabelCircuitTest.setFont("\u5fae\u8f6f\u96c5\u9ed1");
				this.TextLabelCircuitTest.setFontSize("14");
				this.TextLabelCircuitTest.setFontWeight("bold");
				this.HyperLinkCircuitTest2.setText("\u5feb\u4e50\u7684\u5bb6\u56ed");
				this.HyperLinkCircuitTest2.setHref("http://192.168.1.119:5590/NewProject/client/client/happy.html");
				this.HyperLinkCircuitTest2.setFont("\u5fae\u8f6f\u96c5\u9ed1");
				this.HyperLinkCircuitTest2.setFontSize("14");
				this.HyperLinkCircuitTest2.setMarginLeft(10);
				this.HyperLinkCircuitTest3.setText("\u73a9\u5177");
				this.HyperLinkCircuitTest3.setHref("http://192.168.1.119:5590/NewProject/client/client/toy.html");
				this.HyperLinkCircuitTest3.setFont("\u5fae\u8f6f\u96c5\u9ed1");
				this.HyperLinkCircuitTest3.setFontSize("14");
				this.HyperLinkCircuitTest3.setMarginLeft(10);
				this.HyperLinkCircuitTest4.setText("\u5c0f\u732b\u9493\u9c7c");
				this.HyperLinkCircuitTest4.setHref("http://192.168.1.119:5590/NewProject/client/client/cat.html");
				this.HyperLinkCircuitTest4.setFont("\u5fae\u8f6f\u96c5\u9ed1");
				this.HyperLinkCircuitTest4.setFontSize("14");
				this.HyperLinkCircuitTest4.setMarginLeft(10);
				this.HyperLinkCircuitTest5.setText("\u6587\u5177");
				this.HyperLinkCircuitTest5.setHref("http://192.168.1.119:5590/NewProject/client/client/stationery.html");
				this.HyperLinkCircuitTest5.setFont("\u5fae\u8f6f\u96c5\u9ed1");
				this.HyperLinkCircuitTest5.setFontSize("14");
				this.HyperLinkCircuitTest5.setMarginLeft(10);
				this.BoxElecTecTest.setPadding(8);
				this.BoxElecTecTest.setWidth("640");
				this.BoxElecTecTest.setHeight("30");
				this.BoxElecTecTest.setChildren([egl.eglx.lang.convert(egl.eglx.ui.rui.Widget.fromWidget, [this.TextLabelElecTecTest,"org.eclipse.edt.rui.widgets.TextLabel"]), egl.eglx.lang.convert(egl.eglx.ui.rui.Widget.fromWidget, [this.HyperLinkElecTecTest1,"org.eclipse.edt.rui.widgets.HyperLink"]), egl.eglx.lang.convert(egl.eglx.ui.rui.Widget.fromWidget, [this.HyperLinkElecTecTest2,"org.eclipse.edt.rui.widgets.HyperLink"]), egl.eglx.lang.convert(egl.eglx.ui.rui.Widget.fromWidget, [this.HyperLinkElecTecTest3,"org.eclipse.edt.rui.widgets.HyperLink"])].setType("[Teglx/ui/rui/Widget;"));
				this.HyperLinkElecTecTest1.setText("\u52a8\u7269\u4e50\u56ed");
				this.HyperLinkElecTecTest1.setHref("http://192.168.1.119:5590/NewProject/client/client/animal.html");
				this.HyperLinkElecTecTest1.setFont("\u5fae\u8f6f\u96c5\u9ed1");
				this.HyperLinkElecTecTest1.setFontSize("14");
				this.TextLabelElecTecTest.setText("\u3010\u4e8c\u3001\u6bd4\u8f83\u3011");
				this.TextLabelElecTecTest.setFont("\u5fae\u8f6f\u96c5\u9ed1");
				this.TextLabelElecTecTest.setFontSize("14");
				this.TextLabelElecTecTest.setFontWeight("bold");
				this.HyperLinkElecTecTest2.setText("\u9ad8\u77ee");
				this.HyperLinkElecTecTest2.setHref("http://192.168.1.119:5590/NewProject/client/client/top.html");
				this.HyperLinkElecTecTest2.setFont("\u5fae\u8f6f\u96c5\u9ed1");
				this.HyperLinkElecTecTest2.setFontSize("14");
				this.HyperLinkElecTecTest2.setMarginLeft(10);
				this.HyperLinkElecTecTest3.setText("\u8f7b\u91cd");
				this.HyperLinkElecTecTest3.setHref("http://192.168.1.119:5590/NewProject/client/client/light.html");
				this.HyperLinkElecTecTest3.setFont("\u5fae\u8f6f\u96c5\u9ed1");
				this.HyperLinkElecTecTest3.setFontSize("14");
				this.HyperLinkElecTecTest3.setMarginLeft(10);
				this.BoxElecMeaTest.setPadding(8);
				this.BoxElecMeaTest.setWidth("640");
				this.BoxElecMeaTest.setHeight("30");
				this.BoxElecMeaTest.setChildren([egl.eglx.lang.convert(egl.eglx.ui.rui.Widget.fromWidget, [this.TextLabelElecMeaTest,"org.eclipse.edt.rui.widgets.TextLabel"]), egl.eglx.lang.convert(egl.eglx.ui.rui.Widget.fromWidget, [this.HyperLinkElecMeaTest1,"org.eclipse.edt.rui.widgets.HyperLink"]), egl.eglx.lang.convert(egl.eglx.ui.rui.Widget.fromWidget, [this.HyperLinkElecMeaTest2,"org.eclipse.edt.rui.widgets.HyperLink"]), egl.eglx.lang.convert(egl.eglx.ui.rui.Widget.fromWidget, [this.HyperLinkElecMeaTest3,"org.eclipse.edt.rui.widgets.HyperLink"]), egl.eglx.lang.convert(egl.eglx.ui.rui.Widget.fromWidget, [this.HyperLinkElecMeaTest4,"org.eclipse.edt.rui.widgets.HyperLink"]), egl.eglx.lang.convert(egl.eglx.ui.rui.Widget.fromWidget, [this.HyperLinkElecMeaTest5,"org.eclipse.edt.rui.widgets.HyperLink"])].setType("[Teglx/ui/rui/Widget;"));
				this.HyperLinkElecMeaTest1.setText("\u6709\u51e0\u652f\u94c5\u7b14");
				this.HyperLinkElecMeaTest1.setHref("http://192.168.1.119:5590/NewProject/client/client/pencil.html");
				this.HyperLinkElecMeaTest1.setFont("\u5fae\u8f6f\u96c5\u9ed1");
				this.HyperLinkElecMeaTest1.setFontSize("14");
				this.TextLabelElecMeaTest.setText("\u3010\u4e09\u3001\u52a0\u51cf\u6cd5\uff08\u4e00\uff09\u3011");
				this.TextLabelElecMeaTest.setFont("\u5fae\u8f6f\u96c5\u9ed1");
				this.TextLabelElecMeaTest.setFontSize("14");
				this.TextLabelElecMeaTest.setFontWeight("bold");
				this.HyperLinkElecMeaTest2.setText("\u6709\u51e0\u8f86\u8f66");
				this.HyperLinkElecMeaTest2.setHref("http://192.168.1.119:5590/NewProject/client/client/car.html");
				this.HyperLinkElecMeaTest2.setFont("\u5fae\u8f6f\u96c5\u9ed1");
				this.HyperLinkElecMeaTest2.setFontSize("14");
				this.HyperLinkElecMeaTest2.setMarginLeft(10);
				this.HyperLinkElecMeaTest3.setText("\u6458\u679c\u5b50");
				this.HyperLinkElecMeaTest3.setHref("http://192.168.1.119:5590/NewProject/client/client/fruit.html");
				this.HyperLinkElecMeaTest3.setFont("\u5fae\u8f6f\u96c5\u9ed1");
				this.HyperLinkElecMeaTest3.setFontSize("14");
				this.HyperLinkElecMeaTest3.setMarginLeft(10);
				this.HyperLinkElecMeaTest4.setText("\u5c0f\u732b\u5403\u9c7c");
				this.HyperLinkElecMeaTest4.setHref("http://192.168.1.119:5590/NewProject/client/client/fish.html");
				this.HyperLinkElecMeaTest4.setFont("\u5fae\u8f6f\u96c5\u9ed1");
				this.HyperLinkElecMeaTest4.setFontSize("14");
				this.HyperLinkElecMeaTest4.setMarginLeft(10);
				this.HyperLinkElecMeaTest5.setText("\u731c\u6570\u6e38\u620f");
				this.HyperLinkElecMeaTest5.setHref("http://192.168.1.119:5590/NewProject/client/client/number.html");
				this.HyperLinkElecMeaTest5.setFont("\u5fae\u8f6f\u96c5\u9ed1");
				this.HyperLinkElecMeaTest5.setFontSize("14");
				this.HyperLinkElecMeaTest5.setMarginLeft(10);
				this.BoxSignalAnaTest.setPadding(8);
				this.BoxSignalAnaTest.setWidth("640");
				this.BoxSignalAnaTest.setHeight("30");
				this.BoxSignalAnaTest.setChildren([egl.eglx.lang.convert(egl.eglx.ui.rui.Widget.fromWidget, [this.TextLabelSignalAnaTest,"org.eclipse.edt.rui.widgets.TextLabel"]), egl.eglx.lang.convert(egl.eglx.ui.rui.Widget.fromWidget, [this.HyperLinkSignalAnaTest1,"org.eclipse.edt.rui.widgets.HyperLink"]), egl.eglx.lang.convert(egl.eglx.ui.rui.Widget.fromWidget, [this.HyperLinkSignalAnaTest2,"org.eclipse.edt.rui.widgets.HyperLink"])].setType("[Teglx/ui/rui/Widget;"));
				this.HyperLinkSignalAnaTest1.setText("\u6574\u7406\u623f\u95f4");
				this.HyperLinkSignalAnaTest1.setHref("http://192.168.1.119:5590/NewProject/client/client/room.html");
				this.HyperLinkSignalAnaTest1.setFont("\u5fae\u8f6f\u96c5\u9ed1");
				this.HyperLinkSignalAnaTest1.setFontSize("14");
				this.TextLabelSignalAnaTest.setText("\u3010\u56db\u3001\u5206\u7c7b\u3011");
				this.TextLabelSignalAnaTest.setFont("\u5fae\u8f6f\u96c5\u9ed1");
				this.TextLabelSignalAnaTest.setFontSize("14");
				this.TextLabelSignalAnaTest.setFontWeight("bold");
				this.HyperLinkSignalAnaTest2.setText("\u6574\u7406\u4e66\u5305");
				this.HyperLinkSignalAnaTest2.setHref("http://192.168.1.119:5590/NewProject/client/client/bag.html");
				this.HyperLinkSignalAnaTest2.setFont("\u5fae\u8f6f\u96c5\u9ed1");
				this.HyperLinkSignalAnaTest2.setFontSize("14");
				this.HyperLinkSignalAnaTest2.setMarginLeft(10);
				this.BoxComprehensiveTest.setPadding(8);
				this.BoxComprehensiveTest.setWidth("640");
				this.BoxComprehensiveTest.setHeight("30");
				this.BoxComprehensiveTest.setChildren([egl.eglx.lang.convert(egl.eglx.ui.rui.Widget.fromWidget, [this.TextLabelComprehensiveTest,"org.eclipse.edt.rui.widgets.TextLabel"]), egl.eglx.lang.convert(egl.eglx.ui.rui.Widget.fromWidget, [this.HyperLinkComprehensiveTest1,"org.eclipse.edt.rui.widgets.HyperLink"]), egl.eglx.lang.convert(egl.eglx.ui.rui.Widget.fromWidget, [this.HyperLinkComprehensiveTest2,"org.eclipse.edt.rui.widgets.HyperLink"]), egl.eglx.lang.convert(egl.eglx.ui.rui.Widget.fromWidget, [this.HyperLinkComprehensiveTest3,"org.eclipse.edt.rui.widgets.HyperLink"]), egl.eglx.lang.convert(egl.eglx.ui.rui.Widget.fromWidget, [this.HyperLinkComprehensiveTest4,"org.eclipse.edt.rui.widgets.HyperLink"])].setType("[Teglx/ui/rui/Widget;"));
				this.HyperLinkComprehensiveTest1.setText("\u7efc\u5408\u6d4b\u8bd5\u9898\uff081\uff09");
				this.HyperLinkComprehensiveTest1.setHref("ComprehensiveTest1");
				this.HyperLinkComprehensiveTest1.setFont("\u5fae\u8f6f\u96c5\u9ed1");
				this.HyperLinkComprehensiveTest1.setFontSize("14");
				this.TextLabelComprehensiveTest.setText("\u3010\u7efc\u5408\u6d4b\u8bd5\u9898\u3011");
				this.TextLabelComprehensiveTest.setFont("\u5fae\u8f6f\u96c5\u9ed1");
				this.TextLabelComprehensiveTest.setFontSize("14");
				this.TextLabelComprehensiveTest.setFontWeight("bold");
				this.HyperLinkComprehensiveTest2.setText("\u7efc\u5408\u6d4b\u8bd5\u9898\uff082\uff09");
				this.HyperLinkComprehensiveTest2.setHref("ComprehensiveTest2");
				this.HyperLinkComprehensiveTest2.setFont("\u5fae\u8f6f\u96c5\u9ed1");
				this.HyperLinkComprehensiveTest2.setFontSize("14");
				this.HyperLinkComprehensiveTest2.setMarginLeft(10);
				this.HyperLinkComprehensiveTest3.setText("\u7efc\u5408\u6d4b\u8bd5\u9898\uff083\uff09");
				this.HyperLinkComprehensiveTest3.setHref("ComprehensiveTest3");
				this.HyperLinkComprehensiveTest3.setFont("\u5fae\u8f6f\u96c5\u9ed1");
				this.HyperLinkComprehensiveTest3.setFontSize("14");
				this.HyperLinkComprehensiveTest3.setMarginLeft(10);
				this.HyperLinkComprehensiveTest4.setText("\u7efc\u5408\u6d4b\u8bd5\u9898\uff084\uff09");
				this.HyperLinkComprehensiveTest4.setHref("ComprehensiveTest4");
				this.HyperLinkComprehensiveTest4.setFont("\u5fae\u8f6f\u96c5\u9ed1");
				this.HyperLinkComprehensiveTest4.setFontSize("14");
				this.HyperLinkComprehensiveTest4.setMarginLeft(10);
				this.BoxMyTest.setPadding(8);
				this.BoxMyTest.setBorderColor("DodgerBlue");
				this.BoxMyTest.setBorderStyle("solid");
				this.BoxMyTest.setWidth("610");
				this.BoxMyTest.setChildren((function() { var eze$Temp30 = []; eze$Temp30.setType("[eglx.ui.rui.Widget");
					for (var i = 0; i < 0; i++) {
					eze$Temp30[i] = new egl.eglx.ui.rui.Widget();}
				return eze$Temp30;})());
				this.BoxMyResult.setPadding(8);
				this.BoxMyResult.setBorderColor("DodgerBlue");
				this.BoxMyResult.setBorderStyle("solid");
				this.BoxMyResult.setWidth("610");
				this.BoxMyResult.setChildren((function() { var eze$Temp31 = []; eze$Temp31.setType("[eglx.ui.rui.Widget");
					for (var i = 0; i < 0; i++) {
					eze$Temp31[i] = new egl.eglx.ui.rui.Widget();}
				return eze$Temp31;})());
				this.initialUI = [egl.eglx.lang.convert(egl.eglx.ui.rui.Widget.fromWidget, [this.ui,"org.eclipse.edt.rui.widgets.GridLayout"])].setType("[Teglx/ui/rui/Widget;");
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
			}
			,
			"showcall": function(event) {
				var button;
				button = egl.eglx.lang.EAny.ezeCast({eze$$value : event.widget, eze$$signature : "eglx.ui.rui.Widget"}, egl.dojo.widgets.DojoButton);
				this.BoxBody.setChildren((function() { var eze$Temp32 = []; eze$Temp32.setType("[eglx.ui.rui.Widget");
					for (var i = 0; i < 0; i++) {
					eze$Temp32[i] = new egl.eglx.ui.rui.Widget();}
				return eze$Temp32;})());
				{
					EzeLabel_eze_CaseLabel_0: if (((button.getText()) == "\u4e00\u3001\u751f\u6d3b\u4e2d\u7684\u6570")) {
						this.BoxBody.appendChild(egl.eglx.lang.convert(egl.eglx.ui.rui.Widget.fromWidget, [new egl.client.client.Test1().ui,"org.eclipse.edt.rui.widgets.GridLayout"]));
					}
					else {
						if (((button.getText()) == "\u4e8c\u3001\u6bd4\u8f83")) {
							this.BoxBody.appendChild(egl.eglx.lang.convert(egl.eglx.ui.rui.Widget.fromWidget, [new egl.client.client.Test2().ui,"org.eclipse.edt.rui.widgets.GridLayout"]));
						}
						else {
							if (((button.getText()) == "\u4e09\u3001\u52a0\u51cf\u6cd5\uff08\u4e00\uff09")) {
								this.BoxBody.appendChild(egl.eglx.lang.convert(egl.eglx.ui.rui.Widget.fromWidget, [new egl.client.client.Test3().ui,"org.eclipse.edt.rui.widgets.GridLayout"]));
							}
							else {
								if (((button.getText()) == "\u56db\u3001\u5206\u7c7b")) {
									this.BoxBody.appendChild(egl.eglx.lang.convert(egl.eglx.ui.rui.Widget.fromWidget, [new egl.client.client.Test4().ui,"org.eclipse.edt.rui.widgets.GridLayout"]));
								}
							}
						}
					}
				}
			}
			,
			"toString": function() {
				return "[Test]";
			}
		}
	);
});
