define(["ezekw$$dojo/widgets/eze$$DojoTitlePane", "client/client/MyLearn", "org/eclipse/edt/rui/widgets/GridLayoutLib", "org/eclipse/edt/rui/widgets/TextLabel", "ezekw$$dojo/widgets/eze$$DojoContentPane", "ezekw$$dojo/widgets/eze$$DojoTextField", "org/eclipse/edt/rui/widgets/DataGridColumn", "org/eclipse/edt/rui/widgets/DataGridLib", "ezekw$$dojo/widgets/eze$$DojoDialog", "ezekw$$dojo/widgets/eze$$DojoButton", "org/eclipse/edt/rui/widgets/GridLayout", "eglx/ui/rui/eze$$Widget", "org/eclipse/edt/rui/widgets/FloatRight", "client/client/MyLearnRecommend", "org/eclipse/edt/rui/widgets/Box", "client/common/Lesson", "org/eclipse/edt/rui/widgets/Div", "eglx/services/ServiceInvocationException", "ezekw$$dojo/widgets/DojoLib", "eglx/ui/rui/eze$$View", "eglx/ui/rui/eze$$Event", "org/eclipse/edt/rui/mvc/FormManager", "org/eclipse/edt/rui/mvc/Controller", "org/eclipse/edt/rui/mvc/FormField", "ezekw$$dojo/widgets/eze$$DojoTextArea", "ezekw$$dojo/widgets/eze$$DojoTabContainer", "org/eclipse/edt/rui/widgets/DataGrid", "org/eclipse/edt/rui/widgets/GridLayoutData"],function(){
	egl.loadCSS("css/NewProject1.css");
	egl.defineRUIHandler("client.client", "Learn", {
		"eze$$fileName" : "client/client/Learn.egl",
		"eze$$runtimePropertiesFile" : "client/client/Learn",
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
				this.GridLayout = new egl.org.eclipse.edt.rui.widgets.GridLayout();
				this.MyLearn = new egl.org.eclipse.edt.rui.widgets.Box();
				this.TextLabel = new egl.org.eclipse.edt.rui.widgets.TextLabel();
				this.Box = new egl.org.eclipse.edt.rui.widgets.Box();
				this.MyLearnRecommend = new egl.org.eclipse.edt.rui.widgets.Box();
				this.TextLabel1 = new egl.org.eclipse.edt.rui.widgets.TextLabel();
				this.Box1 = new egl.org.eclipse.edt.rui.widgets.Box();
				this.logActive = false;
			}
			,
			"eze$$setInitial": function() {
				this.eze$$setEmpty();
				this.ui.setColumns(1);
				this.ui.setRows(2);
				this.ui.setCellPadding(1);
				this.ui.setChildren([egl.eglx.lang.convert(egl.eglx.ui.rui.Widget.fromWidget, [this.cuteBox,"org.eclipse.edt.rui.widgets.Box"]), egl.eglx.lang.convert(egl.eglx.ui.rui.Widget.fromWidget, [this.conBox,"org.eclipse.edt.rui.widgets.Box"])].setType("[Teglx/ui/rui/Widget;"));
				var eze$LNNTemp1 = null;
				{
					var eze$SettingTarget1 = new egl.org.eclipse.edt.rui.widgets.GridLayoutData();
					eze$SettingTarget1 = egl.eglx.lang.AnyValue.ezeCopyTo(new egl.org.eclipse.edt.rui.widgets.GridLayoutData(), eze$SettingTarget1);
					eze$SettingTarget1.row = 1;
					eze$SettingTarget1.column = 1;
					eze$LNNTemp1 = egl.eglx.lang.AnyValue.ezeCopyTo(eze$SettingTarget1, eze$LNNTemp1);
				}
				this.conBox.setLayoutData(egl.eglx.lang.convert(egl.eglx.lang.EAny.fromEAny, [eze$LNNTemp1.eze$$clone(),"Torg/eclipse/edt/rui/widgets/GridLayoutData;"]));
				this.conBox.setPadding(8);
				this.conBox.setChildren([egl.eglx.lang.convert(egl.eglx.ui.rui.Widget.fromWidget, [this.con,"org.eclipse.edt.rui.widgets.TextLabel"])].setType("[Teglx/ui/rui/Widget;"));
				this.conBox.setBackgroundColor("Turquoise");
				this.conBox.setWidth("790");
				this.con.setText("\u4e00\u3001\u751f\u6d3b\u4e2d\u7684\u6570");
				this.con.setFont("\u534e\u6587\u884c\u6977");
				this.con.setFontSize("20");
				this.con.setFontWeight("bolder");
				var eze$LNNTemp2 = null;
				{
					var eze$SettingTarget1 = new egl.org.eclipse.edt.rui.widgets.GridLayoutData();
					eze$SettingTarget1 = egl.eglx.lang.AnyValue.ezeCopyTo(new egl.org.eclipse.edt.rui.widgets.GridLayoutData(), eze$SettingTarget1);
					eze$SettingTarget1.row = 2;
					eze$SettingTarget1.column = 1;
					eze$LNNTemp2 = egl.eglx.lang.AnyValue.ezeCopyTo(eze$SettingTarget1, eze$LNNTemp2);
				}
				this.cuteBox.setLayoutData(egl.eglx.lang.convert(egl.eglx.lang.EAny.fromEAny, [eze$LNNTemp2.eze$$clone(),"Torg/eclipse/edt/rui/widgets/GridLayoutData;"]));
				this.cuteBox.setPadding(8);
				this.cuteBox.setChildren([egl.eglx.lang.convert(egl.eglx.ui.rui.Widget.fromWidget, [this.TabContainer,"dojo.widgets.DojoTabContainer"])].setType("[Teglx/ui/rui/Widget;"));
				this.cuteBox.setColumns(1);
				this.TabContainer.setWidth("730");
				this.TabContainer.setTabPosition(egl.dojo.widgets.DojoLib['$inst'].POSITION_LEFT);
				var eze$LNNTemp4 = null;
				var eze$LNNTemp6 = null;
				{
					var eze$SettingTarget1 = new egl.org.eclipse.edt.rui.widgets.GridLayoutData();
					eze$SettingTarget1 = egl.eglx.lang.AnyValue.ezeCopyTo(new egl.org.eclipse.edt.rui.widgets.GridLayoutData(), eze$SettingTarget1);
					eze$SettingTarget1.row = 1;
					eze$SettingTarget1.column = 1;
					eze$LNNTemp6 = egl.eglx.lang.AnyValue.ezeCopyTo(eze$SettingTarget1, eze$LNNTemp6);
				}
				var eze$LNNTemp5 = null;
				{
					var eze$SettingTarget1 = new egl.org.eclipse.edt.rui.widgets.GridLayoutData();
					eze$SettingTarget1 = egl.eglx.lang.AnyValue.ezeCopyTo(new egl.org.eclipse.edt.rui.widgets.GridLayoutData(), eze$SettingTarget1);
					eze$SettingTarget1.row = 2;
					eze$SettingTarget1.column = 1;
					eze$LNNTemp5 = egl.eglx.lang.AnyValue.ezeCopyTo(eze$SettingTarget1, eze$LNNTemp5);
				}
				{
					var eze$SettingTarget1;
					eze$SettingTarget1 = (function () {
						var eze$Temp7 = new egl.dojo.widgets.DojoContentPane();
						return eze$Temp7;
					}).call(this);
					eze$SettingTarget1.setTitle("\u6211\u7684\u8bfe\u7a0b");
					eze$SettingTarget1.setChildren([egl.eglx.lang.convert(egl.eglx.ui.rui.Widget.fromWidget, [this.GridLayout,"org.eclipse.edt.rui.widgets.GridLayout"])].setType("[Teglx/ui/rui/Widget;"));
					eze$LNNTemp4 = eze$SettingTarget1;
				}
				var eze$LNNTemp3 = null;
				var eze$LNNTemp14 = null;
				{
					var eze$SettingTarget1;
					eze$SettingTarget1 = new egl.org.eclipse.edt.rui.widgets.DataGridColumn();
					eze$SettingTarget1.name = "coursecom";
					eze$SettingTarget1.displayName = "\u8bfe\u7a0b\u7b80\u4ecb";
					eze$SettingTarget1.width = egl.eglx.lang.convert(egl.eglx.lang.EString.fromEInt32, [320]);
					eze$LNNTemp14 = eze$SettingTarget1;
				}
				var eze$LNNTemp13 = null;
				{
					var eze$SettingTarget1;
					eze$SettingTarget1 = new egl.org.eclipse.edt.rui.widgets.DataGridColumn();
					eze$SettingTarget1.name = "lessonname";
					eze$SettingTarget1.displayName = "\u8bfe\u7a0b\u540d\u79f0";
					eze$SettingTarget1.width = egl.eglx.lang.convert(egl.eglx.lang.EString.fromEInt32, [120]);
					eze$LNNTemp13 = eze$SettingTarget1;
				}
				var eze$LNNTemp12 = null;
				{
					var eze$SettingTarget1 = new egl.org.eclipse.edt.rui.widgets.GridLayoutData();
					eze$SettingTarget1 = egl.eglx.lang.AnyValue.ezeCopyTo(new egl.org.eclipse.edt.rui.widgets.GridLayoutData(), eze$SettingTarget1);
					eze$SettingTarget1.row = 1;
					eze$SettingTarget1.column = 1;
					eze$SettingTarget1.verticalAlignment = egl.org.eclipse.edt.rui.widgets.GridLayoutLib['$inst'].VALIGN_TOP;
					eze$LNNTemp12 = egl.eglx.lang.AnyValue.ezeCopyTo(eze$SettingTarget1, eze$LNNTemp12);
				}
				var eze$LNNTemp11 = null;
				{
					var eze$SettingTarget1 = new egl.org.eclipse.edt.rui.widgets.GridLayoutData();
					eze$SettingTarget1 = egl.eglx.lang.AnyValue.ezeCopyTo(new egl.org.eclipse.edt.rui.widgets.GridLayoutData(), eze$SettingTarget1);
					eze$SettingTarget1.row = 1;
					eze$SettingTarget1.column = 1;
					eze$LNNTemp11 = egl.eglx.lang.AnyValue.ezeCopyTo(eze$SettingTarget1, eze$LNNTemp11);
				}
				var eze$LNNTemp10 = null;
				{
					var eze$SettingTarget1 = new egl.org.eclipse.edt.rui.widgets.GridLayoutData();
					eze$SettingTarget1 = egl.eglx.lang.AnyValue.ezeCopyTo(new egl.org.eclipse.edt.rui.widgets.GridLayoutData(), eze$SettingTarget1);
					eze$SettingTarget1.row = 1;
					eze$SettingTarget1.column = 2;
					eze$LNNTemp10 = egl.eglx.lang.AnyValue.ezeCopyTo(eze$SettingTarget1, eze$LNNTemp10);
				}
				var eze$LNNTemp9 = null;
				{
					var eze$SettingTarget1 = new egl.org.eclipse.edt.rui.widgets.GridLayoutData();
					eze$SettingTarget1 = egl.eglx.lang.AnyValue.ezeCopyTo(new egl.org.eclipse.edt.rui.widgets.GridLayoutData(), eze$SettingTarget1);
					eze$SettingTarget1.row = 1;
					eze$SettingTarget1.column = 3;
					eze$LNNTemp9 = egl.eglx.lang.AnyValue.ezeCopyTo(eze$SettingTarget1, eze$LNNTemp9);
				}
				var eze$LNNTemp8 = null;
				{
					var eze$SettingTarget1 = new egl.org.eclipse.edt.rui.widgets.GridLayoutData();
					eze$SettingTarget1 = egl.eglx.lang.AnyValue.ezeCopyTo(new egl.org.eclipse.edt.rui.widgets.GridLayoutData(), eze$SettingTarget1);
					eze$SettingTarget1.row = 2;
					eze$SettingTarget1.column = 1;
					eze$LNNTemp8 = egl.eglx.lang.AnyValue.ezeCopyTo(eze$SettingTarget1, eze$LNNTemp8);
				}
				{
					var eze$SettingTarget1;
					eze$SettingTarget1 = (function () {
						var eze$Temp15 = new egl.dojo.widgets.DojoContentPane();
						return eze$Temp15;
					}).call(this);
					eze$SettingTarget1.setTitle("\u6240\u6709\u8bfe\u7a0b");
					eze$SettingTarget1.setChildren([egl.eglx.lang.convert(egl.eglx.ui.rui.Widget.fromWidget, [this.BoxLesson,"org.eclipse.edt.rui.widgets.Box"])].setType("[Teglx/ui/rui/Widget;"));
					eze$LNNTemp3 = eze$SettingTarget1;
				}
				this.TabContainer.setChildren([egl.eglx.lang.convert(egl.eglx.ui.rui.Widget.fromWidget, [eze$LNNTemp3,"dojo.widgets.DojoContentPane"]), egl.eglx.lang.convert(egl.eglx.ui.rui.Widget.fromWidget, [eze$LNNTemp4,"dojo.widgets.DojoContentPane"])].setType("[Teglx/ui/rui/Widget;"));
				this.TabContainer.setHeight("1000");
				this.TabContainer.setSelection(2);
				this.BoxLesson.setPadding(8);
				this.BoxLesson.setWidth("630");
				this.BoxLesson.setChildren([egl.eglx.lang.convert(egl.eglx.ui.rui.Widget.fromWidget, [this.GridLayoutLesson,"org.eclipse.edt.rui.widgets.GridLayout"])].setType("[Teglx/ui/rui/Widget;"));
				this.GridLayoutLesson.setCellPadding(4);
				this.GridLayoutLesson.setRows(3);
				this.GridLayoutLesson.setColumns(2);
				this.GridLayoutLesson.setChildren([egl.eglx.lang.convert(egl.eglx.ui.rui.Widget.fromWidget, [this.GridLayoutButton,"org.eclipse.edt.rui.widgets.GridLayout"]), egl.eglx.lang.convert(egl.eglx.ui.rui.Widget.fromWidget, [this.myLesson_ui,"org.eclipse.edt.rui.widgets.DataGrid"])].setType("[Teglx/ui/rui/Widget;"));
				this.GridLayoutButton.setLayoutData(egl.eglx.lang.convert(egl.eglx.lang.EAny.fromEAny, [eze$LNNTemp8.eze$$clone(),"Torg/eclipse/edt/rui/widgets/GridLayoutData;"]));
				this.GridLayoutButton.setCellPadding(4);
				this.GridLayoutButton.setRows(1);
				this.GridLayoutButton.setColumns(3);
				this.GridLayoutButton.setChildren([egl.eglx.lang.convert(egl.eglx.ui.rui.Widget.fromWidget, [this.ButtonCourse,"dojo.widgets.DojoButton"]), egl.eglx.lang.convert(egl.eglx.ui.rui.Widget.fromWidget, [this.ButtonEdit,"dojo.widgets.DojoButton"]), egl.eglx.lang.convert(egl.eglx.ui.rui.Widget.fromWidget, [this.ButtonLessons,"dojo.widgets.DojoButton"])].setType("[Teglx/ui/rui/Widget;"));
				this.ButtonLessons.setLayoutData(egl.eglx.lang.convert(egl.eglx.lang.EAny.fromEAny, [eze$LNNTemp11.eze$$clone(),"Torg/eclipse/edt/rui/widgets/GridLayoutData;"]));
				this.ButtonLessons.setText("\u67e5\u770b\u6240\u6709\u8bfe\u7a0b");
				this.ButtonLessons.setFont("\u5fae\u8f6f\u96c5\u9ed1");
				this.ButtonLessons.setFontSize("14");
				this.ButtonLessons.getOnClick().appendElement(new egl.egl.jsrt.Delegate(this, egl.client.client.Learn.prototype.sampleData, ""));
				this.ButtonEdit.setLayoutData(egl.eglx.lang.convert(egl.eglx.lang.EAny.fromEAny, [eze$LNNTemp10.eze$$clone(),"Torg/eclipse/edt/rui/widgets/GridLayoutData;"]));
				this.ButtonEdit.setText("\u7f16\u8f91");
				this.ButtonEdit.setFont("\u5fae\u8f6f\u96c5\u9ed1");
				this.ButtonEdit.setFontSize("14");
				this.ButtonEdit.getOnClick().appendElement(new egl.egl.jsrt.Delegate(this, egl.client.client.Learn.prototype.showDialog, ""));
				this.ButtonCourse.setLayoutData(egl.eglx.lang.convert(egl.eglx.lang.EAny.fromEAny, [eze$LNNTemp9.eze$$clone(),"Torg/eclipse/edt/rui/widgets/GridLayoutData;"]));
				this.ButtonCourse.setText("\u52a0\u5165\u6211\u7684\u8bfe\u7a0b");
				this.ButtonCourse.setFont("\u5fae\u8f6f\u96c5\u9ed1");
				this.ButtonCourse.setFontSize("14");
				this.myLesson_ui.setLayoutData(egl.eglx.lang.convert(egl.eglx.lang.EAny.fromEAny, [eze$LNNTemp12.eze$$clone(),"Torg/eclipse/edt/rui/widgets/GridLayoutData;"]));
				this.myLesson_ui.selectionListeners.appendElement(new egl.egl.jsrt.Delegate(this, egl.client.client.Learn.prototype.cellClickedLesson, ""));
				this.myLesson_ui.setColumns([eze$LNNTemp13, eze$LNNTemp14].setType("[Torg/eclipse/edt/rui/widgets/DataGridColumn;"));
				this.myLesson_ui.setData(egl.convertAnyToArrayType(this.myLesson,"[A;"));
				this.myLesson_ui.setShowCheckBoxes(true);
				this.myLesson_ui.setSelectionMode(egl.org.eclipse.edt.rui.widgets.DataGridLib['$inst'].SINGLE_SELECTION);
				this.myLesson_ui.setWidth("600");
				this.myLesson_ui.setFontSize("14");
				this.myLesson_ui.setFont("\u5b8b\u4f53");
				this.myLesson_ui.setPageSize(10);
				this.selectedLesson_ui.setRows(4);
				this.selectedLesson_ui.setColumns(2);
				this.selectedLesson_ui.setCellPadding(4);
				this.selectedLesson_ui.setChildren([egl.eglx.lang.convert(egl.eglx.ui.rui.Widget.fromWidget, [this.selectedLesson_lesson_id_nameLabel,"org.eclipse.edt.rui.widgets.TextLabel"]), egl.eglx.lang.convert(egl.eglx.ui.rui.Widget.fromWidget, [this.selectedLesson_lesson_id_field,"dojo.widgets.DojoTextField"]), egl.eglx.lang.convert(egl.eglx.ui.rui.Widget.fromWidget, [this.selectedLesson_lessonname_nameLabel,"org.eclipse.edt.rui.widgets.TextLabel"]), egl.eglx.lang.convert(egl.eglx.ui.rui.Widget.fromWidget, [this.selectedLesson_lessonname_field,"dojo.widgets.DojoTextField"]), egl.eglx.lang.convert(egl.eglx.ui.rui.Widget.fromWidget, [this.selectedLesson_coursecom_nameLabel,"org.eclipse.edt.rui.widgets.TextLabel"]), egl.eglx.lang.convert(egl.eglx.ui.rui.Widget.fromWidget, [this.selectedLesson_coursecom_area,"dojo.widgets.DojoTextArea"])].setType("[Teglx/ui/rui/Widget;"));
				this.selectedLesson_ui.setWidth("120");
				this.selectedLesson_lesson_id_nameLabel.setText("\u8bfe\u7a0b\u5e8f\u53f7:");
				var eze$LNNTemp16 = null;
				{
					var eze$SettingTarget1 = new egl.org.eclipse.edt.rui.widgets.GridLayoutData();
					eze$SettingTarget1 = egl.eglx.lang.AnyValue.ezeCopyTo(new egl.org.eclipse.edt.rui.widgets.GridLayoutData(), eze$SettingTarget1);
					eze$SettingTarget1.row = 1;
					eze$SettingTarget1.column = 1;
					eze$LNNTemp16 = egl.eglx.lang.AnyValue.ezeCopyTo(eze$SettingTarget1, eze$LNNTemp16);
				}
				this.selectedLesson_lesson_id_nameLabel.setLayoutData(egl.eglx.lang.convert(egl.eglx.lang.EAny.fromEAny, [eze$LNNTemp16.eze$$clone(),"Torg/eclipse/edt/rui/widgets/GridLayoutData;"]));
				this.selectedLesson_lesson_id_nameLabel.setWidth("60");
				var eze$LNNTemp17 = null;
				{
					var eze$SettingTarget1 = new egl.org.eclipse.edt.rui.widgets.GridLayoutData();
					eze$SettingTarget1 = egl.eglx.lang.AnyValue.ezeCopyTo(new egl.org.eclipse.edt.rui.widgets.GridLayoutData(), eze$SettingTarget1);
					eze$SettingTarget1.row = 1;
					eze$SettingTarget1.column = 2;
					eze$LNNTemp17 = egl.eglx.lang.AnyValue.ezeCopyTo(eze$SettingTarget1, eze$LNNTemp17);
				}
				this.selectedLesson_lesson_id_field.setLayoutData(egl.eglx.lang.convert(egl.eglx.lang.EAny.fromEAny, [eze$LNNTemp17.eze$$clone(),"Torg/eclipse/edt/rui/widgets/GridLayoutData;"]));
				this.selectedLesson_lesson_id_field.setWidth("100");
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
				var eze$Temp18 = new egl.org.eclipse.edt.rui.mvc.internal.FormatterWrapper(egl.org.eclipse.edt.rui.mvc.InternalNumericFormatter.$inst, false, false, " ", egl.eglx.ui.SignKind.leading, false, "", false, 0, 0, "eglx.lang.EInt", "");
				this.selectedLesson_lesson_id_controller.internalFormatters.appendElement(new egl.egl.jsrt.Delegate(eze$Temp18, eze$Temp18.format));
				this.selectedLesson_lesson_id_controller.internalUnformatters.appendElement(new egl.egl.jsrt.Delegate(eze$Temp18, eze$Temp18.unformat));
				this.selectedLesson_lesson_id_controller.validStateSetter = new egl.egl.jsrt.Delegate(this, egl.client.client.Learn.prototype.handleValidStateChange_selectedLesson, "Torg/eclipse/edt/rui/mvc/MVCValidStateSetter;");
				this.selectedLesson_lesson_id_formField.controller = this.selectedLesson_lesson_id_controller;
				this.selectedLesson_lesson_id_formField.nameLabel = this.selectedLesson_lesson_id_nameLabel;
				this.selectedLesson_lessonname_nameLabel.setText("\u8bfe\u7a0b\u540d\u79f0:");
				var eze$LNNTemp19 = null;
				{
					var eze$SettingTarget1 = new egl.org.eclipse.edt.rui.widgets.GridLayoutData();
					eze$SettingTarget1 = egl.eglx.lang.AnyValue.ezeCopyTo(new egl.org.eclipse.edt.rui.widgets.GridLayoutData(), eze$SettingTarget1);
					eze$SettingTarget1.row = 2;
					eze$SettingTarget1.column = 1;
					eze$LNNTemp19 = egl.eglx.lang.AnyValue.ezeCopyTo(eze$SettingTarget1, eze$LNNTemp19);
				}
				this.selectedLesson_lessonname_nameLabel.setLayoutData(egl.eglx.lang.convert(egl.eglx.lang.EAny.fromEAny, [eze$LNNTemp19.eze$$clone(),"Torg/eclipse/edt/rui/widgets/GridLayoutData;"]));
				this.selectedLesson_lessonname_nameLabel.setWidth("60");
				var eze$LNNTemp20 = null;
				{
					var eze$SettingTarget1 = new egl.org.eclipse.edt.rui.widgets.GridLayoutData();
					eze$SettingTarget1 = egl.eglx.lang.AnyValue.ezeCopyTo(new egl.org.eclipse.edt.rui.widgets.GridLayoutData(), eze$SettingTarget1);
					eze$SettingTarget1.row = 2;
					eze$SettingTarget1.column = 2;
					eze$LNNTemp20 = egl.eglx.lang.AnyValue.ezeCopyTo(eze$SettingTarget1, eze$LNNTemp20);
				}
				this.selectedLesson_lessonname_field.setLayoutData(egl.eglx.lang.convert(egl.eglx.lang.EAny.fromEAny, [eze$LNNTemp20.eze$$clone(),"Torg/eclipse/edt/rui/widgets/GridLayoutData;"]));
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
				this.selectedLesson_lessonname_controller.validStateSetter = new egl.egl.jsrt.Delegate(this, egl.client.client.Learn.prototype.handleValidStateChange_selectedLesson, "Torg/eclipse/edt/rui/mvc/MVCValidStateSetter;");
				this.selectedLesson_lessonname_formField.controller = this.selectedLesson_lessonname_controller;
				this.selectedLesson_lessonname_formField.nameLabel = this.selectedLesson_lessonname_nameLabel;
				this.selectedLesson_coursecom_nameLabel.setText("\u8bfe\u7a0b\u7b80\u4ecb:");
				var eze$LNNTemp21 = null;
				{
					var eze$SettingTarget1 = new egl.org.eclipse.edt.rui.widgets.GridLayoutData();
					eze$SettingTarget1 = egl.eglx.lang.AnyValue.ezeCopyTo(new egl.org.eclipse.edt.rui.widgets.GridLayoutData(), eze$SettingTarget1);
					eze$SettingTarget1.row = 3;
					eze$SettingTarget1.column = 1;
					eze$LNNTemp21 = egl.eglx.lang.AnyValue.ezeCopyTo(eze$SettingTarget1, eze$LNNTemp21);
				}
				this.selectedLesson_coursecom_nameLabel.setLayoutData(egl.eglx.lang.convert(egl.eglx.lang.EAny.fromEAny, [eze$LNNTemp21.eze$$clone(),"Torg/eclipse/edt/rui/widgets/GridLayoutData;"]));
				this.selectedLesson_coursecom_nameLabel.setWidth("60");
				var eze$LNNTemp22 = null;
				{
					var eze$SettingTarget1 = new egl.org.eclipse.edt.rui.widgets.GridLayoutData();
					eze$SettingTarget1 = egl.eglx.lang.AnyValue.ezeCopyTo(new egl.org.eclipse.edt.rui.widgets.GridLayoutData(), eze$SettingTarget1);
					eze$SettingTarget1.row = 3;
					eze$SettingTarget1.column = 2;
					eze$LNNTemp22 = egl.eglx.lang.AnyValue.ezeCopyTo(eze$SettingTarget1, eze$LNNTemp22);
				}
				this.selectedLesson_coursecom_area.setLayoutData(egl.eglx.lang.convert(egl.eglx.lang.EAny.fromEAny, [eze$LNNTemp22.eze$$clone(),"Torg/eclipse/edt/rui/widgets/GridLayoutData;"]));
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
				this.selectedLesson_coursecom_controller.validStateSetter = new egl.egl.jsrt.Delegate(this, egl.client.client.Learn.prototype.handleValidStateChange_selectedLesson, "Torg/eclipse/edt/rui/mvc/MVCValidStateSetter;");
				this.selectedLesson_coursecom_formField.controller = this.selectedLesson_coursecom_controller;
				this.selectedLesson_coursecom_formField.nameLabel = this.selectedLesson_coursecom_nameLabel;
				this.selectedLesson_form.setEntries([this.selectedLesson_lesson_id_formField, this.selectedLesson_lessonname_formField, this.selectedLesson_coursecom_formField].setType("[Torg/eclipse/edt/rui/mvc/FormField;"));
				this.dialog.title = "\u7f16\u8f91\u6846";
				this.dialog.setPadding(20);
				this.dialog.setBackgroundColor("AliceBlue");
				this.dialog.draggable = true;
				this.dialog.setChildren([egl.eglx.lang.convert(egl.eglx.ui.rui.Widget.fromWidget, [this.content,"org.eclipse.edt.rui.widgets.Box"])].setType("[Teglx/ui/rui/Widget;"));
				this.content.setColumns(1);
				this.info.setPadding(10);
				this.info.setWidth(egl.eglx.lang.convert(egl.eglx.lang.EString.fromEInt32, [600]));
				this.info.setBackgroundColor("lightBlue");
				var eze$LNNTemp23 = null;
				var eze$LNNTemp24 = null;
				{
					var eze$SettingTarget2;
					eze$SettingTarget2 = (function () {
						var eze$Temp25 = new egl.org.eclipse.edt.rui.widgets.Div();
						return eze$Temp25;
					}).call(this);
					eze$SettingTarget2.setChildren([egl.eglx.lang.convert(egl.eglx.ui.rui.Widget.fromWidget, [this.selectedLesson_ui,"org.eclipse.edt.rui.widgets.GridLayout"])].setType("[Teglx/ui/rui/Widget;"));
					eze$LNNTemp24 = eze$SettingTarget2;
				}
				{
					var eze$SettingTarget1;
					eze$SettingTarget1 = (function () {
						var eze$Temp26 = new egl.dojo.widgets.DojoTitlePane();
						return eze$Temp26;
					}).call(this);
					eze$SettingTarget1.title = "\u8bfe\u7a0b\u7f16\u8f91";
					eze$SettingTarget1.setOpen(true);
					eze$SettingTarget1.duration = 1000;
					eze$SettingTarget1.setWidth("600");
					eze$SettingTarget1.setChildren([egl.eglx.lang.convert(egl.eglx.ui.rui.Widget.fromWidget, [eze$LNNTemp24,"org.eclipse.edt.rui.widgets.Div"])].setType("[Teglx/ui/rui/Widget;"));
					eze$LNNTemp23 = eze$SettingTarget1;
				}
				this.info.setChildren([egl.eglx.lang.convert(egl.eglx.ui.rui.Widget.fromWidget, [eze$LNNTemp23,"dojo.widgets.DojoTitlePane"])].setType("[Teglx/ui/rui/Widget;"));
				this.buttonBar.setMarginTop(9);
				var eze$LNNTemp31 = null;
				{
					var eze$SettingTarget1;
					eze$SettingTarget1 = (function () {
						var eze$Temp32 = new egl.dojo.widgets.DojoButton();
						return eze$Temp32;
					}).call(this);
					eze$SettingTarget1.setText("\u5173\u95ed");
					eze$SettingTarget1.setMarginRight(0);
					eze$SettingTarget1.getOnClick().appendElement(new egl.egl.jsrt.Delegate(this, egl.client.client.Learn.prototype.hideDialog, ""));
					eze$LNNTemp31 = eze$SettingTarget1;
				}
				var eze$LNNTemp30 = null;
				{
					var eze$SettingTarget1;
					eze$SettingTarget1 = (function () {
						var eze$Temp33 = new egl.dojo.widgets.DojoButton();
						return eze$Temp33;
					}).call(this);
					eze$SettingTarget1.setText("\u4fdd\u5b58");
					eze$SettingTarget1.getOnClick().appendElement(new egl.egl.jsrt.Delegate(this, egl.client.client.Learn.prototype.selectedLesson_form_Submit, ""));
					eze$LNNTemp30 = eze$SettingTarget1;
				}
				var eze$LNNTemp29 = null;
				{
					var eze$SettingTarget1;
					eze$SettingTarget1 = (function () {
						var eze$Temp34 = new egl.dojo.widgets.DojoButton();
						return eze$Temp34;
					}).call(this);
					eze$SettingTarget1.setText("\u6e05\u7a7a");
					eze$SettingTarget1.getOnClick().appendElement(new egl.egl.jsrt.Delegate(this, egl.client.client.Learn.prototype.clearAllFields, ""));
					eze$LNNTemp29 = eze$SettingTarget1;
				}
				var eze$LNNTemp28 = null;
				{
					var eze$SettingTarget1;
					eze$SettingTarget1 = (function () {
						var eze$Temp35 = new egl.dojo.widgets.DojoButton();
						return eze$Temp35;
					}).call(this);
					eze$SettingTarget1.setText("\u5220\u9664");
					eze$SettingTarget1.getOnClick().appendElement(new egl.egl.jsrt.Delegate(this, egl.client.client.Learn.prototype.deleteRow, ""));
					eze$LNNTemp28 = eze$SettingTarget1;
				}
				var eze$LNNTemp27 = null;
				{
					var eze$SettingTarget1;
					eze$SettingTarget1 = (function () {
						var eze$Temp36 = new egl.dojo.widgets.DojoButton();
						return eze$Temp36;
					}).call(this);
					eze$SettingTarget1.setText("\u6dfb\u52a0");
					eze$SettingTarget1.getOnClick().appendElement(new egl.egl.jsrt.Delegate(this, egl.client.client.Learn.prototype.addrow, ""));
					eze$LNNTemp27 = eze$SettingTarget1;
				}
				this.buttonBar.setChildren([egl.eglx.lang.convert(egl.eglx.ui.rui.Widget.fromWidget, [eze$LNNTemp27,"dojo.widgets.DojoButton"]), egl.eglx.lang.convert(egl.eglx.ui.rui.Widget.fromWidget, [eze$LNNTemp28,"dojo.widgets.DojoButton"]), egl.eglx.lang.convert(egl.eglx.ui.rui.Widget.fromWidget, [eze$LNNTemp29,"dojo.widgets.DojoButton"]), egl.eglx.lang.convert(egl.eglx.ui.rui.Widget.fromWidget, [eze$LNNTemp30,"dojo.widgets.DojoButton"]), egl.eglx.lang.convert(egl.eglx.ui.rui.Widget.fromWidget, [eze$LNNTemp31,"dojo.widgets.DojoButton"])].setType("[Teglx/ui/rui/Widget;"));
				this.GridLayout.setCellPadding(4);
				this.GridLayout.setRows(2);
				this.GridLayout.setColumns(1);
				this.GridLayout.setChildren([egl.eglx.lang.convert(egl.eglx.ui.rui.Widget.fromWidget, [this.MyLearnRecommend,"org.eclipse.edt.rui.widgets.Box"]), egl.eglx.lang.convert(egl.eglx.ui.rui.Widget.fromWidget, [this.MyLearn,"org.eclipse.edt.rui.widgets.Box"])].setType("[Teglx/ui/rui/Widget;"));
				this.MyLearn.setLayoutData(egl.eglx.lang.convert(egl.eglx.lang.EAny.fromEAny, [eze$LNNTemp6.eze$$clone(),"Torg/eclipse/edt/rui/widgets/GridLayoutData;"]));
				this.MyLearn.setPadding(8);
				this.MyLearn.setChildren([egl.eglx.lang.convert(egl.eglx.ui.rui.Widget.fromWidget, [this.TextLabel,"org.eclipse.edt.rui.widgets.TextLabel"]), egl.eglx.lang.convert(egl.eglx.ui.rui.Widget.fromWidget, [this.Box,"org.eclipse.edt.rui.widgets.Box"])].setType("[Teglx/ui/rui/Widget;"));
				this.TextLabel.setText("\u6211\u7684\u8bfe\u7a0b");
				this.TextLabel.setFont("\u5fae\u8f6f\u96c5\u9ed1");
				this.TextLabel.setFontSize("16");
				this.TextLabel.setFontWeight("bold");
				this.Box.setPadding(8);
				this.Box.setWidth("480");
				this.Box.setHeight("320");
				this.Box.setBorderColor("DodgerBlue");
				this.Box.setBorderStyle("solid");
				this.Box.setChildren([egl.eglx.lang.convert(egl.eglx.ui.rui.Widget.fromWidget, [new egl.client.client.MyLearn().ui,"org.eclipse.edt.rui.widgets.GridLayout"])].setType("[Teglx/ui/rui/Widget;"));
				this.MyLearnRecommend.setLayoutData(egl.eglx.lang.convert(egl.eglx.lang.EAny.fromEAny, [eze$LNNTemp5.eze$$clone(),"Torg/eclipse/edt/rui/widgets/GridLayoutData;"]));
				this.MyLearnRecommend.setPadding(8);
				this.MyLearnRecommend.setChildren([egl.eglx.lang.convert(egl.eglx.ui.rui.Widget.fromWidget, [this.TextLabel1,"org.eclipse.edt.rui.widgets.TextLabel"]), egl.eglx.lang.convert(egl.eglx.ui.rui.Widget.fromWidget, [this.Box1,"org.eclipse.edt.rui.widgets.Box"])].setType("[Teglx/ui/rui/Widget;"));
				this.TextLabel1.setText("\u76f8\u5173\u63a8\u8350");
				this.TextLabel1.setFont("\u5fae\u8f6f\u96c5\u9ed1");
				this.TextLabel1.setFontSize("16");
				this.TextLabel1.setFontWeight("bold");
				this.Box1.setPadding(8);
				this.Box1.setWidth("480");
				this.Box1.setHeight("120");
				this.Box1.setBorderColor("DodgerBlue");
				this.Box1.setBorderStyle("solid");
				this.Box1.setChildren([egl.eglx.lang.convert(egl.eglx.ui.rui.Widget.fromWidget, [new egl.client.client.MyLearnRecommend().ui,"org.eclipse.edt.rui.widgets.GridLayout"])].setType("[Teglx/ui/rui/Widget;"));
				this.logActive = true;
				this.initialUI = [egl.eglx.lang.convert(egl.eglx.ui.rui.Widget.fromWidget, [this.ui,"org.eclipse.edt.rui.widgets.GridLayout"])].setType("[Teglx/ui/rui/Widget;");
			}
			,
			"eze$$clone": function() {
				var ezert$$1 = this;
				var ezert$$2 = new egl.client.client.Learn();
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
				ezert$$2.GridLayout = ezert$$1.GridLayout === null ? null : ezert$$1.GridLayout.eze$$clone();
				ezert$$2.MyLearn = ezert$$1.MyLearn === null ? null : ezert$$1.MyLearn.eze$$clone();
				ezert$$2.TextLabel = ezert$$1.TextLabel === null ? null : ezert$$1.TextLabel.eze$$clone();
				ezert$$2.Box = ezert$$1.Box === null ? null : ezert$$1.Box.eze$$clone();
				ezert$$2.MyLearnRecommend = ezert$$1.MyLearnRecommend === null ? null : ezert$$1.MyLearnRecommend.eze$$clone();
				ezert$$2.TextLabel1 = ezert$$1.TextLabel1 === null ? null : ezert$$1.TextLabel1.eze$$clone();
				ezert$$2.Box1 = ezert$$1.Box1 === null ? null : ezert$$1.Box1.eze$$clone();
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
					{name: "GridLayout", sig: "org.eclipse.edt.rui.widgets.GridLayout"},
					{name: "MyLearn", sig: "org.eclipse.edt.rui.widgets.Box"},
					{name: "TextLabel", sig: "org.eclipse.edt.rui.widgets.TextLabel"},
					{name: "Box", sig: "org.eclipse.edt.rui.widgets.Box"},
					{name: "MyLearnRecommend", sig: "org.eclipse.edt.rui.widgets.Box"},
					{name: "TextLabel1", sig: "org.eclipse.edt.rui.widgets.TextLabel"},
					{name: "Box1", sig: "org.eclipse.edt.rui.widgets.Box"},
					{name: "logActive", sig: "0;"}];
				}
				return this.fieldSigs;
			}
			,
			"eze$$getAnnotations": function() {
				if(this.annotations === undefined){
					this.annotations = {};
					this.annotations["XMLRootElement"] = new egl.eglx.xml.binding.annotation.XMLRootElement("Learn", null, false);
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
					annotations["XMLStyle"] = new egl.eglx.xml.binding.annotation.XMLElement("GridLayout", null, false, false);
					annotations["JsonName"] = new egl.eglx.json.JsonName("GridLayout");
					this.fieldInfos[34] =new egl.eglx.services.FieldInfo("GridLayout", "GridLayout", "org.eclipse.edt.rui.widgets.GridLayout", egl.org.eclipse.edt.rui.widgets.GridLayout, annotations);
					annotations = {};
					annotations["XMLStyle"] = new egl.eglx.xml.binding.annotation.XMLElement("MyLearn", null, false, false);
					annotations["JsonName"] = new egl.eglx.json.JsonName("MyLearn");
					this.fieldInfos[35] =new egl.eglx.services.FieldInfo("MyLearn", "MyLearn", "org.eclipse.edt.rui.widgets.Box", egl.org.eclipse.edt.rui.widgets.Box, annotations);
					annotations = {};
					annotations["XMLStyle"] = new egl.eglx.xml.binding.annotation.XMLElement("TextLabel", null, false, false);
					annotations["JsonName"] = new egl.eglx.json.JsonName("TextLabel");
					this.fieldInfos[36] =new egl.eglx.services.FieldInfo("TextLabel", "TextLabel", "org.eclipse.edt.rui.widgets.TextLabel", egl.org.eclipse.edt.rui.widgets.TextLabel, annotations);
					annotations = {};
					annotations["XMLStyle"] = new egl.eglx.xml.binding.annotation.XMLElement("Box", null, false, false);
					annotations["JsonName"] = new egl.eglx.json.JsonName("Box");
					this.fieldInfos[37] =new egl.eglx.services.FieldInfo("Box", "Box", "org.eclipse.edt.rui.widgets.Box", egl.org.eclipse.edt.rui.widgets.Box, annotations);
					annotations = {};
					annotations["XMLStyle"] = new egl.eglx.xml.binding.annotation.XMLElement("MyLearnRecommend", null, false, false);
					annotations["JsonName"] = new egl.eglx.json.JsonName("MyLearnRecommend");
					this.fieldInfos[38] =new egl.eglx.services.FieldInfo("MyLearnRecommend", "MyLearnRecommend", "org.eclipse.edt.rui.widgets.Box", egl.org.eclipse.edt.rui.widgets.Box, annotations);
					annotations = {};
					annotations["XMLStyle"] = new egl.eglx.xml.binding.annotation.XMLElement("TextLabel1", null, false, false);
					annotations["JsonName"] = new egl.eglx.json.JsonName("TextLabel1");
					this.fieldInfos[39] =new egl.eglx.services.FieldInfo("TextLabel1", "TextLabel1", "org.eclipse.edt.rui.widgets.TextLabel", egl.org.eclipse.edt.rui.widgets.TextLabel, annotations);
					annotations = {};
					annotations["XMLStyle"] = new egl.eglx.xml.binding.annotation.XMLElement("Box1", null, false, false);
					annotations["JsonName"] = new egl.eglx.json.JsonName("Box1");
					this.fieldInfos[40] =new egl.eglx.services.FieldInfo("Box1", "Box1", "org.eclipse.edt.rui.widgets.Box", egl.org.eclipse.edt.rui.widgets.Box, annotations);
					annotations = {};
					annotations["XMLStyle"] = new egl.eglx.xml.binding.annotation.XMLElement("logActive", null, false, false);
					annotations["JsonName"] = new egl.eglx.json.JsonName("logActive");
					this.fieldInfos[41] =new egl.eglx.services.FieldInfo("logActive", "logActive", "0;", Boolean, annotations);
				}
				return this.fieldInfos;
			}
			,
			"start": function() {
			}
			,
			"cellClickedLesson": function(grid) {
				this.selectedLesson = egl.eglx.lang.AnyValue.ezeCopyTo(egl.eglx.lang.EAny.ezeCast(egl.getElement(this.myLesson_ui.getSelection(), egl.eglx.lang.EInt32.ezeCast({eze$$value : 1, eze$$signature : "I;"}, false) - 1), egl.client.common.Lesson), this.selectedLesson);
				this.selectedLesson_form.publish();
			}
			,
			"readFromTable": function() {
				egl.eglx.rest.invokeEglService(egl.eglx.rest.configHttp(this.dedicatedServiceBinding,
						{ method : egl.eglx.http.HttpMethod.POST, uri : "",
						encoding : egl.eglx.services.Encoding.JSON, charset : "UTF-8", contentType : null},
						{encoding : egl.eglx.services.Encoding.JSON, charset : null}),
						"client.server.LessonService", "getAllLessons",
						[],
						[],
						[],
						[{eglSignature : "[Tclient/common/Lesson;", eglType : egl.client.common.Lesson, paramName : "return"}],
						new egl.egl.jsrt.Delegate(this, egl.client.client.Learn.prototype.updateAll, ""), new egl.egl.jsrt.Delegate(this, egl.client.client.Learn.prototype.serviceExceptionHandler, ""));
			}
			,
			"serviceExceptionHandler": function(ex) {
				try {
					throw ex;
				}
				catch ( eze$Temp37 )
				{
					if ( eze$Temp37 instanceof egl.eglx.services.ServiceInvocationException ) {
						var serviceEx = eze$Temp37;
						{
							this.log((("Failure:  service invocation, exception = ") + serviceEx.message));
							this.log((("Detail 1:  ") + serviceEx.detail1));
							this.log((("Detail 2:  ") + serviceEx.detail2));
							this.log((("Detail 3:  ") + serviceEx.detail3));
						}
					}
					else {
						if (!(eze$Temp37 instanceof egl.eglx.lang.AnyException)) {
							eze$Temp37 = egl.makeExceptionFromCaughtObject(eze$Temp37);
						}
						var anyex = eze$Temp37;
						{
							this.log((("Failure:  service invocation, exception = ") + anyex.message));
						}
					}
				}
				throw ex;
			}
			,
			"log": function(text) {
				if (this.logActive) {
					egl.eglx.lang.SysLib.writeStderr(text);
				}
			}
			,
			"selectedLesson_form_Submit": function(event) {
				if (this.selectedLesson_form.isValid()) {
					this.selectedLesson_form.commit();
					{
						var i = 0;
						EzeLabel_40: for (i = 1; ((i <= this.myLesson.getSize())); i = ((i + 1))) {
							if (((egl.getElement(this.myLesson, egl.eglx.lang.EInt32.ezeCast({eze$$value : i, eze$$signature : "I;"}, false) - 1).lesson_id == this.selectedLesson.lesson_id))) {
								egl.setElement(this.myLesson, egl.eglx.lang.EInt32.ezeCast({eze$$value : i, eze$$signature : "I;"}, false) - 1, this.selectedLesson);
								break EzeLabel_40;
							}
						}
					}
					egl.eglx.rest.invokeEglService(egl.eglx.rest.configHttp(this.dedicatedServiceBinding,
							{ method : egl.eglx.http.HttpMethod.POST, uri : "",
							encoding : egl.eglx.services.Encoding.JSON, charset : "UTF-8", contentType : null},
							{encoding : egl.eglx.services.Encoding.JSON, charset : null}),
							"client.server.LessonService", "editLesson",
							[this.selectedLesson],
							["egl.client.common.Lesson"],
							["chgLesson"],
							[],
							new egl.egl.jsrt.Delegate(this, egl.client.client.Learn.prototype.recordRevised, ""), new egl.egl.jsrt.Delegate(this, egl.client.client.Learn.prototype.serviceExceptionHandler, ""));
				}
			}
			,
			"selectedLesson_form_Publish": function(event) {
				this.selectedLesson_form.publish();
				this.selectedLesson_form_Validate();
			}
			,
			"selectedLesson_form_Validate": function() {
				this.selectedLesson_form.isValid();
			}
			,
			"handleValidStateChange_selectedLesson": function(view, valid) {
				{
					var n = 0;
					for (n = this.selectedLesson_form.getEntries().getSize(); ((n >= 1)); n = ((n - 1))) {
						var entry = null;
						entry = egl.eglx.lang.AnyValue.ezeCopyTo(egl.getElement(this.selectedLesson_form.getEntries(), egl.eglx.lang.EInt32.ezeCast({eze$$value : n, eze$$signature : "I;"}, false) - 1), entry);
						if ((entry.controller.getView() == view)) {
							if (valid) {
							}
							else {
								var msg;
								msg = entry.controller.getErrorMessage();
							}
						}
					}
				}
			}
			,
			"addrow": function(event) {
				egl.eglx.rest.invokeEglService(egl.eglx.rest.configHttp(this.dedicatedServiceBinding,
						{ method : egl.eglx.http.HttpMethod.POST, uri : "",
						encoding : egl.eglx.services.Encoding.JSON, charset : "UTF-8", contentType : null},
						{encoding : egl.eglx.services.Encoding.JSON, charset : null}),
						"client.server.LessonService", "addLesson",
						[new egl.client.common.Lesson()],
						["egl.client.common.Lesson"],
						["newLesson"],
						[],
						new egl.egl.jsrt.Delegate(this, egl.client.client.Learn.prototype.recordAdded, ""), new egl.egl.jsrt.Delegate(this, egl.client.client.Learn.prototype.serviceExceptionHandler, ""));
			}
			,
			"deleteRow": function(enevt) {
				{
					var i = 0;
					EzeLabel_45: for (i = 1; ((i <= this.myLesson.getSize())); i = ((i + 1))) {
						if (((egl.getElement(this.myLesson, egl.eglx.lang.EInt32.ezeCast({eze$$value : i, eze$$signature : "I;"}, false) - 1).lesson_id == this.selectedLesson.lesson_id))) {
							this.myLesson.removeElement(i);
							break EzeLabel_45;
						}
					}
				}
				egl.eglx.rest.invokeEglService(egl.eglx.rest.configHttp(this.dedicatedServiceBinding,
						{ method : egl.eglx.http.HttpMethod.POST, uri : "",
						encoding : egl.eglx.services.Encoding.JSON, charset : "UTF-8", contentType : null},
						{encoding : egl.eglx.services.Encoding.JSON, charset : null}),
						"client.server.LessonService", "deleteLesson",
						[this.selectedLesson],
						["egl.client.common.Lesson"],
						["delLesson"],
						[],
						new egl.egl.jsrt.Delegate(this, egl.client.client.Learn.prototype.recordRevised, ""), new egl.egl.jsrt.Delegate(this, egl.client.client.Learn.prototype.serviceExceptionHandler, ""));
			}
			,
			"clearAllFields": function(event) {
				var saveID;
				saveID = this.selectedLesson.lesson_id;
				this.selectedLesson = egl.eglx.lang.AnyValue.ezeCopyTo(new egl.client.common.Lesson(), this.selectedLesson);
				this.selectedLesson.lesson_id = saveID;
				this.selectedLesson_form.publish();
			}
			,
			"selectedArticle_form_Submit": function(event) {
				if (this.selectedLesson_form.isValid()) {
					this.selectedLesson_form.commit();
					{
						var i = 0;
						EzeLabel_48: for (i = 1; ((i <= this.myLesson.getSize())); i = ((i + 1))) {
							if (((egl.getElement(this.myLesson, egl.eglx.lang.EInt32.ezeCast({eze$$value : i, eze$$signature : "I;"}, false) - 1).lesson_id == this.selectedLesson.lesson_id))) {
								egl.setElement(this.myLesson, egl.eglx.lang.EInt32.ezeCast({eze$$value : i, eze$$signature : "I;"}, false) - 1, this.selectedLesson);
								break EzeLabel_48;
							}
						}
					}
					egl.eglx.rest.invokeEglService(egl.eglx.rest.configHttp(this.dedicatedServiceBinding,
							{ method : egl.eglx.http.HttpMethod.POST, uri : "",
							encoding : egl.eglx.services.Encoding.JSON, charset : "UTF-8", contentType : null},
							{encoding : egl.eglx.services.Encoding.JSON, charset : null}),
							"client.server.LessonService", "editLesson",
							[this.selectedLesson],
							["egl.client.common.Lesson"],
							["chgLesson"],
							[],
							new egl.egl.jsrt.Delegate(this, egl.client.client.Learn.prototype.recordRevised, ""), new egl.egl.jsrt.Delegate(this, egl.client.client.Learn.prototype.serviceExceptionHandler, ""));
				}
			}
			,
			"updateAll": function(retResult) {
				this.myLesson = retResult;
				this.myLesson_ui.setData(egl.convertAnyToArrayType(this.myLesson,"[A;"));
			}
			,
			"recordAdded": function() {
				this.readFromTable();
			}
			,
			"recordRevised": function() {
				this.myLesson_ui.setData(egl.convertAnyToArrayType(this.myLesson,"[A;"));
			}
			,
			"sampleData": function(event) {
				egl.eglx.rest.invokeEglService(egl.eglx.rest.configHttp(this.dedicatedServiceBinding,
						{ method : egl.eglx.http.HttpMethod.POST, uri : "",
						encoding : egl.eglx.services.Encoding.JSON, charset : "UTF-8", contentType : null},
						{encoding : egl.eglx.services.Encoding.JSON, charset : null}),
						"client.server.LessonService", "createDefaultTableLesson",
						[],
						[],
						[],
						[{eglSignature : "[Tclient/common/Lesson;", eglType : egl.client.common.Lesson, paramName : "return"}],
						new egl.egl.jsrt.Delegate(this, egl.client.client.Learn.prototype.updateAll, ""), new egl.egl.jsrt.Delegate(this, egl.client.client.Learn.prototype.serviceExceptionHandler, ""));
			}
			,
			"showDialog": function(event) {
				this.content.setChildren([egl.eglx.lang.convert(egl.eglx.ui.rui.Widget.fromWidget, [this.info,"org.eclipse.edt.rui.widgets.Div"]), egl.eglx.lang.convert(egl.eglx.ui.rui.Widget.fromWidget, [this.buttonBar,"org.eclipse.edt.rui.widgets.FloatRight"])].setType("[Teglx/ui/rui/Widget;"));
				this.dialog.showDialog();
			}
			,
			"hideDialog": function(event) {
				this.dialog.hideDialog();
			}
			,
			"toString": function() {
				return "[Learn]";
			}
		}
	);
});
