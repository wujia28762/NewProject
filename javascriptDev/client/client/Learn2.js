define(["ezekw$$dojo/widgets/DojoLib", "ezekw$$dojo/widgets/eze$$DojoTextField", "org/eclipse/edt/rui/widgets/Box", "org/eclipse/edt/rui/widgets/GridLayoutLib", "org/eclipse/edt/rui/mvc/FormManager", "ezekw$$dojo/widgets/eze$$DojoContentPane", "org/eclipse/edt/rui/widgets/FloatRight", "org/eclipse/edt/rui/widgets/GridLayoutData", "ezekw$$dojo/widgets/eze$$DojoTextArea", "org/eclipse/edt/rui/mvc/Controller", "eglx/ui/rui/eze$$Event", "org/eclipse/edt/rui/mvc/FormField", "org/eclipse/edt/rui/widgets/TextLabel", "ezekw$$dojo/widgets/eze$$DojoDialog", "client/common/Lesson", "ezekw$$dojo/widgets/eze$$DojoTitlePane", "ezekw$$dojo/widgets/eze$$DojoButton", "eglx/ui/rui/eze$$View", "ezekw$$dojo/widgets/eze$$DojoTabContainer", "eglx/services/ServiceInvocationException", "org/eclipse/edt/rui/widgets/Div", "org/eclipse/edt/rui/widgets/DataGridLib", "org/eclipse/edt/rui/widgets/DataGrid", "org/eclipse/edt/rui/widgets/GridLayout", "eglx/ui/rui/eze$$Widget", "org/eclipse/edt/rui/widgets/DataGridColumn"],function(){
	egl.loadCSS("css/NewProject1.css");
	egl.defineRUIHandler("client.client", "Learn2", {
		"eze$$fileName" : "client/client/Learn2.egl",
		"eze$$runtimePropertiesFile" : "client/client/Learn2",
			"constructor": function() {
				this.start();
			}
			,
			"eze$$setEmpty": function() {
				new egl.dojo.widgets.DojoLib();
				new egl.org.eclipse.edt.rui.widgets.GridLayoutLib();
				new egl.org.eclipse.edt.rui.widgets.DataGridLib();
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
					egl.atLine(this.eze$$fileName,46,1577,11, this);
					this.ui.setColumns(1);
					egl.atLine(this.eze$$fileName,46,1590,8, this);
					this.ui.setRows(2);
					egl.atLine(this.eze$$fileName,46,1600,15, this);
					this.ui.setCellPadding(1);
					egl.atLine(this.eze$$fileName,46,1617,30, this);
					this.ui.setChildren([egl.eglx.lang.convert(egl.eglx.ui.rui.Widget.fromWidget, [this.cuteBox,"org.eclipse.edt.rui.widgets.Box"]), egl.eglx.lang.convert(egl.eglx.ui.rui.Widget.fromWidget, [this.conBox,"org.eclipse.edt.rui.widgets.Box"])].setType("[Teglx/ui/rui/Widget;"));
					var eze$LNNTemp1 = null;
					{
						var eze$SettingTarget1 = new egl.org.eclipse.edt.rui.widgets.GridLayoutData();
						egl.atLine(this.eze$$fileName,47,1679,41, this);
						eze$SettingTarget1 = egl.eglx.lang.AnyValue.ezeCopyTo(new egl.org.eclipse.edt.rui.widgets.GridLayoutData(), eze$SettingTarget1);
						egl.atLine(this.eze$$fileName,47,1699,7, this);
						eze$SettingTarget1.row = 1;
						egl.atLine(this.eze$$fileName,47,1708,10, this);
						eze$SettingTarget1.column = 1;
						egl.atLine(this.eze$$fileName,47,1679,41, this);
						eze$LNNTemp1 = egl.eglx.lang.AnyValue.ezeCopyTo(eze$SettingTarget1, eze$LNNTemp1);
					}
					egl.atLine(this.eze$$fileName,47,1666,54, this);
					this.conBox.setLayoutData(egl.eglx.lang.convert(egl.eglx.lang.EAny.fromEAny, [eze$LNNTemp1.eze$$clone(),"Torg/eclipse/edt/rui/widgets/GridLayoutData;"]));
					egl.atLine(this.eze$$fileName,47,1722,9, this);
					this.conBox.setPadding(8);
					egl.atLine(this.eze$$fileName,48,1738,18, this);
					this.conBox.setChildren([egl.eglx.lang.convert(egl.eglx.ui.rui.Widget.fromWidget, [this.con,"org.eclipse.edt.rui.widgets.TextLabel"])].setType("[Teglx/ui/rui/Widget;"));
					egl.atLine(this.eze$$fileName,49,1764,29, this);
					this.conBox.setBackgroundColor("Turquoise");
					egl.atLine(this.eze$$fileName,50,1800,13, this);
					this.conBox.setWidth("790");
					egl.atLine(this.eze$$fileName,51,1835,11, this);
					this.con.setText("\u4e8c\u3001\u6bd4\u8f83");
					egl.atLine(this.eze$$fileName,52,1853,13, this);
					this.con.setFont("\u534e\u6587\u884c\u6977");
					egl.atLine(this.eze$$fileName,53,1873,15, this);
					this.con.setFontSize("20");
					egl.atLine(this.eze$$fileName,54,1895,21, this);
					this.con.setFontWeight("bolder");
					var eze$LNNTemp2 = null;
					{
						var eze$SettingTarget1 = new egl.org.eclipse.edt.rui.widgets.GridLayoutData();
						egl.atLine(this.eze$$fileName,55,1950,41, this);
						eze$SettingTarget1 = egl.eglx.lang.AnyValue.ezeCopyTo(new egl.org.eclipse.edt.rui.widgets.GridLayoutData(), eze$SettingTarget1);
						egl.atLine(this.eze$$fileName,55,1970,7, this);
						eze$SettingTarget1.row = 2;
						egl.atLine(this.eze$$fileName,55,1979,10, this);
						eze$SettingTarget1.column = 1;
						egl.atLine(this.eze$$fileName,55,1950,41, this);
						eze$LNNTemp2 = egl.eglx.lang.AnyValue.ezeCopyTo(eze$SettingTarget1, eze$LNNTemp2);
					}
					egl.atLine(this.eze$$fileName,55,1937,54, this);
					this.cuteBox.setLayoutData(egl.eglx.lang.convert(egl.eglx.lang.EAny.fromEAny, [eze$LNNTemp2.eze$$clone(),"Torg/eclipse/edt/rui/widgets/GridLayoutData;"]));
					egl.atLine(this.eze$$fileName,55,1993,9, this);
					this.cuteBox.setPadding(8);
					egl.atLine(this.eze$$fileName,56,2010,27, this);
					this.cuteBox.setChildren([egl.eglx.lang.convert(egl.eglx.ui.rui.Widget.fromWidget, [this.TabContainer,"dojo.widgets.DojoTabContainer"])].setType("[Teglx/ui/rui/Widget;"));
					egl.atLine(this.eze$$fileName,57,2044,11, this);
					this.cuteBox.setColumns(1);
					egl.atLine(this.eze$$fileName,59,2096,13, this);
					this.TabContainer.setWidth("730");
					egl.atLine(this.eze$$fileName,59,2111,35, this);
					this.TabContainer.setTabPosition(egl.dojo.widgets.DojoLib['$inst'].POSITION_LEFT);
					var eze$LNNTemp3 = null;
					var eze$LNNTemp10 = null;
					{
						var eze$SettingTarget1;
						egl.atLine(this.eze$$fileName,91,3570,74, this);
						eze$SettingTarget1 = new egl.org.eclipse.edt.rui.widgets.DataGridColumn();
						egl.atLine(this.eze$$fileName,91,3590,18, this);
						eze$SettingTarget1.name = "coursecom";
						egl.atLine(this.eze$$fileName,91,3610,20, this);
						eze$SettingTarget1.displayName = "\u8bfe\u7a0b\u7b80\u4ecb";
						egl.atLine(this.eze$$fileName,91,3632,11, this);
						eze$SettingTarget1.width = egl.eglx.lang.convert(egl.eglx.lang.EString.fromEInt32, [320]);
						egl.atLine(this.eze$$fileName,91,3570,74, this);
						eze$LNNTemp10 = eze$SettingTarget1;
					}
					var eze$LNNTemp9 = null;
					{
						var eze$SettingTarget1;
						egl.atLine(this.eze$$fileName,90,3490,75, this);
						eze$SettingTarget1 = new egl.org.eclipse.edt.rui.widgets.DataGridColumn();
						egl.atLine(this.eze$$fileName,90,3510,19, this);
						eze$SettingTarget1.name = "lessonname";
						egl.atLine(this.eze$$fileName,90,3531,20, this);
						eze$SettingTarget1.displayName = "\u8bfe\u7a0b\u540d\u79f0";
						egl.atLine(this.eze$$fileName,90,3553,11, this);
						eze$SettingTarget1.width = egl.eglx.lang.convert(egl.eglx.lang.EString.fromEInt32, [120]);
						egl.atLine(this.eze$$fileName,90,3490,75, this);
						eze$LNNTemp9 = eze$SettingTarget1;
					}
					var eze$LNNTemp8 = null;
					{
						var eze$SettingTarget1 = new egl.org.eclipse.edt.rui.widgets.GridLayoutData();
						egl.atLine(this.eze$$fileName,85,3233,89, this);
						eze$SettingTarget1 = egl.eglx.lang.AnyValue.ezeCopyTo(new egl.org.eclipse.edt.rui.widgets.GridLayoutData(), eze$SettingTarget1);
						egl.atLine(this.eze$$fileName,85,3253,7, this);
						eze$SettingTarget1.row = 1;
						egl.atLine(this.eze$$fileName,85,3262,10, this);
						eze$SettingTarget1.column = 1;
						egl.atLine(this.eze$$fileName,86,3276,44, this);
						eze$SettingTarget1.verticalAlignment = egl.org.eclipse.edt.rui.widgets.GridLayoutLib['$inst'].VALIGN_TOP;
						egl.atLine(this.eze$$fileName,85,3233,89, this);
						eze$LNNTemp8 = egl.eglx.lang.AnyValue.ezeCopyTo(eze$SettingTarget1, eze$LNNTemp8);
					}
					var eze$LNNTemp7 = null;
					{
						var eze$SettingTarget1 = new egl.org.eclipse.edt.rui.widgets.GridLayoutData();
						egl.atLine(this.eze$$fileName,74,2755,41, this);
						eze$SettingTarget1 = egl.eglx.lang.AnyValue.ezeCopyTo(new egl.org.eclipse.edt.rui.widgets.GridLayoutData(), eze$SettingTarget1);
						egl.atLine(this.eze$$fileName,74,2775,7, this);
						eze$SettingTarget1.row = 1;
						egl.atLine(this.eze$$fileName,74,2784,10, this);
						eze$SettingTarget1.column = 1;
						egl.atLine(this.eze$$fileName,74,2755,41, this);
						eze$LNNTemp7 = egl.eglx.lang.AnyValue.ezeCopyTo(eze$SettingTarget1, eze$LNNTemp7);
					}
					var eze$LNNTemp6 = null;
					{
						var eze$SettingTarget1 = new egl.org.eclipse.edt.rui.widgets.GridLayoutData();
						egl.atLine(this.eze$$fileName,77,2914,41, this);
						eze$SettingTarget1 = egl.eglx.lang.AnyValue.ezeCopyTo(new egl.org.eclipse.edt.rui.widgets.GridLayoutData(), eze$SettingTarget1);
						egl.atLine(this.eze$$fileName,77,2934,7, this);
						eze$SettingTarget1.row = 1;
						egl.atLine(this.eze$$fileName,77,2943,10, this);
						eze$SettingTarget1.column = 2;
						egl.atLine(this.eze$$fileName,77,2914,41, this);
						eze$LNNTemp6 = egl.eglx.lang.AnyValue.ezeCopyTo(eze$SettingTarget1, eze$LNNTemp6);
					}
					var eze$LNNTemp5 = null;
					{
						var eze$SettingTarget1 = new egl.org.eclipse.edt.rui.widgets.GridLayoutData();
						egl.atLine(this.eze$$fileName,80,3071,41, this);
						eze$SettingTarget1 = egl.eglx.lang.AnyValue.ezeCopyTo(new egl.org.eclipse.edt.rui.widgets.GridLayoutData(), eze$SettingTarget1);
						egl.atLine(this.eze$$fileName,80,3091,7, this);
						eze$SettingTarget1.row = 1;
						egl.atLine(this.eze$$fileName,80,3100,10, this);
						eze$SettingTarget1.column = 3;
						egl.atLine(this.eze$$fileName,80,3071,41, this);
						eze$LNNTemp5 = egl.eglx.lang.AnyValue.ezeCopyTo(eze$SettingTarget1, eze$LNNTemp5);
					}
					var eze$LNNTemp4 = null;
					{
						var eze$SettingTarget1 = new egl.org.eclipse.edt.rui.widgets.GridLayoutData();
						egl.atLine(this.eze$$fileName,72,2572,41, this);
						eze$SettingTarget1 = egl.eglx.lang.AnyValue.ezeCopyTo(new egl.org.eclipse.edt.rui.widgets.GridLayoutData(), eze$SettingTarget1);
						egl.atLine(this.eze$$fileName,72,2592,7, this);
						eze$SettingTarget1.row = 2;
						egl.atLine(this.eze$$fileName,72,2601,10, this);
						eze$SettingTarget1.column = 1;
						egl.atLine(this.eze$$fileName,72,2572,41, this);
						eze$LNNTemp4 = egl.eglx.lang.AnyValue.ezeCopyTo(eze$SettingTarget1, eze$LNNTemp4);
					}
					{
						var eze$SettingTarget1;
						egl.atLine(this.eze$$fileName,61,2200,64, this);
						eze$SettingTarget1 = (function () {
							var eze$Temp11 = new egl.dojo.widgets.DojoContentPane();
							return eze$Temp11;
						}).call(this);
						egl.atLine(this.eze$$fileName,61,2222,14, this);
						eze$SettingTarget1.setTitle("\u6240\u6709\u8bfe\u7a0b");
						egl.atLine(this.eze$$fileName,61,2238,24, this);
						eze$SettingTarget1.setChildren([egl.eglx.lang.convert(egl.eglx.ui.rui.Widget.fromWidget, [this.BoxLesson,"org.eclipse.edt.rui.widgets.Box"])].setType("[Teglx/ui/rui/Widget;"));
						egl.atLine(this.eze$$fileName,61,2200,64, this);
						eze$LNNTemp3 = eze$SettingTarget1;
					}
					egl.atLine(this.eze$$fileName,60,2184,84, this);
					this.TabContainer.setChildren([egl.eglx.lang.convert(egl.eglx.ui.rui.Widget.fromWidget, [eze$LNNTemp3,"dojo.widgets.DojoContentPane"])].setType("[Teglx/ui/rui/Widget;"));
					egl.atLine(this.eze$$fileName,63,2272,15, this);
					this.TabContainer.setHeight("1000");
					egl.atLine(this.eze$$fileName,64,2291,13, this);
					this.TabContainer.setSelection(1);
					egl.atLine(this.eze$$fileName,67,2330,9, this);
					this.BoxLesson.setPadding(8);
					egl.atLine(this.eze$$fileName,68,2346,13, this);
					this.BoxLesson.setWidth("630");
					egl.atLine(this.eze$$fileName,69,2366,31, this);
					this.BoxLesson.setChildren([egl.eglx.lang.convert(egl.eglx.ui.rui.Widget.fromWidget, [this.GridLayoutLesson,"org.eclipse.edt.rui.widgets.GridLayout"])].setType("[Teglx/ui/rui/Widget;"));
					egl.atLine(this.eze$$fileName,70,2434,15, this);
					this.GridLayoutLesson.setCellPadding(4);
					egl.atLine(this.eze$$fileName,70,2451,8, this);
					this.GridLayoutLesson.setRows(3);
					egl.atLine(this.eze$$fileName,70,2461,11, this);
					this.GridLayoutLesson.setColumns(2);
					egl.atLine(this.eze$$fileName,71,2479,43, this);
					this.GridLayoutLesson.setChildren([egl.eglx.lang.convert(egl.eglx.ui.rui.Widget.fromWidget, [this.GridLayoutButton,"org.eclipse.edt.rui.widgets.GridLayout"]), egl.eglx.lang.convert(egl.eglx.ui.rui.Widget.fromWidget, [this.myLesson_ui,"org.eclipse.edt.rui.widgets.DataGrid"])].setType("[Teglx/ui/rui/Widget;"));
					egl.atLine(this.eze$$fileName,72,2559,54, this);
					this.GridLayoutButton.setLayoutData(egl.eglx.lang.convert(egl.eglx.lang.EAny.fromEAny, [eze$LNNTemp4.eze$$clone(),"Torg/eclipse/edt/rui/widgets/GridLayoutData;"]));
					egl.atLine(this.eze$$fileName,72,2615,15, this);
					this.GridLayoutButton.setCellPadding(4);
					egl.atLine(this.eze$$fileName,72,2632,8, this);
					this.GridLayoutButton.setRows(1);
					egl.atLine(this.eze$$fileName,72,2642,11, this);
					this.GridLayoutButton.setColumns(3);
					egl.atLine(this.eze$$fileName,73,2657,54, this);
					this.GridLayoutButton.setChildren([egl.eglx.lang.convert(egl.eglx.ui.rui.Widget.fromWidget, [this.ButtonCourse,"dojo.widgets.DojoButton"]), egl.eglx.lang.convert(egl.eglx.ui.rui.Widget.fromWidget, [this.ButtonEdit,"dojo.widgets.DojoButton"]), egl.eglx.lang.convert(egl.eglx.ui.rui.Widget.fromWidget, [this.ButtonLessons,"dojo.widgets.DojoButton"])].setType("[Teglx/ui/rui/Widget;"));
					egl.atLine(this.eze$$fileName,74,2742,54, this);
					this.ButtonLessons.setLayoutData(egl.eglx.lang.convert(egl.eglx.lang.EAny.fromEAny, [eze$LNNTemp7.eze$$clone(),"Torg/eclipse/edt/rui/widgets/GridLayoutData;"]));
					egl.atLine(this.eze$$fileName,74,2798,15, this);
					this.ButtonLessons.setText("\u67e5\u770b\u6240\u6709\u8bfe\u7a0b");
					egl.atLine(this.eze$$fileName,75,2817,13, this);
					this.ButtonLessons.setFont("\u5fae\u8f6f\u96c5\u9ed1");
					egl.atLine(this.eze$$fileName,76,2834,15, this);
					this.ButtonLessons.setFontSize("14");
					egl.atLine(this.eze$$fileName,76,2851,22, this);
					this.ButtonLessons.getOnClick().appendElement(new egl.egl.jsrt.Delegate(this, egl.client.client.Learn2.prototype.sampleData, ""));
					egl.atLine(this.eze$$fileName,77,2901,54, this);
					this.ButtonEdit.setLayoutData(egl.eglx.lang.convert(egl.eglx.lang.EAny.fromEAny, [eze$LNNTemp6.eze$$clone(),"Torg/eclipse/edt/rui/widgets/GridLayoutData;"]));
					egl.atLine(this.eze$$fileName,77,2957,11, this);
					this.ButtonEdit.setText("\u7f16\u8f91");
					egl.atLine(this.eze$$fileName,78,2972,13, this);
					this.ButtonEdit.setFont("\u5fae\u8f6f\u96c5\u9ed1");
					egl.atLine(this.eze$$fileName,79,2989,15, this);
					this.ButtonEdit.setFontSize("14");
					egl.atLine(this.eze$$fileName,79,3006,22, this);
					this.ButtonEdit.getOnClick().appendElement(new egl.egl.jsrt.Delegate(this, egl.client.client.Learn2.prototype.showDialog, ""));
					egl.atLine(this.eze$$fileName,80,3058,54, this);
					this.ButtonCourse.setLayoutData(egl.eglx.lang.convert(egl.eglx.lang.EAny.fromEAny, [eze$LNNTemp5.eze$$clone(),"Torg/eclipse/edt/rui/widgets/GridLayoutData;"]));
					egl.atLine(this.eze$$fileName,80,3114,15, this);
					this.ButtonCourse.setText("\u52a0\u5165\u6211\u7684\u8bfe\u7a0b");
					egl.atLine(this.eze$$fileName,81,3133,13, this);
					this.ButtonCourse.setFont("\u5fae\u8f6f\u96c5\u9ed1");
					egl.atLine(this.eze$$fileName,82,3150,15, this);
					this.ButtonCourse.setFontSize("14");
					egl.atLine(this.eze$$fileName,85,3220,102, this);
					this.myLesson_ui.setLayoutData(egl.eglx.lang.convert(egl.eglx.lang.EAny.fromEAny, [eze$LNNTemp8.eze$$clone(),"Torg/eclipse/edt/rui/widgets/GridLayoutData;"]));
					egl.atLine(this.eze$$fileName,87,3326,39, this);
					this.myLesson_ui.selectionListeners.appendElement(new egl.egl.jsrt.Delegate(this, egl.client.client.Learn2.prototype.cellClickedLesson, ""));
					egl.atLine(this.eze$$fileName,88,3399,324, this);
					this.myLesson_ui.setColumns([eze$LNNTemp9, eze$LNNTemp10].setType("[Torg/eclipse/edt/rui/widgets/DataGridColumn;"));
					egl.atLine(this.eze$$fileName,94,3727,24, this);
					this.myLesson_ui.setData(egl.convertAnyToArrayType(this.myLesson,"[A;"));
					egl.atLine(this.eze$$fileName,95,3755,21, this);
					this.myLesson_ui.setShowCheckBoxes(true);
					egl.atLine(this.eze$$fileName,96,3780,44, this);
					this.myLesson_ui.setSelectionMode(egl.org.eclipse.edt.rui.widgets.DataGridLib['$inst'].SINGLE_SELECTION);
					egl.atLine(this.eze$$fileName,97,3828,13, this);
					this.myLesson_ui.setWidth("600");
					egl.atLine(this.eze$$fileName,98,3845,15, this);
					this.myLesson_ui.setFontSize("14");
					egl.atLine(this.eze$$fileName,99,3864,11, this);
					this.myLesson_ui.setFont("\u5b8b\u4f53");
					egl.atLine(this.eze$$fileName,100,3879,13, this);
					this.myLesson_ui.setPageSize(10);
					egl.atLine(this.eze$$fileName,104,3955,8, this);
					this.selectedLesson_ui.setRows(4);
					egl.atLine(this.eze$$fileName,104,3965,11, this);
					this.selectedLesson_ui.setColumns(2);
					egl.atLine(this.eze$$fileName,104,3978,15, this);
					this.selectedLesson_ui.setCellPadding(4);
					egl.atLine(this.eze$$fileName,104,3995,278, this);
					this.selectedLesson_ui.setChildren([egl.eglx.lang.convert(egl.eglx.ui.rui.Widget.fromWidget, [this.selectedLesson_lesson_id_nameLabel,"org.eclipse.edt.rui.widgets.TextLabel"]), egl.eglx.lang.convert(egl.eglx.ui.rui.Widget.fromWidget, [this.selectedLesson_lesson_id_field,"dojo.widgets.DojoTextField"]), egl.eglx.lang.convert(egl.eglx.ui.rui.Widget.fromWidget, [this.selectedLesson_lessonname_nameLabel,"org.eclipse.edt.rui.widgets.TextLabel"]), egl.eglx.lang.convert(egl.eglx.ui.rui.Widget.fromWidget, [this.selectedLesson_lessonname_field,"dojo.widgets.DojoTextField"]), egl.eglx.lang.convert(egl.eglx.ui.rui.Widget.fromWidget, [this.selectedLesson_coursecom_nameLabel,"org.eclipse.edt.rui.widgets.TextLabel"]), egl.eglx.lang.convert(egl.eglx.ui.rui.Widget.fromWidget, [this.selectedLesson_coursecom_area,"dojo.widgets.DojoTextArea"])].setType("[Teglx/ui/rui/Widget;"));
					egl.atLine(this.eze$$fileName,105,4277,13, this);
					this.selectedLesson_ui.setWidth("120");
					egl.atLine(this.eze$$fileName,107,4343,12, this);
					this.selectedLesson_lesson_id_nameLabel.setText("\u8bfe\u7a0b\u5e8f\u53f7:");
					var eze$LNNTemp12 = null;
					{
						var eze$SettingTarget1 = new egl.org.eclipse.edt.rui.widgets.GridLayoutData();
						egl.atLine(this.eze$$fileName,107,4371,41, this);
						eze$SettingTarget1 = egl.eglx.lang.AnyValue.ezeCopyTo(new egl.org.eclipse.edt.rui.widgets.GridLayoutData(), eze$SettingTarget1);
						egl.atLine(this.eze$$fileName,107,4392,7, this);
						eze$SettingTarget1.row = 1;
						egl.atLine(this.eze$$fileName,107,4401,10, this);
						eze$SettingTarget1.column = 1;
						egl.atLine(this.eze$$fileName,107,4371,41, this);
						eze$LNNTemp12 = egl.eglx.lang.AnyValue.ezeCopyTo(eze$SettingTarget1, eze$LNNTemp12);
					}
					egl.atLine(this.eze$$fileName,107,4358,54, this);
					this.selectedLesson_lesson_id_nameLabel.setLayoutData(egl.eglx.lang.convert(egl.eglx.lang.EAny.fromEAny, [eze$LNNTemp12.eze$$clone(),"Torg/eclipse/edt/rui/widgets/GridLayoutData;"]));
					egl.atLine(this.eze$$fileName,107,4413,12, this);
					this.selectedLesson_lesson_id_nameLabel.setWidth("60");
					var eze$LNNTemp13 = null;
					{
						var eze$SettingTarget1 = new egl.org.eclipse.edt.rui.widgets.GridLayoutData();
						egl.atLine(this.eze$$fileName,108,4489,41, this);
						eze$SettingTarget1 = egl.eglx.lang.AnyValue.ezeCopyTo(new egl.org.eclipse.edt.rui.widgets.GridLayoutData(), eze$SettingTarget1);
						egl.atLine(this.eze$$fileName,108,4510,7, this);
						eze$SettingTarget1.row = 1;
						egl.atLine(this.eze$$fileName,108,4519,10, this);
						eze$SettingTarget1.column = 2;
						egl.atLine(this.eze$$fileName,108,4489,41, this);
						eze$LNNTemp13 = egl.eglx.lang.AnyValue.ezeCopyTo(eze$SettingTarget1, eze$LNNTemp13);
					}
					egl.atLine(this.eze$$fileName,108,4476,54, this);
					this.selectedLesson_lesson_id_field.setLayoutData(egl.eglx.lang.convert(egl.eglx.lang.EAny.fromEAny, [eze$LNNTemp13.eze$$clone(),"Torg/eclipse/edt/rui/widgets/GridLayoutData;"]));
					egl.atLine(this.eze$$fileName,108,4531,12, this);
					this.selectedLesson_lesson_id_field.setWidth("100");
					egl.atLine(this.eze$$fileName,108,4544,15, this);
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
					var eze$Temp14 = new egl.org.eclipse.edt.rui.mvc.internal.FormatterWrapper(egl.org.eclipse.edt.rui.mvc.InternalNumericFormatter.$inst, false, false, " ", egl.eglx.ui.SignKind.leading, false, "", false, 0, 0, "eglx.lang.EInt", "");
					this.selectedLesson_lesson_id_controller.internalFormatters.appendElement(new egl.egl.jsrt.Delegate(eze$Temp14, eze$Temp14.format));
					this.selectedLesson_lesson_id_controller.internalUnformatters.appendElement(new egl.egl.jsrt.Delegate(eze$Temp14, eze$Temp14.unformat));
					egl.atLine(this.eze$$fileName,109,4693,56, this);
					this.selectedLesson_lesson_id_controller.validStateSetter = new egl.egl.jsrt.Delegate(this, egl.client.client.Learn2.prototype.handleValidStateChange_selectedLesson, "Torg/eclipse/edt/rui/mvc/MVCValidStateSetter;");
					egl.atLine(this.eze$$fileName,110,4800,48, this);
					this.selectedLesson_lesson_id_formField.controller = this.selectedLesson_lesson_id_controller;
					egl.atLine(this.eze$$fileName,110,4850,46, this);
					this.selectedLesson_lesson_id_formField.nameLabel = this.selectedLesson_lesson_id_nameLabel;
					egl.atLine(this.eze$$fileName,112,4949,12, this);
					this.selectedLesson_lessonname_nameLabel.setText("\u8bfe\u7a0b\u540d\u79f0:");
					var eze$LNNTemp15 = null;
					{
						var eze$SettingTarget1 = new egl.org.eclipse.edt.rui.widgets.GridLayoutData();
						egl.atLine(this.eze$$fileName,112,4977,41, this);
						eze$SettingTarget1 = egl.eglx.lang.AnyValue.ezeCopyTo(new egl.org.eclipse.edt.rui.widgets.GridLayoutData(), eze$SettingTarget1);
						egl.atLine(this.eze$$fileName,112,4998,7, this);
						eze$SettingTarget1.row = 2;
						egl.atLine(this.eze$$fileName,112,5007,10, this);
						eze$SettingTarget1.column = 1;
						egl.atLine(this.eze$$fileName,112,4977,41, this);
						eze$LNNTemp15 = egl.eglx.lang.AnyValue.ezeCopyTo(eze$SettingTarget1, eze$LNNTemp15);
					}
					egl.atLine(this.eze$$fileName,112,4964,54, this);
					this.selectedLesson_lessonname_nameLabel.setLayoutData(egl.eglx.lang.convert(egl.eglx.lang.EAny.fromEAny, [eze$LNNTemp15.eze$$clone(),"Torg/eclipse/edt/rui/widgets/GridLayoutData;"]));
					egl.atLine(this.eze$$fileName,112,5019,12, this);
					this.selectedLesson_lessonname_nameLabel.setWidth("60");
					var eze$LNNTemp16 = null;
					{
						var eze$SettingTarget1 = new egl.org.eclipse.edt.rui.widgets.GridLayoutData();
						egl.atLine(this.eze$$fileName,113,5096,41, this);
						eze$SettingTarget1 = egl.eglx.lang.AnyValue.ezeCopyTo(new egl.org.eclipse.edt.rui.widgets.GridLayoutData(), eze$SettingTarget1);
						egl.atLine(this.eze$$fileName,113,5117,7, this);
						eze$SettingTarget1.row = 2;
						egl.atLine(this.eze$$fileName,113,5126,10, this);
						eze$SettingTarget1.column = 2;
						egl.atLine(this.eze$$fileName,113,5096,41, this);
						eze$LNNTemp16 = egl.eglx.lang.AnyValue.ezeCopyTo(eze$SettingTarget1, eze$LNNTemp16);
					}
					egl.atLine(this.eze$$fileName,113,5083,54, this);
					this.selectedLesson_lessonname_field.setLayoutData(egl.eglx.lang.convert(egl.eglx.lang.EAny.fromEAny, [eze$LNNTemp16.eze$$clone(),"Torg/eclipse/edt/rui/widgets/GridLayoutData;"]));
					egl.atLine(this.eze$$fileName,113,5138,12, this);
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
					egl.atLine(this.eze$$fileName,114,5287,56, this);
					this.selectedLesson_lessonname_controller.validStateSetter = new egl.egl.jsrt.Delegate(this, egl.client.client.Learn2.prototype.handleValidStateChange_selectedLesson, "Torg/eclipse/edt/rui/mvc/MVCValidStateSetter;");
					egl.atLine(this.eze$$fileName,115,5395,49, this);
					this.selectedLesson_lessonname_formField.controller = this.selectedLesson_lessonname_controller;
					egl.atLine(this.eze$$fileName,115,5446,47, this);
					this.selectedLesson_lessonname_formField.nameLabel = this.selectedLesson_lessonname_nameLabel;
					egl.atLine(this.eze$$fileName,117,5545,12, this);
					this.selectedLesson_coursecom_nameLabel.setText("\u8bfe\u7a0b\u7b80\u4ecb:");
					var eze$LNNTemp17 = null;
					{
						var eze$SettingTarget1 = new egl.org.eclipse.edt.rui.widgets.GridLayoutData();
						egl.atLine(this.eze$$fileName,117,5573,41, this);
						eze$SettingTarget1 = egl.eglx.lang.AnyValue.ezeCopyTo(new egl.org.eclipse.edt.rui.widgets.GridLayoutData(), eze$SettingTarget1);
						egl.atLine(this.eze$$fileName,117,5594,7, this);
						eze$SettingTarget1.row = 3;
						egl.atLine(this.eze$$fileName,117,5603,10, this);
						eze$SettingTarget1.column = 1;
						egl.atLine(this.eze$$fileName,117,5573,41, this);
						eze$LNNTemp17 = egl.eglx.lang.AnyValue.ezeCopyTo(eze$SettingTarget1, eze$LNNTemp17);
					}
					egl.atLine(this.eze$$fileName,117,5560,54, this);
					this.selectedLesson_coursecom_nameLabel.setLayoutData(egl.eglx.lang.convert(egl.eglx.lang.EAny.fromEAny, [eze$LNNTemp17.eze$$clone(),"Torg/eclipse/edt/rui/widgets/GridLayoutData;"]));
					egl.atLine(this.eze$$fileName,117,5615,12, this);
					this.selectedLesson_coursecom_nameLabel.setWidth("60");
					var eze$LNNTemp18 = null;
					{
						var eze$SettingTarget1 = new egl.org.eclipse.edt.rui.widgets.GridLayoutData();
						egl.atLine(this.eze$$fileName,118,5690,41, this);
						eze$SettingTarget1 = egl.eglx.lang.AnyValue.ezeCopyTo(new egl.org.eclipse.edt.rui.widgets.GridLayoutData(), eze$SettingTarget1);
						egl.atLine(this.eze$$fileName,118,5711,7, this);
						eze$SettingTarget1.row = 3;
						egl.atLine(this.eze$$fileName,118,5720,10, this);
						eze$SettingTarget1.column = 2;
						egl.atLine(this.eze$$fileName,118,5690,41, this);
						eze$LNNTemp18 = egl.eglx.lang.AnyValue.ezeCopyTo(eze$SettingTarget1, eze$LNNTemp18);
					}
					egl.atLine(this.eze$$fileName,118,5677,54, this);
					this.selectedLesson_coursecom_area.setLayoutData(egl.eglx.lang.convert(egl.eglx.lang.EAny.fromEAny, [eze$LNNTemp18.eze$$clone(),"Torg/eclipse/edt/rui/widgets/GridLayoutData;"]));
					egl.atLine(this.eze$$fileName,118,5732,12, this);
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
					egl.atLine(this.eze$$fileName,119,5877,56, this);
					this.selectedLesson_coursecom_controller.validStateSetter = new egl.egl.jsrt.Delegate(this, egl.client.client.Learn2.prototype.handleValidStateChange_selectedLesson, "Torg/eclipse/edt/rui/mvc/MVCValidStateSetter;");
					egl.atLine(this.eze$$fileName,120,5984,48, this);
					this.selectedLesson_coursecom_formField.controller = this.selectedLesson_coursecom_controller;
					egl.atLine(this.eze$$fileName,120,6034,46, this);
					this.selectedLesson_coursecom_formField.nameLabel = this.selectedLesson_coursecom_nameLabel;
					egl.atLine(this.eze$$fileName,132,7266,153, this);
					this.selectedLesson_form.setEntries([this.selectedLesson_lesson_id_formField, this.selectedLesson_lessonname_formField, this.selectedLesson_coursecom_formField].setType("[Torg/eclipse/edt/rui/mvc/FormField;"));
					egl.atLine(this.eze$$fileName,135,7456,13, this);
					this.dialog.title = "\u7f16\u8f91\u6846";
					egl.atLine(this.eze$$fileName,136,7478,12, this);
					this.dialog.setPadding(20);
					egl.atLine(this.eze$$fileName,137,7499,28, this);
					this.dialog.setBackgroundColor("AliceBlue");
					egl.atLine(this.eze$$fileName,138,7536,16, this);
					this.dialog.draggable = true;
					egl.atLine(this.eze$$fileName,139,7561,20, this);
					this.dialog.setChildren([egl.eglx.lang.convert(egl.eglx.ui.rui.Widget.fromWidget, [this.content,"org.eclipse.edt.rui.widgets.Box"])].setType("[Teglx/ui/rui/Widget;"));
					egl.atLine(this.eze$$fileName,142,7613,10, this);
					this.content.setColumns(1);
					egl.atLine(this.eze$$fileName,145,7652,12, this);
					this.info.setPadding(10);
					egl.atLine(this.eze$$fileName,145,7666,11, this);
					this.info.setWidth(egl.eglx.lang.convert(egl.eglx.lang.EString.fromEInt32, [600]));
					egl.atLine(this.eze$$fileName,145,7679,28, this);
					this.info.setBackgroundColor("lightBlue");
					var eze$LNNTemp19 = null;
					var eze$LNNTemp20 = null;
					{
						var eze$SettingTarget2;
						egl.atLine(this.eze$$fileName,147,7827,49, this);
						eze$SettingTarget2 = (function () {
							var eze$Temp21 = new egl.org.eclipse.edt.rui.widgets.Div();
							return eze$Temp21;
						}).call(this);
						egl.atLine(this.eze$$fileName,148,7840,32, this);
						eze$SettingTarget2.setChildren([egl.eglx.lang.convert(egl.eglx.ui.rui.Widget.fromWidget, [this.selectedLesson_ui,"org.eclipse.edt.rui.widgets.GridLayout"])].setType("[Teglx/ui/rui/Widget;"));
						egl.atLine(this.eze$$fileName,147,7827,49, this);
						eze$LNNTemp20 = eze$SettingTarget2;
					}
					{
						var eze$SettingTarget1;
						egl.atLine(this.eze$$fileName,147,7737,143, this);
						eze$SettingTarget1 = (function () {
							var eze$Temp22 = new egl.dojo.widgets.DojoTitlePane();
							return eze$Temp22;
						}).call(this);
						egl.atLine(this.eze$$fileName,147,7755,14, this);
						eze$SettingTarget1.title = "\u8bfe\u7a0b\u7f16\u8f91";
						egl.atLine(this.eze$$fileName,147,7771,11, this);
						eze$SettingTarget1.setOpen(true);
						egl.atLine(this.eze$$fileName,147,7784,13, this);
						eze$SettingTarget1.duration = 1000;
						egl.atLine(this.eze$$fileName,147,7799,13, this);
						eze$SettingTarget1.setWidth("600");
						egl.atLine(this.eze$$fileName,147,7814,64, this);
						eze$SettingTarget1.setChildren([egl.eglx.lang.convert(egl.eglx.ui.rui.Widget.fromWidget, [eze$LNNTemp20,"org.eclipse.edt.rui.widgets.Div"])].setType("[Teglx/ui/rui/Widget;"));
						egl.atLine(this.eze$$fileName,147,7737,143, this);
						eze$LNNTemp19 = eze$SettingTarget1;
					}
					egl.atLine(this.eze$$fileName,146,7716,165, this);
					this.info.setChildren([egl.eglx.lang.convert(egl.eglx.ui.rui.Widget.fromWidget, [eze$LNNTemp19,"dojo.widgets.DojoTitlePane"])].setType("[Teglx/ui/rui/Widget;"));
					egl.atLine(this.eze$$fileName,152,7922,13, this);
					this.buttonBar.setMarginTop(9);
					var eze$LNNTemp27 = null;
					{
						var eze$SettingTarget1;
						egl.atLine(this.eze$$fileName,158,8231,62, this);
						eze$SettingTarget1 = (function () {
							var eze$Temp28 = new egl.dojo.widgets.DojoButton();
							return eze$Temp28;
						}).call(this);
						egl.atLine(this.eze$$fileName,158,8246,10, this);
						eze$SettingTarget1.setText("\u5173\u95ed");
						egl.atLine(this.eze$$fileName,158,8257,13, this);
						eze$SettingTarget1.setMarginRight(0);
						egl.atLine(this.eze$$fileName,158,8271,21, this);
						eze$SettingTarget1.getOnClick().appendElement(new egl.egl.jsrt.Delegate(this, egl.client.client.Learn2.prototype.hideDialog, ""));
						egl.atLine(this.eze$$fileName,158,8231,62, this);
						eze$LNNTemp27 = eze$SettingTarget1;
					}
					var eze$LNNTemp26 = null;
					{
						var eze$SettingTarget1;
						egl.atLine(this.eze$$fileName,157,8153,67, this);
						eze$SettingTarget1 = (function () {
							var eze$Temp29 = new egl.dojo.widgets.DojoButton();
							return eze$Temp29;
						}).call(this);
						egl.atLine(this.eze$$fileName,157,8168,11, this);
						eze$SettingTarget1.setText("\u4fdd\u5b58");
						egl.atLine(this.eze$$fileName,157,8180,38, this);
						eze$SettingTarget1.getOnClick().appendElement(new egl.egl.jsrt.Delegate(this, egl.client.client.Learn2.prototype.selectedLesson_form_Submit, ""));
						egl.atLine(this.eze$$fileName,157,8153,67, this);
						eze$LNNTemp26 = eze$SettingTarget1;
					}
					var eze$LNNTemp25 = null;
					{
						var eze$SettingTarget1;
						egl.atLine(this.eze$$fileName,156,8086,56, this);
						eze$SettingTarget1 = (function () {
							var eze$Temp30 = new egl.dojo.widgets.DojoButton();
							return eze$Temp30;
						}).call(this);
						egl.atLine(this.eze$$fileName,156,8101,11, this);
						eze$SettingTarget1.setText("\u6e05\u7a7a");
						egl.atLine(this.eze$$fileName,156,8114,26, this);
						eze$SettingTarget1.getOnClick().appendElement(new egl.egl.jsrt.Delegate(this, egl.client.client.Learn2.prototype.clearAllFields, ""));
						egl.atLine(this.eze$$fileName,156,8086,56, this);
						eze$LNNTemp25 = eze$SettingTarget1;
					}
					var eze$LNNTemp24 = null;
					{
						var eze$SettingTarget1;
						egl.atLine(this.eze$$fileName,155,8025,50, this);
						eze$SettingTarget1 = (function () {
							var eze$Temp31 = new egl.dojo.widgets.DojoButton();
							return eze$Temp31;
						}).call(this);
						egl.atLine(this.eze$$fileName,155,8040,11, this);
						eze$SettingTarget1.setText("\u5220\u9664");
						egl.atLine(this.eze$$fileName,155,8052,21, this);
						eze$SettingTarget1.getOnClick().appendElement(new egl.egl.jsrt.Delegate(this, egl.client.client.Learn2.prototype.deleteRow, ""));
						egl.atLine(this.eze$$fileName,155,8025,50, this);
						eze$LNNTemp24 = eze$SettingTarget1;
					}
					var eze$LNNTemp23 = null;
					{
						var eze$SettingTarget1;
						egl.atLine(this.eze$$fileName,154,7966,48, this);
						eze$SettingTarget1 = (function () {
							var eze$Temp32 = new egl.dojo.widgets.DojoButton();
							return eze$Temp32;
						}).call(this);
						egl.atLine(this.eze$$fileName,154,7981,11, this);
						eze$SettingTarget1.setText("\u6dfb\u52a0");
						egl.atLine(this.eze$$fileName,154,7994,18, this);
						eze$SettingTarget1.getOnClick().appendElement(new egl.egl.jsrt.Delegate(this, egl.client.client.Learn2.prototype.addrow, ""));
						egl.atLine(this.eze$$fileName,154,7966,48, this);
						eze$LNNTemp23 = eze$SettingTarget1;
					}
					egl.atLine(this.eze$$fileName,153,7944,350, this);
					this.buttonBar.setChildren([egl.eglx.lang.convert(egl.eglx.ui.rui.Widget.fromWidget, [eze$LNNTemp23,"dojo.widgets.DojoButton"]), egl.eglx.lang.convert(egl.eglx.ui.rui.Widget.fromWidget, [eze$LNNTemp24,"dojo.widgets.DojoButton"]), egl.eglx.lang.convert(egl.eglx.ui.rui.Widget.fromWidget, [eze$LNNTemp25,"dojo.widgets.DojoButton"]), egl.eglx.lang.convert(egl.eglx.ui.rui.Widget.fromWidget, [eze$LNNTemp26,"dojo.widgets.DojoButton"]), egl.eglx.lang.convert(egl.eglx.ui.rui.Widget.fromWidget, [eze$LNNTemp27,"dojo.widgets.DojoButton"])].setType("[Teglx/ui/rui/Widget;"));
					egl.atLine(this.eze$$fileName,201,9592,4, this);
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
				var ezert$$2 = new egl.client.client.Learn2();
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
					this.annotations["XMLRootElement"] = new egl.eglx.xml.binding.annotation.XMLRootElement("Learn2", null, false);
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
					egl.atLine(this.eze$$fileName,170,8543,24, this);
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
					egl.atLine(this.eze$$fileName,175,8662,57, this);
					this.selectedLesson = egl.eglx.lang.AnyValue.ezeCopyTo(egl.eglx.lang.EAny.ezeCast(egl.getElement(this.myLesson_ui.getSelection(), egl.eglx.lang.EInt32.ezeCast({eze$$value : 1, eze$$signature : "I;"}, false) - 1), egl.client.common.Lesson), this.selectedLesson);
					egl.atLine(this.eze$$fileName,176,8725,30, this);
					this.selectedLesson_form.publish();
					egl.atLine(this.eze$$fileName,173,8577,186, this);
					if (!egl.debugg) egl.leave();
				} finally {
					if (!egl.debugg){
					} else { egl.leave(); }
				}
			}
			,
			"readFromTable": function() {
				try { egl.enter("readFromTable",this,arguments);
					egl.atLine(this.eze$$fileName,180,8804,147, this);
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
								new egl.egl.jsrt.Delegate(this, egl.client.client.Learn2.prototype.updateAll, ""), new egl.egl.jsrt.Delegate(this, egl.client.client.Learn2.prototype.serviceExceptionHandler, ""));
					}
					;
					egl.atLine(this.eze$$fileName,179,8773,187, this);
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
					egl.atLine(this.eze$$fileName,187,9030,501, this);
					try {
						try{egl.enterBlock();
							egl.atLine(this.eze$$fileName,188,9048,9, this);
							throw ex;
						}finally{egl.exitBlock();}
					}
					catch ( eze$Temp33 )
					{
						if (eze$Temp33 instanceof egl.egl.debug.DebugTermination) {
							throw eze$Temp33;
						}
						if ( eze$Temp33 instanceof egl.eglx.services.ServiceInvocationException ) {
							var serviceEx = eze$Temp33;
							{
								try{egl.enterBlock();
									egl.addLocalFunctionVariable("serviceEx", serviceEx, "eglx.services.ServiceInvocationException", "serviceEx");
									egl.atLine(this.eze$$fileName,190,9132,100, this);
									this.log((("Failure:  service invocation, exception = ") + serviceEx.message));
									egl.atLine(this.eze$$fileName,192,9247,39, this);
									this.log((("Detail 1:  ") + serviceEx.detail1));
									egl.atLine(this.eze$$fileName,193,9301,39, this);
									this.log((("Detail 2:  ") + serviceEx.detail2));
									egl.atLine(this.eze$$fileName,194,9355,39, this);
									this.log((("Detail 3:  ") + serviceEx.detail3));
								}finally{egl.exitBlock();}
							}
						}
						else {
							if (!(eze$Temp33 instanceof egl.eglx.lang.AnyException)) {
								eze$Temp33 = egl.makeExceptionFromCaughtObject(eze$Temp33);
							}
							var anyex = eze$Temp33;
							{
								try{egl.enterBlock();
									egl.addLocalFunctionVariable("anyex", anyex, "eglx.lang.AnyException", "anyex");
									egl.atLine(this.eze$$fileName,196,9451,66, this);
									this.log((("Failure:  service invocation, exception = ") + anyex.message));
								}finally{egl.exitBlock();}
							}
						}
					}
					egl.atLine(this.eze$$fileName,198,9542,9, this);
					throw ex;
					egl.atLine(this.eze$$fileName,186,8970,591, this);
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
					egl.atLine(this.eze$$fileName,203,9642,67, this);
					if (this.logActive) {
						try{egl.enterBlock();
							egl.atLine(this.eze$$fileName,204,9670,25, this);
							egl.eglx.lang.SysLib.writeStderr(text);
						}finally{egl.exitBlock();}
					}
					egl.atLine(this.eze$$fileName,202,9603,115, this);
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
					egl.atLine(this.eze$$fileName,209,9785,447, this);
					if (this.selectedLesson_form.isValid()) {
						try{egl.enterBlock();
							egl.atLine(this.eze$$fileName,210,9825,29, this);
							this.selectedLesson_form.commit();
							egl.atLine(this.eze$$fileName,211,9862,187, this);
							{
								try{egl.enterBlock();
									var i = 0;
									egl.addLocalFunctionVariable("i", i, "eglx.lang.EInt", "i");
									EzeLabel_36: for (i = 1; ((i <= this.myLesson.getSize())); i = ((i + 1))) {
										egl.setLocalFunctionVariable("i", i, "eglx.lang.EInt");
										try{egl.enterBlock();
											egl.atLine(this.eze$$fileName,212,9911,126, this);
											if (((egl.getElement(this.myLesson, egl.eglx.lang.EInt32.ezeCast({eze$$value : i, eze$$signature : "I;"}, false) - 1).lesson_id == this.selectedLesson.lesson_id))) {
												try{egl.enterBlock();
													egl.atLine(this.eze$$fileName,213,9975,29, this);
													egl.setElement(this.myLesson, egl.eglx.lang.EInt32.ezeCast({eze$$value : i, eze$$signature : "I;"}, false) - 1, this.selectedLesson);
													egl.atLine(this.eze$$fileName,214,10015,9, this);
													break EzeLabel_36;
												}finally{egl.exitBlock();}
											}
										}finally{egl.exitBlock();}
										egl.atLine(this.eze$$fileName,211,9862,187, this);
									}
								}
								finally{egl.exitBlock();}
							}
							var eze$Temp38 = null;
							eze$Temp38 = egl.eglx.lang.AnyValue.ezeCopyTo(this.selectedLesson, eze$Temp38);
							egl.atLine(this.eze$$fileName,217,10056,166, this);
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
										new egl.egl.jsrt.Delegate(this, egl.client.client.Learn2.prototype.recordRevised, ""), new egl.egl.jsrt.Delegate(this, egl.client.client.Learn2.prototype.serviceExceptionHandler, ""));
							}
							;
						}finally{egl.exitBlock();}
					}
					egl.atLine(this.eze$$fileName,208,9728,512, this);
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
					egl.atLine(this.eze$$fileName,225,10308,30, this);
					this.selectedLesson_form.publish();
					egl.atLine(this.eze$$fileName,226,10344,31, this);
					this.selectedLesson_form_Validate();
					egl.atLine(this.eze$$fileName,224,10250,133, this);
					if (!egl.debugg) egl.leave();
				} finally {
					if (!egl.debugg){
					} else { egl.leave(); }
				}
			}
			,
			"selectedLesson_form_Validate": function() {
				try { egl.enter("selectedLesson_form_Validate",this,arguments);
					egl.atLine(this.eze$$fileName,230,10438,30, this);
					this.selectedLesson_form.isValid();
					egl.atLine(this.eze$$fileName,229,10393,83, this);
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
					egl.atLine(this.eze$$fileName,234,10572,361, this);
					{
						try{egl.enterBlock();
							var n = 0;
							egl.addLocalFunctionVariable("n", n, "eglx.lang.EInt", "n");
							for (n = this.selectedLesson_form.getEntries().getSize(); ((n >= 1)); n = ((n - 1))) {
								egl.setLocalFunctionVariable("n", n, "eglx.lang.EInt");
								try{egl.enterBlock();
									var entry = null;
									egl.addLocalFunctionVariable("entry", entry, "org.eclipse.edt.rui.mvc.FormField", "entry");
									egl.atLine(this.eze$$fileName,235,10671,30, this);
									entry = egl.eglx.lang.AnyValue.ezeCopyTo(egl.getElement(this.selectedLesson_form.getEntries(), egl.eglx.lang.EInt32.ezeCast({eze$$value : n, eze$$signature : "I;"}, false) - 1), entry);
									egl.setLocalFunctionVariable("entry", entry, "org.eclipse.edt.rui.mvc.FormField");
									egl.atLine(this.eze$$fileName,236,10709,215, this);
									if ((entry.controller.getView() == view)) {
										try{egl.enterBlock();
											egl.atLine(this.eze$$fileName,237,10750,164, this);
											if (valid) {
												try{egl.enterBlock();
												}finally{egl.exitBlock();}
											}
											else {
												try{egl.enterBlock();
													var msg;
													egl.addLocalFunctionVariable("msg", msg, "eglx.lang.EString", "msg");
													egl.atLine(this.eze$$fileName,240,10830,34, this);
													msg = entry.controller.getErrorMessage();
													egl.setLocalFunctionVariable("msg", msg, "eglx.lang.EString");
												}finally{egl.exitBlock();}
											}
										}finally{egl.exitBlock();}
									}
								}finally{egl.exitBlock();}
								egl.atLine(this.eze$$fileName,234,10572,361, this);
							}
						}
						finally{egl.exitBlock();}
					}
					egl.atLine(this.eze$$fileName,233,10486,455, this);
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
					var eze$Temp42 = new egl.client.common.Lesson();
					eze$Temp42 = egl.eglx.lang.AnyValue.ezeCopyTo(new egl.client.common.Lesson(), eze$Temp42);
					egl.atLine(this.eze$$fileName,248,10991,151, this);
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
								new egl.egl.jsrt.Delegate(this, egl.client.client.Learn2.prototype.recordAdded, ""), new egl.egl.jsrt.Delegate(this, egl.client.client.Learn2.prototype.serviceExceptionHandler, ""));
					}
					;
					egl.atLine(this.eze$$fileName,247,10954,196, this);
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
					egl.atLine(this.eze$$fileName,255,11203,174, this);
					{
						try{egl.enterBlock();
							var i = 0;
							egl.addLocalFunctionVariable("i", i, "eglx.lang.EInt", "i");
							EzeLabel_43: for (i = 1; ((i <= this.myLesson.getSize())); i = ((i + 1))) {
								egl.setLocalFunctionVariable("i", i, "eglx.lang.EInt");
								try{egl.enterBlock();
									egl.atLine(this.eze$$fileName,256,11250,117, this);
									if (((egl.getElement(this.myLesson, egl.eglx.lang.EInt32.ezeCast({eze$$value : i, eze$$signature : "I;"}, false) - 1).lesson_id == this.selectedLesson.lesson_id))) {
										try{egl.enterBlock();
											egl.atLine(this.eze$$fileName,257,11312,26, this);
											this.myLesson.removeElement(i);
											egl.atLine(this.eze$$fileName,258,11347,9, this);
											break EzeLabel_43;
										}finally{egl.exitBlock();}
									}
								}finally{egl.exitBlock();}
								egl.atLine(this.eze$$fileName,255,11203,174, this);
							}
						}
						finally{egl.exitBlock();}
					}
					var eze$Temp45 = null;
					eze$Temp45 = egl.eglx.lang.AnyValue.ezeCopyTo(this.selectedLesson, eze$Temp45);
					egl.atLine(this.eze$$fileName,261,11384,159, this);
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
								new egl.egl.jsrt.Delegate(this, egl.client.client.Learn2.prototype.recordRevised, ""), new egl.egl.jsrt.Delegate(this, egl.client.client.Learn2.prototype.serviceExceptionHandler, ""));
					}
					;
					egl.atLine(this.eze$$fileName,254,11163,389, this);
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
					egl.atLine(this.eze$$fileName,268,11628,24, this);
					saveID = this.selectedLesson.lesson_id;
					egl.setLocalFunctionVariable("saveID", saveID, "eglx.lang.EInt");
					egl.atLine(this.eze$$fileName,269,11676,30, this);
					this.selectedLesson = egl.eglx.lang.AnyValue.ezeCopyTo(new egl.client.common.Lesson(), this.selectedLesson);
					egl.atLine(this.eze$$fileName,270,11713,34, this);
					this.selectedLesson.lesson_id = saveID;
					egl.atLine(this.eze$$fileName,271,11754,30, this);
					this.selectedLesson_form.publish();
					egl.atLine(this.eze$$fileName,267,11565,228, this);
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
					egl.atLine(this.eze$$fileName,275,11861,528, this);
					if (this.selectedLesson_form.isValid()) {
						try{egl.enterBlock();
							egl.atLine(this.eze$$fileName,276,11902,29, this);
							this.selectedLesson_form.commit();
							egl.atLine(this.eze$$fileName,278,12006,187, this);
							{
								try{egl.enterBlock();
									var i = 0;
									egl.addLocalFunctionVariable("i", i, "eglx.lang.EInt", "i");
									EzeLabel_47: for (i = 1; ((i <= this.myLesson.getSize())); i = ((i + 1))) {
										egl.setLocalFunctionVariable("i", i, "eglx.lang.EInt");
										try{egl.enterBlock();
											egl.atLine(this.eze$$fileName,279,12055,126, this);
											if (((egl.getElement(this.myLesson, egl.eglx.lang.EInt32.ezeCast({eze$$value : i, eze$$signature : "I;"}, false) - 1).lesson_id == this.selectedLesson.lesson_id))) {
												try{egl.enterBlock();
													egl.atLine(this.eze$$fileName,280,12119,29, this);
													egl.setElement(this.myLesson, egl.eglx.lang.EInt32.ezeCast({eze$$value : i, eze$$signature : "I;"}, false) - 1, this.selectedLesson);
													egl.atLine(this.eze$$fileName,281,12159,9, this);
													break EzeLabel_47;
												}finally{egl.exitBlock();}
											}
										}finally{egl.exitBlock();}
										egl.atLine(this.eze$$fileName,278,12006,187, this);
									}
								}
								finally{egl.exitBlock();}
							}
							var eze$Temp49 = null;
							eze$Temp49 = egl.eglx.lang.AnyValue.ezeCopyTo(this.selectedLesson, eze$Temp49);
							egl.atLine(this.eze$$fileName,284,12202,166, this);
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
										new egl.egl.jsrt.Delegate(this, egl.client.client.Learn2.prototype.recordRevised, ""), new egl.egl.jsrt.Delegate(this, egl.client.client.Learn2.prototype.serviceExceptionHandler, ""));
							}
							;
						}finally{egl.exitBlock();}
					}
					egl.atLine(this.eze$$fileName,274,11803,594, this);
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
					egl.atLine(this.eze$$fileName,293,12458,21, this);
					this.myLesson = retResult;
					egl.atLine(this.eze$$fileName,294,12486,37, this);
					this.myLesson_ui.setData(egl.convertAnyToArrayType(this.myLesson,"[A;"));
					egl.atLine(this.eze$$fileName,292,12410,122, this);
					if (!egl.debugg) egl.leave();
				} finally {
					if (!egl.debugg){
					} else { egl.leave(); }
				}
			}
			,
			"recordAdded": function() {
				try { egl.enter("recordAdded",this,arguments);
					egl.atLine(this.eze$$fileName,298,12573,16, this);
					this.readFromTable();
					egl.atLine(this.eze$$fileName,297,12544,54, this);
					if (!egl.debugg) egl.leave();
				} finally {
					if (!egl.debugg){
					} else { egl.leave(); }
				}
			}
			,
			"recordRevised": function() {
				try { egl.enter("recordRevised",this,arguments);
					egl.atLine(this.eze$$fileName,302,12642,37, this);
					this.myLesson_ui.setData(egl.convertAnyToArrayType(this.myLesson,"[A;"));
					egl.atLine(this.eze$$fileName,301,12611,77, this);
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
					egl.atLine(this.eze$$fileName,306,12743,156, this);
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
								new egl.egl.jsrt.Delegate(this, egl.client.client.Learn2.prototype.updateAll, ""), new egl.egl.jsrt.Delegate(this, egl.client.client.Learn2.prototype.serviceExceptionHandler, ""));
					}
					;
					egl.atLine(this.eze$$fileName,305,12701,208, this);
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
					egl.atLine(this.eze$$fileName,313,12965,51, this);
					this.content.setChildren([egl.eglx.lang.convert(egl.eglx.ui.rui.Widget.fromWidget, [this.info,"org.eclipse.edt.rui.widgets.Div"]), egl.eglx.lang.convert(egl.eglx.ui.rui.Widget.fromWidget, [this.buttonBar,"org.eclipse.edt.rui.widgets.FloatRight"])].setType("[Teglx/ui/rui/Widget;"));
					egl.atLine(this.eze$$fileName,315,13031,20, this);
					this.dialog.showDialog();
					egl.atLine(this.eze$$fileName,312,12923,137, this);
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
					egl.atLine(this.eze$$fileName,318,13108,20, this);
					this.dialog.hideDialog();
					egl.atLine(this.eze$$fileName,317,13066,72, this);
					if (!egl.debugg) egl.leave();
				} finally {
					if (!egl.debugg){
					} else { egl.leave(); }
				}
			}
			,
			"toString": function() {
				return "[Learn2]";
			}
			,
			"eze$$getName": function() {
				return "Learn2";
			}
			,
			"eze$$getChildVariables": function() {
				var eze$$parent = this;
				return [
				{name: "DojoLib", value : egl.dojo.widgets.DojoLib['$inst'], type : "dojo.widgets.DojoLib", jsName : "egl.dojo.widgets.DojoLib['$inst']"},
				{name: "GridLayoutLib", value : egl.org.eclipse.edt.rui.widgets.GridLayoutLib['$inst'], type : "org.eclipse.edt.rui.widgets.GridLayoutLib", jsName : "egl.org.eclipse.edt.rui.widgets.GridLayoutLib['$inst']"},
				{name: "DataGridLib", value : egl.org.eclipse.edt.rui.widgets.DataGridLib['$inst'], type : "org.eclipse.edt.rui.widgets.DataGridLib", jsName : "egl.org.eclipse.edt.rui.widgets.DataGridLib['$inst']"},
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
