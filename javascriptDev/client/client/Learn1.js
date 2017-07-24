define(["ezekw$$dojo/widgets/eze$$DojoTitlePane", "org/eclipse/edt/rui/widgets/GridLayoutLib", "org/eclipse/edt/rui/widgets/TextLabel", "ezekw$$dojo/widgets/eze$$DojoContentPane", "ezekw$$dojo/widgets/eze$$DojoTextField", "org/eclipse/edt/rui/widgets/DataGridColumn", "org/eclipse/edt/rui/widgets/DataGridLib", "ezekw$$dojo/widgets/eze$$DojoDialog", "ezekw$$dojo/widgets/eze$$DojoButton", "org/eclipse/edt/rui/widgets/GridLayout", "eglx/ui/rui/eze$$Widget", "org/eclipse/edt/rui/widgets/FloatRight", "org/eclipse/edt/rui/widgets/Box", "client/common/Lesson", "org/eclipse/edt/rui/widgets/Div", "eglx/services/ServiceInvocationException", "ezekw$$dojo/widgets/DojoLib", "eglx/ui/rui/eze$$View", "eglx/ui/rui/eze$$Event", "org/eclipse/edt/rui/mvc/FormManager", "org/eclipse/edt/rui/mvc/Controller", "org/eclipse/edt/rui/mvc/FormField", "ezekw$$dojo/widgets/eze$$DojoTextArea", "ezekw$$dojo/widgets/eze$$DojoTabContainer", "org/eclipse/edt/rui/widgets/DataGrid", "org/eclipse/edt/rui/widgets/GridLayoutData"],function(){
	egl.loadCSS("css/NewProject1.css");
	egl.defineRUIHandler("client.client", "Learn1", {
		"eze$$fileName" : "client/client/Learn1.egl",
		"eze$$runtimePropertiesFile" : "client/client/Learn1",
			"constructor": function() {
				this.start();
			}
			,
			"eze$$setEmpty": function() {
				new egl.org.eclipse.edt.rui.widgets.GridLayoutLib();
				new egl.org.eclipse.edt.rui.widgets.DataGridLib();
				new egl.dojo.widgets.DojoLib();
				new egl.org.eclipse.edt.rui.mvc.InternalNumericFormatter();
				this.myLessonService = null;
				this.dedicatedServiceBinding = new egl.eglx.http.HttpProxy();
				this.ui = new egl.org.eclipse.edt.rui.widgets.GridLayout();
				this.conBox = new egl.org.eclipse.edt.rui.widgets.Box();
				this.con = new egl.org.eclipse.edt.rui.widgets.TextLabel();
				this.cuteBox = new egl.org.eclipse.edt.rui.widgets.Box();
				this.TabContainer = new egl.dojo.widgets.DojoTabContainer();
				this.BoxLesson = new egl.org.eclipse.edt.rui.widgets.Box();
				this.GridLayoutLesson = new egl.org.eclipse.edt.rui.widgets.GridLayout();
				this.GridLayoutButton = new egl.org.eclipse.edt.rui.widgets.GridLayout();
				this.ButtonLessons = new egl.dojo.widgets.DojoButton();
				this.ButtonEdit = new egl.dojo.widgets.DojoButton();
				this.ButtonCourse = new egl.dojo.widgets.DojoButton();
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
			}
			,
			"eze$$setInitial": function() {
				try { egl.enter("<init>",this,arguments);
					this.eze$$setEmpty();
					egl.atLine(this.eze$$fileName,46,1568,11, this);
					this.ui.setColumns(1);
					egl.atLine(this.eze$$fileName,46,1581,8, this);
					this.ui.setRows(2);
					egl.atLine(this.eze$$fileName,46,1591,15, this);
					this.ui.setCellPadding(1);
					egl.atLine(this.eze$$fileName,46,1608,30, this);
					this.ui.setChildren([egl.eglx.lang.convert(egl.eglx.ui.rui.Widget.fromWidget, [this.cuteBox,"org.eclipse.edt.rui.widgets.Box"]), egl.eglx.lang.convert(egl.eglx.ui.rui.Widget.fromWidget, [this.conBox,"org.eclipse.edt.rui.widgets.Box"])].setType("[Teglx/ui/rui/Widget;"));
					var eze$LNNTemp1 = null;
					{
						var eze$SettingTarget1 = new egl.org.eclipse.edt.rui.widgets.GridLayoutData();
						egl.atLine(this.eze$$fileName,47,1670,41, this);
						eze$SettingTarget1 = egl.eglx.lang.AnyValue.ezeCopyTo(new egl.org.eclipse.edt.rui.widgets.GridLayoutData(), eze$SettingTarget1);
						egl.atLine(this.eze$$fileName,47,1690,7, this);
						eze$SettingTarget1.row = 1;
						egl.atLine(this.eze$$fileName,47,1699,10, this);
						eze$SettingTarget1.column = 1;
						egl.atLine(this.eze$$fileName,47,1670,41, this);
						eze$LNNTemp1 = egl.eglx.lang.AnyValue.ezeCopyTo(eze$SettingTarget1, eze$LNNTemp1);
					}
					egl.atLine(this.eze$$fileName,47,1657,54, this);
					this.conBox.setLayoutData(egl.eglx.lang.convert(egl.eglx.lang.EAny.fromEAny, [eze$LNNTemp1.eze$$clone(),"Torg/eclipse/edt/rui/widgets/GridLayoutData;"]));
					egl.atLine(this.eze$$fileName,47,1713,9, this);
					this.conBox.setPadding(8);
					egl.atLine(this.eze$$fileName,48,1729,18, this);
					this.conBox.setChildren([egl.eglx.lang.convert(egl.eglx.ui.rui.Widget.fromWidget, [this.con,"org.eclipse.edt.rui.widgets.TextLabel"])].setType("[Teglx/ui/rui/Widget;"));
					egl.atLine(this.eze$$fileName,49,1755,29, this);
					this.conBox.setBackgroundColor("Turquoise");
					egl.atLine(this.eze$$fileName,50,1791,13, this);
					this.conBox.setWidth("790");
					egl.atLine(this.eze$$fileName,51,1826,11, this);
					this.con.setText("\u4e8c\u3001\u6bd4\u8f83");
					egl.atLine(this.eze$$fileName,52,1844,13, this);
					this.con.setFont("\u534e\u6587\u884c\u6977");
					egl.atLine(this.eze$$fileName,53,1864,15, this);
					this.con.setFontSize("20");
					egl.atLine(this.eze$$fileName,54,1886,21, this);
					this.con.setFontWeight("bolder");
					var eze$LNNTemp2 = null;
					{
						var eze$SettingTarget1 = new egl.org.eclipse.edt.rui.widgets.GridLayoutData();
						egl.atLine(this.eze$$fileName,55,1941,41, this);
						eze$SettingTarget1 = egl.eglx.lang.AnyValue.ezeCopyTo(new egl.org.eclipse.edt.rui.widgets.GridLayoutData(), eze$SettingTarget1);
						egl.atLine(this.eze$$fileName,55,1961,7, this);
						eze$SettingTarget1.row = 2;
						egl.atLine(this.eze$$fileName,55,1970,10, this);
						eze$SettingTarget1.column = 1;
						egl.atLine(this.eze$$fileName,55,1941,41, this);
						eze$LNNTemp2 = egl.eglx.lang.AnyValue.ezeCopyTo(eze$SettingTarget1, eze$LNNTemp2);
					}
					egl.atLine(this.eze$$fileName,55,1928,54, this);
					this.cuteBox.setLayoutData(egl.eglx.lang.convert(egl.eglx.lang.EAny.fromEAny, [eze$LNNTemp2.eze$$clone(),"Torg/eclipse/edt/rui/widgets/GridLayoutData;"]));
					egl.atLine(this.eze$$fileName,55,1984,9, this);
					this.cuteBox.setPadding(8);
					egl.atLine(this.eze$$fileName,56,2001,27, this);
					this.cuteBox.setChildren([egl.eglx.lang.convert(egl.eglx.ui.rui.Widget.fromWidget, [this.TabContainer,"dojo.widgets.DojoTabContainer"])].setType("[Teglx/ui/rui/Widget;"));
					egl.atLine(this.eze$$fileName,57,2035,11, this);
					this.cuteBox.setColumns(1);
					egl.atLine(this.eze$$fileName,59,2087,13, this);
					this.TabContainer.setWidth("730");
					egl.atLine(this.eze$$fileName,59,2102,35, this);
					this.TabContainer.setTabPosition(egl.dojo.widgets.DojoLib['$inst'].POSITION_LEFT);
					var eze$LNNTemp4 = null;
					{
						var eze$SettingTarget1;
						egl.atLine(this.eze$$fileName,62,2261,55, this);
						eze$SettingTarget1 = (function () {
							var eze$Temp5 = new egl.dojo.widgets.DojoContentPane();
							return eze$Temp5;
						}).call(this);
						egl.atLine(this.eze$$fileName,62,2283,14, this);
						eze$SettingTarget1.setTitle("\u6211\u7684\u8bfe\u7a0b");
						egl.atLine(this.eze$$fileName,62,2299,15, this);
						eze$SettingTarget1.setChildren((function() { var eze$Temp6 = []; eze$Temp6.setType("[eglx.ui.rui.Widget");
							for (var i = 0; i < 0; i++) {
							eze$Temp6[i] = new egl.eglx.ui.rui.Widget();}
						return eze$Temp6;})());
						egl.atLine(this.eze$$fileName,62,2261,55, this);
						eze$LNNTemp4 = eze$SettingTarget1;
					}
					var eze$LNNTemp3 = null;
					var eze$LNNTemp13 = null;
					{
						var eze$SettingTarget1;
						egl.atLine(this.eze$$fileName,92,3626,74, this);
						eze$SettingTarget1 = new egl.org.eclipse.edt.rui.widgets.DataGridColumn();
						egl.atLine(this.eze$$fileName,92,3646,18, this);
						eze$SettingTarget1.name = "coursecom";
						egl.atLine(this.eze$$fileName,92,3666,20, this);
						eze$SettingTarget1.displayName = "\u8bfe\u7a0b\u7b80\u4ecb";
						egl.atLine(this.eze$$fileName,92,3688,11, this);
						eze$SettingTarget1.width = egl.eglx.lang.convert(egl.eglx.lang.EString.fromEInt32, [320]);
						egl.atLine(this.eze$$fileName,92,3626,74, this);
						eze$LNNTemp13 = eze$SettingTarget1;
					}
					var eze$LNNTemp12 = null;
					{
						var eze$SettingTarget1;
						egl.atLine(this.eze$$fileName,91,3546,75, this);
						eze$SettingTarget1 = new egl.org.eclipse.edt.rui.widgets.DataGridColumn();
						egl.atLine(this.eze$$fileName,91,3566,19, this);
						eze$SettingTarget1.name = "lessonname";
						egl.atLine(this.eze$$fileName,91,3587,20, this);
						eze$SettingTarget1.displayName = "\u8bfe\u7a0b\u540d\u79f0";
						egl.atLine(this.eze$$fileName,91,3609,11, this);
						eze$SettingTarget1.width = egl.eglx.lang.convert(egl.eglx.lang.EString.fromEInt32, [120]);
						egl.atLine(this.eze$$fileName,91,3546,75, this);
						eze$LNNTemp12 = eze$SettingTarget1;
					}
					var eze$LNNTemp11 = null;
					{
						var eze$SettingTarget1 = new egl.org.eclipse.edt.rui.widgets.GridLayoutData();
						egl.atLine(this.eze$$fileName,86,3289,89, this);
						eze$SettingTarget1 = egl.eglx.lang.AnyValue.ezeCopyTo(new egl.org.eclipse.edt.rui.widgets.GridLayoutData(), eze$SettingTarget1);
						egl.atLine(this.eze$$fileName,86,3309,7, this);
						eze$SettingTarget1.row = 1;
						egl.atLine(this.eze$$fileName,86,3318,10, this);
						eze$SettingTarget1.column = 1;
						egl.atLine(this.eze$$fileName,87,3332,44, this);
						eze$SettingTarget1.verticalAlignment = egl.org.eclipse.edt.rui.widgets.GridLayoutLib['$inst'].VALIGN_TOP;
						egl.atLine(this.eze$$fileName,86,3289,89, this);
						eze$LNNTemp11 = egl.eglx.lang.AnyValue.ezeCopyTo(eze$SettingTarget1, eze$LNNTemp11);
					}
					var eze$LNNTemp10 = null;
					{
						var eze$SettingTarget1 = new egl.org.eclipse.edt.rui.widgets.GridLayoutData();
						egl.atLine(this.eze$$fileName,75,2811,41, this);
						eze$SettingTarget1 = egl.eglx.lang.AnyValue.ezeCopyTo(new egl.org.eclipse.edt.rui.widgets.GridLayoutData(), eze$SettingTarget1);
						egl.atLine(this.eze$$fileName,75,2831,7, this);
						eze$SettingTarget1.row = 1;
						egl.atLine(this.eze$$fileName,75,2840,10, this);
						eze$SettingTarget1.column = 1;
						egl.atLine(this.eze$$fileName,75,2811,41, this);
						eze$LNNTemp10 = egl.eglx.lang.AnyValue.ezeCopyTo(eze$SettingTarget1, eze$LNNTemp10);
					}
					var eze$LNNTemp9 = null;
					{
						var eze$SettingTarget1 = new egl.org.eclipse.edt.rui.widgets.GridLayoutData();
						egl.atLine(this.eze$$fileName,78,2970,41, this);
						eze$SettingTarget1 = egl.eglx.lang.AnyValue.ezeCopyTo(new egl.org.eclipse.edt.rui.widgets.GridLayoutData(), eze$SettingTarget1);
						egl.atLine(this.eze$$fileName,78,2990,7, this);
						eze$SettingTarget1.row = 1;
						egl.atLine(this.eze$$fileName,78,2999,10, this);
						eze$SettingTarget1.column = 2;
						egl.atLine(this.eze$$fileName,78,2970,41, this);
						eze$LNNTemp9 = egl.eglx.lang.AnyValue.ezeCopyTo(eze$SettingTarget1, eze$LNNTemp9);
					}
					var eze$LNNTemp8 = null;
					{
						var eze$SettingTarget1 = new egl.org.eclipse.edt.rui.widgets.GridLayoutData();
						egl.atLine(this.eze$$fileName,81,3127,41, this);
						eze$SettingTarget1 = egl.eglx.lang.AnyValue.ezeCopyTo(new egl.org.eclipse.edt.rui.widgets.GridLayoutData(), eze$SettingTarget1);
						egl.atLine(this.eze$$fileName,81,3147,7, this);
						eze$SettingTarget1.row = 1;
						egl.atLine(this.eze$$fileName,81,3156,10, this);
						eze$SettingTarget1.column = 3;
						egl.atLine(this.eze$$fileName,81,3127,41, this);
						eze$LNNTemp8 = egl.eglx.lang.AnyValue.ezeCopyTo(eze$SettingTarget1, eze$LNNTemp8);
					}
					var eze$LNNTemp7 = null;
					{
						var eze$SettingTarget1 = new egl.org.eclipse.edt.rui.widgets.GridLayoutData();
						egl.atLine(this.eze$$fileName,73,2628,41, this);
						eze$SettingTarget1 = egl.eglx.lang.AnyValue.ezeCopyTo(new egl.org.eclipse.edt.rui.widgets.GridLayoutData(), eze$SettingTarget1);
						egl.atLine(this.eze$$fileName,73,2648,7, this);
						eze$SettingTarget1.row = 2;
						egl.atLine(this.eze$$fileName,73,2657,10, this);
						eze$SettingTarget1.column = 1;
						egl.atLine(this.eze$$fileName,73,2628,41, this);
						eze$LNNTemp7 = egl.eglx.lang.AnyValue.ezeCopyTo(eze$SettingTarget1, eze$LNNTemp7);
					}
					{
						var eze$SettingTarget1;
						egl.atLine(this.eze$$fileName,61,2191,64, this);
						eze$SettingTarget1 = (function () {
							var eze$Temp14 = new egl.dojo.widgets.DojoContentPane();
							return eze$Temp14;
						}).call(this);
						egl.atLine(this.eze$$fileName,61,2213,14, this);
						eze$SettingTarget1.setTitle("\u6240\u6709\u8bfe\u7a0b");
						egl.atLine(this.eze$$fileName,61,2229,24, this);
						eze$SettingTarget1.setChildren([egl.eglx.lang.convert(egl.eglx.ui.rui.Widget.fromWidget, [this.BoxLesson,"org.eclipse.edt.rui.widgets.Box"])].setType("[Teglx/ui/rui/Widget;"));
						egl.atLine(this.eze$$fileName,61,2191,64, this);
						eze$LNNTemp3 = eze$SettingTarget1;
					}
					egl.atLine(this.eze$$fileName,60,2175,145, this);
					this.TabContainer.setChildren([egl.eglx.lang.convert(egl.eglx.ui.rui.Widget.fromWidget, [eze$LNNTemp3,"dojo.widgets.DojoContentPane"]), egl.eglx.lang.convert(egl.eglx.ui.rui.Widget.fromWidget, [eze$LNNTemp4,"dojo.widgets.DojoContentPane"])].setType("[Teglx/ui/rui/Widget;"));
					egl.atLine(this.eze$$fileName,64,2328,15, this);
					this.TabContainer.setHeight("1000");
					egl.atLine(this.eze$$fileName,65,2347,13, this);
					this.TabContainer.setSelection(2);
					egl.atLine(this.eze$$fileName,68,2386,9, this);
					this.BoxLesson.setPadding(8);
					egl.atLine(this.eze$$fileName,69,2402,13, this);
					this.BoxLesson.setWidth("630");
					egl.atLine(this.eze$$fileName,70,2422,31, this);
					this.BoxLesson.setChildren([egl.eglx.lang.convert(egl.eglx.ui.rui.Widget.fromWidget, [this.GridLayoutLesson,"org.eclipse.edt.rui.widgets.GridLayout"])].setType("[Teglx/ui/rui/Widget;"));
					egl.atLine(this.eze$$fileName,71,2490,15, this);
					this.GridLayoutLesson.setCellPadding(4);
					egl.atLine(this.eze$$fileName,71,2507,8, this);
					this.GridLayoutLesson.setRows(3);
					egl.atLine(this.eze$$fileName,71,2517,11, this);
					this.GridLayoutLesson.setColumns(2);
					egl.atLine(this.eze$$fileName,72,2535,43, this);
					this.GridLayoutLesson.setChildren([egl.eglx.lang.convert(egl.eglx.ui.rui.Widget.fromWidget, [this.GridLayoutButton,"org.eclipse.edt.rui.widgets.GridLayout"]), egl.eglx.lang.convert(egl.eglx.ui.rui.Widget.fromWidget, [this.myLesson_ui,"org.eclipse.edt.rui.widgets.DataGrid"])].setType("[Teglx/ui/rui/Widget;"));
					egl.atLine(this.eze$$fileName,73,2615,54, this);
					this.GridLayoutButton.setLayoutData(egl.eglx.lang.convert(egl.eglx.lang.EAny.fromEAny, [eze$LNNTemp7.eze$$clone(),"Torg/eclipse/edt/rui/widgets/GridLayoutData;"]));
					egl.atLine(this.eze$$fileName,73,2671,15, this);
					this.GridLayoutButton.setCellPadding(4);
					egl.atLine(this.eze$$fileName,73,2688,8, this);
					this.GridLayoutButton.setRows(1);
					egl.atLine(this.eze$$fileName,73,2698,11, this);
					this.GridLayoutButton.setColumns(3);
					egl.atLine(this.eze$$fileName,74,2713,54, this);
					this.GridLayoutButton.setChildren([egl.eglx.lang.convert(egl.eglx.ui.rui.Widget.fromWidget, [this.ButtonCourse,"dojo.widgets.DojoButton"]), egl.eglx.lang.convert(egl.eglx.ui.rui.Widget.fromWidget, [this.ButtonEdit,"dojo.widgets.DojoButton"]), egl.eglx.lang.convert(egl.eglx.ui.rui.Widget.fromWidget, [this.ButtonLessons,"dojo.widgets.DojoButton"])].setType("[Teglx/ui/rui/Widget;"));
					egl.atLine(this.eze$$fileName,75,2798,54, this);
					this.ButtonLessons.setLayoutData(egl.eglx.lang.convert(egl.eglx.lang.EAny.fromEAny, [eze$LNNTemp10.eze$$clone(),"Torg/eclipse/edt/rui/widgets/GridLayoutData;"]));
					egl.atLine(this.eze$$fileName,75,2854,15, this);
					this.ButtonLessons.setText("\u67e5\u770b\u6240\u6709\u8bfe\u7a0b");
					egl.atLine(this.eze$$fileName,76,2873,13, this);
					this.ButtonLessons.setFont("\u5fae\u8f6f\u96c5\u9ed1");
					egl.atLine(this.eze$$fileName,77,2890,15, this);
					this.ButtonLessons.setFontSize("14");
					egl.atLine(this.eze$$fileName,77,2907,22, this);
					this.ButtonLessons.getOnClick().appendElement(new egl.egl.jsrt.Delegate(this, egl.client.client.Learn1.prototype.sampleData, ""));
					egl.atLine(this.eze$$fileName,78,2957,54, this);
					this.ButtonEdit.setLayoutData(egl.eglx.lang.convert(egl.eglx.lang.EAny.fromEAny, [eze$LNNTemp9.eze$$clone(),"Torg/eclipse/edt/rui/widgets/GridLayoutData;"]));
					egl.atLine(this.eze$$fileName,78,3013,11, this);
					this.ButtonEdit.setText("\u7f16\u8f91");
					egl.atLine(this.eze$$fileName,79,3028,13, this);
					this.ButtonEdit.setFont("\u5fae\u8f6f\u96c5\u9ed1");
					egl.atLine(this.eze$$fileName,80,3045,15, this);
					this.ButtonEdit.setFontSize("14");
					egl.atLine(this.eze$$fileName,80,3062,22, this);
					this.ButtonEdit.getOnClick().appendElement(new egl.egl.jsrt.Delegate(this, egl.client.client.Learn1.prototype.showDialog, ""));
					egl.atLine(this.eze$$fileName,81,3114,54, this);
					this.ButtonCourse.setLayoutData(egl.eglx.lang.convert(egl.eglx.lang.EAny.fromEAny, [eze$LNNTemp8.eze$$clone(),"Torg/eclipse/edt/rui/widgets/GridLayoutData;"]));
					egl.atLine(this.eze$$fileName,81,3170,15, this);
					this.ButtonCourse.setText("\u52a0\u5165\u6211\u7684\u8bfe\u7a0b");
					egl.atLine(this.eze$$fileName,82,3189,13, this);
					this.ButtonCourse.setFont("\u5fae\u8f6f\u96c5\u9ed1");
					egl.atLine(this.eze$$fileName,83,3206,15, this);
					this.ButtonCourse.setFontSize("14");
					egl.atLine(this.eze$$fileName,86,3276,102, this);
					this.myLesson_ui.setLayoutData(egl.eglx.lang.convert(egl.eglx.lang.EAny.fromEAny, [eze$LNNTemp11.eze$$clone(),"Torg/eclipse/edt/rui/widgets/GridLayoutData;"]));
					egl.atLine(this.eze$$fileName,88,3382,39, this);
					this.myLesson_ui.selectionListeners.appendElement(new egl.egl.jsrt.Delegate(this, egl.client.client.Learn1.prototype.cellClickedLesson, ""));
					egl.atLine(this.eze$$fileName,89,3455,324, this);
					this.myLesson_ui.setColumns([eze$LNNTemp12, eze$LNNTemp13].setType("[Torg/eclipse/edt/rui/widgets/DataGridColumn;"));
					egl.atLine(this.eze$$fileName,95,3783,24, this);
					this.myLesson_ui.setData(egl.convertAnyToArrayType(this.myLesson,"[A;"));
					egl.atLine(this.eze$$fileName,96,3811,21, this);
					this.myLesson_ui.setShowCheckBoxes(true);
					egl.atLine(this.eze$$fileName,97,3836,44, this);
					this.myLesson_ui.setSelectionMode(egl.org.eclipse.edt.rui.widgets.DataGridLib['$inst'].SINGLE_SELECTION);
					egl.atLine(this.eze$$fileName,98,3884,13, this);
					this.myLesson_ui.setWidth("600");
					egl.atLine(this.eze$$fileName,99,3901,15, this);
					this.myLesson_ui.setFontSize("14");
					egl.atLine(this.eze$$fileName,100,3920,11, this);
					this.myLesson_ui.setFont("\u5b8b\u4f53");
					egl.atLine(this.eze$$fileName,101,3935,13, this);
					this.myLesson_ui.setPageSize(10);
					egl.atLine(this.eze$$fileName,105,4011,8, this);
					this.selectedLesson_ui.setRows(4);
					egl.atLine(this.eze$$fileName,105,4021,11, this);
					this.selectedLesson_ui.setColumns(2);
					egl.atLine(this.eze$$fileName,105,4034,15, this);
					this.selectedLesson_ui.setCellPadding(4);
					egl.atLine(this.eze$$fileName,105,4051,278, this);
					this.selectedLesson_ui.setChildren([egl.eglx.lang.convert(egl.eglx.ui.rui.Widget.fromWidget, [this.selectedLesson_lesson_id_nameLabel,"org.eclipse.edt.rui.widgets.TextLabel"]), egl.eglx.lang.convert(egl.eglx.ui.rui.Widget.fromWidget, [this.selectedLesson_lesson_id_field,"dojo.widgets.DojoTextField"]), egl.eglx.lang.convert(egl.eglx.ui.rui.Widget.fromWidget, [this.selectedLesson_lessonname_nameLabel,"org.eclipse.edt.rui.widgets.TextLabel"]), egl.eglx.lang.convert(egl.eglx.ui.rui.Widget.fromWidget, [this.selectedLesson_lessonname_field,"dojo.widgets.DojoTextField"]), egl.eglx.lang.convert(egl.eglx.ui.rui.Widget.fromWidget, [this.selectedLesson_coursecom_nameLabel,"org.eclipse.edt.rui.widgets.TextLabel"]), egl.eglx.lang.convert(egl.eglx.ui.rui.Widget.fromWidget, [this.selectedLesson_coursecom_area,"dojo.widgets.DojoTextArea"])].setType("[Teglx/ui/rui/Widget;"));
					egl.atLine(this.eze$$fileName,106,4333,13, this);
					this.selectedLesson_ui.setWidth("120");
					egl.atLine(this.eze$$fileName,108,4399,12, this);
					this.selectedLesson_lesson_id_nameLabel.setText("\u8bfe\u7a0b\u5e8f\u53f7:");
					var eze$LNNTemp15 = null;
					{
						var eze$SettingTarget1 = new egl.org.eclipse.edt.rui.widgets.GridLayoutData();
						egl.atLine(this.eze$$fileName,108,4427,41, this);
						eze$SettingTarget1 = egl.eglx.lang.AnyValue.ezeCopyTo(new egl.org.eclipse.edt.rui.widgets.GridLayoutData(), eze$SettingTarget1);
						egl.atLine(this.eze$$fileName,108,4448,7, this);
						eze$SettingTarget1.row = 1;
						egl.atLine(this.eze$$fileName,108,4457,10, this);
						eze$SettingTarget1.column = 1;
						egl.atLine(this.eze$$fileName,108,4427,41, this);
						eze$LNNTemp15 = egl.eglx.lang.AnyValue.ezeCopyTo(eze$SettingTarget1, eze$LNNTemp15);
					}
					egl.atLine(this.eze$$fileName,108,4414,54, this);
					this.selectedLesson_lesson_id_nameLabel.setLayoutData(egl.eglx.lang.convert(egl.eglx.lang.EAny.fromEAny, [eze$LNNTemp15.eze$$clone(),"Torg/eclipse/edt/rui/widgets/GridLayoutData;"]));
					egl.atLine(this.eze$$fileName,108,4469,12, this);
					this.selectedLesson_lesson_id_nameLabel.setWidth("60");
					var eze$LNNTemp16 = null;
					{
						var eze$SettingTarget1 = new egl.org.eclipse.edt.rui.widgets.GridLayoutData();
						egl.atLine(this.eze$$fileName,109,4545,41, this);
						eze$SettingTarget1 = egl.eglx.lang.AnyValue.ezeCopyTo(new egl.org.eclipse.edt.rui.widgets.GridLayoutData(), eze$SettingTarget1);
						egl.atLine(this.eze$$fileName,109,4566,7, this);
						eze$SettingTarget1.row = 1;
						egl.atLine(this.eze$$fileName,109,4575,10, this);
						eze$SettingTarget1.column = 2;
						egl.atLine(this.eze$$fileName,109,4545,41, this);
						eze$LNNTemp16 = egl.eglx.lang.AnyValue.ezeCopyTo(eze$SettingTarget1, eze$LNNTemp16);
					}
					egl.atLine(this.eze$$fileName,109,4532,54, this);
					this.selectedLesson_lesson_id_field.setLayoutData(egl.eglx.lang.convert(egl.eglx.lang.EAny.fromEAny, [eze$LNNTemp16.eze$$clone(),"Torg/eclipse/edt/rui/widgets/GridLayoutData;"]));
					egl.atLine(this.eze$$fileName,109,4587,12, this);
					this.selectedLesson_lesson_id_field.setWidth("100");
					egl.atLine(this.eze$$fileName,109,4600,15, this);
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
					var eze$Temp17 = new egl.org.eclipse.edt.rui.mvc.internal.FormatterWrapper(egl.org.eclipse.edt.rui.mvc.InternalNumericFormatter.$inst, false, false, " ", egl.eglx.ui.SignKind.leading, false, "", false, 0, 0, "eglx.lang.EInt", "");
					this.selectedLesson_lesson_id_controller.internalFormatters.appendElement(new egl.egl.jsrt.Delegate(eze$Temp17, eze$Temp17.format));
					this.selectedLesson_lesson_id_controller.internalUnformatters.appendElement(new egl.egl.jsrt.Delegate(eze$Temp17, eze$Temp17.unformat));
					egl.atLine(this.eze$$fileName,110,4749,56, this);
					this.selectedLesson_lesson_id_controller.validStateSetter = new egl.egl.jsrt.Delegate(this, egl.client.client.Learn1.prototype.handleValidStateChange_selectedLesson, "Torg/eclipse/edt/rui/mvc/MVCValidStateSetter;");
					egl.atLine(this.eze$$fileName,111,4856,48, this);
					this.selectedLesson_lesson_id_formField.controller = this.selectedLesson_lesson_id_controller;
					egl.atLine(this.eze$$fileName,111,4906,46, this);
					this.selectedLesson_lesson_id_formField.nameLabel = this.selectedLesson_lesson_id_nameLabel;
					egl.atLine(this.eze$$fileName,113,5005,12, this);
					this.selectedLesson_lessonname_nameLabel.setText("\u8bfe\u7a0b\u540d\u79f0:");
					var eze$LNNTemp18 = null;
					{
						var eze$SettingTarget1 = new egl.org.eclipse.edt.rui.widgets.GridLayoutData();
						egl.atLine(this.eze$$fileName,113,5033,41, this);
						eze$SettingTarget1 = egl.eglx.lang.AnyValue.ezeCopyTo(new egl.org.eclipse.edt.rui.widgets.GridLayoutData(), eze$SettingTarget1);
						egl.atLine(this.eze$$fileName,113,5054,7, this);
						eze$SettingTarget1.row = 2;
						egl.atLine(this.eze$$fileName,113,5063,10, this);
						eze$SettingTarget1.column = 1;
						egl.atLine(this.eze$$fileName,113,5033,41, this);
						eze$LNNTemp18 = egl.eglx.lang.AnyValue.ezeCopyTo(eze$SettingTarget1, eze$LNNTemp18);
					}
					egl.atLine(this.eze$$fileName,113,5020,54, this);
					this.selectedLesson_lessonname_nameLabel.setLayoutData(egl.eglx.lang.convert(egl.eglx.lang.EAny.fromEAny, [eze$LNNTemp18.eze$$clone(),"Torg/eclipse/edt/rui/widgets/GridLayoutData;"]));
					egl.atLine(this.eze$$fileName,113,5075,12, this);
					this.selectedLesson_lessonname_nameLabel.setWidth("60");
					var eze$LNNTemp19 = null;
					{
						var eze$SettingTarget1 = new egl.org.eclipse.edt.rui.widgets.GridLayoutData();
						egl.atLine(this.eze$$fileName,114,5152,41, this);
						eze$SettingTarget1 = egl.eglx.lang.AnyValue.ezeCopyTo(new egl.org.eclipse.edt.rui.widgets.GridLayoutData(), eze$SettingTarget1);
						egl.atLine(this.eze$$fileName,114,5173,7, this);
						eze$SettingTarget1.row = 2;
						egl.atLine(this.eze$$fileName,114,5182,10, this);
						eze$SettingTarget1.column = 2;
						egl.atLine(this.eze$$fileName,114,5152,41, this);
						eze$LNNTemp19 = egl.eglx.lang.AnyValue.ezeCopyTo(eze$SettingTarget1, eze$LNNTemp19);
					}
					egl.atLine(this.eze$$fileName,114,5139,54, this);
					this.selectedLesson_lessonname_field.setLayoutData(egl.eglx.lang.convert(egl.eglx.lang.EAny.fromEAny, [eze$LNNTemp19.eze$$clone(),"Torg/eclipse/edt/rui/widgets/GridLayoutData;"]));
					egl.atLine(this.eze$$fileName,114,5194,12, this);
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
					egl.atLine(this.eze$$fileName,115,5343,56, this);
					this.selectedLesson_lessonname_controller.validStateSetter = new egl.egl.jsrt.Delegate(this, egl.client.client.Learn1.prototype.handleValidStateChange_selectedLesson, "Torg/eclipse/edt/rui/mvc/MVCValidStateSetter;");
					egl.atLine(this.eze$$fileName,116,5451,49, this);
					this.selectedLesson_lessonname_formField.controller = this.selectedLesson_lessonname_controller;
					egl.atLine(this.eze$$fileName,116,5502,47, this);
					this.selectedLesson_lessonname_formField.nameLabel = this.selectedLesson_lessonname_nameLabel;
					egl.atLine(this.eze$$fileName,118,5601,12, this);
					this.selectedLesson_coursecom_nameLabel.setText("\u8bfe\u7a0b\u7b80\u4ecb:");
					var eze$LNNTemp20 = null;
					{
						var eze$SettingTarget1 = new egl.org.eclipse.edt.rui.widgets.GridLayoutData();
						egl.atLine(this.eze$$fileName,118,5629,41, this);
						eze$SettingTarget1 = egl.eglx.lang.AnyValue.ezeCopyTo(new egl.org.eclipse.edt.rui.widgets.GridLayoutData(), eze$SettingTarget1);
						egl.atLine(this.eze$$fileName,118,5650,7, this);
						eze$SettingTarget1.row = 3;
						egl.atLine(this.eze$$fileName,118,5659,10, this);
						eze$SettingTarget1.column = 1;
						egl.atLine(this.eze$$fileName,118,5629,41, this);
						eze$LNNTemp20 = egl.eglx.lang.AnyValue.ezeCopyTo(eze$SettingTarget1, eze$LNNTemp20);
					}
					egl.atLine(this.eze$$fileName,118,5616,54, this);
					this.selectedLesson_coursecom_nameLabel.setLayoutData(egl.eglx.lang.convert(egl.eglx.lang.EAny.fromEAny, [eze$LNNTemp20.eze$$clone(),"Torg/eclipse/edt/rui/widgets/GridLayoutData;"]));
					egl.atLine(this.eze$$fileName,118,5671,12, this);
					this.selectedLesson_coursecom_nameLabel.setWidth("60");
					var eze$LNNTemp21 = null;
					{
						var eze$SettingTarget1 = new egl.org.eclipse.edt.rui.widgets.GridLayoutData();
						egl.atLine(this.eze$$fileName,119,5746,41, this);
						eze$SettingTarget1 = egl.eglx.lang.AnyValue.ezeCopyTo(new egl.org.eclipse.edt.rui.widgets.GridLayoutData(), eze$SettingTarget1);
						egl.atLine(this.eze$$fileName,119,5767,7, this);
						eze$SettingTarget1.row = 3;
						egl.atLine(this.eze$$fileName,119,5776,10, this);
						eze$SettingTarget1.column = 2;
						egl.atLine(this.eze$$fileName,119,5746,41, this);
						eze$LNNTemp21 = egl.eglx.lang.AnyValue.ezeCopyTo(eze$SettingTarget1, eze$LNNTemp21);
					}
					egl.atLine(this.eze$$fileName,119,5733,54, this);
					this.selectedLesson_coursecom_area.setLayoutData(egl.eglx.lang.convert(egl.eglx.lang.EAny.fromEAny, [eze$LNNTemp21.eze$$clone(),"Torg/eclipse/edt/rui/widgets/GridLayoutData;"]));
					egl.atLine(this.eze$$fileName,119,5788,12, this);
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
					egl.atLine(this.eze$$fileName,120,5933,56, this);
					this.selectedLesson_coursecom_controller.validStateSetter = new egl.egl.jsrt.Delegate(this, egl.client.client.Learn1.prototype.handleValidStateChange_selectedLesson, "Torg/eclipse/edt/rui/mvc/MVCValidStateSetter;");
					egl.atLine(this.eze$$fileName,121,6040,48, this);
					this.selectedLesson_coursecom_formField.controller = this.selectedLesson_coursecom_controller;
					egl.atLine(this.eze$$fileName,121,6090,46, this);
					this.selectedLesson_coursecom_formField.nameLabel = this.selectedLesson_coursecom_nameLabel;
					egl.atLine(this.eze$$fileName,133,7322,153, this);
					this.selectedLesson_form.setEntries([this.selectedLesson_lesson_id_formField, this.selectedLesson_lessonname_formField, this.selectedLesson_coursecom_formField].setType("[Torg/eclipse/edt/rui/mvc/FormField;"));
					egl.atLine(this.eze$$fileName,136,7512,13, this);
					this.dialog.title = "\u7f16\u8f91\u6846";
					egl.atLine(this.eze$$fileName,137,7534,12, this);
					this.dialog.setPadding(20);
					egl.atLine(this.eze$$fileName,138,7555,28, this);
					this.dialog.setBackgroundColor("AliceBlue");
					egl.atLine(this.eze$$fileName,139,7592,16, this);
					this.dialog.draggable = true;
					egl.atLine(this.eze$$fileName,140,7617,20, this);
					this.dialog.setChildren([egl.eglx.lang.convert(egl.eglx.ui.rui.Widget.fromWidget, [this.content,"org.eclipse.edt.rui.widgets.Box"])].setType("[Teglx/ui/rui/Widget;"));
					egl.atLine(this.eze$$fileName,143,7669,10, this);
					this.content.setColumns(1);
					egl.atLine(this.eze$$fileName,146,7708,12, this);
					this.info.setPadding(10);
					egl.atLine(this.eze$$fileName,146,7722,11, this);
					this.info.setWidth(egl.eglx.lang.convert(egl.eglx.lang.EString.fromEInt32, [600]));
					egl.atLine(this.eze$$fileName,146,7735,28, this);
					this.info.setBackgroundColor("lightBlue");
					var eze$LNNTemp22 = null;
					var eze$LNNTemp23 = null;
					{
						var eze$SettingTarget2;
						egl.atLine(this.eze$$fileName,148,7883,49, this);
						eze$SettingTarget2 = (function () {
							var eze$Temp24 = new egl.org.eclipse.edt.rui.widgets.Div();
							return eze$Temp24;
						}).call(this);
						egl.atLine(this.eze$$fileName,149,7896,32, this);
						eze$SettingTarget2.setChildren([egl.eglx.lang.convert(egl.eglx.ui.rui.Widget.fromWidget, [this.selectedLesson_ui,"org.eclipse.edt.rui.widgets.GridLayout"])].setType("[Teglx/ui/rui/Widget;"));
						egl.atLine(this.eze$$fileName,148,7883,49, this);
						eze$LNNTemp23 = eze$SettingTarget2;
					}
					{
						var eze$SettingTarget1;
						egl.atLine(this.eze$$fileName,148,7793,143, this);
						eze$SettingTarget1 = (function () {
							var eze$Temp25 = new egl.dojo.widgets.DojoTitlePane();
							return eze$Temp25;
						}).call(this);
						egl.atLine(this.eze$$fileName,148,7811,14, this);
						eze$SettingTarget1.title = "\u8bfe\u7a0b\u7f16\u8f91";
						egl.atLine(this.eze$$fileName,148,7827,11, this);
						eze$SettingTarget1.setOpen(true);
						egl.atLine(this.eze$$fileName,148,7840,13, this);
						eze$SettingTarget1.duration = 1000;
						egl.atLine(this.eze$$fileName,148,7855,13, this);
						eze$SettingTarget1.setWidth("600");
						egl.atLine(this.eze$$fileName,148,7870,64, this);
						eze$SettingTarget1.setChildren([egl.eglx.lang.convert(egl.eglx.ui.rui.Widget.fromWidget, [eze$LNNTemp23,"org.eclipse.edt.rui.widgets.Div"])].setType("[Teglx/ui/rui/Widget;"));
						egl.atLine(this.eze$$fileName,148,7793,143, this);
						eze$LNNTemp22 = eze$SettingTarget1;
					}
					egl.atLine(this.eze$$fileName,147,7772,165, this);
					this.info.setChildren([egl.eglx.lang.convert(egl.eglx.ui.rui.Widget.fromWidget, [eze$LNNTemp22,"dojo.widgets.DojoTitlePane"])].setType("[Teglx/ui/rui/Widget;"));
					egl.atLine(this.eze$$fileName,153,7978,13, this);
					this.buttonBar.setMarginTop(9);
					var eze$LNNTemp30 = null;
					{
						var eze$SettingTarget1;
						egl.atLine(this.eze$$fileName,159,8287,62, this);
						eze$SettingTarget1 = (function () {
							var eze$Temp31 = new egl.dojo.widgets.DojoButton();
							return eze$Temp31;
						}).call(this);
						egl.atLine(this.eze$$fileName,159,8302,10, this);
						eze$SettingTarget1.setText("\u5173\u95ed");
						egl.atLine(this.eze$$fileName,159,8313,13, this);
						eze$SettingTarget1.setMarginRight(0);
						egl.atLine(this.eze$$fileName,159,8327,21, this);
						eze$SettingTarget1.getOnClick().appendElement(new egl.egl.jsrt.Delegate(this, egl.client.client.Learn1.prototype.hideDialog, ""));
						egl.atLine(this.eze$$fileName,159,8287,62, this);
						eze$LNNTemp30 = eze$SettingTarget1;
					}
					var eze$LNNTemp29 = null;
					{
						var eze$SettingTarget1;
						egl.atLine(this.eze$$fileName,158,8209,67, this);
						eze$SettingTarget1 = (function () {
							var eze$Temp32 = new egl.dojo.widgets.DojoButton();
							return eze$Temp32;
						}).call(this);
						egl.atLine(this.eze$$fileName,158,8224,11, this);
						eze$SettingTarget1.setText("\u4fdd\u5b58");
						egl.atLine(this.eze$$fileName,158,8236,38, this);
						eze$SettingTarget1.getOnClick().appendElement(new egl.egl.jsrt.Delegate(this, egl.client.client.Learn1.prototype.selectedLesson_form_Submit, ""));
						egl.atLine(this.eze$$fileName,158,8209,67, this);
						eze$LNNTemp29 = eze$SettingTarget1;
					}
					var eze$LNNTemp28 = null;
					{
						var eze$SettingTarget1;
						egl.atLine(this.eze$$fileName,157,8142,56, this);
						eze$SettingTarget1 = (function () {
							var eze$Temp33 = new egl.dojo.widgets.DojoButton();
							return eze$Temp33;
						}).call(this);
						egl.atLine(this.eze$$fileName,157,8157,11, this);
						eze$SettingTarget1.setText("\u6e05\u7a7a");
						egl.atLine(this.eze$$fileName,157,8170,26, this);
						eze$SettingTarget1.getOnClick().appendElement(new egl.egl.jsrt.Delegate(this, egl.client.client.Learn1.prototype.clearAllFields, ""));
						egl.atLine(this.eze$$fileName,157,8142,56, this);
						eze$LNNTemp28 = eze$SettingTarget1;
					}
					var eze$LNNTemp27 = null;
					{
						var eze$SettingTarget1;
						egl.atLine(this.eze$$fileName,156,8081,50, this);
						eze$SettingTarget1 = (function () {
							var eze$Temp34 = new egl.dojo.widgets.DojoButton();
							return eze$Temp34;
						}).call(this);
						egl.atLine(this.eze$$fileName,156,8096,11, this);
						eze$SettingTarget1.setText("\u5220\u9664");
						egl.atLine(this.eze$$fileName,156,8108,21, this);
						eze$SettingTarget1.getOnClick().appendElement(new egl.egl.jsrt.Delegate(this, egl.client.client.Learn1.prototype.deleteRow, ""));
						egl.atLine(this.eze$$fileName,156,8081,50, this);
						eze$LNNTemp27 = eze$SettingTarget1;
					}
					var eze$LNNTemp26 = null;
					{
						var eze$SettingTarget1;
						egl.atLine(this.eze$$fileName,155,8022,48, this);
						eze$SettingTarget1 = (function () {
							var eze$Temp35 = new egl.dojo.widgets.DojoButton();
							return eze$Temp35;
						}).call(this);
						egl.atLine(this.eze$$fileName,155,8037,11, this);
						eze$SettingTarget1.setText("\u6dfb\u52a0");
						egl.atLine(this.eze$$fileName,155,8050,18, this);
						eze$SettingTarget1.getOnClick().appendElement(new egl.egl.jsrt.Delegate(this, egl.client.client.Learn1.prototype.addrow, ""));
						egl.atLine(this.eze$$fileName,155,8022,48, this);
						eze$LNNTemp26 = eze$SettingTarget1;
					}
					egl.atLine(this.eze$$fileName,154,8000,350, this);
					this.buttonBar.setChildren([egl.eglx.lang.convert(egl.eglx.ui.rui.Widget.fromWidget, [eze$LNNTemp26,"dojo.widgets.DojoButton"]), egl.eglx.lang.convert(egl.eglx.ui.rui.Widget.fromWidget, [eze$LNNTemp27,"dojo.widgets.DojoButton"]), egl.eglx.lang.convert(egl.eglx.ui.rui.Widget.fromWidget, [eze$LNNTemp28,"dojo.widgets.DojoButton"]), egl.eglx.lang.convert(egl.eglx.ui.rui.Widget.fromWidget, [eze$LNNTemp29,"dojo.widgets.DojoButton"]), egl.eglx.lang.convert(egl.eglx.ui.rui.Widget.fromWidget, [eze$LNNTemp30,"dojo.widgets.DojoButton"])].setType("[Teglx/ui/rui/Widget;"));
					egl.atLine(this.eze$$fileName,202,9648,4, this);
					this.logActive = true;
					egl.atLine(this.eze$$fileName,40,1343,28, this);
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
				var ezert$$2 = new egl.client.client.Learn1();
				ezert$$2.myLessonService = ezert$$1.myLessonService === null ? null : ezert$$1.myLessonService;
				ezert$$2.dedicatedServiceBinding = ezert$$1.dedicatedServiceBinding === null ? null : ezert$$1.dedicatedServiceBinding;
				ezert$$2.ui = ezert$$1.ui === null ? null : ezert$$1.ui.eze$$clone();
				ezert$$2.conBox = ezert$$1.conBox === null ? null : ezert$$1.conBox.eze$$clone();
				ezert$$2.con = ezert$$1.con === null ? null : ezert$$1.con.eze$$clone();
				ezert$$2.cuteBox = ezert$$1.cuteBox === null ? null : ezert$$1.cuteBox.eze$$clone();
				ezert$$2.TabContainer = ezert$$1.TabContainer === null ? null : ezert$$1.TabContainer;
				ezert$$2.BoxLesson = ezert$$1.BoxLesson === null ? null : ezert$$1.BoxLesson.eze$$clone();
				ezert$$2.GridLayoutLesson = ezert$$1.GridLayoutLesson === null ? null : ezert$$1.GridLayoutLesson.eze$$clone();
				ezert$$2.GridLayoutButton = ezert$$1.GridLayoutButton === null ? null : ezert$$1.GridLayoutButton.eze$$clone();
				ezert$$2.ButtonLessons = ezert$$1.ButtonLessons === null ? null : ezert$$1.ButtonLessons;
				ezert$$2.ButtonEdit = ezert$$1.ButtonEdit === null ? null : ezert$$1.ButtonEdit;
				ezert$$2.ButtonCourse = ezert$$1.ButtonCourse === null ? null : ezert$$1.ButtonCourse;
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
					{name: "cuteBox", sig: "org.eclipse.edt.rui.widgets.Box"},
					{name: "TabContainer", sig: "dojo.widgets.DojoTabContainer"},
					{name: "BoxLesson", sig: "org.eclipse.edt.rui.widgets.Box"},
					{name: "GridLayoutLesson", sig: "org.eclipse.edt.rui.widgets.GridLayout"},
					{name: "GridLayoutButton", sig: "org.eclipse.edt.rui.widgets.GridLayout"},
					{name: "ButtonLessons", sig: "dojo.widgets.DojoButton"},
					{name: "ButtonEdit", sig: "dojo.widgets.DojoButton"},
					{name: "ButtonCourse", sig: "dojo.widgets.DojoButton"},
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
					{name: "logActive", sig: "0;"}];
				}
				return this.fieldSigs;
			}
			,
			"eze$$getAnnotations": function() {
				if(this.annotations === undefined){
					this.annotations = {};
					this.annotations["XMLRootElement"] = new egl.eglx.xml.binding.annotation.XMLRootElement("Learn1", null, false);
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
					annotations["XMLStyle"] = new egl.eglx.xml.binding.annotation.XMLElement("cuteBox", null, false, false);
					annotations["JsonName"] = new egl.eglx.json.JsonName("cuteBox");
					this.fieldInfos[5] =new egl.eglx.services.FieldInfo("cuteBox", "cuteBox", "org.eclipse.edt.rui.widgets.Box", egl.org.eclipse.edt.rui.widgets.Box, annotations);
					annotations = {};
					annotations["XMLStyle"] = new egl.eglx.xml.binding.annotation.XMLElement("BoxLesson", null, false, false);
					annotations["JsonName"] = new egl.eglx.json.JsonName("BoxLesson");
					this.fieldInfos[7] =new egl.eglx.services.FieldInfo("BoxLesson", "BoxLesson", "org.eclipse.edt.rui.widgets.Box", egl.org.eclipse.edt.rui.widgets.Box, annotations);
					annotations = {};
					annotations["XMLStyle"] = new egl.eglx.xml.binding.annotation.XMLElement("GridLayoutLesson", null, false, false);
					annotations["JsonName"] = new egl.eglx.json.JsonName("GridLayoutLesson");
					this.fieldInfos[8] =new egl.eglx.services.FieldInfo("GridLayoutLesson", "GridLayoutLesson", "org.eclipse.edt.rui.widgets.GridLayout", egl.org.eclipse.edt.rui.widgets.GridLayout, annotations);
					annotations = {};
					annotations["XMLStyle"] = new egl.eglx.xml.binding.annotation.XMLElement("GridLayoutButton", null, false, false);
					annotations["JsonName"] = new egl.eglx.json.JsonName("GridLayoutButton");
					this.fieldInfos[9] =new egl.eglx.services.FieldInfo("GridLayoutButton", "GridLayoutButton", "org.eclipse.edt.rui.widgets.GridLayout", egl.org.eclipse.edt.rui.widgets.GridLayout, annotations);
					annotations = {};
					annotations["XMLStyle"] = new egl.eglx.xml.binding.annotation.XMLElement("myLesson", null, false, false);
					annotations["JsonName"] = new egl.eglx.json.JsonName("myLesson");
					this.fieldInfos[13] =new egl.eglx.services.FieldInfo("myLesson", "myLesson", "[Tclient/common/Lesson;", egl.client.common.Lesson, annotations);
					annotations = {};
					annotations["XMLStyle"] = new egl.eglx.xml.binding.annotation.XMLElement("myLesson_ui", null, false, false);
					annotations["JsonName"] = new egl.eglx.json.JsonName("myLesson_ui");
					this.fieldInfos[14] =new egl.eglx.services.FieldInfo("myLesson_ui", "myLesson_ui", "org.eclipse.edt.rui.widgets.DataGrid", egl.org.eclipse.edt.rui.widgets.DataGrid, annotations);
					annotations = {};
					annotations["XMLStyle"] = new egl.eglx.xml.binding.annotation.XMLElement("selectedLesson", null, false, false);
					annotations["JsonName"] = new egl.eglx.json.JsonName("selectedLesson");
					this.fieldInfos[15] =new egl.eglx.services.FieldInfo("selectedLesson", "selectedLesson", "Tclient/common/Lesson;", egl.client.common.Lesson, annotations);
					annotations = {};
					annotations["XMLStyle"] = new egl.eglx.xml.binding.annotation.XMLElement("selectedLesson_ui", null, false, false);
					annotations["JsonName"] = new egl.eglx.json.JsonName("selectedLesson_ui");
					this.fieldInfos[16] =new egl.eglx.services.FieldInfo("selectedLesson_ui", "selectedLesson_ui", "org.eclipse.edt.rui.widgets.GridLayout", egl.org.eclipse.edt.rui.widgets.GridLayout, annotations);
					annotations = {};
					annotations["XMLStyle"] = new egl.eglx.xml.binding.annotation.XMLElement("selectedLesson_lesson_id_nameLabel", null, false, false);
					annotations["JsonName"] = new egl.eglx.json.JsonName("selectedLesson_lesson_id_nameLabel");
					this.fieldInfos[17] =new egl.eglx.services.FieldInfo("selectedLesson_lesson_id_nameLabel", "selectedLesson_lesson_id_nameLabel", "org.eclipse.edt.rui.widgets.TextLabel", egl.org.eclipse.edt.rui.widgets.TextLabel, annotations);
					annotations = {};
					annotations["XMLStyle"] = new egl.eglx.xml.binding.annotation.XMLElement("selectedLesson_lesson_id_controller", null, false, false);
					annotations["JsonName"] = new egl.eglx.json.JsonName("selectedLesson_lesson_id_controller");
					this.fieldInfos[19] =new egl.eglx.services.FieldInfo("selectedLesson_lesson_id_controller", "selectedLesson_lesson_id_controller", "org.eclipse.edt.rui.mvc.Controller", egl.org.eclipse.edt.rui.mvc.Controller, annotations);
					annotations = {};
					annotations["XMLStyle"] = new egl.eglx.xml.binding.annotation.XMLElement("selectedLesson_lesson_id_formField", null, false, false);
					annotations["JsonName"] = new egl.eglx.json.JsonName("selectedLesson_lesson_id_formField");
					this.fieldInfos[20] =new egl.eglx.services.FieldInfo("selectedLesson_lesson_id_formField", "selectedLesson_lesson_id_formField", "Torg/eclipse/edt/rui/mvc/FormField;", egl.org.eclipse.edt.rui.mvc.FormField, annotations);
					annotations = {};
					annotations["XMLStyle"] = new egl.eglx.xml.binding.annotation.XMLElement("selectedLesson_lessonname_nameLabel", null, false, false);
					annotations["JsonName"] = new egl.eglx.json.JsonName("selectedLesson_lessonname_nameLabel");
					this.fieldInfos[21] =new egl.eglx.services.FieldInfo("selectedLesson_lessonname_nameLabel", "selectedLesson_lessonname_nameLabel", "org.eclipse.edt.rui.widgets.TextLabel", egl.org.eclipse.edt.rui.widgets.TextLabel, annotations);
					annotations = {};
					annotations["XMLStyle"] = new egl.eglx.xml.binding.annotation.XMLElement("selectedLesson_lessonname_controller", null, false, false);
					annotations["JsonName"] = new egl.eglx.json.JsonName("selectedLesson_lessonname_controller");
					this.fieldInfos[23] =new egl.eglx.services.FieldInfo("selectedLesson_lessonname_controller", "selectedLesson_lessonname_controller", "org.eclipse.edt.rui.mvc.Controller", egl.org.eclipse.edt.rui.mvc.Controller, annotations);
					annotations = {};
					annotations["XMLStyle"] = new egl.eglx.xml.binding.annotation.XMLElement("selectedLesson_lessonname_formField", null, false, false);
					annotations["JsonName"] = new egl.eglx.json.JsonName("selectedLesson_lessonname_formField");
					this.fieldInfos[24] =new egl.eglx.services.FieldInfo("selectedLesson_lessonname_formField", "selectedLesson_lessonname_formField", "Torg/eclipse/edt/rui/mvc/FormField;", egl.org.eclipse.edt.rui.mvc.FormField, annotations);
					annotations = {};
					annotations["XMLStyle"] = new egl.eglx.xml.binding.annotation.XMLElement("selectedLesson_coursecom_nameLabel", null, false, false);
					annotations["JsonName"] = new egl.eglx.json.JsonName("selectedLesson_coursecom_nameLabel");
					this.fieldInfos[25] =new egl.eglx.services.FieldInfo("selectedLesson_coursecom_nameLabel", "selectedLesson_coursecom_nameLabel", "org.eclipse.edt.rui.widgets.TextLabel", egl.org.eclipse.edt.rui.widgets.TextLabel, annotations);
					annotations = {};
					annotations["XMLStyle"] = new egl.eglx.xml.binding.annotation.XMLElement("selectedLesson_coursecom_controller", null, false, false);
					annotations["JsonName"] = new egl.eglx.json.JsonName("selectedLesson_coursecom_controller");
					this.fieldInfos[27] =new egl.eglx.services.FieldInfo("selectedLesson_coursecom_controller", "selectedLesson_coursecom_controller", "org.eclipse.edt.rui.mvc.Controller", egl.org.eclipse.edt.rui.mvc.Controller, annotations);
					annotations = {};
					annotations["XMLStyle"] = new egl.eglx.xml.binding.annotation.XMLElement("selectedLesson_coursecom_formField", null, false, false);
					annotations["JsonName"] = new egl.eglx.json.JsonName("selectedLesson_coursecom_formField");
					this.fieldInfos[28] =new egl.eglx.services.FieldInfo("selectedLesson_coursecom_formField", "selectedLesson_coursecom_formField", "Torg/eclipse/edt/rui/mvc/FormField;", egl.org.eclipse.edt.rui.mvc.FormField, annotations);
					annotations = {};
					annotations["XMLStyle"] = new egl.eglx.xml.binding.annotation.XMLElement("selectedLesson_form", null, false, false);
					annotations["JsonName"] = new egl.eglx.json.JsonName("selectedLesson_form");
					this.fieldInfos[29] =new egl.eglx.services.FieldInfo("selectedLesson_form", "selectedLesson_form", "org.eclipse.edt.rui.mvc.FormManager", egl.org.eclipse.edt.rui.mvc.FormManager, annotations);
					annotations = {};
					annotations["XMLStyle"] = new egl.eglx.xml.binding.annotation.XMLElement("content", null, false, false);
					annotations["JsonName"] = new egl.eglx.json.JsonName("content");
					this.fieldInfos[31] =new egl.eglx.services.FieldInfo("content", "content", "org.eclipse.edt.rui.widgets.Box", egl.org.eclipse.edt.rui.widgets.Box, annotations);
					annotations = {};
					annotations["XMLStyle"] = new egl.eglx.xml.binding.annotation.XMLElement("info", null, false, false);
					annotations["JsonName"] = new egl.eglx.json.JsonName("info");
					this.fieldInfos[32] =new egl.eglx.services.FieldInfo("info", "info", "org.eclipse.edt.rui.widgets.Div", egl.org.eclipse.edt.rui.widgets.Div, annotations);
					annotations = {};
					annotations["XMLStyle"] = new egl.eglx.xml.binding.annotation.XMLElement("buttonBar", null, false, false);
					annotations["JsonName"] = new egl.eglx.json.JsonName("buttonBar");
					this.fieldInfos[33] =new egl.eglx.services.FieldInfo("buttonBar", "buttonBar", "org.eclipse.edt.rui.widgets.FloatRight", egl.org.eclipse.edt.rui.widgets.FloatRight, annotations);
					annotations = {};
					annotations["XMLStyle"] = new egl.eglx.xml.binding.annotation.XMLElement("logActive", null, false, false);
					annotations["JsonName"] = new egl.eglx.json.JsonName("logActive");
					this.fieldInfos[34] =new egl.eglx.services.FieldInfo("logActive", "logActive", "0;", Boolean, annotations);
				}
				return this.fieldInfos;
			}
			,
			"start": function() {
				try { egl.enter("start",this,arguments);
					egl.atLine(this.eze$$fileName,171,8599,24, this);
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
					egl.atLine(this.eze$$fileName,176,8718,57, this);
					this.selectedLesson = egl.eglx.lang.AnyValue.ezeCopyTo(egl.eglx.lang.EAny.ezeCast(egl.getElement(this.myLesson_ui.getSelection(), egl.eglx.lang.EInt32.ezeCast({eze$$value : 1, eze$$signature : "I;"}, false) - 1), egl.client.common.Lesson), this.selectedLesson);
					egl.atLine(this.eze$$fileName,177,8781,30, this);
					this.selectedLesson_form.publish();
					egl.atLine(this.eze$$fileName,174,8633,186, this);
					if (!egl.debugg) egl.leave();
				} finally {
					if (!egl.debugg){
					} else { egl.leave(); }
				}
			}
			,
			"readFromTable": function() {
				try { egl.enter("readFromTable",this,arguments);
					egl.atLine(this.eze$$fileName,181,8860,147, this);
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
								new egl.egl.jsrt.Delegate(this, egl.client.client.Learn1.prototype.updateAll, ""), new egl.egl.jsrt.Delegate(this, egl.client.client.Learn1.prototype.serviceExceptionHandler, ""));
					}
					;
					egl.atLine(this.eze$$fileName,180,8829,187, this);
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
					egl.atLine(this.eze$$fileName,188,9086,501, this);
					try {
						try{egl.enterBlock();
							egl.atLine(this.eze$$fileName,189,9104,9, this);
							throw ex;
						}finally{egl.exitBlock();}
					}
					catch ( eze$Temp36 )
					{
						if (eze$Temp36 instanceof egl.egl.debug.DebugTermination) {
							throw eze$Temp36;
						}
						if ( eze$Temp36 instanceof egl.eglx.services.ServiceInvocationException ) {
							var serviceEx = eze$Temp36;
							{
								try{egl.enterBlock();
									egl.addLocalFunctionVariable("serviceEx", serviceEx, "eglx.services.ServiceInvocationException", "serviceEx");
									egl.atLine(this.eze$$fileName,191,9188,100, this);
									this.log((("Failure:  service invocation, exception = ") + serviceEx.message));
									egl.atLine(this.eze$$fileName,193,9303,39, this);
									this.log((("Detail 1:  ") + serviceEx.detail1));
									egl.atLine(this.eze$$fileName,194,9357,39, this);
									this.log((("Detail 2:  ") + serviceEx.detail2));
									egl.atLine(this.eze$$fileName,195,9411,39, this);
									this.log((("Detail 3:  ") + serviceEx.detail3));
								}finally{egl.exitBlock();}
							}
						}
						else {
							if (!(eze$Temp36 instanceof egl.eglx.lang.AnyException)) {
								eze$Temp36 = egl.makeExceptionFromCaughtObject(eze$Temp36);
							}
							var anyex = eze$Temp36;
							{
								try{egl.enterBlock();
									egl.addLocalFunctionVariable("anyex", anyex, "eglx.lang.AnyException", "anyex");
									egl.atLine(this.eze$$fileName,197,9507,66, this);
									this.log((("Failure:  service invocation, exception = ") + anyex.message));
								}finally{egl.exitBlock();}
							}
						}
					}
					egl.atLine(this.eze$$fileName,199,9598,9, this);
					throw ex;
					egl.atLine(this.eze$$fileName,187,9026,591, this);
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
					egl.atLine(this.eze$$fileName,204,9698,67, this);
					if (this.logActive) {
						try{egl.enterBlock();
							egl.atLine(this.eze$$fileName,205,9726,25, this);
							egl.eglx.lang.SysLib.writeStderr(text);
						}finally{egl.exitBlock();}
					}
					egl.atLine(this.eze$$fileName,203,9659,115, this);
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
					egl.atLine(this.eze$$fileName,210,9841,447, this);
					if (this.selectedLesson_form.isValid()) {
						try{egl.enterBlock();
							egl.atLine(this.eze$$fileName,211,9881,29, this);
							this.selectedLesson_form.commit();
							egl.atLine(this.eze$$fileName,212,9918,187, this);
							{
								try{egl.enterBlock();
									var i = 0;
									egl.addLocalFunctionVariable("i", i, "eglx.lang.EInt", "i");
									EzeLabel_39: for (i = 1; ((i <= this.myLesson.getSize())); i = ((i + 1))) {
										egl.setLocalFunctionVariable("i", i, "eglx.lang.EInt");
										try{egl.enterBlock();
											egl.atLine(this.eze$$fileName,213,9967,126, this);
											if (((egl.getElement(this.myLesson, egl.eglx.lang.EInt32.ezeCast({eze$$value : i, eze$$signature : "I;"}, false) - 1).lesson_id == this.selectedLesson.lesson_id))) {
												try{egl.enterBlock();
													egl.atLine(this.eze$$fileName,214,10031,29, this);
													egl.setElement(this.myLesson, egl.eglx.lang.EInt32.ezeCast({eze$$value : i, eze$$signature : "I;"}, false) - 1, this.selectedLesson);
													egl.atLine(this.eze$$fileName,215,10071,9, this);
													break EzeLabel_39;
												}finally{egl.exitBlock();}
											}
										}finally{egl.exitBlock();}
										egl.atLine(this.eze$$fileName,212,9918,187, this);
									}
								}
								finally{egl.exitBlock();}
							}
							var eze$Temp41 = null;
							eze$Temp41 = egl.eglx.lang.AnyValue.ezeCopyTo(this.selectedLesson, eze$Temp41);
							egl.atLine(this.eze$$fileName,218,10112,166, this);
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
										new egl.egl.jsrt.Delegate(this, egl.client.client.Learn1.prototype.recordRevised, ""), new egl.egl.jsrt.Delegate(this, egl.client.client.Learn1.prototype.serviceExceptionHandler, ""));
							}
							;
						}finally{egl.exitBlock();}
					}
					egl.atLine(this.eze$$fileName,209,9784,512, this);
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
					egl.atLine(this.eze$$fileName,226,10364,30, this);
					this.selectedLesson_form.publish();
					egl.atLine(this.eze$$fileName,227,10400,31, this);
					this.selectedLesson_form_Validate();
					egl.atLine(this.eze$$fileName,225,10306,133, this);
					if (!egl.debugg) egl.leave();
				} finally {
					if (!egl.debugg){
					} else { egl.leave(); }
				}
			}
			,
			"selectedLesson_form_Validate": function() {
				try { egl.enter("selectedLesson_form_Validate",this,arguments);
					egl.atLine(this.eze$$fileName,231,10494,30, this);
					this.selectedLesson_form.isValid();
					egl.atLine(this.eze$$fileName,230,10449,83, this);
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
					egl.atLine(this.eze$$fileName,235,10628,361, this);
					{
						try{egl.enterBlock();
							var n = 0;
							egl.addLocalFunctionVariable("n", n, "eglx.lang.EInt", "n");
							for (n = this.selectedLesson_form.getEntries().getSize(); ((n >= 1)); n = ((n - 1))) {
								egl.setLocalFunctionVariable("n", n, "eglx.lang.EInt");
								try{egl.enterBlock();
									var entry = null;
									egl.addLocalFunctionVariable("entry", entry, "org.eclipse.edt.rui.mvc.FormField", "entry");
									egl.atLine(this.eze$$fileName,236,10727,30, this);
									entry = egl.eglx.lang.AnyValue.ezeCopyTo(egl.getElement(this.selectedLesson_form.getEntries(), egl.eglx.lang.EInt32.ezeCast({eze$$value : n, eze$$signature : "I;"}, false) - 1), entry);
									egl.setLocalFunctionVariable("entry", entry, "org.eclipse.edt.rui.mvc.FormField");
									egl.atLine(this.eze$$fileName,237,10765,215, this);
									if ((entry.controller.getView() == view)) {
										try{egl.enterBlock();
											egl.atLine(this.eze$$fileName,238,10806,164, this);
											if (valid) {
												try{egl.enterBlock();
												}finally{egl.exitBlock();}
											}
											else {
												try{egl.enterBlock();
													var msg;
													egl.addLocalFunctionVariable("msg", msg, "eglx.lang.EString", "msg");
													egl.atLine(this.eze$$fileName,241,10886,34, this);
													msg = entry.controller.getErrorMessage();
													egl.setLocalFunctionVariable("msg", msg, "eglx.lang.EString");
												}finally{egl.exitBlock();}
											}
										}finally{egl.exitBlock();}
									}
								}finally{egl.exitBlock();}
								egl.atLine(this.eze$$fileName,235,10628,361, this);
							}
						}
						finally{egl.exitBlock();}
					}
					egl.atLine(this.eze$$fileName,234,10542,455, this);
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
					var eze$Temp45 = new egl.client.common.Lesson();
					eze$Temp45 = egl.eglx.lang.AnyValue.ezeCopyTo(new egl.client.common.Lesson(), eze$Temp45);
					egl.atLine(this.eze$$fileName,249,11047,151, this);
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
								new egl.egl.jsrt.Delegate(this, egl.client.client.Learn1.prototype.recordAdded, ""), new egl.egl.jsrt.Delegate(this, egl.client.client.Learn1.prototype.serviceExceptionHandler, ""));
					}
					;
					egl.atLine(this.eze$$fileName,248,11010,196, this);
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
					egl.atLine(this.eze$$fileName,256,11259,174, this);
					{
						try{egl.enterBlock();
							var i = 0;
							egl.addLocalFunctionVariable("i", i, "eglx.lang.EInt", "i");
							EzeLabel_46: for (i = 1; ((i <= this.myLesson.getSize())); i = ((i + 1))) {
								egl.setLocalFunctionVariable("i", i, "eglx.lang.EInt");
								try{egl.enterBlock();
									egl.atLine(this.eze$$fileName,257,11306,117, this);
									if (((egl.getElement(this.myLesson, egl.eglx.lang.EInt32.ezeCast({eze$$value : i, eze$$signature : "I;"}, false) - 1).lesson_id == this.selectedLesson.lesson_id))) {
										try{egl.enterBlock();
											egl.atLine(this.eze$$fileName,258,11368,26, this);
											this.myLesson.removeElement(i);
											egl.atLine(this.eze$$fileName,259,11403,9, this);
											break EzeLabel_46;
										}finally{egl.exitBlock();}
									}
								}finally{egl.exitBlock();}
								egl.atLine(this.eze$$fileName,256,11259,174, this);
							}
						}
						finally{egl.exitBlock();}
					}
					var eze$Temp48 = null;
					eze$Temp48 = egl.eglx.lang.AnyValue.ezeCopyTo(this.selectedLesson, eze$Temp48);
					egl.atLine(this.eze$$fileName,262,11440,159, this);
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
								new egl.egl.jsrt.Delegate(this, egl.client.client.Learn1.prototype.recordRevised, ""), new egl.egl.jsrt.Delegate(this, egl.client.client.Learn1.prototype.serviceExceptionHandler, ""));
					}
					;
					egl.atLine(this.eze$$fileName,255,11219,389, this);
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
					egl.atLine(this.eze$$fileName,269,11684,24, this);
					saveID = this.selectedLesson.lesson_id;
					egl.setLocalFunctionVariable("saveID", saveID, "eglx.lang.EInt");
					egl.atLine(this.eze$$fileName,270,11732,30, this);
					this.selectedLesson = egl.eglx.lang.AnyValue.ezeCopyTo(new egl.client.common.Lesson(), this.selectedLesson);
					egl.atLine(this.eze$$fileName,271,11769,34, this);
					this.selectedLesson.lesson_id = saveID;
					egl.atLine(this.eze$$fileName,272,11810,30, this);
					this.selectedLesson_form.publish();
					egl.atLine(this.eze$$fileName,268,11621,228, this);
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
					egl.atLine(this.eze$$fileName,276,11917,528, this);
					if (this.selectedLesson_form.isValid()) {
						try{egl.enterBlock();
							egl.atLine(this.eze$$fileName,277,11958,29, this);
							this.selectedLesson_form.commit();
							egl.atLine(this.eze$$fileName,279,12062,187, this);
							{
								try{egl.enterBlock();
									var i = 0;
									egl.addLocalFunctionVariable("i", i, "eglx.lang.EInt", "i");
									EzeLabel_50: for (i = 1; ((i <= this.myLesson.getSize())); i = ((i + 1))) {
										egl.setLocalFunctionVariable("i", i, "eglx.lang.EInt");
										try{egl.enterBlock();
											egl.atLine(this.eze$$fileName,280,12111,126, this);
											if (((egl.getElement(this.myLesson, egl.eglx.lang.EInt32.ezeCast({eze$$value : i, eze$$signature : "I;"}, false) - 1).lesson_id == this.selectedLesson.lesson_id))) {
												try{egl.enterBlock();
													egl.atLine(this.eze$$fileName,281,12175,29, this);
													egl.setElement(this.myLesson, egl.eglx.lang.EInt32.ezeCast({eze$$value : i, eze$$signature : "I;"}, false) - 1, this.selectedLesson);
													egl.atLine(this.eze$$fileName,282,12215,9, this);
													break EzeLabel_50;
												}finally{egl.exitBlock();}
											}
										}finally{egl.exitBlock();}
										egl.atLine(this.eze$$fileName,279,12062,187, this);
									}
								}
								finally{egl.exitBlock();}
							}
							var eze$Temp52 = null;
							eze$Temp52 = egl.eglx.lang.AnyValue.ezeCopyTo(this.selectedLesson, eze$Temp52);
							egl.atLine(this.eze$$fileName,285,12258,166, this);
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
										new egl.egl.jsrt.Delegate(this, egl.client.client.Learn1.prototype.recordRevised, ""), new egl.egl.jsrt.Delegate(this, egl.client.client.Learn1.prototype.serviceExceptionHandler, ""));
							}
							;
						}finally{egl.exitBlock();}
					}
					egl.atLine(this.eze$$fileName,275,11859,594, this);
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
					egl.atLine(this.eze$$fileName,294,12514,21, this);
					this.myLesson = retResult;
					egl.atLine(this.eze$$fileName,295,12542,37, this);
					this.myLesson_ui.setData(egl.convertAnyToArrayType(this.myLesson,"[A;"));
					egl.atLine(this.eze$$fileName,293,12466,122, this);
					if (!egl.debugg) egl.leave();
				} finally {
					if (!egl.debugg){
					} else { egl.leave(); }
				}
			}
			,
			"recordAdded": function() {
				try { egl.enter("recordAdded",this,arguments);
					egl.atLine(this.eze$$fileName,299,12629,16, this);
					this.readFromTable();
					egl.atLine(this.eze$$fileName,298,12600,54, this);
					if (!egl.debugg) egl.leave();
				} finally {
					if (!egl.debugg){
					} else { egl.leave(); }
				}
			}
			,
			"recordRevised": function() {
				try { egl.enter("recordRevised",this,arguments);
					egl.atLine(this.eze$$fileName,303,12698,37, this);
					this.myLesson_ui.setData(egl.convertAnyToArrayType(this.myLesson,"[A;"));
					egl.atLine(this.eze$$fileName,302,12667,77, this);
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
					egl.atLine(this.eze$$fileName,307,12799,156, this);
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
								new egl.egl.jsrt.Delegate(this, egl.client.client.Learn1.prototype.updateAll, ""), new egl.egl.jsrt.Delegate(this, egl.client.client.Learn1.prototype.serviceExceptionHandler, ""));
					}
					;
					egl.atLine(this.eze$$fileName,306,12757,208, this);
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
					egl.atLine(this.eze$$fileName,314,13021,51, this);
					this.content.setChildren([egl.eglx.lang.convert(egl.eglx.ui.rui.Widget.fromWidget, [this.info,"org.eclipse.edt.rui.widgets.Div"]), egl.eglx.lang.convert(egl.eglx.ui.rui.Widget.fromWidget, [this.buttonBar,"org.eclipse.edt.rui.widgets.FloatRight"])].setType("[Teglx/ui/rui/Widget;"));
					egl.atLine(this.eze$$fileName,316,13087,20, this);
					this.dialog.showDialog();
					egl.atLine(this.eze$$fileName,313,12979,137, this);
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
					egl.atLine(this.eze$$fileName,319,13164,20, this);
					this.dialog.hideDialog();
					egl.atLine(this.eze$$fileName,318,13122,72, this);
					if (!egl.debugg) egl.leave();
				} finally {
					if (!egl.debugg){
					} else { egl.leave(); }
				}
			}
			,
			"toString": function() {
				return "[Learn1]";
			}
			,
			"eze$$getName": function() {
				return "Learn1";
			}
			,
			"eze$$getChildVariables": function() {
				var eze$$parent = this;
				return [
				{name: "GridLayoutLib", value : egl.org.eclipse.edt.rui.widgets.GridLayoutLib['$inst'], type : "org.eclipse.edt.rui.widgets.GridLayoutLib", jsName : "egl.org.eclipse.edt.rui.widgets.GridLayoutLib['$inst']"},
				{name: "DataGridLib", value : egl.org.eclipse.edt.rui.widgets.DataGridLib['$inst'], type : "org.eclipse.edt.rui.widgets.DataGridLib", jsName : "egl.org.eclipse.edt.rui.widgets.DataGridLib['$inst']"},
				{name: "DojoLib", value : egl.dojo.widgets.DojoLib['$inst'], type : "dojo.widgets.DojoLib", jsName : "egl.dojo.widgets.DojoLib['$inst']"},
				{name: "InternalNumericFormatter", value : egl.org.eclipse.edt.rui.mvc.InternalNumericFormatter['$inst'], type : "org.eclipse.edt.rui.mvc.InternalNumericFormatter", jsName : "egl.org.eclipse.edt.rui.mvc.InternalNumericFormatter['$inst']"},
				{name: "myLessonService", value : eze$$parent.myLessonService, type : "eglx.persistence.sql.SQLDataSource", jsName : "myLessonService"},
				{name: "dedicatedServiceBinding", value : eze$$parent.dedicatedServiceBinding, type : "eglx.http.HttpProxy", jsName : "dedicatedServiceBinding"},
				{name: "ui", value : eze$$parent.ui, type : "org.eclipse.edt.rui.widgets.GridLayout", jsName : "ui"},
				{name: "conBox", value : eze$$parent.conBox, type : "org.eclipse.edt.rui.widgets.Box", jsName : "conBox"},
				{name: "con", value : eze$$parent.con, type : "org.eclipse.edt.rui.widgets.TextLabel", jsName : "con"},
				{name: "cuteBox", value : eze$$parent.cuteBox, type : "org.eclipse.edt.rui.widgets.Box", jsName : "cuteBox"},
				{name: "TabContainer", value : eze$$parent.TabContainer, type : "dojo.widgets.DojoTabContainer", jsName : "TabContainer"},
				{name: "BoxLesson", value : eze$$parent.BoxLesson, type : "org.eclipse.edt.rui.widgets.Box", jsName : "BoxLesson"},
				{name: "GridLayoutLesson", value : eze$$parent.GridLayoutLesson, type : "org.eclipse.edt.rui.widgets.GridLayout", jsName : "GridLayoutLesson"},
				{name: "GridLayoutButton", value : eze$$parent.GridLayoutButton, type : "org.eclipse.edt.rui.widgets.GridLayout", jsName : "GridLayoutButton"},
				{name: "ButtonLessons", value : eze$$parent.ButtonLessons, type : "dojo.widgets.DojoButton", jsName : "ButtonLessons"},
				{name: "ButtonEdit", value : eze$$parent.ButtonEdit, type : "dojo.widgets.DojoButton", jsName : "ButtonEdit"},
				{name: "ButtonCourse", value : eze$$parent.ButtonCourse, type : "dojo.widgets.DojoButton", jsName : "ButtonCourse"},
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
				{name: "document", value : eze$$parent.document, type : "eglx.ui.rui.Document", jsName : "document"},
				{name: "initialUI", value : eze$$parent.initialUI, type : "eglx.lang.EList<eglx.ui.rui.Widget>", jsName : "!initialUI"}
				];
			}
		}
	);
});
