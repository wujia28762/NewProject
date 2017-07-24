define(["org/eclipse/edt/rui/widgets/DataGrid", "org/eclipse/edt/rui/widgets/GridLayoutLib", "org/eclipse/edt/rui/widgets/GridLayoutData", "org/eclipse/edt/rui/widgets/Box", "ezekw$$dojo/widgets/eze$$DojoButton", "org/eclipse/edt/rui/widgets/Div", "org/eclipse/edt/rui/widgets/DataGridLib", "ezekw$$dojo/widgets/eze$$DojoTextArea", "client/common/Lesson", "ezekw$$dojo/widgets/eze$$DojoDialog", "eglx/ui/rui/eze$$Event", "org/eclipse/edt/rui/mvc/FormField", "org/eclipse/edt/rui/mvc/Controller", "eglx/ui/rui/eze$$Widget", "org/eclipse/edt/rui/mvc/FormManager", "ezekw$$dojo/widgets/eze$$DojoTextField", "org/eclipse/edt/rui/widgets/FloatRight", "org/eclipse/edt/rui/widgets/TextLabel", "eglx/ui/rui/eze$$View", "org/eclipse/edt/rui/widgets/DataGridColumn", "org/eclipse/edt/rui/widgets/GridLayout", "eglx/services/ServiceInvocationException", "ezekw$$dojo/widgets/eze$$DojoTitlePane"],function(){
	egl.loadCSS("css/NewProject.css");
	egl.defineRUIHandler("client.client", "Learn3", {
		"eze$$fileName" : "client/client/Learn3.egl",
		"eze$$runtimePropertiesFile" : "client/client/Learn3",
			"constructor": function() {
				this.start();
			}
			,
			"eze$$setEmpty": function() {
				new egl.org.eclipse.edt.rui.widgets.GridLayoutLib();
				new egl.org.eclipse.edt.rui.widgets.DataGridLib();
				new egl.org.eclipse.edt.rui.mvc.InternalNumericFormatter();
				this.myLessonService = null;
				this.dedicatedServiceBinding = new egl.eglx.http.HttpProxy();
				this.ui = new egl.org.eclipse.edt.rui.widgets.GridLayout();
				this.conBox = new egl.org.eclipse.edt.rui.widgets.Box();
				this.con = new egl.org.eclipse.edt.rui.widgets.TextLabel();
				this.lifeBox = new egl.org.eclipse.edt.rui.widgets.Box();
				this.GridLayout = new egl.org.eclipse.edt.rui.widgets.GridLayout();
				this.GridLayout1 = new egl.org.eclipse.edt.rui.widgets.GridLayout();
				this.Box = new egl.org.eclipse.edt.rui.widgets.Box();
				this.Button = new egl.dojo.widgets.DojoButton();
				this.Button1 = new egl.dojo.widgets.DojoButton();
				this.Button2 = new egl.dojo.widgets.DojoButton();
				this.Button3 = new egl.dojo.widgets.DojoButton();
				this.Button4 = new egl.dojo.widgets.DojoButton();
				this.GridLayout2 = new egl.org.eclipse.edt.rui.widgets.GridLayout();
				this.ButtonEdit = new egl.dojo.widgets.DojoButton();
				this.myLesson =  [];
				this.myLesson_ui = new egl.org.eclipse.edt.rui.widgets.DataGrid();
				this.selectedLesson = new egl.client.common.Lesson();
				this.selectedLesson_ui = new egl.org.eclipse.edt.rui.widgets.GridLayout();
				this.selectedLesson_lesson_id_nameLabel = new egl.org.eclipse.edt.rui.widgets.TextLabel();
				this.selectedLesson_lesson_id_field = new egl.dojo.widgets.DojoTextField();
				this.selectedLesson_lesson_id_controller = new egl.org.eclipse.edt.rui.mvc.Controller();
				this.selectedLesson_lesson_id_formField = new egl.org.eclipse.edt.rui.mvc.FormField();
				this.selectedLesson_lessonname_nameLabel = new egl.org.eclipse.edt.rui.widgets.TextLabel();
				this.selectedLesson_lessonname_field = new egl.dojo.widgets.DojoTextField();
				this.selectedLesson_lessonname_controller = new egl.org.eclipse.edt.rui.mvc.Controller();
				this.selectedLesson_lessonname_formField = new egl.org.eclipse.edt.rui.mvc.FormField();
				this.selectedLesson_coursecom_nameLabel = new egl.org.eclipse.edt.rui.widgets.TextLabel();
				this.selectedLesson_coursecom_area = new egl.dojo.widgets.DojoTextArea();
				this.selectedLesson_coursecom_controller = new egl.org.eclipse.edt.rui.mvc.Controller();
				this.selectedLesson_coursecom_formField = new egl.org.eclipse.edt.rui.mvc.FormField();
				this.selectedLesson_form = new egl.org.eclipse.edt.rui.mvc.FormManager();
				this.dialog = new egl.dojo.widgets.DojoDialog();
				this.content = new egl.org.eclipse.edt.rui.widgets.Box();
				this.info = new egl.org.eclipse.edt.rui.widgets.Div();
				this.buttonBar = new egl.org.eclipse.edt.rui.widgets.FloatRight();
				this.logActive = false;
				this.ButtonCourse = new egl.dojo.widgets.DojoButton();
				this.GridLayout3 = new egl.org.eclipse.edt.rui.widgets.GridLayout();
				this.BodyBox = new egl.org.eclipse.edt.rui.widgets.Box();
			}
			,
			"eze$$setInitial": function() {
				try { egl.enter("<init>",this,arguments);
					this.eze$$setEmpty();
					egl.atLine(this.eze$$fileName,44,1472,11, this);
					this.ui.setColumns(1);
					egl.atLine(this.eze$$fileName,44,1485,8, this);
					this.ui.setRows(2);
					egl.atLine(this.eze$$fileName,44,1495,15, this);
					this.ui.setCellPadding(1);
					egl.atLine(this.eze$$fileName,44,1512,30, this);
					this.ui.setChildren([egl.eglx.lang.convert(egl.eglx.ui.rui.Widget.fromWidget, [this.lifeBox,"org.eclipse.edt.rui.widgets.Box"]), egl.eglx.lang.convert(egl.eglx.ui.rui.Widget.fromWidget, [this.conBox,"org.eclipse.edt.rui.widgets.Box"])].setType("[Teglx/ui/rui/Widget;"));
					var eze$LNNTemp1 = null;
					{
						var eze$SettingTarget1 = new egl.org.eclipse.edt.rui.widgets.GridLayoutData();
						egl.atLine(this.eze$$fileName,45,1574,41, this);
						eze$SettingTarget1 = egl.eglx.lang.AnyValue.ezeCopyTo(new egl.org.eclipse.edt.rui.widgets.GridLayoutData(), eze$SettingTarget1);
						egl.atLine(this.eze$$fileName,45,1594,7, this);
						eze$SettingTarget1.row = 1;
						egl.atLine(this.eze$$fileName,45,1603,10, this);
						eze$SettingTarget1.column = 1;
						egl.atLine(this.eze$$fileName,45,1574,41, this);
						eze$LNNTemp1 = egl.eglx.lang.AnyValue.ezeCopyTo(eze$SettingTarget1, eze$LNNTemp1);
					}
					egl.atLine(this.eze$$fileName,45,1561,54, this);
					this.conBox.setLayoutData(egl.eglx.lang.convert(egl.eglx.lang.EAny.fromEAny, [eze$LNNTemp1.eze$$clone(),"Torg/eclipse/edt/rui/widgets/GridLayoutData;"]));
					egl.atLine(this.eze$$fileName,45,1617,11, this);
					this.conBox.setPadding(8);
					egl.atLine(this.eze$$fileName,46,1635,18, this);
					this.conBox.setChildren([egl.eglx.lang.convert(egl.eglx.ui.rui.Widget.fromWidget, [this.con,"org.eclipse.edt.rui.widgets.TextLabel"])].setType("[Teglx/ui/rui/Widget;"));
					egl.atLine(this.eze$$fileName,47,1660,13, this);
					this.conBox.setWidth("790");
					egl.atLine(this.eze$$fileName,48,1680,25, this);
					this.conBox.setBackgroundColor("Khaki");
					egl.atLine(this.eze$$fileName,49,1728,16, this);
					this.con.setText("\u4e00\u3001\u751f\u6d3b\u4e2d\u7684\u6570");
					egl.atLine(this.eze$$fileName,50,1751,15, this);
					this.con.setFontSize("20");
					egl.atLine(this.eze$$fileName,51,1773,21, this);
					this.con.setFontWeight("bolder");
					egl.atLine(this.eze$$fileName,52,1801,13, this);
					this.con.setFont("\u534e\u6587\u884c\u6977");
					var eze$LNNTemp2 = null;
					{
						var eze$SettingTarget1 = new egl.org.eclipse.edt.rui.widgets.GridLayoutData();
						egl.atLine(this.eze$$fileName,53,1848,41, this);
						eze$SettingTarget1 = egl.eglx.lang.AnyValue.ezeCopyTo(new egl.org.eclipse.edt.rui.widgets.GridLayoutData(), eze$SettingTarget1);
						egl.atLine(this.eze$$fileName,53,1868,7, this);
						eze$SettingTarget1.row = 2;
						egl.atLine(this.eze$$fileName,53,1877,10, this);
						eze$SettingTarget1.column = 1;
						egl.atLine(this.eze$$fileName,53,1848,41, this);
						eze$LNNTemp2 = egl.eglx.lang.AnyValue.ezeCopyTo(eze$SettingTarget1, eze$LNNTemp2);
					}
					egl.atLine(this.eze$$fileName,53,1835,54, this);
					this.lifeBox.setLayoutData(egl.eglx.lang.convert(egl.eglx.lang.EAny.fromEAny, [eze$LNNTemp2.eze$$clone(),"Torg/eclipse/edt/rui/widgets/GridLayoutData;"]));
					egl.atLine(this.eze$$fileName,53,1891,9, this);
					this.lifeBox.setPadding(8);
					egl.atLine(this.eze$$fileName,54,1907,25, this);
					this.lifeBox.setChildren([egl.eglx.lang.convert(egl.eglx.ui.rui.Widget.fromWidget, [this.GridLayout,"org.eclipse.edt.rui.widgets.GridLayout"])].setType("[Teglx/ui/rui/Widget;"));
					egl.atLine(this.eze$$fileName,55,1963,15, this);
					this.GridLayout.setCellPadding(4);
					egl.atLine(this.eze$$fileName,55,1980,8, this);
					this.GridLayout.setRows(2);
					egl.atLine(this.eze$$fileName,55,1990,11, this);
					this.GridLayout.setColumns(2);
					egl.atLine(this.eze$$fileName,56,2008,52, this);
					this.GridLayout.setChildren([egl.eglx.lang.convert(egl.eglx.ui.rui.Widget.fromWidget, [this.GridLayout3,"org.eclipse.edt.rui.widgets.GridLayout"]), egl.eglx.lang.convert(egl.eglx.ui.rui.Widget.fromWidget, [this.GridLayout2,"org.eclipse.edt.rui.widgets.GridLayout"]), egl.eglx.lang.convert(egl.eglx.ui.rui.Widget.fromWidget, [this.GridLayout1,"org.eclipse.edt.rui.widgets.GridLayout"])].setType("[Teglx/ui/rui/Widget;"));
					var eze$LNNTemp3 = null;
					{
						var eze$SettingTarget1 = new egl.org.eclipse.edt.rui.widgets.GridLayoutData();
						egl.atLine(this.eze$$fileName,57,2105,41, this);
						eze$SettingTarget1 = egl.eglx.lang.AnyValue.ezeCopyTo(new egl.org.eclipse.edt.rui.widgets.GridLayoutData(), eze$SettingTarget1);
						egl.atLine(this.eze$$fileName,57,2125,7, this);
						eze$SettingTarget1.row = 1;
						egl.atLine(this.eze$$fileName,57,2134,10, this);
						eze$SettingTarget1.column = 1;
						egl.atLine(this.eze$$fileName,57,2105,41, this);
						eze$LNNTemp3 = egl.eglx.lang.AnyValue.ezeCopyTo(eze$SettingTarget1, eze$LNNTemp3);
					}
					egl.atLine(this.eze$$fileName,57,2092,54, this);
					this.GridLayout1.setLayoutData(egl.eglx.lang.convert(egl.eglx.lang.EAny.fromEAny, [eze$LNNTemp3.eze$$clone(),"Torg/eclipse/edt/rui/widgets/GridLayoutData;"]));
					egl.atLine(this.eze$$fileName,57,2148,15, this);
					this.GridLayout1.setCellPadding(4);
					egl.atLine(this.eze$$fileName,57,2165,8, this);
					this.GridLayout1.setRows(1);
					egl.atLine(this.eze$$fileName,57,2175,11, this);
					this.GridLayout1.setColumns(1);
					egl.atLine(this.eze$$fileName,58,2193,18, this);
					this.GridLayout1.setChildren([egl.eglx.lang.convert(egl.eglx.ui.rui.Widget.fromWidget, [this.Box,"org.eclipse.edt.rui.widgets.Box"])].setType("[Teglx/ui/rui/Widget;"));
					var eze$LNNTemp4 = null;
					{
						var eze$SettingTarget1 = new egl.org.eclipse.edt.rui.widgets.GridLayoutData();
						egl.atLine(this.eze$$fileName,59,2241,41, this);
						eze$SettingTarget1 = egl.eglx.lang.AnyValue.ezeCopyTo(new egl.org.eclipse.edt.rui.widgets.GridLayoutData(), eze$SettingTarget1);
						egl.atLine(this.eze$$fileName,59,2261,7, this);
						eze$SettingTarget1.row = 1;
						egl.atLine(this.eze$$fileName,59,2270,10, this);
						eze$SettingTarget1.column = 1;
						egl.atLine(this.eze$$fileName,59,2241,41, this);
						eze$LNNTemp4 = egl.eglx.lang.AnyValue.ezeCopyTo(eze$SettingTarget1, eze$LNNTemp4);
					}
					egl.atLine(this.eze$$fileName,59,2228,54, this);
					this.Box.setLayoutData(egl.eglx.lang.convert(egl.eglx.lang.EAny.fromEAny, [eze$LNNTemp4.eze$$clone(),"Torg/eclipse/edt/rui/widgets/GridLayoutData;"]));
					egl.atLine(this.eze$$fileName,59,2284,9, this);
					this.Box.setPadding(8);
					egl.atLine(this.eze$$fileName,60,2300,57, this);
					this.Box.setChildren([egl.eglx.lang.convert(egl.eglx.ui.rui.Widget.fromWidget, [this.Button,"dojo.widgets.DojoButton"]), egl.eglx.lang.convert(egl.eglx.ui.rui.Widget.fromWidget, [this.Button1,"dojo.widgets.DojoButton"]), egl.eglx.lang.convert(egl.eglx.ui.rui.Widget.fromWidget, [this.Button3,"dojo.widgets.DojoButton"]), egl.eglx.lang.convert(egl.eglx.ui.rui.Widget.fromWidget, [this.Button2,"dojo.widgets.DojoButton"]), egl.eglx.lang.convert(egl.eglx.ui.rui.Widget.fromWidget, [this.Button4,"dojo.widgets.DojoButton"])].setType("[Teglx/ui/rui/Widget;"));
					egl.atLine(this.eze$$fileName,61,2364,11, this);
					this.Box.setColumns(1);
					egl.atLine(this.eze$$fileName,62,2382,14, this);
					this.Box.setHeight("400");
					egl.atLine(this.eze$$fileName,63,2423,14, this);
					this.Button.setText("\u53ef\u7231\u7684\u6821\u56ed");
					egl.atLine(this.eze$$fileName,64,2444,15, this);
					this.Button.setFontSize("16");
					egl.atLine(this.eze$$fileName,65,2466,13, this);
					this.Button.setFont("\u5fae\u8f6f\u96c5\u9ed1");
					egl.atLine(this.eze$$fileName,66,2507,14, this);
					this.Button1.setText("\u5feb\u4e50\u7684\u5bb6\u56ed");
					egl.atLine(this.eze$$fileName,67,2528,13, this);
					this.Button1.setFont("\u5fae\u8f6f\u96c5\u9ed1");
					egl.atLine(this.eze$$fileName,68,2548,15, this);
					this.Button1.setFontSize("16");
					egl.atLine(this.eze$$fileName,69,2591,11, this);
					this.Button2.setText("\u73a9\u5177");
					egl.atLine(this.eze$$fileName,70,2609,13, this);
					this.Button2.setFont("\u5fae\u8f6f\u96c5\u9ed1");
					egl.atLine(this.eze$$fileName,71,2629,15, this);
					this.Button2.setFontSize("16");
					egl.atLine(this.eze$$fileName,72,2672,13, this);
					this.Button3.setText("\u5c0f\u732b\u9493\u9c7c");
					egl.atLine(this.eze$$fileName,73,2692,13, this);
					this.Button3.setFont("\u5fae\u8f6f\u96c5\u9ed1");
					egl.atLine(this.eze$$fileName,74,2712,15, this);
					this.Button3.setFontSize("16");
					egl.atLine(this.eze$$fileName,75,2755,11, this);
					this.Button4.setText("\u6587\u5177");
					egl.atLine(this.eze$$fileName,76,2773,13, this);
					this.Button4.setFont("\u5fae\u8f6f\u96c5\u9ed1");
					egl.atLine(this.eze$$fileName,77,2793,15, this);
					this.Button4.setFontSize("16");
					var eze$LNNTemp5 = null;
					{
						var eze$SettingTarget1 = new egl.org.eclipse.edt.rui.widgets.GridLayoutData();
						egl.atLine(this.eze$$fileName,78,2853,41, this);
						eze$SettingTarget1 = egl.eglx.lang.AnyValue.ezeCopyTo(new egl.org.eclipse.edt.rui.widgets.GridLayoutData(), eze$SettingTarget1);
						egl.atLine(this.eze$$fileName,78,2873,7, this);
						eze$SettingTarget1.row = 2;
						egl.atLine(this.eze$$fileName,78,2882,10, this);
						eze$SettingTarget1.column = 1;
						egl.atLine(this.eze$$fileName,78,2853,41, this);
						eze$LNNTemp5 = egl.eglx.lang.AnyValue.ezeCopyTo(eze$SettingTarget1, eze$LNNTemp5);
					}
					egl.atLine(this.eze$$fileName,78,2840,54, this);
					this.GridLayout2.setLayoutData(egl.eglx.lang.convert(egl.eglx.lang.EAny.fromEAny, [eze$LNNTemp5.eze$$clone(),"Torg/eclipse/edt/rui/widgets/GridLayoutData;"]));
					egl.atLine(this.eze$$fileName,78,2896,15, this);
					this.GridLayout2.setCellPadding(4);
					egl.atLine(this.eze$$fileName,78,2913,8, this);
					this.GridLayout2.setRows(1);
					egl.atLine(this.eze$$fileName,78,2923,11, this);
					this.GridLayout2.setColumns(2);
					egl.atLine(this.eze$$fileName,79,2939,37, this);
					this.GridLayout2.setChildren([egl.eglx.lang.convert(egl.eglx.ui.rui.Widget.fromWidget, [this.ButtonCourse,"dojo.widgets.DojoButton"]), egl.eglx.lang.convert(egl.eglx.ui.rui.Widget.fromWidget, [this.ButtonEdit,"dojo.widgets.DojoButton"])].setType("[Teglx/ui/rui/Widget;"));
					var eze$LNNTemp6 = null;
					{
						var eze$SettingTarget1 = new egl.org.eclipse.edt.rui.widgets.GridLayoutData();
						egl.atLine(this.eze$$fileName,80,3020,41, this);
						eze$SettingTarget1 = egl.eglx.lang.AnyValue.ezeCopyTo(new egl.org.eclipse.edt.rui.widgets.GridLayoutData(), eze$SettingTarget1);
						egl.atLine(this.eze$$fileName,80,3040,7, this);
						eze$SettingTarget1.row = 1;
						egl.atLine(this.eze$$fileName,80,3049,10, this);
						eze$SettingTarget1.column = 1;
						egl.atLine(this.eze$$fileName,80,3020,41, this);
						eze$LNNTemp6 = egl.eglx.lang.AnyValue.ezeCopyTo(eze$SettingTarget1, eze$LNNTemp6);
					}
					egl.atLine(this.eze$$fileName,80,3007,54, this);
					this.ButtonEdit.setLayoutData(egl.eglx.lang.convert(egl.eglx.lang.EAny.fromEAny, [eze$LNNTemp6.eze$$clone(),"Torg/eclipse/edt/rui/widgets/GridLayoutData;"]));
					egl.atLine(this.eze$$fileName,80,3063,11, this);
					this.ButtonEdit.setText("\u7f16\u8f91");
					egl.atLine(this.eze$$fileName,81,3078,13, this);
					this.ButtonEdit.setFont("\u5fae\u8f6f\u96c5\u9ed1");
					egl.atLine(this.eze$$fileName,82,3095,15, this);
					this.ButtonEdit.setFontSize("14");
					egl.atLine(this.eze$$fileName,82,3112,22, this);
					this.ButtonEdit.getOnClick().appendElement(new egl.egl.jsrt.Delegate(this, egl.client.client.Learn3.prototype.showDialog, ""));
					var eze$LNNTemp7 = null;
					{
						var eze$SettingTarget1 = new egl.org.eclipse.edt.rui.widgets.GridLayoutData();
						egl.atLine(this.eze$$fileName,85,3199,89, this);
						eze$SettingTarget1 = egl.eglx.lang.AnyValue.ezeCopyTo(new egl.org.eclipse.edt.rui.widgets.GridLayoutData(), eze$SettingTarget1);
						egl.atLine(this.eze$$fileName,85,3219,7, this);
						eze$SettingTarget1.row = 1;
						egl.atLine(this.eze$$fileName,85,3228,10, this);
						eze$SettingTarget1.column = 1;
						egl.atLine(this.eze$$fileName,86,3242,44, this);
						eze$SettingTarget1.verticalAlignment = egl.org.eclipse.edt.rui.widgets.GridLayoutLib['$inst'].VALIGN_TOP;
						egl.atLine(this.eze$$fileName,85,3199,89, this);
						eze$LNNTemp7 = egl.eglx.lang.AnyValue.ezeCopyTo(eze$SettingTarget1, eze$LNNTemp7);
					}
					egl.atLine(this.eze$$fileName,85,3186,102, this);
					this.myLesson_ui.setLayoutData(egl.eglx.lang.convert(egl.eglx.lang.EAny.fromEAny, [eze$LNNTemp7.eze$$clone(),"Torg/eclipse/edt/rui/widgets/GridLayoutData;"]));
					egl.atLine(this.eze$$fileName,87,3292,39, this);
					this.myLesson_ui.selectionListeners.appendElement(new egl.egl.jsrt.Delegate(this, egl.client.client.Learn3.prototype.cellClickedLesson, ""));
					var eze$LNNTemp9 = null;
					{
						var eze$SettingTarget1;
						egl.atLine(this.eze$$fileName,91,3536,74, this);
						eze$SettingTarget1 = new egl.org.eclipse.edt.rui.widgets.DataGridColumn();
						egl.atLine(this.eze$$fileName,91,3556,18, this);
						eze$SettingTarget1.name = "coursecom";
						egl.atLine(this.eze$$fileName,91,3576,20, this);
						eze$SettingTarget1.displayName = "\u8bfe\u7a0b\u7b80\u4ecb";
						egl.atLine(this.eze$$fileName,91,3598,11, this);
						eze$SettingTarget1.width = egl.eglx.lang.convert(egl.eglx.lang.EString.fromEInt32, [320]);
						egl.atLine(this.eze$$fileName,91,3536,74, this);
						eze$LNNTemp9 = eze$SettingTarget1;
					}
					var eze$LNNTemp8 = null;
					{
						var eze$SettingTarget1;
						egl.atLine(this.eze$$fileName,90,3456,75, this);
						eze$SettingTarget1 = new egl.org.eclipse.edt.rui.widgets.DataGridColumn();
						egl.atLine(this.eze$$fileName,90,3476,19, this);
						eze$SettingTarget1.name = "lessonname";
						egl.atLine(this.eze$$fileName,90,3497,20, this);
						eze$SettingTarget1.displayName = "\u8bfe\u7a0b\u540d\u79f0";
						egl.atLine(this.eze$$fileName,90,3519,11, this);
						eze$SettingTarget1.width = egl.eglx.lang.convert(egl.eglx.lang.EString.fromEInt32, [120]);
						egl.atLine(this.eze$$fileName,90,3456,75, this);
						eze$LNNTemp8 = eze$SettingTarget1;
					}
					egl.atLine(this.eze$$fileName,88,3365,324, this);
					this.myLesson_ui.setColumns([eze$LNNTemp8, eze$LNNTemp9].setType("[Torg/eclipse/edt/rui/widgets/DataGridColumn;"));
					egl.atLine(this.eze$$fileName,94,3693,24, this);
					this.myLesson_ui.setData(egl.convertAnyToArrayType(this.myLesson,"[A;"));
					egl.atLine(this.eze$$fileName,95,3721,21, this);
					this.myLesson_ui.setShowCheckBoxes(true);
					egl.atLine(this.eze$$fileName,96,3746,44, this);
					this.myLesson_ui.setSelectionMode(egl.org.eclipse.edt.rui.widgets.DataGridLib['$inst'].SINGLE_SELECTION);
					egl.atLine(this.eze$$fileName,97,3794,13, this);
					this.myLesson_ui.setWidth("600");
					egl.atLine(this.eze$$fileName,98,3811,15, this);
					this.myLesson_ui.setFontSize("14");
					egl.atLine(this.eze$$fileName,99,3830,11, this);
					this.myLesson_ui.setFont("\u5b8b\u4f53");
					egl.atLine(this.eze$$fileName,100,3845,13, this);
					this.myLesson_ui.setPageSize(10);
					egl.atLine(this.eze$$fileName,104,3921,8, this);
					this.selectedLesson_ui.setRows(4);
					egl.atLine(this.eze$$fileName,104,3931,11, this);
					this.selectedLesson_ui.setColumns(2);
					egl.atLine(this.eze$$fileName,104,3944,15, this);
					this.selectedLesson_ui.setCellPadding(4);
					egl.atLine(this.eze$$fileName,104,3961,278, this);
					this.selectedLesson_ui.setChildren([egl.eglx.lang.convert(egl.eglx.ui.rui.Widget.fromWidget, [this.selectedLesson_lesson_id_nameLabel,"org.eclipse.edt.rui.widgets.TextLabel"]), egl.eglx.lang.convert(egl.eglx.ui.rui.Widget.fromWidget, [this.selectedLesson_lesson_id_field,"dojo.widgets.DojoTextField"]), egl.eglx.lang.convert(egl.eglx.ui.rui.Widget.fromWidget, [this.selectedLesson_lessonname_nameLabel,"org.eclipse.edt.rui.widgets.TextLabel"]), egl.eglx.lang.convert(egl.eglx.ui.rui.Widget.fromWidget, [this.selectedLesson_lessonname_field,"dojo.widgets.DojoTextField"]), egl.eglx.lang.convert(egl.eglx.ui.rui.Widget.fromWidget, [this.selectedLesson_coursecom_nameLabel,"org.eclipse.edt.rui.widgets.TextLabel"]), egl.eglx.lang.convert(egl.eglx.ui.rui.Widget.fromWidget, [this.selectedLesson_coursecom_area,"dojo.widgets.DojoTextArea"])].setType("[Teglx/ui/rui/Widget;"));
					egl.atLine(this.eze$$fileName,105,4243,13, this);
					this.selectedLesson_ui.setWidth("120");
					egl.atLine(this.eze$$fileName,107,4309,12, this);
					this.selectedLesson_lesson_id_nameLabel.setText("\u8bfe\u7a0b\u5e8f\u53f7:");
					var eze$LNNTemp10 = null;
					{
						var eze$SettingTarget1 = new egl.org.eclipse.edt.rui.widgets.GridLayoutData();
						egl.atLine(this.eze$$fileName,107,4337,41, this);
						eze$SettingTarget1 = egl.eglx.lang.AnyValue.ezeCopyTo(new egl.org.eclipse.edt.rui.widgets.GridLayoutData(), eze$SettingTarget1);
						egl.atLine(this.eze$$fileName,107,4358,7, this);
						eze$SettingTarget1.row = 1;
						egl.atLine(this.eze$$fileName,107,4367,10, this);
						eze$SettingTarget1.column = 1;
						egl.atLine(this.eze$$fileName,107,4337,41, this);
						eze$LNNTemp10 = egl.eglx.lang.AnyValue.ezeCopyTo(eze$SettingTarget1, eze$LNNTemp10);
					}
					egl.atLine(this.eze$$fileName,107,4324,54, this);
					this.selectedLesson_lesson_id_nameLabel.setLayoutData(egl.eglx.lang.convert(egl.eglx.lang.EAny.fromEAny, [eze$LNNTemp10.eze$$clone(),"Torg/eclipse/edt/rui/widgets/GridLayoutData;"]));
					egl.atLine(this.eze$$fileName,107,4379,12, this);
					this.selectedLesson_lesson_id_nameLabel.setWidth("60");
					var eze$LNNTemp11 = null;
					{
						var eze$SettingTarget1 = new egl.org.eclipse.edt.rui.widgets.GridLayoutData();
						egl.atLine(this.eze$$fileName,108,4455,41, this);
						eze$SettingTarget1 = egl.eglx.lang.AnyValue.ezeCopyTo(new egl.org.eclipse.edt.rui.widgets.GridLayoutData(), eze$SettingTarget1);
						egl.atLine(this.eze$$fileName,108,4476,7, this);
						eze$SettingTarget1.row = 1;
						egl.atLine(this.eze$$fileName,108,4485,10, this);
						eze$SettingTarget1.column = 2;
						egl.atLine(this.eze$$fileName,108,4455,41, this);
						eze$LNNTemp11 = egl.eglx.lang.AnyValue.ezeCopyTo(eze$SettingTarget1, eze$LNNTemp11);
					}
					egl.atLine(this.eze$$fileName,108,4442,54, this);
					this.selectedLesson_lesson_id_field.setLayoutData(egl.eglx.lang.convert(egl.eglx.lang.EAny.fromEAny, [eze$LNNTemp11.eze$$clone(),"Torg/eclipse/edt/rui/widgets/GridLayoutData;"]));
					egl.atLine(this.eze$$fileName,108,4497,12, this);
					this.selectedLesson_lesson_id_field.setWidth("100");
					egl.atLine(this.eze$$fileName,108,4510,15, this);
					this.selectedLesson_lesson_id_field.setReadOnly(true);
					new egl.org.eclipse.edt.rui.mvc.InternalNumericFormatter();
					this.selectedLesson_lesson_id_controller.eze$$parent = this;
					this.selectedLesson_lesson_id_controller.commitHelper = new egl.egl.jsrt.Delegate(this.selectedLesson_lesson_id_controller, function(/*String*/ s ) { try {
							this.eze$$parent.selectedLesson.lesson_id = egl.eglx.lang.convert(egl.eglx.lang.EInt32.fromEString, [s]);
					} catch(e) { throw egl.createRuntimeException( "CRRUI2002E", [ "commitHelper this.selectedLesson.lesson_id", e.message, egl.lastFunctionEntered ] ); }; });
					this.selectedLesson_lesson_id_controller.retrieveModelHelper = new egl.egl.jsrt.Delegate(this.selectedLesson_lesson_id_controller, function() { try {
							return egl.eglx.lang.convert(egl.eglx.lang.EString.fromEInt32, [this.eze$$parent.selectedLesson.lesson_id]);
					} catch(e) { throw egl.createRuntimeException( "CRRUI2002E", [ "retrieveModelHelper this.selectedLesson.lesson_id", e.message, egl.lastFunctionEntered ] ); }; });
					this.selectedLesson_lesson_id_controller.publishHelper = new egl.egl.jsrt.Delegate(this.selectedLesson_lesson_id_controller, function(/*String*/ s ) { try {
							this.eze$$parent.selectedLesson_lesson_id_field.setText(s);
					} catch(e) { throw egl.createRuntimeException( "CRRUI2002E", [ "publishHelper this.selectedLesson.lesson_id", e.message, egl.lastFunctionEntered ] ); }; });
					this.selectedLesson_lesson_id_controller.retrieveViewHelper = new egl.egl.jsrt.Delegate(this.selectedLesson_lesson_id_controller, function() { try {
							return this.eze$$parent.selectedLesson_lesson_id_field.getText();
					} catch(e) { throw egl.createRuntimeException( "CRRUI2002E", [ "retrieveViewHelper this.selectedLesson.lesson_id", e.message, egl.lastFunctionEntered ] ); }; });
					this.selectedLesson_lesson_id_controller.retrieveValidStateHelper = new egl.egl.jsrt.Delegate(this.selectedLesson_lesson_id_controller, function() { try {
							return this.eze$$parent.selectedLesson_lesson_id_field.getValidState();
					} catch(e) { throw egl.createRuntimeException( "CRRUI2002E", [ "retrieveValidStateHelper this.selectedLesson.lesson_id", e.message, egl.lastFunctionEntered ] ); }; });
					this.selectedLesson_lesson_id_controller.publishMessageHelper = new egl.egl.jsrt.Delegate(this.selectedLesson_lesson_id_controller, function(/*String*/ s ) { try {
							this.eze$$parent.selectedLesson_lesson_id_field.showErrorMessage(s);
					} catch(e) { throw egl.createRuntimeException( "CRRUI2002E", [ "publishMessageHelper this.selectedLesson.lesson_id", e.message, egl.lastFunctionEntered ] ); }; });
					this.selectedLesson_lesson_id_controller.showErrorState = new egl.egl.jsrt.Delegate(this.selectedLesson_lesson_id_controller, function(/*Boolean*/ b ) { try {
							this.eze$$parent.selectedLesson_lesson_id_field.showErrorIndicator(b);
					} catch(e) { throw egl.createRuntimeException( "CRRUI2002E", [ "showErrorState this.selectedLesson.lesson_id", e.message, egl.lastFunctionEntered ] ); }; });
					this.selectedLesson_lesson_id_controller.setModel(this.selectedLesson.lesson_id);
					this.selectedLesson_lesson_id_controller.setView(this.selectedLesson_lesson_id_field);
					var eze$Temp12 = new egl.org.eclipse.edt.rui.mvc.internal.FormatterWrapper(egl.org.eclipse.edt.rui.mvc.InternalNumericFormatter.$inst, false, false, " ", egl.eglx.ui.SignKind.leading, false, "", false, 0, 0, "eglx.lang.EInt", "");
					this.selectedLesson_lesson_id_controller.internalFormatters.appendElement(new egl.egl.jsrt.Delegate(eze$Temp12, eze$Temp12.format));
					this.selectedLesson_lesson_id_controller.internalUnformatters.appendElement(new egl.egl.jsrt.Delegate(eze$Temp12, eze$Temp12.unformat));
					egl.atLine(this.eze$$fileName,109,4659,56, this);
					this.selectedLesson_lesson_id_controller.validStateSetter = new egl.egl.jsrt.Delegate(this, egl.client.client.Learn3.prototype.handleValidStateChange_selectedLesson, "Torg/eclipse/edt/rui/mvc/MVCValidStateSetter;");
					egl.atLine(this.eze$$fileName,110,4766,48, this);
					this.selectedLesson_lesson_id_formField.controller = this.selectedLesson_lesson_id_controller;
					egl.atLine(this.eze$$fileName,110,4816,46, this);
					this.selectedLesson_lesson_id_formField.nameLabel = this.selectedLesson_lesson_id_nameLabel;
					egl.atLine(this.eze$$fileName,112,4915,12, this);
					this.selectedLesson_lessonname_nameLabel.setText("\u8bfe\u7a0b\u540d\u79f0:");
					var eze$LNNTemp13 = null;
					{
						var eze$SettingTarget1 = new egl.org.eclipse.edt.rui.widgets.GridLayoutData();
						egl.atLine(this.eze$$fileName,112,4943,41, this);
						eze$SettingTarget1 = egl.eglx.lang.AnyValue.ezeCopyTo(new egl.org.eclipse.edt.rui.widgets.GridLayoutData(), eze$SettingTarget1);
						egl.atLine(this.eze$$fileName,112,4964,7, this);
						eze$SettingTarget1.row = 2;
						egl.atLine(this.eze$$fileName,112,4973,10, this);
						eze$SettingTarget1.column = 1;
						egl.atLine(this.eze$$fileName,112,4943,41, this);
						eze$LNNTemp13 = egl.eglx.lang.AnyValue.ezeCopyTo(eze$SettingTarget1, eze$LNNTemp13);
					}
					egl.atLine(this.eze$$fileName,112,4930,54, this);
					this.selectedLesson_lessonname_nameLabel.setLayoutData(egl.eglx.lang.convert(egl.eglx.lang.EAny.fromEAny, [eze$LNNTemp13.eze$$clone(),"Torg/eclipse/edt/rui/widgets/GridLayoutData;"]));
					egl.atLine(this.eze$$fileName,112,4985,12, this);
					this.selectedLesson_lessonname_nameLabel.setWidth("60");
					var eze$LNNTemp14 = null;
					{
						var eze$SettingTarget1 = new egl.org.eclipse.edt.rui.widgets.GridLayoutData();
						egl.atLine(this.eze$$fileName,113,5062,41, this);
						eze$SettingTarget1 = egl.eglx.lang.AnyValue.ezeCopyTo(new egl.org.eclipse.edt.rui.widgets.GridLayoutData(), eze$SettingTarget1);
						egl.atLine(this.eze$$fileName,113,5083,7, this);
						eze$SettingTarget1.row = 2;
						egl.atLine(this.eze$$fileName,113,5092,10, this);
						eze$SettingTarget1.column = 2;
						egl.atLine(this.eze$$fileName,113,5062,41, this);
						eze$LNNTemp14 = egl.eglx.lang.AnyValue.ezeCopyTo(eze$SettingTarget1, eze$LNNTemp14);
					}
					egl.atLine(this.eze$$fileName,113,5049,54, this);
					this.selectedLesson_lessonname_field.setLayoutData(egl.eglx.lang.convert(egl.eglx.lang.EAny.fromEAny, [eze$LNNTemp14.eze$$clone(),"Torg/eclipse/edt/rui/widgets/GridLayoutData;"]));
					egl.atLine(this.eze$$fileName,113,5104,12, this);
					this.selectedLesson_lessonname_field.setWidth("500");
					this.selectedLesson_lessonname_controller.eze$$parent = this;
					this.selectedLesson_lessonname_controller.commitHelper = new egl.egl.jsrt.Delegate(this.selectedLesson_lessonname_controller, function(/*String*/ s ) { try {
							this.eze$$parent.selectedLesson.lessonname = egl.eglx.lang.EString.ezeCast({eze$$value : s, eze$$signature : "S;"}, true, 100);
					} catch(e) { throw egl.createRuntimeException( "CRRUI2002E", [ "commitHelper this.selectedLesson.lessonname", e.message, egl.lastFunctionEntered ] ); }; });
					this.selectedLesson_lessonname_controller.retrieveModelHelper = new egl.egl.jsrt.Delegate(this.selectedLesson_lessonname_controller, function() { try {
							return this.eze$$parent.selectedLesson.lessonname;
					} catch(e) { throw egl.createRuntimeException( "CRRUI2002E", [ "retrieveModelHelper this.selectedLesson.lessonname", e.message, egl.lastFunctionEntered ] ); }; });
					this.selectedLesson_lessonname_controller.publishHelper = new egl.egl.jsrt.Delegate(this.selectedLesson_lessonname_controller, function(/*String*/ s ) { try {
							this.eze$$parent.selectedLesson_lessonname_field.setText(s);
					} catch(e) { throw egl.createRuntimeException( "CRRUI2002E", [ "publishHelper this.selectedLesson.lessonname", e.message, egl.lastFunctionEntered ] ); }; });
					this.selectedLesson_lessonname_controller.retrieveViewHelper = new egl.egl.jsrt.Delegate(this.selectedLesson_lessonname_controller, function() { try {
							return this.eze$$parent.selectedLesson_lessonname_field.getText();
					} catch(e) { throw egl.createRuntimeException( "CRRUI2002E", [ "retrieveViewHelper this.selectedLesson.lessonname", e.message, egl.lastFunctionEntered ] ); }; });
					this.selectedLesson_lessonname_controller.retrieveValidStateHelper = new egl.egl.jsrt.Delegate(this.selectedLesson_lessonname_controller, function() { try {
							return this.eze$$parent.selectedLesson_lessonname_field.getValidState();
					} catch(e) { throw egl.createRuntimeException( "CRRUI2002E", [ "retrieveValidStateHelper this.selectedLesson.lessonname", e.message, egl.lastFunctionEntered ] ); }; });
					this.selectedLesson_lessonname_controller.publishMessageHelper = new egl.egl.jsrt.Delegate(this.selectedLesson_lessonname_controller, function(/*String*/ s ) { try {
							this.eze$$parent.selectedLesson_lessonname_field.showErrorMessage(s);
					} catch(e) { throw egl.createRuntimeException( "CRRUI2002E", [ "publishMessageHelper this.selectedLesson.lessonname", e.message, egl.lastFunctionEntered ] ); }; });
					this.selectedLesson_lessonname_controller.showErrorState = new egl.egl.jsrt.Delegate(this.selectedLesson_lessonname_controller, function(/*Boolean*/ b ) { try {
							this.eze$$parent.selectedLesson_lessonname_field.showErrorIndicator(b);
					} catch(e) { throw egl.createRuntimeException( "CRRUI2002E", [ "showErrorState this.selectedLesson.lessonname", e.message, egl.lastFunctionEntered ] ); }; });
					this.selectedLesson_lessonname_controller.setModel(this.selectedLesson.lessonname);
					this.selectedLesson_lessonname_controller.setView(this.selectedLesson_lessonname_field);
					egl.atLine(this.eze$$fileName,114,5253,56, this);
					this.selectedLesson_lessonname_controller.validStateSetter = new egl.egl.jsrt.Delegate(this, egl.client.client.Learn3.prototype.handleValidStateChange_selectedLesson, "Torg/eclipse/edt/rui/mvc/MVCValidStateSetter;");
					egl.atLine(this.eze$$fileName,115,5361,49, this);
					this.selectedLesson_lessonname_formField.controller = this.selectedLesson_lessonname_controller;
					egl.atLine(this.eze$$fileName,115,5412,47, this);
					this.selectedLesson_lessonname_formField.nameLabel = this.selectedLesson_lessonname_nameLabel;
					egl.atLine(this.eze$$fileName,117,5511,12, this);
					this.selectedLesson_coursecom_nameLabel.setText("\u8bfe\u7a0b\u7b80\u4ecb:");
					var eze$LNNTemp15 = null;
					{
						var eze$SettingTarget1 = new egl.org.eclipse.edt.rui.widgets.GridLayoutData();
						egl.atLine(this.eze$$fileName,117,5539,41, this);
						eze$SettingTarget1 = egl.eglx.lang.AnyValue.ezeCopyTo(new egl.org.eclipse.edt.rui.widgets.GridLayoutData(), eze$SettingTarget1);
						egl.atLine(this.eze$$fileName,117,5560,7, this);
						eze$SettingTarget1.row = 3;
						egl.atLine(this.eze$$fileName,117,5569,10, this);
						eze$SettingTarget1.column = 1;
						egl.atLine(this.eze$$fileName,117,5539,41, this);
						eze$LNNTemp15 = egl.eglx.lang.AnyValue.ezeCopyTo(eze$SettingTarget1, eze$LNNTemp15);
					}
					egl.atLine(this.eze$$fileName,117,5526,54, this);
					this.selectedLesson_coursecom_nameLabel.setLayoutData(egl.eglx.lang.convert(egl.eglx.lang.EAny.fromEAny, [eze$LNNTemp15.eze$$clone(),"Torg/eclipse/edt/rui/widgets/GridLayoutData;"]));
					egl.atLine(this.eze$$fileName,117,5581,12, this);
					this.selectedLesson_coursecom_nameLabel.setWidth("60");
					var eze$LNNTemp16 = null;
					{
						var eze$SettingTarget1 = new egl.org.eclipse.edt.rui.widgets.GridLayoutData();
						egl.atLine(this.eze$$fileName,118,5656,41, this);
						eze$SettingTarget1 = egl.eglx.lang.AnyValue.ezeCopyTo(new egl.org.eclipse.edt.rui.widgets.GridLayoutData(), eze$SettingTarget1);
						egl.atLine(this.eze$$fileName,118,5677,7, this);
						eze$SettingTarget1.row = 3;
						egl.atLine(this.eze$$fileName,118,5686,10, this);
						eze$SettingTarget1.column = 2;
						egl.atLine(this.eze$$fileName,118,5656,41, this);
						eze$LNNTemp16 = egl.eglx.lang.AnyValue.ezeCopyTo(eze$SettingTarget1, eze$LNNTemp16);
					}
					egl.atLine(this.eze$$fileName,118,5643,54, this);
					this.selectedLesson_coursecom_area.setLayoutData(egl.eglx.lang.convert(egl.eglx.lang.EAny.fromEAny, [eze$LNNTemp16.eze$$clone(),"Torg/eclipse/edt/rui/widgets/GridLayoutData;"]));
					egl.atLine(this.eze$$fileName,118,5698,12, this);
					this.selectedLesson_coursecom_area.setWidth("500");
					this.selectedLesson_coursecom_controller.eze$$parent = this;
					this.selectedLesson_coursecom_controller.commitHelper = new egl.egl.jsrt.Delegate(this.selectedLesson_coursecom_controller, function(/*String*/ s ) { try {
							this.eze$$parent.selectedLesson.coursecom = egl.eglx.lang.EString.ezeCast({eze$$value : s, eze$$signature : "S;"}, true, 255);
					} catch(e) { throw egl.createRuntimeException( "CRRUI2002E", [ "commitHelper this.selectedLesson.coursecom", e.message, egl.lastFunctionEntered ] ); }; });
					this.selectedLesson_coursecom_controller.retrieveModelHelper = new egl.egl.jsrt.Delegate(this.selectedLesson_coursecom_controller, function() { try {
							return this.eze$$parent.selectedLesson.coursecom;
					} catch(e) { throw egl.createRuntimeException( "CRRUI2002E", [ "retrieveModelHelper this.selectedLesson.coursecom", e.message, egl.lastFunctionEntered ] ); }; });
					this.selectedLesson_coursecom_controller.publishHelper = new egl.egl.jsrt.Delegate(this.selectedLesson_coursecom_controller, function(/*String*/ s ) { try {
							this.eze$$parent.selectedLesson_coursecom_area.setText(s);
					} catch(e) { throw egl.createRuntimeException( "CRRUI2002E", [ "publishHelper this.selectedLesson.coursecom", e.message, egl.lastFunctionEntered ] ); }; });
					this.selectedLesson_coursecom_controller.retrieveViewHelper = new egl.egl.jsrt.Delegate(this.selectedLesson_coursecom_controller, function() { try {
							return this.eze$$parent.selectedLesson_coursecom_area.getText();
					} catch(e) { throw egl.createRuntimeException( "CRRUI2002E", [ "retrieveViewHelper this.selectedLesson.coursecom", e.message, egl.lastFunctionEntered ] ); }; });
					this.selectedLesson_coursecom_controller.setModel(this.selectedLesson.coursecom);
					this.selectedLesson_coursecom_controller.setView(this.selectedLesson_coursecom_area);
					egl.atLine(this.eze$$fileName,119,5843,56, this);
					this.selectedLesson_coursecom_controller.validStateSetter = new egl.egl.jsrt.Delegate(this, egl.client.client.Learn3.prototype.handleValidStateChange_selectedLesson, "Torg/eclipse/edt/rui/mvc/MVCValidStateSetter;");
					egl.atLine(this.eze$$fileName,120,5950,48, this);
					this.selectedLesson_coursecom_formField.controller = this.selectedLesson_coursecom_controller;
					egl.atLine(this.eze$$fileName,120,6000,46, this);
					this.selectedLesson_coursecom_formField.nameLabel = this.selectedLesson_coursecom_nameLabel;
					egl.atLine(this.eze$$fileName,121,6083,153, this);
					this.selectedLesson_form.setEntries([this.selectedLesson_lesson_id_formField, this.selectedLesson_lessonname_formField, this.selectedLesson_coursecom_formField].setType("[Torg/eclipse/edt/rui/mvc/FormField;"));
					egl.atLine(this.eze$$fileName,123,6270,13, this);
					this.dialog.title = "\u7f16\u8f91\u6846";
					egl.atLine(this.eze$$fileName,124,6292,12, this);
					this.dialog.setPadding(20);
					egl.atLine(this.eze$$fileName,125,6313,28, this);
					this.dialog.setBackgroundColor("AliceBlue");
					egl.atLine(this.eze$$fileName,126,6350,16, this);
					this.dialog.draggable = true;
					egl.atLine(this.eze$$fileName,127,6375,20, this);
					this.dialog.setChildren([egl.eglx.lang.convert(egl.eglx.ui.rui.Widget.fromWidget, [this.content,"org.eclipse.edt.rui.widgets.Box"])].setType("[Teglx/ui/rui/Widget;"));
					egl.atLine(this.eze$$fileName,130,6427,10, this);
					this.content.setColumns(1);
					egl.atLine(this.eze$$fileName,133,6466,12, this);
					this.info.setPadding(10);
					egl.atLine(this.eze$$fileName,133,6480,11, this);
					this.info.setWidth(egl.eglx.lang.convert(egl.eglx.lang.EString.fromEInt32, [600]));
					egl.atLine(this.eze$$fileName,133,6493,28, this);
					this.info.setBackgroundColor("lightBlue");
					var eze$LNNTemp17 = null;
					var eze$LNNTemp18 = null;
					{
						var eze$SettingTarget2;
						egl.atLine(this.eze$$fileName,135,6641,50, this);
						eze$SettingTarget2 = (function () {
							var eze$Temp19 = new egl.org.eclipse.edt.rui.widgets.Div();
							return eze$Temp19;
						}).call(this);
						egl.atLine(this.eze$$fileName,136,6654,33, this);
						eze$SettingTarget2.setChildren([egl.eglx.lang.convert(egl.eglx.ui.rui.Widget.fromWidget, [this.selectedLesson_ui,"org.eclipse.edt.rui.widgets.GridLayout"])].setType("[Teglx/ui/rui/Widget;"));
						egl.atLine(this.eze$$fileName,135,6641,50, this);
						eze$LNNTemp18 = eze$SettingTarget2;
					}
					{
						var eze$SettingTarget1;
						egl.atLine(this.eze$$fileName,135,6551,144, this);
						eze$SettingTarget1 = (function () {
							var eze$Temp20 = new egl.dojo.widgets.DojoTitlePane();
							return eze$Temp20;
						}).call(this);
						egl.atLine(this.eze$$fileName,135,6569,14, this);
						eze$SettingTarget1.title = "\u8bfe\u7a0b\u7f16\u8f91";
						egl.atLine(this.eze$$fileName,135,6585,11, this);
						eze$SettingTarget1.setOpen(true);
						egl.atLine(this.eze$$fileName,135,6598,13, this);
						eze$SettingTarget1.duration = 1000;
						egl.atLine(this.eze$$fileName,135,6613,13, this);
						eze$SettingTarget1.setWidth("600");
						egl.atLine(this.eze$$fileName,135,6628,65, this);
						eze$SettingTarget1.setChildren([egl.eglx.lang.convert(egl.eglx.ui.rui.Widget.fromWidget, [eze$LNNTemp18,"org.eclipse.edt.rui.widgets.Div"])].setType("[Teglx/ui/rui/Widget;"));
						egl.atLine(this.eze$$fileName,135,6551,144, this);
						eze$LNNTemp17 = eze$SettingTarget1;
					}
					egl.atLine(this.eze$$fileName,134,6530,166, this);
					this.info.setChildren([egl.eglx.lang.convert(egl.eglx.ui.rui.Widget.fromWidget, [eze$LNNTemp17,"dojo.widgets.DojoTitlePane"])].setType("[Teglx/ui/rui/Widget;"));
					egl.atLine(this.eze$$fileName,140,6737,13, this);
					this.buttonBar.setMarginTop(9);
					var eze$LNNTemp25 = null;
					{
						var eze$SettingTarget1;
						egl.atLine(this.eze$$fileName,146,7046,62, this);
						eze$SettingTarget1 = (function () {
							var eze$Temp26 = new egl.dojo.widgets.DojoButton();
							return eze$Temp26;
						}).call(this);
						egl.atLine(this.eze$$fileName,146,7061,10, this);
						eze$SettingTarget1.setText("\u5173\u95ed");
						egl.atLine(this.eze$$fileName,146,7072,13, this);
						eze$SettingTarget1.setMarginRight(0);
						egl.atLine(this.eze$$fileName,146,7086,21, this);
						eze$SettingTarget1.getOnClick().appendElement(new egl.egl.jsrt.Delegate(this, egl.client.client.Learn3.prototype.hideDialog, ""));
						egl.atLine(this.eze$$fileName,146,7046,62, this);
						eze$LNNTemp25 = eze$SettingTarget1;
					}
					var eze$LNNTemp24 = null;
					{
						var eze$SettingTarget1;
						egl.atLine(this.eze$$fileName,145,6968,67, this);
						eze$SettingTarget1 = (function () {
							var eze$Temp27 = new egl.dojo.widgets.DojoButton();
							return eze$Temp27;
						}).call(this);
						egl.atLine(this.eze$$fileName,145,6983,11, this);
						eze$SettingTarget1.setText("\u4fdd\u5b58");
						egl.atLine(this.eze$$fileName,145,6995,38, this);
						eze$SettingTarget1.getOnClick().appendElement(new egl.egl.jsrt.Delegate(this, egl.client.client.Learn3.prototype.selectedLesson_form_Submit, ""));
						egl.atLine(this.eze$$fileName,145,6968,67, this);
						eze$LNNTemp24 = eze$SettingTarget1;
					}
					var eze$LNNTemp23 = null;
					{
						var eze$SettingTarget1;
						egl.atLine(this.eze$$fileName,144,6901,56, this);
						eze$SettingTarget1 = (function () {
							var eze$Temp28 = new egl.dojo.widgets.DojoButton();
							return eze$Temp28;
						}).call(this);
						egl.atLine(this.eze$$fileName,144,6916,11, this);
						eze$SettingTarget1.setText("\u6e05\u7a7a");
						egl.atLine(this.eze$$fileName,144,6929,26, this);
						eze$SettingTarget1.getOnClick().appendElement(new egl.egl.jsrt.Delegate(this, egl.client.client.Learn3.prototype.clearAllFields, ""));
						egl.atLine(this.eze$$fileName,144,6901,56, this);
						eze$LNNTemp23 = eze$SettingTarget1;
					}
					var eze$LNNTemp22 = null;
					{
						var eze$SettingTarget1;
						egl.atLine(this.eze$$fileName,143,6840,50, this);
						eze$SettingTarget1 = (function () {
							var eze$Temp29 = new egl.dojo.widgets.DojoButton();
							return eze$Temp29;
						}).call(this);
						egl.atLine(this.eze$$fileName,143,6855,11, this);
						eze$SettingTarget1.setText("\u5220\u9664");
						egl.atLine(this.eze$$fileName,143,6867,21, this);
						eze$SettingTarget1.getOnClick().appendElement(new egl.egl.jsrt.Delegate(this, egl.client.client.Learn3.prototype.deleteRow, ""));
						egl.atLine(this.eze$$fileName,143,6840,50, this);
						eze$LNNTemp22 = eze$SettingTarget1;
					}
					var eze$LNNTemp21 = null;
					{
						var eze$SettingTarget1;
						egl.atLine(this.eze$$fileName,142,6781,48, this);
						eze$SettingTarget1 = (function () {
							var eze$Temp30 = new egl.dojo.widgets.DojoButton();
							return eze$Temp30;
						}).call(this);
						egl.atLine(this.eze$$fileName,142,6796,11, this);
						eze$SettingTarget1.setText("\u6dfb\u52a0");
						egl.atLine(this.eze$$fileName,142,6809,18, this);
						eze$SettingTarget1.getOnClick().appendElement(new egl.egl.jsrt.Delegate(this, egl.client.client.Learn3.prototype.addrow, ""));
						egl.atLine(this.eze$$fileName,142,6781,48, this);
						eze$LNNTemp21 = eze$SettingTarget1;
					}
					egl.atLine(this.eze$$fileName,141,6759,350, this);
					this.buttonBar.setChildren([egl.eglx.lang.convert(egl.eglx.ui.rui.Widget.fromWidget, [eze$LNNTemp21,"dojo.widgets.DojoButton"]), egl.eglx.lang.convert(egl.eglx.ui.rui.Widget.fromWidget, [eze$LNNTemp22,"dojo.widgets.DojoButton"]), egl.eglx.lang.convert(egl.eglx.ui.rui.Widget.fromWidget, [eze$LNNTemp23,"dojo.widgets.DojoButton"]), egl.eglx.lang.convert(egl.eglx.ui.rui.Widget.fromWidget, [eze$LNNTemp24,"dojo.widgets.DojoButton"]), egl.eglx.lang.convert(egl.eglx.ui.rui.Widget.fromWidget, [eze$LNNTemp25,"dojo.widgets.DojoButton"])].setType("[Teglx/ui/rui/Widget;"));
					egl.atLine(this.eze$$fileName,180,8173,4, this);
					this.logActive = true;
					var eze$LNNTemp31 = null;
					{
						var eze$SettingTarget1 = new egl.org.eclipse.edt.rui.widgets.GridLayoutData();
						egl.atLine(this.eze$$fileName,181,8222,41, this);
						eze$SettingTarget1 = egl.eglx.lang.AnyValue.ezeCopyTo(new egl.org.eclipse.edt.rui.widgets.GridLayoutData(), eze$SettingTarget1);
						egl.atLine(this.eze$$fileName,181,8242,7, this);
						eze$SettingTarget1.row = 1;
						egl.atLine(this.eze$$fileName,181,8251,10, this);
						eze$SettingTarget1.column = 2;
						egl.atLine(this.eze$$fileName,181,8222,41, this);
						eze$LNNTemp31 = egl.eglx.lang.AnyValue.ezeCopyTo(eze$SettingTarget1, eze$LNNTemp31);
					}
					egl.atLine(this.eze$$fileName,181,8209,54, this);
					this.ButtonCourse.setLayoutData(egl.eglx.lang.convert(egl.eglx.lang.EAny.fromEAny, [eze$LNNTemp31.eze$$clone(),"Torg/eclipse/edt/rui/widgets/GridLayoutData;"]));
					egl.atLine(this.eze$$fileName,182,8271,15, this);
					this.ButtonCourse.setText("\u52a0\u5165\u6211\u7684\u8bfe\u7a0b");
					egl.atLine(this.eze$$fileName,183,8294,13, this);
					this.ButtonCourse.setFont("\u5fae\u8f6f\u96c5\u9ed1");
					egl.atLine(this.eze$$fileName,184,8315,15, this);
					this.ButtonCourse.setFontSize("16");
					var eze$LNNTemp32 = null;
					{
						var eze$SettingTarget1 = new egl.org.eclipse.edt.rui.widgets.GridLayoutData();
						egl.atLine(this.eze$$fileName,185,8376,41, this);
						eze$SettingTarget1 = egl.eglx.lang.AnyValue.ezeCopyTo(new egl.org.eclipse.edt.rui.widgets.GridLayoutData(), eze$SettingTarget1);
						egl.atLine(this.eze$$fileName,185,8396,7, this);
						eze$SettingTarget1.row = 1;
						egl.atLine(this.eze$$fileName,185,8405,10, this);
						eze$SettingTarget1.column = 2;
						egl.atLine(this.eze$$fileName,185,8376,41, this);
						eze$LNNTemp32 = egl.eglx.lang.AnyValue.ezeCopyTo(eze$SettingTarget1, eze$LNNTemp32);
					}
					egl.atLine(this.eze$$fileName,185,8363,54, this);
					this.GridLayout3.setLayoutData(egl.eglx.lang.convert(egl.eglx.lang.EAny.fromEAny, [eze$LNNTemp32.eze$$clone(),"Torg/eclipse/edt/rui/widgets/GridLayoutData;"]));
					egl.atLine(this.eze$$fileName,185,8419,15, this);
					this.GridLayout3.setCellPadding(4);
					egl.atLine(this.eze$$fileName,185,8436,8, this);
					this.GridLayout3.setRows(1);
					egl.atLine(this.eze$$fileName,185,8446,11, this);
					this.GridLayout3.setColumns(1);
					egl.atLine(this.eze$$fileName,186,8465,22, this);
					this.GridLayout3.setChildren([egl.eglx.lang.convert(egl.eglx.ui.rui.Widget.fromWidget, [this.BodyBox,"org.eclipse.edt.rui.widgets.Box"])].setType("[Teglx/ui/rui/Widget;"));
					var eze$LNNTemp33 = null;
					{
						var eze$SettingTarget1 = new egl.org.eclipse.edt.rui.widgets.GridLayoutData();
						egl.atLine(this.eze$$fileName,187,8522,41, this);
						eze$SettingTarget1 = egl.eglx.lang.AnyValue.ezeCopyTo(new egl.org.eclipse.edt.rui.widgets.GridLayoutData(), eze$SettingTarget1);
						egl.atLine(this.eze$$fileName,187,8542,7, this);
						eze$SettingTarget1.row = 1;
						egl.atLine(this.eze$$fileName,187,8551,10, this);
						eze$SettingTarget1.column = 1;
						egl.atLine(this.eze$$fileName,187,8522,41, this);
						eze$LNNTemp33 = egl.eglx.lang.AnyValue.ezeCopyTo(eze$SettingTarget1, eze$LNNTemp33);
					}
					egl.atLine(this.eze$$fileName,187,8509,54, this);
					this.BodyBox.setLayoutData(egl.eglx.lang.convert(egl.eglx.lang.EAny.fromEAny, [eze$LNNTemp33.eze$$clone(),"Torg/eclipse/edt/rui/widgets/GridLayoutData;"]));
					egl.atLine(this.eze$$fileName,187,8565,9, this);
					this.BodyBox.setPadding(8);
					egl.atLine(this.eze$$fileName,38,1268,28, this);
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
				var ezert$$2 = new egl.client.client.Learn3();
				ezert$$2.myLessonService = ezert$$1.myLessonService === null ? null : ezert$$1.myLessonService;
				ezert$$2.dedicatedServiceBinding = ezert$$1.dedicatedServiceBinding === null ? null : ezert$$1.dedicatedServiceBinding;
				ezert$$2.ui = ezert$$1.ui === null ? null : ezert$$1.ui.eze$$clone();
				ezert$$2.conBox = ezert$$1.conBox === null ? null : ezert$$1.conBox.eze$$clone();
				ezert$$2.con = ezert$$1.con === null ? null : ezert$$1.con.eze$$clone();
				ezert$$2.lifeBox = ezert$$1.lifeBox === null ? null : ezert$$1.lifeBox.eze$$clone();
				ezert$$2.GridLayout = ezert$$1.GridLayout === null ? null : ezert$$1.GridLayout.eze$$clone();
				ezert$$2.GridLayout1 = ezert$$1.GridLayout1 === null ? null : ezert$$1.GridLayout1.eze$$clone();
				ezert$$2.Box = ezert$$1.Box === null ? null : ezert$$1.Box.eze$$clone();
				ezert$$2.Button = ezert$$1.Button === null ? null : ezert$$1.Button;
				ezert$$2.Button1 = ezert$$1.Button1 === null ? null : ezert$$1.Button1;
				ezert$$2.Button2 = ezert$$1.Button2 === null ? null : ezert$$1.Button2;
				ezert$$2.Button3 = ezert$$1.Button3 === null ? null : ezert$$1.Button3;
				ezert$$2.Button4 = ezert$$1.Button4 === null ? null : ezert$$1.Button4;
				ezert$$2.GridLayout2 = ezert$$1.GridLayout2 === null ? null : ezert$$1.GridLayout2.eze$$clone();
				ezert$$2.ButtonEdit = ezert$$1.ButtonEdit === null ? null : ezert$$1.ButtonEdit;
				ezert$$2.myLesson = ezert$$1.myLesson === null ? null : ezert$$1.myLesson;
				ezert$$2.myLesson_ui = ezert$$1.myLesson_ui === null ? null : ezert$$1.myLesson_ui.eze$$clone();
				ezert$$2.selectedLesson = ezert$$1.selectedLesson;
				ezert$$2.selectedLesson_ui = ezert$$1.selectedLesson_ui === null ? null : ezert$$1.selectedLesson_ui.eze$$clone();
				ezert$$2.selectedLesson_lesson_id_nameLabel = ezert$$1.selectedLesson_lesson_id_nameLabel === null ? null : ezert$$1.selectedLesson_lesson_id_nameLabel.eze$$clone();
				ezert$$2.selectedLesson_lesson_id_field = ezert$$1.selectedLesson_lesson_id_field === null ? null : ezert$$1.selectedLesson_lesson_id_field;
				ezert$$2.selectedLesson_lesson_id_controller = ezert$$1.selectedLesson_lesson_id_controller === null ? null : ezert$$1.selectedLesson_lesson_id_controller.eze$$clone();
				ezert$$2.selectedLesson_lesson_id_formField = ezert$$1.selectedLesson_lesson_id_formField;
				ezert$$2.selectedLesson_lessonname_nameLabel = ezert$$1.selectedLesson_lessonname_nameLabel === null ? null : ezert$$1.selectedLesson_lessonname_nameLabel.eze$$clone();
				ezert$$2.selectedLesson_lessonname_field = ezert$$1.selectedLesson_lessonname_field === null ? null : ezert$$1.selectedLesson_lessonname_field;
				ezert$$2.selectedLesson_lessonname_controller = ezert$$1.selectedLesson_lessonname_controller === null ? null : ezert$$1.selectedLesson_lessonname_controller.eze$$clone();
				ezert$$2.selectedLesson_lessonname_formField = ezert$$1.selectedLesson_lessonname_formField;
				ezert$$2.selectedLesson_coursecom_nameLabel = ezert$$1.selectedLesson_coursecom_nameLabel === null ? null : ezert$$1.selectedLesson_coursecom_nameLabel.eze$$clone();
				ezert$$2.selectedLesson_coursecom_area = ezert$$1.selectedLesson_coursecom_area === null ? null : ezert$$1.selectedLesson_coursecom_area;
				ezert$$2.selectedLesson_coursecom_controller = ezert$$1.selectedLesson_coursecom_controller === null ? null : ezert$$1.selectedLesson_coursecom_controller.eze$$clone();
				ezert$$2.selectedLesson_coursecom_formField = ezert$$1.selectedLesson_coursecom_formField;
				ezert$$2.selectedLesson_form = ezert$$1.selectedLesson_form === null ? null : ezert$$1.selectedLesson_form.eze$$clone();
				ezert$$2.dialog = ezert$$1.dialog === null ? null : ezert$$1.dialog;
				ezert$$2.content = ezert$$1.content === null ? null : ezert$$1.content.eze$$clone();
				ezert$$2.info = ezert$$1.info === null ? null : ezert$$1.info.eze$$clone();
				ezert$$2.buttonBar = ezert$$1.buttonBar === null ? null : ezert$$1.buttonBar.eze$$clone();
				ezert$$2.logActive = ezert$$1.logActive;
				ezert$$2.ButtonCourse = ezert$$1.ButtonCourse === null ? null : ezert$$1.ButtonCourse;
				ezert$$2.GridLayout3 = ezert$$1.GridLayout3 === null ? null : ezert$$1.GridLayout3.eze$$clone();
				ezert$$2.BodyBox = ezert$$1.BodyBox === null ? null : ezert$$1.BodyBox.eze$$clone();
				return ezert$$2;
			}
			,
			"eze$$getFieldSignatures": function() {
				if(this.fieldSigs === undefined){
					this.fieldSigs = [
					{name: "myLessonService", sig: "eglx.persistence.sql.SQLDataSource"},
					{name: "dedicatedServiceBinding", sig: "eglx.http.HttpProxy"},
					{name: "ui", sig: "org.eclipse.edt.rui.widgets.GridLayout"},
					{name: "conBox", sig: "org.eclipse.edt.rui.widgets.Box"},
					{name: "con", sig: "org.eclipse.edt.rui.widgets.TextLabel"},
					{name: "lifeBox", sig: "org.eclipse.edt.rui.widgets.Box"},
					{name: "GridLayout", sig: "org.eclipse.edt.rui.widgets.GridLayout"},
					{name: "GridLayout1", sig: "org.eclipse.edt.rui.widgets.GridLayout"},
					{name: "Box", sig: "org.eclipse.edt.rui.widgets.Box"},
					{name: "Button", sig: "dojo.widgets.DojoButton"},
					{name: "Button1", sig: "dojo.widgets.DojoButton"},
					{name: "Button2", sig: "dojo.widgets.DojoButton"},
					{name: "Button3", sig: "dojo.widgets.DojoButton"},
					{name: "Button4", sig: "dojo.widgets.DojoButton"},
					{name: "GridLayout2", sig: "org.eclipse.edt.rui.widgets.GridLayout"},
					{name: "ButtonEdit", sig: "dojo.widgets.DojoButton"},
					{name: "myLesson", sig: "[Tclient/common/Lesson;"},
					{name: "myLesson_ui", sig: "org.eclipse.edt.rui.widgets.DataGrid"},
					{name: "selectedLesson", sig: "Tclient/common/Lesson;"},
					{name: "selectedLesson_ui", sig: "org.eclipse.edt.rui.widgets.GridLayout"},
					{name: "selectedLesson_lesson_id_nameLabel", sig: "org.eclipse.edt.rui.widgets.TextLabel"},
					{name: "selectedLesson_lesson_id_field", sig: "dojo.widgets.DojoTextField"},
					{name: "selectedLesson_lesson_id_controller", sig: "org.eclipse.edt.rui.mvc.Controller"},
					{name: "selectedLesson_lesson_id_formField", sig: "Torg/eclipse/edt/rui/mvc/FormField;"},
					{name: "selectedLesson_lessonname_nameLabel", sig: "org.eclipse.edt.rui.widgets.TextLabel"},
					{name: "selectedLesson_lessonname_field", sig: "dojo.widgets.DojoTextField"},
					{name: "selectedLesson_lessonname_controller", sig: "org.eclipse.edt.rui.mvc.Controller"},
					{name: "selectedLesson_lessonname_formField", sig: "Torg/eclipse/edt/rui/mvc/FormField;"},
					{name: "selectedLesson_coursecom_nameLabel", sig: "org.eclipse.edt.rui.widgets.TextLabel"},
					{name: "selectedLesson_coursecom_area", sig: "dojo.widgets.DojoTextArea"},
					{name: "selectedLesson_coursecom_controller", sig: "org.eclipse.edt.rui.mvc.Controller"},
					{name: "selectedLesson_coursecom_formField", sig: "Torg/eclipse/edt/rui/mvc/FormField;"},
					{name: "selectedLesson_form", sig: "org.eclipse.edt.rui.mvc.FormManager"},
					{name: "dialog", sig: "dojo.widgets.DojoDialog"},
					{name: "content", sig: "org.eclipse.edt.rui.widgets.Box"},
					{name: "info", sig: "org.eclipse.edt.rui.widgets.Div"},
					{name: "buttonBar", sig: "org.eclipse.edt.rui.widgets.FloatRight"},
					{name: "logActive", sig: "0;"},
					{name: "ButtonCourse", sig: "dojo.widgets.DojoButton"},
					{name: "GridLayout3", sig: "org.eclipse.edt.rui.widgets.GridLayout"},
					{name: "BodyBox", sig: "org.eclipse.edt.rui.widgets.Box"}];
				}
				return this.fieldSigs;
			}
			,
			"eze$$getAnnotations": function() {
				if(this.annotations === undefined){
					this.annotations = {};
					this.annotations["XMLRootElement"] = new egl.eglx.xml.binding.annotation.XMLRootElement("Learn3", null, false);
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
					this.fieldInfos[2] =new egl.eglx.services.FieldInfo("ui", "ui", "org.eclipse.edt.rui.widgets.GridLayout", egl.org.eclipse.edt.rui.widgets.GridLayout, annotations);
					annotations = {};
					annotations["XMLStyle"] = new egl.eglx.xml.binding.annotation.XMLElement("conBox", null, false, false);
					annotations["JsonName"] = new egl.eglx.json.JsonName("conBox");
					this.fieldInfos[3] =new egl.eglx.services.FieldInfo("conBox", "conBox", "org.eclipse.edt.rui.widgets.Box", egl.org.eclipse.edt.rui.widgets.Box, annotations);
					annotations = {};
					annotations["XMLStyle"] = new egl.eglx.xml.binding.annotation.XMLElement("con", null, false, false);
					annotations["JsonName"] = new egl.eglx.json.JsonName("con");
					this.fieldInfos[4] =new egl.eglx.services.FieldInfo("con", "con", "org.eclipse.edt.rui.widgets.TextLabel", egl.org.eclipse.edt.rui.widgets.TextLabel, annotations);
					annotations = {};
					annotations["XMLStyle"] = new egl.eglx.xml.binding.annotation.XMLElement("lifeBox", null, false, false);
					annotations["JsonName"] = new egl.eglx.json.JsonName("lifeBox");
					this.fieldInfos[5] =new egl.eglx.services.FieldInfo("lifeBox", "lifeBox", "org.eclipse.edt.rui.widgets.Box", egl.org.eclipse.edt.rui.widgets.Box, annotations);
					annotations = {};
					annotations["XMLStyle"] = new egl.eglx.xml.binding.annotation.XMLElement("GridLayout", null, false, false);
					annotations["JsonName"] = new egl.eglx.json.JsonName("GridLayout");
					this.fieldInfos[6] =new egl.eglx.services.FieldInfo("GridLayout", "GridLayout", "org.eclipse.edt.rui.widgets.GridLayout", egl.org.eclipse.edt.rui.widgets.GridLayout, annotations);
					annotations = {};
					annotations["XMLStyle"] = new egl.eglx.xml.binding.annotation.XMLElement("GridLayout1", null, false, false);
					annotations["JsonName"] = new egl.eglx.json.JsonName("GridLayout1");
					this.fieldInfos[7] =new egl.eglx.services.FieldInfo("GridLayout1", "GridLayout1", "org.eclipse.edt.rui.widgets.GridLayout", egl.org.eclipse.edt.rui.widgets.GridLayout, annotations);
					annotations = {};
					annotations["XMLStyle"] = new egl.eglx.xml.binding.annotation.XMLElement("Box", null, false, false);
					annotations["JsonName"] = new egl.eglx.json.JsonName("Box");
					this.fieldInfos[8] =new egl.eglx.services.FieldInfo("Box", "Box", "org.eclipse.edt.rui.widgets.Box", egl.org.eclipse.edt.rui.widgets.Box, annotations);
					annotations = {};
					annotations["XMLStyle"] = new egl.eglx.xml.binding.annotation.XMLElement("GridLayout2", null, false, false);
					annotations["JsonName"] = new egl.eglx.json.JsonName("GridLayout2");
					this.fieldInfos[14] =new egl.eglx.services.FieldInfo("GridLayout2", "GridLayout2", "org.eclipse.edt.rui.widgets.GridLayout", egl.org.eclipse.edt.rui.widgets.GridLayout, annotations);
					annotations = {};
					annotations["XMLStyle"] = new egl.eglx.xml.binding.annotation.XMLElement("myLesson", null, false, false);
					annotations["JsonName"] = new egl.eglx.json.JsonName("myLesson");
					this.fieldInfos[16] =new egl.eglx.services.FieldInfo("myLesson", "myLesson", "[Tclient/common/Lesson;", egl.client.common.Lesson, annotations);
					annotations = {};
					annotations["XMLStyle"] = new egl.eglx.xml.binding.annotation.XMLElement("myLesson_ui", null, false, false);
					annotations["JsonName"] = new egl.eglx.json.JsonName("myLesson_ui");
					this.fieldInfos[17] =new egl.eglx.services.FieldInfo("myLesson_ui", "myLesson_ui", "org.eclipse.edt.rui.widgets.DataGrid", egl.org.eclipse.edt.rui.widgets.DataGrid, annotations);
					annotations = {};
					annotations["XMLStyle"] = new egl.eglx.xml.binding.annotation.XMLElement("selectedLesson", null, false, false);
					annotations["JsonName"] = new egl.eglx.json.JsonName("selectedLesson");
					this.fieldInfos[18] =new egl.eglx.services.FieldInfo("selectedLesson", "selectedLesson", "Tclient/common/Lesson;", egl.client.common.Lesson, annotations);
					annotations = {};
					annotations["XMLStyle"] = new egl.eglx.xml.binding.annotation.XMLElement("selectedLesson_ui", null, false, false);
					annotations["JsonName"] = new egl.eglx.json.JsonName("selectedLesson_ui");
					this.fieldInfos[19] =new egl.eglx.services.FieldInfo("selectedLesson_ui", "selectedLesson_ui", "org.eclipse.edt.rui.widgets.GridLayout", egl.org.eclipse.edt.rui.widgets.GridLayout, annotations);
					annotations = {};
					annotations["XMLStyle"] = new egl.eglx.xml.binding.annotation.XMLElement("selectedLesson_lesson_id_nameLabel", null, false, false);
					annotations["JsonName"] = new egl.eglx.json.JsonName("selectedLesson_lesson_id_nameLabel");
					this.fieldInfos[20] =new egl.eglx.services.FieldInfo("selectedLesson_lesson_id_nameLabel", "selectedLesson_lesson_id_nameLabel", "org.eclipse.edt.rui.widgets.TextLabel", egl.org.eclipse.edt.rui.widgets.TextLabel, annotations);
					annotations = {};
					annotations["XMLStyle"] = new egl.eglx.xml.binding.annotation.XMLElement("selectedLesson_lesson_id_controller", null, false, false);
					annotations["JsonName"] = new egl.eglx.json.JsonName("selectedLesson_lesson_id_controller");
					this.fieldInfos[22] =new egl.eglx.services.FieldInfo("selectedLesson_lesson_id_controller", "selectedLesson_lesson_id_controller", "org.eclipse.edt.rui.mvc.Controller", egl.org.eclipse.edt.rui.mvc.Controller, annotations);
					annotations = {};
					annotations["XMLStyle"] = new egl.eglx.xml.binding.annotation.XMLElement("selectedLesson_lesson_id_formField", null, false, false);
					annotations["JsonName"] = new egl.eglx.json.JsonName("selectedLesson_lesson_id_formField");
					this.fieldInfos[23] =new egl.eglx.services.FieldInfo("selectedLesson_lesson_id_formField", "selectedLesson_lesson_id_formField", "Torg/eclipse/edt/rui/mvc/FormField;", egl.org.eclipse.edt.rui.mvc.FormField, annotations);
					annotations = {};
					annotations["XMLStyle"] = new egl.eglx.xml.binding.annotation.XMLElement("selectedLesson_lessonname_nameLabel", null, false, false);
					annotations["JsonName"] = new egl.eglx.json.JsonName("selectedLesson_lessonname_nameLabel");
					this.fieldInfos[24] =new egl.eglx.services.FieldInfo("selectedLesson_lessonname_nameLabel", "selectedLesson_lessonname_nameLabel", "org.eclipse.edt.rui.widgets.TextLabel", egl.org.eclipse.edt.rui.widgets.TextLabel, annotations);
					annotations = {};
					annotations["XMLStyle"] = new egl.eglx.xml.binding.annotation.XMLElement("selectedLesson_lessonname_controller", null, false, false);
					annotations["JsonName"] = new egl.eglx.json.JsonName("selectedLesson_lessonname_controller");
					this.fieldInfos[26] =new egl.eglx.services.FieldInfo("selectedLesson_lessonname_controller", "selectedLesson_lessonname_controller", "org.eclipse.edt.rui.mvc.Controller", egl.org.eclipse.edt.rui.mvc.Controller, annotations);
					annotations = {};
					annotations["XMLStyle"] = new egl.eglx.xml.binding.annotation.XMLElement("selectedLesson_lessonname_formField", null, false, false);
					annotations["JsonName"] = new egl.eglx.json.JsonName("selectedLesson_lessonname_formField");
					this.fieldInfos[27] =new egl.eglx.services.FieldInfo("selectedLesson_lessonname_formField", "selectedLesson_lessonname_formField", "Torg/eclipse/edt/rui/mvc/FormField;", egl.org.eclipse.edt.rui.mvc.FormField, annotations);
					annotations = {};
					annotations["XMLStyle"] = new egl.eglx.xml.binding.annotation.XMLElement("selectedLesson_coursecom_nameLabel", null, false, false);
					annotations["JsonName"] = new egl.eglx.json.JsonName("selectedLesson_coursecom_nameLabel");
					this.fieldInfos[28] =new egl.eglx.services.FieldInfo("selectedLesson_coursecom_nameLabel", "selectedLesson_coursecom_nameLabel", "org.eclipse.edt.rui.widgets.TextLabel", egl.org.eclipse.edt.rui.widgets.TextLabel, annotations);
					annotations = {};
					annotations["XMLStyle"] = new egl.eglx.xml.binding.annotation.XMLElement("selectedLesson_coursecom_controller", null, false, false);
					annotations["JsonName"] = new egl.eglx.json.JsonName("selectedLesson_coursecom_controller");
					this.fieldInfos[30] =new egl.eglx.services.FieldInfo("selectedLesson_coursecom_controller", "selectedLesson_coursecom_controller", "org.eclipse.edt.rui.mvc.Controller", egl.org.eclipse.edt.rui.mvc.Controller, annotations);
					annotations = {};
					annotations["XMLStyle"] = new egl.eglx.xml.binding.annotation.XMLElement("selectedLesson_coursecom_formField", null, false, false);
					annotations["JsonName"] = new egl.eglx.json.JsonName("selectedLesson_coursecom_formField");
					this.fieldInfos[31] =new egl.eglx.services.FieldInfo("selectedLesson_coursecom_formField", "selectedLesson_coursecom_formField", "Torg/eclipse/edt/rui/mvc/FormField;", egl.org.eclipse.edt.rui.mvc.FormField, annotations);
					annotations = {};
					annotations["XMLStyle"] = new egl.eglx.xml.binding.annotation.XMLElement("selectedLesson_form", null, false, false);
					annotations["JsonName"] = new egl.eglx.json.JsonName("selectedLesson_form");
					this.fieldInfos[32] =new egl.eglx.services.FieldInfo("selectedLesson_form", "selectedLesson_form", "org.eclipse.edt.rui.mvc.FormManager", egl.org.eclipse.edt.rui.mvc.FormManager, annotations);
					annotations = {};
					annotations["XMLStyle"] = new egl.eglx.xml.binding.annotation.XMLElement("content", null, false, false);
					annotations["JsonName"] = new egl.eglx.json.JsonName("content");
					this.fieldInfos[34] =new egl.eglx.services.FieldInfo("content", "content", "org.eclipse.edt.rui.widgets.Box", egl.org.eclipse.edt.rui.widgets.Box, annotations);
					annotations = {};
					annotations["XMLStyle"] = new egl.eglx.xml.binding.annotation.XMLElement("info", null, false, false);
					annotations["JsonName"] = new egl.eglx.json.JsonName("info");
					this.fieldInfos[35] =new egl.eglx.services.FieldInfo("info", "info", "org.eclipse.edt.rui.widgets.Div", egl.org.eclipse.edt.rui.widgets.Div, annotations);
					annotations = {};
					annotations["XMLStyle"] = new egl.eglx.xml.binding.annotation.XMLElement("buttonBar", null, false, false);
					annotations["JsonName"] = new egl.eglx.json.JsonName("buttonBar");
					this.fieldInfos[36] =new egl.eglx.services.FieldInfo("buttonBar", "buttonBar", "org.eclipse.edt.rui.widgets.FloatRight", egl.org.eclipse.edt.rui.widgets.FloatRight, annotations);
					annotations = {};
					annotations["XMLStyle"] = new egl.eglx.xml.binding.annotation.XMLElement("logActive", null, false, false);
					annotations["JsonName"] = new egl.eglx.json.JsonName("logActive");
					this.fieldInfos[37] =new egl.eglx.services.FieldInfo("logActive", "logActive", "0;", Boolean, annotations);
					annotations = {};
					annotations["XMLStyle"] = new egl.eglx.xml.binding.annotation.XMLElement("GridLayout3", null, false, false);
					annotations["JsonName"] = new egl.eglx.json.JsonName("GridLayout3");
					this.fieldInfos[39] =new egl.eglx.services.FieldInfo("GridLayout3", "GridLayout3", "org.eclipse.edt.rui.widgets.GridLayout", egl.org.eclipse.edt.rui.widgets.GridLayout, annotations);
					annotations = {};
					annotations["XMLStyle"] = new egl.eglx.xml.binding.annotation.XMLElement("BodyBox", null, false, false);
					annotations["JsonName"] = new egl.eglx.json.JsonName("BodyBox");
					this.fieldInfos[40] =new egl.eglx.services.FieldInfo("BodyBox", "BodyBox", "org.eclipse.edt.rui.widgets.Box", egl.org.eclipse.edt.rui.widgets.Box, annotations);
				}
				return this.fieldInfos;
			}
			,
			"start": function() {
				try { egl.enter("start",this,arguments);
					egl.atLine(this.eze$$fileName,149,7124,24, this);
					if (!egl.debugg) egl.leave();
				} finally {
					if (!egl.debugg){
					} else { egl.leave(); }
				}
			}
			,
			"cellClickedLesson": function(grid) {
				try { egl.enter("cellClickedLesson",this,arguments);
					egl.addLocalFunctionVariable("grid", grid, "org.eclipse.edt.rui.widgets.DataGrid", "grid");
					egl.atLine(this.eze$$fileName,154,7243,57, this);
					this.selectedLesson = egl.eglx.lang.AnyValue.ezeCopyTo(egl.eglx.lang.EAny.ezeCast(egl.getElement(this.myLesson_ui.getSelection(), egl.eglx.lang.EInt32.ezeCast({eze$$value : 1, eze$$signature : "I;"}, false) - 1), egl.client.common.Lesson), this.selectedLesson);
					egl.atLine(this.eze$$fileName,155,7306,30, this);
					this.selectedLesson_form.publish();
					egl.atLine(this.eze$$fileName,152,7158,186, this);
					if (!egl.debugg) egl.leave();
				} finally {
					if (!egl.debugg){
					} else { egl.leave(); }
				}
			}
			,
			"readFromTable": function() {
				try { egl.enter("readFromTable",this,arguments);
					egl.atLine(this.eze$$fileName,159,7385,147, this);
					if (egl.enableEditing !== true) {
						egl.eglx.rest.invokeEglService(egl.eglx.rest.configHttp(this.dedicatedServiceBinding,
								{ method : egl.eglx.http.HttpMethod.POST, uri : "",
								encoding : egl.eglx.services.Encoding.JSON, charset : "UTF-8", contentType : null},
								{encoding : egl.eglx.services.Encoding.JSON, charset : null}),
								"client.server.LessonService", "getAllLessons",
								[],
								[],
								[],
								[{eglSignature : "[Tclient/common/Lesson;", eglType : egl.client.common.Lesson, paramName : "return"}],
								new egl.egl.jsrt.Delegate(this, egl.client.client.Learn3.prototype.updateAll, ""), new egl.egl.jsrt.Delegate(this, egl.client.client.Learn3.prototype.serviceExceptionHandler, ""));
					}
					;
					egl.atLine(this.eze$$fileName,158,7354,187, this);
					if (!egl.debugg) egl.leave();
				} finally {
					if (!egl.debugg){
					} else { egl.leave(); }
				}
			}
			,
			"serviceExceptionHandler": function(ex) {
				try { egl.enter("serviceExceptionHandler",this,arguments);
					egl.addLocalFunctionVariable("ex", ex, "eglx.lang.AnyException", "ex");
					egl.atLine(this.eze$$fileName,166,7611,501, this);
					try {
						try{egl.enterBlock();
							egl.atLine(this.eze$$fileName,167,7629,9, this);
							throw ex;
						}finally{egl.exitBlock();}
					}
					catch ( eze$Temp34 )
					{
						if (eze$Temp34 instanceof egl.egl.debug.DebugTermination) {
							throw eze$Temp34;
						}
						if ( eze$Temp34 instanceof egl.eglx.services.ServiceInvocationException ) {
							var serviceEx = eze$Temp34;
							{
								try{egl.enterBlock();
									egl.addLocalFunctionVariable("serviceEx", serviceEx, "eglx.services.ServiceInvocationException", "serviceEx");
									egl.atLine(this.eze$$fileName,169,7713,100, this);
									this.log((("Failure:  service invocation, exception = ") + serviceEx.message));
									egl.atLine(this.eze$$fileName,171,7828,39, this);
									this.log((("Detail 1:  ") + serviceEx.detail1));
									egl.atLine(this.eze$$fileName,172,7882,39, this);
									this.log((("Detail 2:  ") + serviceEx.detail2));
									egl.atLine(this.eze$$fileName,173,7936,39, this);
									this.log((("Detail 3:  ") + serviceEx.detail3));
								}finally{egl.exitBlock();}
							}
						}
						else {
							if (!(eze$Temp34 instanceof egl.eglx.lang.AnyException)) {
								eze$Temp34 = egl.makeExceptionFromCaughtObject(eze$Temp34);
							}
							var anyex = eze$Temp34;
							{
								try{egl.enterBlock();
									egl.addLocalFunctionVariable("anyex", anyex, "eglx.lang.AnyException", "anyex");
									egl.atLine(this.eze$$fileName,175,8032,66, this);
									this.log((("Failure:  service invocation, exception = ") + anyex.message));
								}finally{egl.exitBlock();}
							}
						}
					}
					egl.atLine(this.eze$$fileName,177,8123,9, this);
					throw ex;
					egl.atLine(this.eze$$fileName,165,7551,591, this);
					if (!egl.debugg) egl.leave();
				} finally {
					if (!egl.debugg){
					} else { egl.leave(); }
				}
			}
			,
			"log": function(text) {
				try { egl.enter("log",this,arguments);
					egl.addLocalFunctionVariable("text", text, "eglx.lang.EString", "text");
					egl.atLine(this.eze$$fileName,189,8622,67, this);
					if (this.logActive) {
						try{egl.enterBlock();
							egl.atLine(this.eze$$fileName,190,8650,25, this);
							egl.eglx.lang.SysLib.writeStderr(text);
						}finally{egl.exitBlock();}
					}
					egl.atLine(this.eze$$fileName,188,8583,115, this);
					if (!egl.debugg) egl.leave();
				} finally {
					if (!egl.debugg){
					} else { egl.leave(); }
				}
			}
			,
			"selectedLesson_form_Submit": function(event) {
				try { egl.enter("selectedLesson_form_Submit",this,arguments);
					egl.addLocalFunctionVariable("event", event, "eglx.ui.rui.Event", "event");
					egl.atLine(this.eze$$fileName,195,8765,447, this);
					if (this.selectedLesson_form.isValid()) {
						try{egl.enterBlock();
							egl.atLine(this.eze$$fileName,196,8805,29, this);
							this.selectedLesson_form.commit();
							egl.atLine(this.eze$$fileName,197,8842,187, this);
							{
								try{egl.enterBlock();
									var i = 0;
									egl.addLocalFunctionVariable("i", i, "eglx.lang.EInt", "i");
									EzeLabel_37: for (i = 1; ((i <= this.myLesson.getSize())); i = ((i + 1))) {
										egl.setLocalFunctionVariable("i", i, "eglx.lang.EInt");
										try{egl.enterBlock();
											egl.atLine(this.eze$$fileName,198,8891,126, this);
											if (((egl.getElement(this.myLesson, egl.eglx.lang.EInt32.ezeCast({eze$$value : i, eze$$signature : "I;"}, false) - 1).lesson_id == this.selectedLesson.lesson_id))) {
												try{egl.enterBlock();
													egl.atLine(this.eze$$fileName,199,8955,29, this);
													egl.setElement(this.myLesson, egl.eglx.lang.EInt32.ezeCast({eze$$value : i, eze$$signature : "I;"}, false) - 1, this.selectedLesson);
													egl.atLine(this.eze$$fileName,200,8995,9, this);
													break EzeLabel_37;
												}finally{egl.exitBlock();}
											}
										}finally{egl.exitBlock();}
										egl.atLine(this.eze$$fileName,197,8842,187, this);
									}
								}
								finally{egl.exitBlock();}
							}
							var eze$Temp39 = null;
							eze$Temp39 = egl.eglx.lang.AnyValue.ezeCopyTo(this.selectedLesson, eze$Temp39);
							egl.atLine(this.eze$$fileName,203,9036,166, this);
							if (egl.enableEditing !== true) {
								egl.eglx.rest.invokeEglService(egl.eglx.rest.configHttp(this.dedicatedServiceBinding,
										{ method : egl.eglx.http.HttpMethod.POST, uri : "",
										encoding : egl.eglx.services.Encoding.JSON, charset : "UTF-8", contentType : null},
										{encoding : egl.eglx.services.Encoding.JSON, charset : null}),
										"client.server.LessonService", "editLesson",
										[this.selectedLesson],
										["egl.client.common.Lesson"],
										["chgLesson"],
										[],
										new egl.egl.jsrt.Delegate(this, egl.client.client.Learn3.prototype.recordRevised, ""), new egl.egl.jsrt.Delegate(this, egl.client.client.Learn3.prototype.serviceExceptionHandler, ""));
							}
							;
						}finally{egl.exitBlock();}
					}
					egl.atLine(this.eze$$fileName,194,8708,512, this);
					if (!egl.debugg) egl.leave();
				} finally {
					if (!egl.debugg){
					} else { egl.leave(); }
				}
			}
			,
			"selectedLesson_form_Publish": function(event) {
				try { egl.enter("selectedLesson_form_Publish",this,arguments);
					egl.addLocalFunctionVariable("event", event, "eglx.ui.rui.Event", "event");
					egl.atLine(this.eze$$fileName,211,9288,30, this);
					this.selectedLesson_form.publish();
					egl.atLine(this.eze$$fileName,212,9324,31, this);
					this.selectedLesson_form_Validate();
					egl.atLine(this.eze$$fileName,210,9230,133, this);
					if (!egl.debugg) egl.leave();
				} finally {
					if (!egl.debugg){
					} else { egl.leave(); }
				}
			}
			,
			"selectedLesson_form_Validate": function() {
				try { egl.enter("selectedLesson_form_Validate",this,arguments);
					egl.atLine(this.eze$$fileName,216,9418,30, this);
					this.selectedLesson_form.isValid();
					egl.atLine(this.eze$$fileName,215,9373,83, this);
					if (!egl.debugg) egl.leave();
				} finally {
					if (!egl.debugg){
					} else { egl.leave(); }
				}
			}
			,
			"handleValidStateChange_selectedLesson": function(view, valid) {
				try { egl.enter("handleValidStateChange_selectedLesson",this,arguments);
					egl.addLocalFunctionVariable("view", view, "eglx.ui.rui.Widget", "view");
					egl.addLocalFunctionVariable("valid", valid, "eglx.lang.EBoolean", "valid");
					egl.atLine(this.eze$$fileName,220,9552,361, this);
					{
						try{egl.enterBlock();
							var n = 0;
							egl.addLocalFunctionVariable("n", n, "eglx.lang.EInt", "n");
							for (n = this.selectedLesson_form.getEntries().getSize(); ((n >= 1)); n = ((n - 1))) {
								egl.setLocalFunctionVariable("n", n, "eglx.lang.EInt");
								try{egl.enterBlock();
									var entry = null;
									egl.addLocalFunctionVariable("entry", entry, "org.eclipse.edt.rui.mvc.FormField", "entry");
									egl.atLine(this.eze$$fileName,221,9651,30, this);
									entry = egl.eglx.lang.AnyValue.ezeCopyTo(egl.getElement(this.selectedLesson_form.getEntries(), egl.eglx.lang.EInt32.ezeCast({eze$$value : n, eze$$signature : "I;"}, false) - 1), entry);
									egl.setLocalFunctionVariable("entry", entry, "org.eclipse.edt.rui.mvc.FormField");
									egl.atLine(this.eze$$fileName,222,9689,215, this);
									if ((entry.controller.getView() == view)) {
										try{egl.enterBlock();
											egl.atLine(this.eze$$fileName,223,9730,164, this);
											if (valid) {
												try{egl.enterBlock();
												}finally{egl.exitBlock();}
											}
											else {
												try{egl.enterBlock();
													var msg;
													egl.addLocalFunctionVariable("msg", msg, "eglx.lang.EString", "msg");
													egl.atLine(this.eze$$fileName,226,9810,34, this);
													msg = entry.controller.getErrorMessage();
													egl.setLocalFunctionVariable("msg", msg, "eglx.lang.EString");
												}finally{egl.exitBlock();}
											}
										}finally{egl.exitBlock();}
									}
								}finally{egl.exitBlock();}
								egl.atLine(this.eze$$fileName,220,9552,361, this);
							}
						}
						finally{egl.exitBlock();}
					}
					egl.atLine(this.eze$$fileName,219,9466,455, this);
					if (!egl.debugg) egl.leave();
				} finally {
					if (!egl.debugg){
					} else { egl.leave(); }
				}
			}
			,
			"addrow": function(event) {
				try { egl.enter("addrow",this,arguments);
					egl.addLocalFunctionVariable("event", event, "eglx.ui.rui.Event", "event");
					var eze$Temp43 = new egl.client.common.Lesson();
					eze$Temp43 = egl.eglx.lang.AnyValue.ezeCopyTo(new egl.client.common.Lesson(), eze$Temp43);
					egl.atLine(this.eze$$fileName,234,9971,151, this);
					if (egl.enableEditing !== true) {
						egl.eglx.rest.invokeEglService(egl.eglx.rest.configHttp(this.dedicatedServiceBinding,
								{ method : egl.eglx.http.HttpMethod.POST, uri : "",
								encoding : egl.eglx.services.Encoding.JSON, charset : "UTF-8", contentType : null},
								{encoding : egl.eglx.services.Encoding.JSON, charset : null}),
								"client.server.LessonService", "addLesson",
								[new egl.client.common.Lesson()],
								["egl.client.common.Lesson"],
								["newLesson"],
								[],
								new egl.egl.jsrt.Delegate(this, egl.client.client.Learn3.prototype.recordAdded, ""), new egl.egl.jsrt.Delegate(this, egl.client.client.Learn3.prototype.serviceExceptionHandler, ""));
					}
					;
					egl.atLine(this.eze$$fileName,233,9934,196, this);
					if (!egl.debugg) egl.leave();
				} finally {
					if (!egl.debugg){
					} else { egl.leave(); }
				}
			}
			,
			"deleteRow": function(enevt) {
				try { egl.enter("deleteRow",this,arguments);
					egl.addLocalFunctionVariable("enevt", enevt, "eglx.ui.rui.Event", "enevt");
					egl.atLine(this.eze$$fileName,241,10183,174, this);
					{
						try{egl.enterBlock();
							var i = 0;
							egl.addLocalFunctionVariable("i", i, "eglx.lang.EInt", "i");
							EzeLabel_44: for (i = 1; ((i <= this.myLesson.getSize())); i = ((i + 1))) {
								egl.setLocalFunctionVariable("i", i, "eglx.lang.EInt");
								try{egl.enterBlock();
									egl.atLine(this.eze$$fileName,242,10230,117, this);
									if (((egl.getElement(this.myLesson, egl.eglx.lang.EInt32.ezeCast({eze$$value : i, eze$$signature : "I;"}, false) - 1).lesson_id == this.selectedLesson.lesson_id))) {
										try{egl.enterBlock();
											egl.atLine(this.eze$$fileName,243,10292,26, this);
											this.myLesson.removeElement(i);
											egl.atLine(this.eze$$fileName,244,10327,9, this);
											break EzeLabel_44;
										}finally{egl.exitBlock();}
									}
								}finally{egl.exitBlock();}
								egl.atLine(this.eze$$fileName,241,10183,174, this);
							}
						}
						finally{egl.exitBlock();}
					}
					var eze$Temp46 = null;
					eze$Temp46 = egl.eglx.lang.AnyValue.ezeCopyTo(this.selectedLesson, eze$Temp46);
					egl.atLine(this.eze$$fileName,247,10364,159, this);
					if (egl.enableEditing !== true) {
						egl.eglx.rest.invokeEglService(egl.eglx.rest.configHttp(this.dedicatedServiceBinding,
								{ method : egl.eglx.http.HttpMethod.POST, uri : "",
								encoding : egl.eglx.services.Encoding.JSON, charset : "UTF-8", contentType : null},
								{encoding : egl.eglx.services.Encoding.JSON, charset : null}),
								"client.server.LessonService", "deleteLesson",
								[this.selectedLesson],
								["egl.client.common.Lesson"],
								["delLesson"],
								[],
								new egl.egl.jsrt.Delegate(this, egl.client.client.Learn3.prototype.recordRevised, ""), new egl.egl.jsrt.Delegate(this, egl.client.client.Learn3.prototype.serviceExceptionHandler, ""));
					}
					;
					egl.atLine(this.eze$$fileName,240,10143,389, this);
					if (!egl.debugg) egl.leave();
				} finally {
					if (!egl.debugg){
					} else { egl.leave(); }
				}
			}
			,
			"clearAllFields": function(event) {
				try { egl.enter("clearAllFields",this,arguments);
					egl.addLocalFunctionVariable("event", event, "eglx.ui.rui.Event", "event");
					var saveID;
					egl.addLocalFunctionVariable("saveID", saveID, "eglx.lang.EInt", "saveID");
					egl.atLine(this.eze$$fileName,254,10608,24, this);
					saveID = this.selectedLesson.lesson_id;
					egl.setLocalFunctionVariable("saveID", saveID, "eglx.lang.EInt");
					egl.atLine(this.eze$$fileName,255,10656,30, this);
					this.selectedLesson = egl.eglx.lang.AnyValue.ezeCopyTo(new egl.client.common.Lesson(), this.selectedLesson);
					egl.atLine(this.eze$$fileName,256,10693,34, this);
					this.selectedLesson.lesson_id = saveID;
					egl.atLine(this.eze$$fileName,257,10734,30, this);
					this.selectedLesson_form.publish();
					egl.atLine(this.eze$$fileName,253,10545,228, this);
					if (!egl.debugg) egl.leave();
				} finally {
					if (!egl.debugg){
					} else { egl.leave(); }
				}
			}
			,
			"selectedArticle_form_Submit": function(event) {
				try { egl.enter("selectedArticle_form_Submit",this,arguments);
					egl.addLocalFunctionVariable("event", event, "eglx.ui.rui.Event", "event");
					egl.atLine(this.eze$$fileName,261,10841,528, this);
					if (this.selectedLesson_form.isValid()) {
						try{egl.enterBlock();
							egl.atLine(this.eze$$fileName,262,10882,29, this);
							this.selectedLesson_form.commit();
							egl.atLine(this.eze$$fileName,264,10986,187, this);
							{
								try{egl.enterBlock();
									var i = 0;
									egl.addLocalFunctionVariable("i", i, "eglx.lang.EInt", "i");
									EzeLabel_48: for (i = 1; ((i <= this.myLesson.getSize())); i = ((i + 1))) {
										egl.setLocalFunctionVariable("i", i, "eglx.lang.EInt");
										try{egl.enterBlock();
											egl.atLine(this.eze$$fileName,265,11035,126, this);
											if (((egl.getElement(this.myLesson, egl.eglx.lang.EInt32.ezeCast({eze$$value : i, eze$$signature : "I;"}, false) - 1).lesson_id == this.selectedLesson.lesson_id))) {
												try{egl.enterBlock();
													egl.atLine(this.eze$$fileName,266,11099,29, this);
													egl.setElement(this.myLesson, egl.eglx.lang.EInt32.ezeCast({eze$$value : i, eze$$signature : "I;"}, false) - 1, this.selectedLesson);
													egl.atLine(this.eze$$fileName,267,11139,9, this);
													break EzeLabel_48;
												}finally{egl.exitBlock();}
											}
										}finally{egl.exitBlock();}
										egl.atLine(this.eze$$fileName,264,10986,187, this);
									}
								}
								finally{egl.exitBlock();}
							}
							var eze$Temp50 = null;
							eze$Temp50 = egl.eglx.lang.AnyValue.ezeCopyTo(this.selectedLesson, eze$Temp50);
							egl.atLine(this.eze$$fileName,270,11182,166, this);
							if (egl.enableEditing !== true) {
								egl.eglx.rest.invokeEglService(egl.eglx.rest.configHttp(this.dedicatedServiceBinding,
										{ method : egl.eglx.http.HttpMethod.POST, uri : "",
										encoding : egl.eglx.services.Encoding.JSON, charset : "UTF-8", contentType : null},
										{encoding : egl.eglx.services.Encoding.JSON, charset : null}),
										"client.server.LessonService", "editLesson",
										[this.selectedLesson],
										["egl.client.common.Lesson"],
										["chgLesson"],
										[],
										new egl.egl.jsrt.Delegate(this, egl.client.client.Learn3.prototype.recordRevised, ""), new egl.egl.jsrt.Delegate(this, egl.client.client.Learn3.prototype.serviceExceptionHandler, ""));
							}
							;
						}finally{egl.exitBlock();}
					}
					egl.atLine(this.eze$$fileName,260,10783,594, this);
					if (!egl.debugg) egl.leave();
				} finally {
					if (!egl.debugg){
					} else { egl.leave(); }
				}
			}
			,
			"updateAll": function(retResult) {
				try { egl.enter("updateAll",this,arguments);
					egl.addLocalFunctionVariable("retResult", retResult, "eglx.lang.EList<client.common.Lesson>", "!retResult");
					egl.atLine(this.eze$$fileName,279,11438,21, this);
					this.myLesson = retResult;
					egl.atLine(this.eze$$fileName,280,11466,37, this);
					this.myLesson_ui.setData(egl.convertAnyToArrayType(this.myLesson,"[A;"));
					egl.atLine(this.eze$$fileName,278,11390,122, this);
					if (!egl.debugg) egl.leave();
				} finally {
					if (!egl.debugg){
					} else { egl.leave(); }
				}
			}
			,
			"recordAdded": function() {
				try { egl.enter("recordAdded",this,arguments);
					egl.atLine(this.eze$$fileName,284,11553,16, this);
					this.readFromTable();
					egl.atLine(this.eze$$fileName,283,11524,54, this);
					if (!egl.debugg) egl.leave();
				} finally {
					if (!egl.debugg){
					} else { egl.leave(); }
				}
			}
			,
			"recordRevised": function() {
				try { egl.enter("recordRevised",this,arguments);
					egl.atLine(this.eze$$fileName,288,11622,37, this);
					this.myLesson_ui.setData(egl.convertAnyToArrayType(this.myLesson,"[A;"));
					egl.atLine(this.eze$$fileName,287,11591,77, this);
					if (!egl.debugg) egl.leave();
				} finally {
					if (!egl.debugg){
					} else { egl.leave(); }
				}
			}
			,
			"sampleData": function(event) {
				try { egl.enter("sampleData",this,arguments);
					egl.addLocalFunctionVariable("event", event, "eglx.ui.rui.Event", "event");
					egl.atLine(this.eze$$fileName,292,11723,156, this);
					if (egl.enableEditing !== true) {
						egl.eglx.rest.invokeEglService(egl.eglx.rest.configHttp(this.dedicatedServiceBinding,
								{ method : egl.eglx.http.HttpMethod.POST, uri : "",
								encoding : egl.eglx.services.Encoding.JSON, charset : "UTF-8", contentType : null},
								{encoding : egl.eglx.services.Encoding.JSON, charset : null}),
								"client.server.LessonService", "createDefaultTableLesson",
								[],
								[],
								[],
								[{eglSignature : "[Tclient/common/Lesson;", eglType : egl.client.common.Lesson, paramName : "return"}],
								new egl.egl.jsrt.Delegate(this, egl.client.client.Learn3.prototype.updateAll, ""), new egl.egl.jsrt.Delegate(this, egl.client.client.Learn3.prototype.serviceExceptionHandler, ""));
					}
					;
					egl.atLine(this.eze$$fileName,291,11681,208, this);
					if (!egl.debugg) egl.leave();
				} finally {
					if (!egl.debugg){
					} else { egl.leave(); }
				}
			}
			,
			"showDialog": function(event) {
				try { egl.enter("showDialog",this,arguments);
					egl.addLocalFunctionVariable("event", event, "eglx.ui.rui.Event", "event");
					egl.atLine(this.eze$$fileName,299,11945,51, this);
					this.content.setChildren([egl.eglx.lang.convert(egl.eglx.ui.rui.Widget.fromWidget, [this.info,"org.eclipse.edt.rui.widgets.Div"]), egl.eglx.lang.convert(egl.eglx.ui.rui.Widget.fromWidget, [this.buttonBar,"org.eclipse.edt.rui.widgets.FloatRight"])].setType("[Teglx/ui/rui/Widget;"));
					egl.atLine(this.eze$$fileName,301,12011,20, this);
					this.dialog.showDialog();
					egl.atLine(this.eze$$fileName,298,11903,137, this);
					if (!egl.debugg) egl.leave();
				} finally {
					if (!egl.debugg){
					} else { egl.leave(); }
				}
			}
			,
			"hideDialog": function(event) {
				try { egl.enter("hideDialog",this,arguments);
					egl.addLocalFunctionVariable("event", event, "eglx.ui.rui.Event", "event");
					egl.atLine(this.eze$$fileName,304,12088,20, this);
					this.dialog.hideDialog();
					egl.atLine(this.eze$$fileName,303,12046,72, this);
					if (!egl.debugg) egl.leave();
				} finally {
					if (!egl.debugg){
					} else { egl.leave(); }
				}
			}
			,
			"toString": function() {
				return "[Learn3]";
			}
			,
			"eze$$getName": function() {
				return "Learn3";
			}
			,
			"eze$$getChildVariables": function() {
				var eze$$parent = this;
				return [
				{name: "GridLayoutLib", value : egl.org.eclipse.edt.rui.widgets.GridLayoutLib['$inst'], type : "org.eclipse.edt.rui.widgets.GridLayoutLib", jsName : "egl.org.eclipse.edt.rui.widgets.GridLayoutLib['$inst']"},
				{name: "DataGridLib", value : egl.org.eclipse.edt.rui.widgets.DataGridLib['$inst'], type : "org.eclipse.edt.rui.widgets.DataGridLib", jsName : "egl.org.eclipse.edt.rui.widgets.DataGridLib['$inst']"},
				{name: "InternalNumericFormatter", value : egl.org.eclipse.edt.rui.mvc.InternalNumericFormatter['$inst'], type : "org.eclipse.edt.rui.mvc.InternalNumericFormatter", jsName : "egl.org.eclipse.edt.rui.mvc.InternalNumericFormatter['$inst']"},
				{name: "myLessonService", value : eze$$parent.myLessonService, type : "eglx.persistence.sql.SQLDataSource", jsName : "myLessonService"},
				{name: "dedicatedServiceBinding", value : eze$$parent.dedicatedServiceBinding, type : "eglx.http.HttpProxy", jsName : "dedicatedServiceBinding"},
				{name: "ui", value : eze$$parent.ui, type : "org.eclipse.edt.rui.widgets.GridLayout", jsName : "ui"},
				{name: "conBox", value : eze$$parent.conBox, type : "org.eclipse.edt.rui.widgets.Box", jsName : "conBox"},
				{name: "con", value : eze$$parent.con, type : "org.eclipse.edt.rui.widgets.TextLabel", jsName : "con"},
				{name: "lifeBox", value : eze$$parent.lifeBox, type : "org.eclipse.edt.rui.widgets.Box", jsName : "lifeBox"},
				{name: "GridLayout", value : eze$$parent.GridLayout, type : "org.eclipse.edt.rui.widgets.GridLayout", jsName : "GridLayout"},
				{name: "GridLayout1", value : eze$$parent.GridLayout1, type : "org.eclipse.edt.rui.widgets.GridLayout", jsName : "GridLayout1"},
				{name: "Box", value : eze$$parent.Box, type : "org.eclipse.edt.rui.widgets.Box", jsName : "Box"},
				{name: "Button", value : eze$$parent.Button, type : "dojo.widgets.DojoButton", jsName : "Button"},
				{name: "Button1", value : eze$$parent.Button1, type : "dojo.widgets.DojoButton", jsName : "Button1"},
				{name: "Button2", value : eze$$parent.Button2, type : "dojo.widgets.DojoButton", jsName : "Button2"},
				{name: "Button3", value : eze$$parent.Button3, type : "dojo.widgets.DojoButton", jsName : "Button3"},
				{name: "Button4", value : eze$$parent.Button4, type : "dojo.widgets.DojoButton", jsName : "Button4"},
				{name: "GridLayout2", value : eze$$parent.GridLayout2, type : "org.eclipse.edt.rui.widgets.GridLayout", jsName : "GridLayout2"},
				{name: "ButtonEdit", value : eze$$parent.ButtonEdit, type : "dojo.widgets.DojoButton", jsName : "ButtonEdit"},
				{name: "myLesson", value : eze$$parent.myLesson, type : "eglx.lang.EList<client.common.Lesson>", jsName : "!myLesson"},
				{name: "myLesson_ui", value : eze$$parent.myLesson_ui, type : "org.eclipse.edt.rui.widgets.DataGrid", jsName : "myLesson_ui"},
				{name: "selectedLesson", value : eze$$parent.selectedLesson, type : "client.common.Lesson", jsName : "selectedLesson"},
				{name: "selectedLesson_ui", value : eze$$parent.selectedLesson_ui, type : "org.eclipse.edt.rui.widgets.GridLayout", jsName : "selectedLesson_ui"},
				{name: "selectedLesson_lesson_id_nameLabel", value : eze$$parent.selectedLesson_lesson_id_nameLabel, type : "org.eclipse.edt.rui.widgets.TextLabel", jsName : "selectedLesson_lesson_id_nameLabel"},
				{name: "selectedLesson_lesson_id_field", value : eze$$parent.selectedLesson_lesson_id_field, type : "dojo.widgets.DojoTextField", jsName : "selectedLesson_lesson_id_field"},
				{name: "selectedLesson_lesson_id_controller", value : eze$$parent.selectedLesson_lesson_id_controller, type : "org.eclipse.edt.rui.mvc.Controller", jsName : "selectedLesson_lesson_id_controller"},
				{name: "selectedLesson_lesson_id_formField", value : eze$$parent.selectedLesson_lesson_id_formField, type : "org.eclipse.edt.rui.mvc.FormField", jsName : "selectedLesson_lesson_id_formField"},
				{name: "selectedLesson_lessonname_nameLabel", value : eze$$parent.selectedLesson_lessonname_nameLabel, type : "org.eclipse.edt.rui.widgets.TextLabel", jsName : "selectedLesson_lessonname_nameLabel"},
				{name: "selectedLesson_lessonname_field", value : eze$$parent.selectedLesson_lessonname_field, type : "dojo.widgets.DojoTextField", jsName : "selectedLesson_lessonname_field"},
				{name: "selectedLesson_lessonname_controller", value : eze$$parent.selectedLesson_lessonname_controller, type : "org.eclipse.edt.rui.mvc.Controller", jsName : "selectedLesson_lessonname_controller"},
				{name: "selectedLesson_lessonname_formField", value : eze$$parent.selectedLesson_lessonname_formField, type : "org.eclipse.edt.rui.mvc.FormField", jsName : "selectedLesson_lessonname_formField"},
				{name: "selectedLesson_coursecom_nameLabel", value : eze$$parent.selectedLesson_coursecom_nameLabel, type : "org.eclipse.edt.rui.widgets.TextLabel", jsName : "selectedLesson_coursecom_nameLabel"},
				{name: "selectedLesson_coursecom_area", value : eze$$parent.selectedLesson_coursecom_area, type : "dojo.widgets.DojoTextArea", jsName : "selectedLesson_coursecom_area"},
				{name: "selectedLesson_coursecom_controller", value : eze$$parent.selectedLesson_coursecom_controller, type : "org.eclipse.edt.rui.mvc.Controller", jsName : "selectedLesson_coursecom_controller"},
				{name: "selectedLesson_coursecom_formField", value : eze$$parent.selectedLesson_coursecom_formField, type : "org.eclipse.edt.rui.mvc.FormField", jsName : "selectedLesson_coursecom_formField"},
				{name: "selectedLesson_form", value : eze$$parent.selectedLesson_form, type : "org.eclipse.edt.rui.mvc.FormManager", jsName : "selectedLesson_form"},
				{name: "dialog", value : eze$$parent.dialog, type : "dojo.widgets.DojoDialog", jsName : "dialog"},
				{name: "content", value : eze$$parent.content, type : "org.eclipse.edt.rui.widgets.Box", jsName : "content"},
				{name: "info", value : eze$$parent.info, type : "org.eclipse.edt.rui.widgets.Div", jsName : "info"},
				{name: "buttonBar", value : eze$$parent.buttonBar, type : "org.eclipse.edt.rui.widgets.FloatRight", jsName : "buttonBar"},
				{name: "logActive", value : eze$$parent.logActive, type : "eglx.lang.EBoolean", jsName : "logActive"},
				{name: "ButtonCourse", value : eze$$parent.ButtonCourse, type : "dojo.widgets.DojoButton", jsName : "ButtonCourse"},
				{name: "GridLayout3", value : eze$$parent.GridLayout3, type : "org.eclipse.edt.rui.widgets.GridLayout", jsName : "GridLayout3"},
				{name: "BodyBox", value : eze$$parent.BodyBox, type : "org.eclipse.edt.rui.widgets.Box", jsName : "BodyBox"},
				{name: "document", value : eze$$parent.document, type : "eglx.ui.rui.Document", jsName : "document"},
				{name: "initialUI", value : eze$$parent.initialUI, type : "eglx.lang.EList<eglx.ui.rui.Widget>", jsName : "!initialUI"}
				];
			}
		}
	);
});
