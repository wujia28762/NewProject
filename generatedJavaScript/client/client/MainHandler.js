define(["org/eclipse/edt/rui/widgets/Button", "ezekw$$dojo/widgets/eze$$DojoTextField", "org/eclipse/edt/rui/widgets/Box", "org/eclipse/edt/rui/widgets/GridLayoutLib", "org/eclipse/edt/rui/mvc/FormManager", "org/eclipse/edt/rui/widgets/GridLayoutData", "org/eclipse/edt/rui/widgets/PasswordTextField", "client/client/accountRecords", "org/eclipse/edt/rui/mvc/Controller", "eglx/ui/rui/eze$$Event", "org/eclipse/edt/rui/mvc/FormField", "org/eclipse/edt/rui/widgets/TextLabel", "ezekw$$dojo/widgets/eze$$DojoDialog", "client/client/user", "eglx/rbd/StrLib", "org/eclipse/edt/rui/widgets/TextField", "ezekw$$dojo/widgets/eze$$DojoButton", "eglx/ui/rui/eze$$View", "org/eclipse/edt/rui/mvc/ValidatingForm", "org/eclipse/edt/rui/widgets/Image", "org/eclipse/edt/rui/widgets/Div", "org/eclipse/edt/rui/widgets/GridLayout", "eglx/ui/rui/eze$$Widget"],function(){
	egl.loadCSS("css/NewProject.css");
	egl.defineRUIHandler("client.client", "MainHandler", {
		"eze$$fileName" : "client/client/MainHandler.egl",
		"eze$$runtimePropertiesFile" : "client/client/MainHandler",
			"constructor": function() {
				this.start();
			}
			,
			"eze$$setEmpty": function() {
				new egl.org.eclipse.edt.rui.widgets.GridLayoutLib();
				new egl.eglx.rbd.StrLib();
				new egl.org.eclipse.edt.rui.mvc.InternalValidators();
				new egl.org.eclipse.edt.rui.mvc.InternalDateFormatter();
				this.ui = new egl.org.eclipse.edt.rui.widgets.GridLayout();
				this.BodyBox = new egl.org.eclipse.edt.rui.widgets.Box();
				this.Image = new egl.org.eclipse.edt.rui.widgets.Image();
				this.GridLayout1 = new egl.org.eclipse.edt.rui.widgets.GridLayout();
				this.BoxBody = new egl.org.eclipse.edt.rui.widgets.Box();
				this.WelcomeBox = new egl.org.eclipse.edt.rui.widgets.Box();
				this.Welcome = new egl.org.eclipse.edt.rui.widgets.TextLabel();
				this.LoginBox = new egl.org.eclipse.edt.rui.widgets.Box();
				this.logininBox = new egl.org.eclipse.edt.rui.widgets.Box();
				this.fieldBox = new egl.org.eclipse.edt.rui.widgets.Box();
				this.LoginIn = new egl.dojo.widgets.DojoButton();
				this.Register = new egl.dojo.widgets.DojoButton();
				this.GreetBox = new egl.org.eclipse.edt.rui.widgets.Box();
				this.Greet = new egl.org.eclipse.edt.rui.widgets.TextLabel();
				this.myuser = new egl.client.client.user();
				this.myuser_ui = new egl.org.eclipse.edt.rui.widgets.GridLayout();
				this.myuser_username_nameLabel = new egl.org.eclipse.edt.rui.widgets.TextLabel();
				this.myuser_username_field = new egl.dojo.widgets.DojoTextField();
				this.myuser_username_controller = new egl.org.eclipse.edt.rui.mvc.Controller();
				this.myuser_username_formField = new egl.org.eclipse.edt.rui.mvc.FormField();
				this.myuser_password_nameLabel = new egl.org.eclipse.edt.rui.widgets.TextLabel();
				this.myuser_password_field = new egl.org.eclipse.edt.rui.widgets.PasswordTextField();
				this.myuser_password_controller = new egl.org.eclipse.edt.rui.mvc.Controller();
				this.myuser_password_formField = new egl.org.eclipse.edt.rui.mvc.FormField();
				this.myuser_form = new egl.org.eclipse.edt.rui.mvc.FormManager();
				this.identityBox = new egl.org.eclipse.edt.rui.widgets.Box();
				this.promptBox = new egl.org.eclipse.edt.rui.widgets.Box();
				this.prompt = new egl.org.eclipse.edt.rui.widgets.TextLabel();
				this.Regdialog = new egl.dojo.widgets.DojoDialog();
				this.content = new egl.org.eclipse.edt.rui.widgets.Box();
				this.Reginfo = new egl.org.eclipse.edt.rui.widgets.Div();
				this.submitButton = new egl.org.eclipse.edt.rui.widgets.Button();
				this.clearButton = new egl.org.eclipse.edt.rui.widgets.Button();
				this.account = new egl.client.client.accountRecords();
				this.usernameField = new egl.org.eclipse.edt.rui.widgets.TextField();
				this.passwordField = new egl.org.eclipse.edt.rui.widgets.PasswordTextField();
				this.emailField = new egl.org.eclipse.edt.rui.widgets.TextField();
				this.realNameField = new egl.org.eclipse.edt.rui.widgets.TextField();
				this.birthdayField = new egl.org.eclipse.edt.rui.widgets.TextField();
				this.addressField = new egl.org.eclipse.edt.rui.widgets.TextField();
				this.usernameController = new egl.org.eclipse.edt.rui.mvc.Controller();
				this.passwordController = new egl.org.eclipse.edt.rui.mvc.Controller();
				this.emailController = new egl.org.eclipse.edt.rui.mvc.Controller();
				this.realNameController = new egl.org.eclipse.edt.rui.mvc.Controller();
				this.birthdayController = new egl.org.eclipse.edt.rui.mvc.Controller();
				this.addressController = new egl.org.eclipse.edt.rui.mvc.Controller();
				this.acctForm = new egl.org.eclipse.edt.rui.mvc.ValidatingForm();
			}
			,
			"eze$$setInitial": function() {
				this.eze$$setEmpty();
				this.ui.setColumns(3);
				this.ui.setRows(4);
				this.ui.setCellPadding(4);
				this.ui.setChildren([egl.eglx.lang.convert(egl.eglx.ui.rui.Widget.fromWidget, [this.GridLayout1,"org.eclipse.edt.rui.widgets.GridLayout"]), egl.eglx.lang.convert(egl.eglx.ui.rui.Widget.fromWidget, [this.BodyBox,"org.eclipse.edt.rui.widgets.Box"])].setType("[Teglx/ui/rui/Widget;"));
				this.ui.setWidth("1000");
				var eze$LNNTemp1 = null;
				{
					var eze$SettingTarget1 = new egl.org.eclipse.edt.rui.widgets.GridLayoutData();
					eze$SettingTarget1 = egl.eglx.lang.AnyValue.ezeCopyTo(new egl.org.eclipse.edt.rui.widgets.GridLayoutData(), eze$SettingTarget1);
					eze$SettingTarget1.row = 1;
					eze$SettingTarget1.column = 1;
					eze$SettingTarget1.horizontalSpan = 3;
					eze$LNNTemp1 = egl.eglx.lang.AnyValue.ezeCopyTo(eze$SettingTarget1, eze$LNNTemp1);
				}
				this.BodyBox.setLayoutData(egl.eglx.lang.convert(egl.eglx.lang.EAny.fromEAny, [eze$LNNTemp1.eze$$clone(),"Torg/eclipse/edt/rui/widgets/GridLayoutData;"]));
				this.BodyBox.setPadding(8);
				this.BodyBox.setChildren([egl.eglx.lang.convert(egl.eglx.ui.rui.Widget.fromWidget, [this.Image,"org.eclipse.edt.rui.widgets.Image"])].setType("[Teglx/ui/rui/Widget;"));
				this.Image.setSrc("E:\\workspace\\pictures\\2.jpg");
				var eze$LNNTemp2 = null;
				{
					var eze$SettingTarget1 = new egl.org.eclipse.edt.rui.widgets.GridLayoutData();
					eze$SettingTarget1 = egl.eglx.lang.AnyValue.ezeCopyTo(new egl.org.eclipse.edt.rui.widgets.GridLayoutData(), eze$SettingTarget1);
					eze$SettingTarget1.row = 2;
					eze$SettingTarget1.column = 1;
					eze$SettingTarget1.horizontalSpan = 3;
					eze$LNNTemp2 = egl.eglx.lang.AnyValue.ezeCopyTo(eze$SettingTarget1, eze$LNNTemp2);
				}
				this.GridLayout1.setLayoutData(egl.eglx.lang.convert(egl.eglx.lang.EAny.fromEAny, [eze$LNNTemp2.eze$$clone(),"Torg/eclipse/edt/rui/widgets/GridLayoutData;"]));
				this.GridLayout1.setCellPadding(4);
				this.GridLayout1.setRows(1);
				this.GridLayout1.setColumns(1);
				this.GridLayout1.setMarginLeft(190);
				this.GridLayout1.setChildren([egl.eglx.lang.convert(egl.eglx.ui.rui.Widget.fromWidget, [this.BoxBody,"org.eclipse.edt.rui.widgets.Box"])].setType("[Teglx/ui/rui/Widget;"));
				this.GridLayout1.setPosition("absolute");
				this.GridLayout1.setX(-30);
				this.GridLayout1.setY(180);
				var eze$LNNTemp3 = null;
				{
					var eze$SettingTarget1 = new egl.org.eclipse.edt.rui.widgets.GridLayoutData();
					eze$SettingTarget1 = egl.eglx.lang.AnyValue.ezeCopyTo(new egl.org.eclipse.edt.rui.widgets.GridLayoutData(), eze$SettingTarget1);
					eze$SettingTarget1.row = 1;
					eze$SettingTarget1.column = 1;
					eze$LNNTemp3 = egl.eglx.lang.AnyValue.ezeCopyTo(eze$SettingTarget1, eze$LNNTemp3);
				}
				this.BoxBody.setLayoutData(egl.eglx.lang.convert(egl.eglx.lang.EAny.fromEAny, [eze$LNNTemp3.eze$$clone(),"Torg/eclipse/edt/rui/widgets/GridLayoutData;"]));
				this.BoxBody.setPadding(8);
				this.BoxBody.setChildren([egl.eglx.lang.convert(egl.eglx.ui.rui.Widget.fromWidget, [this.WelcomeBox,"org.eclipse.edt.rui.widgets.Box"]), egl.eglx.lang.convert(egl.eglx.ui.rui.Widget.fromWidget, [this.LoginBox,"org.eclipse.edt.rui.widgets.Box"]), egl.eglx.lang.convert(egl.eglx.ui.rui.Widget.fromWidget, [this.GreetBox,"org.eclipse.edt.rui.widgets.Box"]), egl.eglx.lang.convert(egl.eglx.ui.rui.Widget.fromWidget, [this.promptBox,"org.eclipse.edt.rui.widgets.Box"])].setType("[Teglx/ui/rui/Widget;"));
				this.BoxBody.setColumns(1);
				this.WelcomeBox.setPadding(8);
				this.WelcomeBox.setChildren([egl.eglx.lang.convert(egl.eglx.ui.rui.Widget.fromWidget, [this.Welcome,"org.eclipse.edt.rui.widgets.TextLabel"])].setType("[Teglx/ui/rui/Widget;"));
				this.Welcome.setText("\u5c0f\u5b66\u6570\u5b66\u4e2a\u6027\u5316\u667a\u80fd\u6559\u5b66\u7cfb\u7edf\u6b22\u8fce\u60a8\uff01");
				this.Welcome.setColor("DeepPink");
				this.Welcome.setFont("\u534e\u6587\u884c\u6977");
				this.Welcome.setFontSize("40");
				this.Welcome.setFontWeight("bolder");
				this.LoginBox.setPadding(8);
				this.LoginBox.setColumns(1);
				this.LoginBox.setChildren([egl.eglx.lang.convert(egl.eglx.ui.rui.Widget.fromWidget, [this.logininBox,"org.eclipse.edt.rui.widgets.Box"]), egl.eglx.lang.convert(egl.eglx.ui.rui.Widget.fromWidget, [this.identityBox,"org.eclipse.edt.rui.widgets.Box"]), egl.eglx.lang.convert(egl.eglx.ui.rui.Widget.fromWidget, [this.fieldBox,"org.eclipse.edt.rui.widgets.Box"])].setType("[Teglx/ui/rui/Widget;"));
				this.LoginBox.setPaddingLeft(100);
				this.logininBox.setPadding(8);
				this.logininBox.setChildren([egl.eglx.lang.convert(egl.eglx.ui.rui.Widget.fromWidget, [this.myuser_ui,"org.eclipse.edt.rui.widgets.GridLayout"])].setType("[Teglx/ui/rui/Widget;"));
				this.logininBox.setPaddingLeft(100);
				this.logininBox.setWidth("500");
				this.logininBox.setColumns(1);
				this.fieldBox.setPadding(8);
				this.fieldBox.setColumns(2);
				this.fieldBox.setChildren([egl.eglx.lang.convert(egl.eglx.ui.rui.Widget.fromWidget, [this.LoginIn,"dojo.widgets.DojoButton"]), egl.eglx.lang.convert(egl.eglx.ui.rui.Widget.fromWidget, [this.Register,"dojo.widgets.DojoButton"])].setType("[Teglx/ui/rui/Widget;"));
				this.LoginIn.setText("\u767b\u9646");
				this.LoginIn.setFont("\u5fae\u8f6f\u96c5\u9ed1");
				this.LoginIn.setFontSize("16");
				this.LoginIn.setPaddingLeft(165);
				this.LoginIn.getOnClick().appendElement(new egl.egl.jsrt.Delegate(this, egl.client.client.MainHandler.prototype.LoginIn_onClick, ""));
				this.Register.setText("\u6ce8\u518c");
				this.Register.setFont("\u5fae\u8f6f\u96c5\u9ed1");
				this.Register.setFontSize("16");
				this.Register.setPaddingLeft(20);
				this.Register.getOnClick().appendElement(new egl.egl.jsrt.Delegate(this, egl.client.client.MainHandler.prototype.Register_onClick, ""));
				this.GreetBox.setPadding(8);
				this.GreetBox.setChildren([egl.eglx.lang.convert(egl.eglx.ui.rui.Widget.fromWidget, [this.Greet,"org.eclipse.edt.rui.widgets.TextLabel"])].setType("[Teglx/ui/rui/Widget;"));
				this.GreetBox.setPaddingLeft(220);
				this.Greet.setFont("\u5b8b\u4f53");
				this.Greet.setFontSize("16");
				this.Greet.setColor("Gold");
				var eze$LNNTemp4 = null;
				{
					var eze$SettingTarget1 = new egl.org.eclipse.edt.rui.widgets.GridLayoutData();
					eze$SettingTarget1 = egl.eglx.lang.AnyValue.ezeCopyTo(new egl.org.eclipse.edt.rui.widgets.GridLayoutData(), eze$SettingTarget1);
					eze$SettingTarget1.row = 2;
					eze$SettingTarget1.column = 2;
					eze$SettingTarget1.horizontalAlignment = egl.org.eclipse.edt.rui.widgets.GridLayoutLib['$inst'].ALIGN_LEFT;
					eze$LNNTemp4 = egl.eglx.lang.AnyValue.ezeCopyTo(eze$SettingTarget1, eze$LNNTemp4);
				}
				this.myuser_ui.setLayoutData(egl.eglx.lang.convert(egl.eglx.lang.EAny.fromEAny, [eze$LNNTemp4.eze$$clone(),"Torg/eclipse/edt/rui/widgets/GridLayoutData;"]));
				this.myuser_ui.setRows(2);
				this.myuser_ui.setColumns(2);
				this.myuser_ui.setCellPadding(4);
				this.myuser_ui.setChildren([egl.eglx.lang.convert(egl.eglx.ui.rui.Widget.fromWidget, [this.myuser_username_nameLabel,"org.eclipse.edt.rui.widgets.TextLabel"]), egl.eglx.lang.convert(egl.eglx.ui.rui.Widget.fromWidget, [this.myuser_username_field,"dojo.widgets.DojoTextField"]), egl.eglx.lang.convert(egl.eglx.ui.rui.Widget.fromWidget, [this.myuser_password_nameLabel,"org.eclipse.edt.rui.widgets.TextLabel"]), egl.eglx.lang.convert(egl.eglx.ui.rui.Widget.fromWidget, [this.myuser_password_field,"org.eclipse.edt.rui.widgets.PasswordTextField"])].setType("[Teglx/ui/rui/Widget;"));
				this.myuser_ui.setMarginTop(20);
				this.myuser_ui.setMarginBottom(5);
				this.myuser_username_nameLabel.setText("\u7528\u6237\u540d\uff1a");
				var eze$LNNTemp5 = null;
				{
					var eze$SettingTarget1 = new egl.org.eclipse.edt.rui.widgets.GridLayoutData();
					eze$SettingTarget1 = egl.eglx.lang.AnyValue.ezeCopyTo(new egl.org.eclipse.edt.rui.widgets.GridLayoutData(), eze$SettingTarget1);
					eze$SettingTarget1.row = 1;
					eze$SettingTarget1.column = 1;
					eze$LNNTemp5 = egl.eglx.lang.AnyValue.ezeCopyTo(eze$SettingTarget1, eze$LNNTemp5);
				}
				this.myuser_username_nameLabel.setLayoutData(egl.eglx.lang.convert(egl.eglx.lang.EAny.fromEAny, [eze$LNNTemp5.eze$$clone(),"Torg/eclipse/edt/rui/widgets/GridLayoutData;"]));
				this.myuser_username_nameLabel.setFont("\u5fae\u8f6f\u96c5\u9ed1");
				this.myuser_username_nameLabel.setFontSize("16");
				this.myuser_username_nameLabel.setFontWeight("bolder");
				var eze$LNNTemp6 = null;
				{
					var eze$SettingTarget1 = new egl.org.eclipse.edt.rui.widgets.GridLayoutData();
					eze$SettingTarget1 = egl.eglx.lang.AnyValue.ezeCopyTo(new egl.org.eclipse.edt.rui.widgets.GridLayoutData(), eze$SettingTarget1);
					eze$SettingTarget1.row = 1;
					eze$SettingTarget1.column = 2;
					eze$LNNTemp6 = egl.eglx.lang.AnyValue.ezeCopyTo(eze$SettingTarget1, eze$LNNTemp6);
				}
				this.myuser_username_field.setLayoutData(egl.eglx.lang.convert(egl.eglx.lang.EAny.fromEAny, [eze$LNNTemp6.eze$$clone(),"Torg/eclipse/edt/rui/widgets/GridLayoutData;"]));
				this.myuser_username_controller.eze$$parent = this;
				this.myuser_username_controller.commitHelper = new egl.egl.jsrt.Delegate(this.myuser_username_controller, function(/*String*/ s ) { try {
						this.eze$$parent.myuser.username = s;
				} catch(e) { throw egl.createRuntimeException( "CRRUI2002E", [ "commitHelper this.myuser.username", e.message, egl.lastFunctionEntered ] ); }; });
				this.myuser_username_controller.retrieveModelHelper = new egl.egl.jsrt.Delegate(this.myuser_username_controller, function() { try {
						return this.eze$$parent.myuser.username;
				} catch(e) { throw egl.createRuntimeException( "CRRUI2002E", [ "retrieveModelHelper this.myuser.username", e.message, egl.lastFunctionEntered ] ); }; });
				this.myuser_username_controller.publishHelper = new egl.egl.jsrt.Delegate(this.myuser_username_controller, function(/*String*/ s ) { try {
						this.eze$$parent.myuser_username_field.setText(s);
				} catch(e) { throw egl.createRuntimeException( "CRRUI2002E", [ "publishHelper this.myuser.username", e.message, egl.lastFunctionEntered ] ); }; });
				this.myuser_username_controller.retrieveViewHelper = new egl.egl.jsrt.Delegate(this.myuser_username_controller, function() { try {
						return this.eze$$parent.myuser_username_field.getText();
				} catch(e) { throw egl.createRuntimeException( "CRRUI2002E", [ "retrieveViewHelper this.myuser.username", e.message, egl.lastFunctionEntered ] ); }; });
				this.myuser_username_controller.retrieveValidStateHelper = new egl.egl.jsrt.Delegate(this.myuser_username_controller, function() { try {
						return this.eze$$parent.myuser_username_field.getValidState();
				} catch(e) { throw egl.createRuntimeException( "CRRUI2002E", [ "retrieveValidStateHelper this.myuser.username", e.message, egl.lastFunctionEntered ] ); }; });
				this.myuser_username_controller.publishMessageHelper = new egl.egl.jsrt.Delegate(this.myuser_username_controller, function(/*String*/ s ) { try {
						this.eze$$parent.myuser_username_field.showErrorMessage(s);
				} catch(e) { throw egl.createRuntimeException( "CRRUI2002E", [ "publishMessageHelper this.myuser.username", e.message, egl.lastFunctionEntered ] ); }; });
				this.myuser_username_controller.showErrorState = new egl.egl.jsrt.Delegate(this.myuser_username_controller, function(/*Boolean*/ b ) { try {
						this.eze$$parent.myuser_username_field.showErrorIndicator(b);
				} catch(e) { throw egl.createRuntimeException( "CRRUI2002E", [ "showErrorState this.myuser.username", e.message, egl.lastFunctionEntered ] ); }; });
				this.myuser_username_controller.setModel(this.myuser.username);
				this.myuser_username_controller.setView(this.myuser_username_field);
				this.myuser_username_formField.controller = this.myuser_username_controller;
				this.myuser_username_formField.nameLabel = this.myuser_username_nameLabel;
				this.myuser_password_nameLabel.setText("\u5bc6\u7801\uff1a   ");
				var eze$LNNTemp7 = null;
				{
					var eze$SettingTarget1 = new egl.org.eclipse.edt.rui.widgets.GridLayoutData();
					eze$SettingTarget1 = egl.eglx.lang.AnyValue.ezeCopyTo(new egl.org.eclipse.edt.rui.widgets.GridLayoutData(), eze$SettingTarget1);
					eze$SettingTarget1.row = 2;
					eze$SettingTarget1.column = 1;
					eze$LNNTemp7 = egl.eglx.lang.AnyValue.ezeCopyTo(eze$SettingTarget1, eze$LNNTemp7);
				}
				this.myuser_password_nameLabel.setLayoutData(egl.eglx.lang.convert(egl.eglx.lang.EAny.fromEAny, [eze$LNNTemp7.eze$$clone(),"Torg/eclipse/edt/rui/widgets/GridLayoutData;"]));
				this.myuser_password_nameLabel.setFont("\u5fae\u8f6f\u96c5\u9ed1");
				this.myuser_password_nameLabel.setFontSize("16");
				this.myuser_password_nameLabel.setFontWeight("bolder");
				var eze$LNNTemp8 = null;
				{
					var eze$SettingTarget1 = new egl.org.eclipse.edt.rui.widgets.GridLayoutData();
					eze$SettingTarget1 = egl.eglx.lang.AnyValue.ezeCopyTo(new egl.org.eclipse.edt.rui.widgets.GridLayoutData(), eze$SettingTarget1);
					eze$SettingTarget1.row = 2;
					eze$SettingTarget1.column = 2;
					eze$LNNTemp8 = egl.eglx.lang.AnyValue.ezeCopyTo(eze$SettingTarget1, eze$LNNTemp8);
				}
				this.myuser_password_field.setLayoutData(egl.eglx.lang.convert(egl.eglx.lang.EAny.fromEAny, [eze$LNNTemp8.eze$$clone(),"Torg/eclipse/edt/rui/widgets/GridLayoutData;"]));
				this.myuser_password_controller.eze$$parent = this;
				this.myuser_password_controller.commitHelper = new egl.egl.jsrt.Delegate(this.myuser_password_controller, function(/*String*/ s ) { try {
						this.eze$$parent.myuser.password = s;
				} catch(e) { throw egl.createRuntimeException( "CRRUI2002E", [ "commitHelper this.myuser.password", e.message, egl.lastFunctionEntered ] ); }; });
				this.myuser_password_controller.retrieveModelHelper = new egl.egl.jsrt.Delegate(this.myuser_password_controller, function() { try {
						return this.eze$$parent.myuser.password;
				} catch(e) { throw egl.createRuntimeException( "CRRUI2002E", [ "retrieveModelHelper this.myuser.password", e.message, egl.lastFunctionEntered ] ); }; });
				this.myuser_password_controller.publishHelper = new egl.egl.jsrt.Delegate(this.myuser_password_controller, function(/*String*/ s ) { try {
						this.eze$$parent.myuser_password_field.setText(s);
				} catch(e) { throw egl.createRuntimeException( "CRRUI2002E", [ "publishHelper this.myuser.password", e.message, egl.lastFunctionEntered ] ); }; });
				this.myuser_password_controller.retrieveViewHelper = new egl.egl.jsrt.Delegate(this.myuser_password_controller, function() { try {
						return this.eze$$parent.myuser_password_field.getText();
				} catch(e) { throw egl.createRuntimeException( "CRRUI2002E", [ "retrieveViewHelper this.myuser.password", e.message, egl.lastFunctionEntered ] ); }; });
				this.myuser_password_controller.setModel(this.myuser.password);
				this.myuser_password_controller.setView(this.myuser_password_field);
				this.myuser_password_formField.controller = this.myuser_password_controller;
				this.myuser_password_formField.nameLabel = this.myuser_password_nameLabel;
				this.myuser_form.setEntries([this.myuser_username_formField, this.myuser_password_formField].setType("[Torg/eclipse/edt/rui/mvc/FormField;"));
				this.identityBox.setPadding(8);
				this.identityBox.setColumns(4);
				this.identityBox.setChildren((function() { var eze$Temp9 = []; eze$Temp9.setType("[eglx.ui.rui.Widget");
					for (var i = 0; i < 0; i++) {
					eze$Temp9[i] = new egl.eglx.ui.rui.Widget();}
				return eze$Temp9;})());
				this.identityBox.setPaddingLeft(80);
				this.promptBox.setPadding(8);
				this.promptBox.setChildren([egl.eglx.lang.convert(egl.eglx.ui.rui.Widget.fromWidget, [this.prompt,"org.eclipse.edt.rui.widgets.TextLabel"])].setType("[Teglx/ui/rui/Widget;"));
				this.prompt.setText("\u9996\u6b21\u767b\u9646\u8bf7\u5148\u6ce8\u518c");
				this.prompt.setFont("\u5b8b\u4f53");
				this.prompt.setFontSize("18");
				this.prompt.setFontWeight("bolder");
				this.prompt.setColor("Red");
				this.prompt.setPaddingLeft(250);
				this.Regdialog.title = "\u7528\u6237\u6ce8\u518c";
				this.Regdialog.setPadding(20);
				this.Regdialog.setBackgroundColor("AliceBlue");
				this.Regdialog.draggable = true;
				this.Regdialog.setChildren([egl.eglx.lang.convert(egl.eglx.ui.rui.Widget.fromWidget, [this.content,"org.eclipse.edt.rui.widgets.Box"])].setType("[Teglx/ui/rui/Widget;"));
				this.content.setColumns(1);
				this.content.setChildren([egl.eglx.lang.convert(egl.eglx.ui.rui.Widget.fromWidget, [this.Reginfo,"org.eclipse.edt.rui.widgets.Div"])].setType("[Teglx/ui/rui/Widget;"));
				this.Reginfo.setPadding(10);
				this.Reginfo.setWidth(egl.eglx.lang.convert(egl.eglx.lang.EString.fromEInt32, [400]));
				this.Reginfo.setBackgroundColor("lightBlue");
				var eze$LNNTemp10 = null;
				{
					var eze$SettingTarget1;
					eze$SettingTarget1 = (function () {
						var eze$Temp11 = new egl.org.eclipse.edt.rui.widgets.Box();
						return eze$Temp11;
					}).call(this);
					eze$SettingTarget1.setMarginTop(3);
					eze$SettingTarget1.setColumns(2);
					eze$SettingTarget1.setChildren([egl.eglx.lang.convert(egl.eglx.ui.rui.Widget.fromWidget, [this.submitButton,"org.eclipse.edt.rui.widgets.Button"]), egl.eglx.lang.convert(egl.eglx.ui.rui.Widget.fromWidget, [this.clearButton,"org.eclipse.edt.rui.widgets.Button"])].setType("[Teglx/ui/rui/Widget;"));
					eze$LNNTemp10 = eze$SettingTarget1;
				}
				this.Reginfo.setChildren([egl.eglx.lang.convert(egl.eglx.ui.rui.Widget.fromWidget, [this.acctForm,"org.eclipse.edt.rui.mvc.ValidatingForm"]), egl.eglx.lang.convert(egl.eglx.ui.rui.Widget.fromWidget, [eze$LNNTemp10,"org.eclipse.edt.rui.widgets.Box"])].setType("[Teglx/ui/rui/Widget;"));
				this.submitButton.setText("\u6ce8\u518c");
				this.submitButton.getOnClick().appendElement(new egl.egl.jsrt.Delegate(this, egl.client.client.MainHandler.prototype.submitForm, ""));
				this.submitButton.setMarginLeft(10);
				this.submitButton.setMarginBottom(10);
				this.clearButton.setText("\u6e05\u7a7a");
				this.clearButton.getOnClick().appendElement(new egl.egl.jsrt.Delegate(this, egl.client.client.MainHandler.prototype.clearForm, ""));
				this.clearButton.setMarginLeft(10);
				this.clearButton.setMarginBottom(10);
				new egl.org.eclipse.edt.rui.mvc.InternalValidators();
				this.usernameController.eze$$parent = this;
				this.usernameController.commitHelper = new egl.egl.jsrt.Delegate(this.usernameController, function(/*String*/ s ) { try {
						this.eze$$parent.account.username = s;
				} catch(e) { throw egl.createRuntimeException( "CRRUI2002E", [ "commitHelper this.account.username", e.message, egl.lastFunctionEntered ] ); }; });
				this.usernameController.retrieveModelHelper = new egl.egl.jsrt.Delegate(this.usernameController, function() { try {
						return this.eze$$parent.account.username;
				} catch(e) { throw egl.createRuntimeException( "CRRUI2002E", [ "retrieveModelHelper this.account.username", e.message, egl.lastFunctionEntered ] ); }; });
				this.usernameController.publishHelper = new egl.egl.jsrt.Delegate(this.usernameController, function(/*String*/ s ) { try {
						this.eze$$parent.usernameField.setText(s);
				} catch(e) { throw egl.createRuntimeException( "CRRUI2002E", [ "publishHelper this.account.username", e.message, egl.lastFunctionEntered ] ); }; });
				this.usernameController.retrieveViewHelper = new egl.egl.jsrt.Delegate(this.usernameController, function() { try {
						return this.eze$$parent.usernameField.getText();
				} catch(e) { throw egl.createRuntimeException( "CRRUI2002E", [ "retrieveViewHelper this.account.username", e.message, egl.lastFunctionEntered ] ); }; });
				this.usernameController.setModel(this.account.username);
				this.usernameController.setView(this.usernameField);
				var eze$Temp12 = new egl.org.eclipse.edt.rui.mvc.internal.ValidatorWrapper(egl.org.eclipse.edt.rui.mvc.InternalValidators.$inst, egl.org.eclipse.edt.rui.mvc.InternalValidators.$inst.checkMinimumInput, 6, "");
				this.usernameController.internalValidators.appendElement(new egl.egl.jsrt.Delegate(eze$Temp12, eze$Temp12.validate));
				new egl.org.eclipse.edt.rui.mvc.InternalValidators();
				this.passwordController.eze$$parent = this;
				this.passwordController.commitHelper = new egl.egl.jsrt.Delegate(this.passwordController, function(/*String*/ s ) { try {
						this.eze$$parent.account.password = s;
				} catch(e) { throw egl.createRuntimeException( "CRRUI2002E", [ "commitHelper this.account.password", e.message, egl.lastFunctionEntered ] ); }; });
				this.passwordController.retrieveModelHelper = new egl.egl.jsrt.Delegate(this.passwordController, function() { try {
						return this.eze$$parent.account.password;
				} catch(e) { throw egl.createRuntimeException( "CRRUI2002E", [ "retrieveModelHelper this.account.password", e.message, egl.lastFunctionEntered ] ); }; });
				this.passwordController.publishHelper = new egl.egl.jsrt.Delegate(this.passwordController, function(/*String*/ s ) { try {
						this.eze$$parent.passwordField.setText(s);
				} catch(e) { throw egl.createRuntimeException( "CRRUI2002E", [ "publishHelper this.account.password", e.message, egl.lastFunctionEntered ] ); }; });
				this.passwordController.retrieveViewHelper = new egl.egl.jsrt.Delegate(this.passwordController, function() { try {
						return this.eze$$parent.passwordField.getText();
				} catch(e) { throw egl.createRuntimeException( "CRRUI2002E", [ "retrieveViewHelper this.account.password", e.message, egl.lastFunctionEntered ] ); }; });
				this.passwordController.setModel(this.account.password);
				this.passwordController.setView(this.passwordField);
				var eze$Temp13 = new egl.org.eclipse.edt.rui.mvc.internal.ValidatorWrapper(egl.org.eclipse.edt.rui.mvc.InternalValidators.$inst, egl.org.eclipse.edt.rui.mvc.InternalValidators.$inst.checkMinimumInput, 6, "");
				this.passwordController.internalValidators.appendElement(new egl.egl.jsrt.Delegate(eze$Temp13, eze$Temp13.validate));
				this.emailController.eze$$parent = this;
				this.emailController.commitHelper = new egl.egl.jsrt.Delegate(this.emailController, function(/*String*/ s ) { try {
						this.eze$$parent.account.email = s;
				} catch(e) { throw egl.createRuntimeException( "CRRUI2002E", [ "commitHelper this.account.email", e.message, egl.lastFunctionEntered ] ); }; });
				this.emailController.retrieveModelHelper = new egl.egl.jsrt.Delegate(this.emailController, function() { try {
						return this.eze$$parent.account.email;
				} catch(e) { throw egl.createRuntimeException( "CRRUI2002E", [ "retrieveModelHelper this.account.email", e.message, egl.lastFunctionEntered ] ); }; });
				this.emailController.publishHelper = new egl.egl.jsrt.Delegate(this.emailController, function(/*String*/ s ) { try {
						this.eze$$parent.emailField.setText(s);
				} catch(e) { throw egl.createRuntimeException( "CRRUI2002E", [ "publishHelper this.account.email", e.message, egl.lastFunctionEntered ] ); }; });
				this.emailController.retrieveViewHelper = new egl.egl.jsrt.Delegate(this.emailController, function() { try {
						return this.eze$$parent.emailField.getText();
				} catch(e) { throw egl.createRuntimeException( "CRRUI2002E", [ "retrieveViewHelper this.account.email", e.message, egl.lastFunctionEntered ] ); }; });
				this.emailController.setModel(this.account.email);
				this.emailController.setView(this.emailField);
				this.emailController.validators = this.emailController.validators.appendElement(egl.checkNull(new egl.egl.jsrt.Delegate(this, egl.client.client.MainHandler.prototype.validateEmail, "")));
				new egl.org.eclipse.edt.rui.mvc.InternalValidators();
				this.realNameController.eze$$parent = this;
				this.realNameController.commitHelper = new egl.egl.jsrt.Delegate(this.realNameController, function(/*String*/ s ) { try {
						this.eze$$parent.account.realName = s;
				} catch(e) { throw egl.createRuntimeException( "CRRUI2002E", [ "commitHelper this.account.realName", e.message, egl.lastFunctionEntered ] ); }; });
				this.realNameController.retrieveModelHelper = new egl.egl.jsrt.Delegate(this.realNameController, function() { try {
						return this.eze$$parent.account.realName;
				} catch(e) { throw egl.createRuntimeException( "CRRUI2002E", [ "retrieveModelHelper this.account.realName", e.message, egl.lastFunctionEntered ] ); }; });
				this.realNameController.publishHelper = new egl.egl.jsrt.Delegate(this.realNameController, function(/*String*/ s ) { try {
						this.eze$$parent.realNameField.setText(s);
				} catch(e) { throw egl.createRuntimeException( "CRRUI2002E", [ "publishHelper this.account.realName", e.message, egl.lastFunctionEntered ] ); }; });
				this.realNameController.retrieveViewHelper = new egl.egl.jsrt.Delegate(this.realNameController, function() { try {
						return this.eze$$parent.realNameField.getText();
				} catch(e) { throw egl.createRuntimeException( "CRRUI2002E", [ "retrieveViewHelper this.account.realName", e.message, egl.lastFunctionEntered ] ); }; });
				this.realNameController.setModel(this.account.realName);
				this.realNameController.setView(this.realNameField);
				var eze$Temp14 = new egl.org.eclipse.edt.rui.mvc.internal.ValidatorWrapper(egl.org.eclipse.edt.rui.mvc.InternalValidators.$inst, egl.org.eclipse.edt.rui.mvc.InternalValidators.$inst.isNotEmpty, "");
				this.realNameController.internalValidators.appendElement(new egl.egl.jsrt.Delegate(eze$Temp14, eze$Temp14.validate));
				new egl.org.eclipse.edt.rui.mvc.InternalDateFormatter();
				this.birthdayController.eze$$parent = this;
				this.birthdayController.commitHelper = new egl.egl.jsrt.Delegate(this.birthdayController, function(/*String*/ s ) { try {
						this.eze$$parent.account.birthday = s == "" ? new Date() : egl.eglx.lang.convert(egl.eglx.lang.EDate.fromEString, [s]);
				} catch(e) { throw egl.createRuntimeException( "CRRUI2002E", [ "commitHelper this.account.birthday", e.message, egl.lastFunctionEntered ] ); }; });
				this.birthdayController.retrieveModelHelper = new egl.egl.jsrt.Delegate(this.birthdayController, function() { try {
						return egl.eglx.lang.convert(egl.eglx.lang.EString.fromEDate, [this.eze$$parent.account.birthday]);
				} catch(e) { throw egl.createRuntimeException( "CRRUI2002E", [ "retrieveModelHelper this.account.birthday", e.message, egl.lastFunctionEntered ] ); }; });
				this.birthdayController.publishHelper = new egl.egl.jsrt.Delegate(this.birthdayController, function(/*String*/ s ) { try {
						this.eze$$parent.birthdayField.setText(s);
				} catch(e) { throw egl.createRuntimeException( "CRRUI2002E", [ "publishHelper this.account.birthday", e.message, egl.lastFunctionEntered ] ); }; });
				this.birthdayController.retrieveViewHelper = new egl.egl.jsrt.Delegate(this.birthdayController, function() { try {
						return this.eze$$parent.birthdayField.getText();
				} catch(e) { throw egl.createRuntimeException( "CRRUI2002E", [ "retrieveViewHelper this.account.birthday", e.message, egl.lastFunctionEntered ] ); }; });
				this.birthdayController.setModel(this.account.birthday);
				this.birthdayController.setView(this.birthdayField);
				var eze$Temp15 = new egl.org.eclipse.edt.rui.mvc.internal.FormatterWrapper(egl.org.eclipse.edt.rui.mvc.InternalDateFormatter.$inst, "MM-dd-yy", "");
				this.birthdayController.internalFormatters.appendElement(new egl.egl.jsrt.Delegate(eze$Temp15, eze$Temp15.format));
				this.birthdayController.internalUnformatters.appendElement(new egl.egl.jsrt.Delegate(eze$Temp15, eze$Temp15.unformat));
				new egl.org.eclipse.edt.rui.mvc.InternalValidators();
				this.addressController.eze$$parent = this;
				this.addressController.commitHelper = new egl.egl.jsrt.Delegate(this.addressController, function(/*String*/ s ) { try {
						this.eze$$parent.account.address = s;
				} catch(e) { throw egl.createRuntimeException( "CRRUI2002E", [ "commitHelper this.account.address", e.message, egl.lastFunctionEntered ] ); }; });
				this.addressController.retrieveModelHelper = new egl.egl.jsrt.Delegate(this.addressController, function() { try {
						return this.eze$$parent.account.address;
				} catch(e) { throw egl.createRuntimeException( "CRRUI2002E", [ "retrieveModelHelper this.account.address", e.message, egl.lastFunctionEntered ] ); }; });
				this.addressController.publishHelper = new egl.egl.jsrt.Delegate(this.addressController, function(/*String*/ s ) { try {
						this.eze$$parent.addressField.setText(s);
				} catch(e) { throw egl.createRuntimeException( "CRRUI2002E", [ "publishHelper this.account.address", e.message, egl.lastFunctionEntered ] ); }; });
				this.addressController.retrieveViewHelper = new egl.egl.jsrt.Delegate(this.addressController, function() { try {
						return this.eze$$parent.addressField.getText();
				} catch(e) { throw egl.createRuntimeException( "CRRUI2002E", [ "retrieveViewHelper this.account.address", e.message, egl.lastFunctionEntered ] ); }; });
				this.addressController.setModel(this.account.address);
				this.addressController.setView(this.addressField);
				var eze$Temp16 = new egl.org.eclipse.edt.rui.mvc.internal.ValidatorWrapper(egl.org.eclipse.edt.rui.mvc.InternalValidators.$inst, egl.org.eclipse.edt.rui.mvc.InternalValidators.$inst.isNotEmpty, "");
				this.addressController.internalValidators.appendElement(new egl.egl.jsrt.Delegate(eze$Temp16, eze$Temp16.validate));
				this.acctForm.setMarginTop(10);
				this.acctForm.setMarginLeft(10);
				var eze$LNNTemp22 = null;
				{
					var eze$SettingTarget1 = new egl.org.eclipse.edt.rui.mvc.FormField();
					eze$SettingTarget1 = egl.eglx.lang.AnyValue.ezeCopyTo(new egl.org.eclipse.edt.rui.mvc.FormField(), eze$SettingTarget1);
					eze$SettingTarget1.displayName = "* \u5730\u5740:";
					eze$SettingTarget1.controller = this.addressController;
					eze$LNNTemp22 = egl.eglx.lang.AnyValue.ezeCopyTo(eze$SettingTarget1, eze$LNNTemp22);
				}
				var eze$LNNTemp21 = null;
				{
					var eze$SettingTarget1 = new egl.org.eclipse.edt.rui.mvc.FormField();
					eze$SettingTarget1 = egl.eglx.lang.AnyValue.ezeCopyTo(new egl.org.eclipse.edt.rui.mvc.FormField(), eze$SettingTarget1);
					eze$SettingTarget1.displayName = "\u51fa\u751f\u65e5\u671f:";
					eze$SettingTarget1.controller = this.birthdayController;
					eze$LNNTemp21 = egl.eglx.lang.AnyValue.ezeCopyTo(eze$SettingTarget1, eze$LNNTemp21);
				}
				var eze$LNNTemp20 = null;
				{
					var eze$SettingTarget1 = new egl.org.eclipse.edt.rui.mvc.FormField();
					eze$SettingTarget1 = egl.eglx.lang.AnyValue.ezeCopyTo(new egl.org.eclipse.edt.rui.mvc.FormField(), eze$SettingTarget1);
					eze$SettingTarget1.displayName = "* \u771f\u5b9e\u59d3\u540d:";
					eze$SettingTarget1.controller = this.realNameController;
					eze$LNNTemp20 = egl.eglx.lang.AnyValue.ezeCopyTo(eze$SettingTarget1, eze$LNNTemp20);
				}
				var eze$LNNTemp19 = null;
				{
					var eze$SettingTarget1 = new egl.org.eclipse.edt.rui.mvc.FormField();
					eze$SettingTarget1 = egl.eglx.lang.AnyValue.ezeCopyTo(new egl.org.eclipse.edt.rui.mvc.FormField(), eze$SettingTarget1);
					eze$SettingTarget1.displayName = "* Email:";
					eze$SettingTarget1.controller = this.emailController;
					eze$LNNTemp19 = egl.eglx.lang.AnyValue.ezeCopyTo(eze$SettingTarget1, eze$LNNTemp19);
				}
				var eze$LNNTemp18 = null;
				{
					var eze$SettingTarget1 = new egl.org.eclipse.edt.rui.mvc.FormField();
					eze$SettingTarget1 = egl.eglx.lang.AnyValue.ezeCopyTo(new egl.org.eclipse.edt.rui.mvc.FormField(), eze$SettingTarget1);
					eze$SettingTarget1.displayName = "* \u5bc6\u7801:";
					eze$SettingTarget1.controller = this.passwordController;
					eze$LNNTemp18 = egl.eglx.lang.AnyValue.ezeCopyTo(eze$SettingTarget1, eze$LNNTemp18);
				}
				var eze$LNNTemp17 = null;
				{
					var eze$SettingTarget1 = new egl.org.eclipse.edt.rui.mvc.FormField();
					eze$SettingTarget1 = egl.eglx.lang.AnyValue.ezeCopyTo(new egl.org.eclipse.edt.rui.mvc.FormField(), eze$SettingTarget1);
					eze$SettingTarget1.displayName = "* \u7528\u6237\u540d:";
					eze$SettingTarget1.controller = this.usernameController;
					eze$LNNTemp17 = egl.eglx.lang.AnyValue.ezeCopyTo(eze$SettingTarget1, eze$LNNTemp17);
				}
				this.acctForm.setEntries([eze$LNNTemp17, eze$LNNTemp18, eze$LNNTemp19, eze$LNNTemp20, eze$LNNTemp21, eze$LNNTemp22].setType("[Torg/eclipse/edt/rui/mvc/FormField;"));
				this.initialUI = [egl.eglx.lang.convert(egl.eglx.ui.rui.Widget.fromWidget, [this.ui,"org.eclipse.edt.rui.widgets.GridLayout"])].setType("[Teglx/ui/rui/Widget;");
			}
			,
			"eze$$clone": function() {
				var ezert$$1 = this;
				var ezert$$2 = new egl.client.client.MainHandler();
				ezert$$2.ui = ezert$$1.ui === null ? null : ezert$$1.ui.eze$$clone();
				ezert$$2.BodyBox = ezert$$1.BodyBox === null ? null : ezert$$1.BodyBox.eze$$clone();
				ezert$$2.Image = ezert$$1.Image === null ? null : ezert$$1.Image.eze$$clone();
				ezert$$2.GridLayout1 = ezert$$1.GridLayout1 === null ? null : ezert$$1.GridLayout1.eze$$clone();
				ezert$$2.BoxBody = ezert$$1.BoxBody === null ? null : ezert$$1.BoxBody.eze$$clone();
				ezert$$2.WelcomeBox = ezert$$1.WelcomeBox === null ? null : ezert$$1.WelcomeBox.eze$$clone();
				ezert$$2.Welcome = ezert$$1.Welcome === null ? null : ezert$$1.Welcome.eze$$clone();
				ezert$$2.LoginBox = ezert$$1.LoginBox === null ? null : ezert$$1.LoginBox.eze$$clone();
				ezert$$2.logininBox = ezert$$1.logininBox === null ? null : ezert$$1.logininBox.eze$$clone();
				ezert$$2.fieldBox = ezert$$1.fieldBox === null ? null : ezert$$1.fieldBox.eze$$clone();
				ezert$$2.LoginIn = ezert$$1.LoginIn === null ? null : ezert$$1.LoginIn;
				ezert$$2.Register = ezert$$1.Register === null ? null : ezert$$1.Register;
				ezert$$2.GreetBox = ezert$$1.GreetBox === null ? null : ezert$$1.GreetBox.eze$$clone();
				ezert$$2.Greet = ezert$$1.Greet === null ? null : ezert$$1.Greet.eze$$clone();
				ezert$$2.myuser = ezert$$1.myuser;
				ezert$$2.myuser_ui = ezert$$1.myuser_ui === null ? null : ezert$$1.myuser_ui.eze$$clone();
				ezert$$2.myuser_username_nameLabel = ezert$$1.myuser_username_nameLabel === null ? null : ezert$$1.myuser_username_nameLabel.eze$$clone();
				ezert$$2.myuser_username_field = ezert$$1.myuser_username_field === null ? null : ezert$$1.myuser_username_field;
				ezert$$2.myuser_username_controller = ezert$$1.myuser_username_controller === null ? null : ezert$$1.myuser_username_controller.eze$$clone();
				ezert$$2.myuser_username_formField = ezert$$1.myuser_username_formField;
				ezert$$2.myuser_password_nameLabel = ezert$$1.myuser_password_nameLabel === null ? null : ezert$$1.myuser_password_nameLabel.eze$$clone();
				ezert$$2.myuser_password_field = ezert$$1.myuser_password_field === null ? null : ezert$$1.myuser_password_field.eze$$clone();
				ezert$$2.myuser_password_controller = ezert$$1.myuser_password_controller === null ? null : ezert$$1.myuser_password_controller.eze$$clone();
				ezert$$2.myuser_password_formField = ezert$$1.myuser_password_formField;
				ezert$$2.myuser_form = ezert$$1.myuser_form === null ? null : ezert$$1.myuser_form.eze$$clone();
				ezert$$2.identityBox = ezert$$1.identityBox === null ? null : ezert$$1.identityBox.eze$$clone();
				ezert$$2.promptBox = ezert$$1.promptBox === null ? null : ezert$$1.promptBox.eze$$clone();
				ezert$$2.prompt = ezert$$1.prompt === null ? null : ezert$$1.prompt.eze$$clone();
				ezert$$2.Regdialog = ezert$$1.Regdialog === null ? null : ezert$$1.Regdialog;
				ezert$$2.content = ezert$$1.content === null ? null : ezert$$1.content.eze$$clone();
				ezert$$2.Reginfo = ezert$$1.Reginfo === null ? null : ezert$$1.Reginfo.eze$$clone();
				ezert$$2.submitButton = ezert$$1.submitButton === null ? null : ezert$$1.submitButton.eze$$clone();
				ezert$$2.clearButton = ezert$$1.clearButton === null ? null : ezert$$1.clearButton.eze$$clone();
				ezert$$2.account = ezert$$1.account;
				ezert$$2.usernameField = ezert$$1.usernameField === null ? null : ezert$$1.usernameField.eze$$clone();
				ezert$$2.passwordField = ezert$$1.passwordField === null ? null : ezert$$1.passwordField.eze$$clone();
				ezert$$2.emailField = ezert$$1.emailField === null ? null : ezert$$1.emailField.eze$$clone();
				ezert$$2.realNameField = ezert$$1.realNameField === null ? null : ezert$$1.realNameField.eze$$clone();
				ezert$$2.birthdayField = ezert$$1.birthdayField === null ? null : ezert$$1.birthdayField.eze$$clone();
				ezert$$2.addressField = ezert$$1.addressField === null ? null : ezert$$1.addressField.eze$$clone();
				ezert$$2.usernameController = ezert$$1.usernameController === null ? null : ezert$$1.usernameController.eze$$clone();
				ezert$$2.passwordController = ezert$$1.passwordController === null ? null : ezert$$1.passwordController.eze$$clone();
				ezert$$2.emailController = ezert$$1.emailController === null ? null : ezert$$1.emailController.eze$$clone();
				ezert$$2.realNameController = ezert$$1.realNameController === null ? null : ezert$$1.realNameController.eze$$clone();
				ezert$$2.birthdayController = ezert$$1.birthdayController === null ? null : ezert$$1.birthdayController.eze$$clone();
				ezert$$2.addressController = ezert$$1.addressController === null ? null : ezert$$1.addressController.eze$$clone();
				ezert$$2.acctForm = ezert$$1.acctForm === null ? null : ezert$$1.acctForm.eze$$clone();
				return ezert$$2;
			}
			,
			"eze$$getFieldSignatures": function() {
				if(this.fieldSigs === undefined){
					this.fieldSigs = [
					{name: "ui", sig: "org.eclipse.edt.rui.widgets.GridLayout"},
					{name: "BodyBox", sig: "org.eclipse.edt.rui.widgets.Box"},
					{name: "Image", sig: "org.eclipse.edt.rui.widgets.Image"},
					{name: "GridLayout1", sig: "org.eclipse.edt.rui.widgets.GridLayout"},
					{name: "BoxBody", sig: "org.eclipse.edt.rui.widgets.Box"},
					{name: "WelcomeBox", sig: "org.eclipse.edt.rui.widgets.Box"},
					{name: "Welcome", sig: "org.eclipse.edt.rui.widgets.TextLabel"},
					{name: "LoginBox", sig: "org.eclipse.edt.rui.widgets.Box"},
					{name: "logininBox", sig: "org.eclipse.edt.rui.widgets.Box"},
					{name: "fieldBox", sig: "org.eclipse.edt.rui.widgets.Box"},
					{name: "LoginIn", sig: "dojo.widgets.DojoButton"},
					{name: "Register", sig: "dojo.widgets.DojoButton"},
					{name: "GreetBox", sig: "org.eclipse.edt.rui.widgets.Box"},
					{name: "Greet", sig: "org.eclipse.edt.rui.widgets.TextLabel"},
					{name: "myuser", sig: "Tclient/client/user;"},
					{name: "myuser_ui", sig: "org.eclipse.edt.rui.widgets.GridLayout"},
					{name: "myuser_username_nameLabel", sig: "org.eclipse.edt.rui.widgets.TextLabel"},
					{name: "myuser_username_field", sig: "dojo.widgets.DojoTextField"},
					{name: "myuser_username_controller", sig: "org.eclipse.edt.rui.mvc.Controller"},
					{name: "myuser_username_formField", sig: "Torg/eclipse/edt/rui/mvc/FormField;"},
					{name: "myuser_password_nameLabel", sig: "org.eclipse.edt.rui.widgets.TextLabel"},
					{name: "myuser_password_field", sig: "org.eclipse.edt.rui.widgets.PasswordTextField"},
					{name: "myuser_password_controller", sig: "org.eclipse.edt.rui.mvc.Controller"},
					{name: "myuser_password_formField", sig: "Torg/eclipse/edt/rui/mvc/FormField;"},
					{name: "myuser_form", sig: "org.eclipse.edt.rui.mvc.FormManager"},
					{name: "identityBox", sig: "org.eclipse.edt.rui.widgets.Box"},
					{name: "promptBox", sig: "org.eclipse.edt.rui.widgets.Box"},
					{name: "prompt", sig: "org.eclipse.edt.rui.widgets.TextLabel"},
					{name: "Regdialog", sig: "dojo.widgets.DojoDialog"},
					{name: "content", sig: "org.eclipse.edt.rui.widgets.Box"},
					{name: "Reginfo", sig: "org.eclipse.edt.rui.widgets.Div"},
					{name: "submitButton", sig: "org.eclipse.edt.rui.widgets.Button"},
					{name: "clearButton", sig: "org.eclipse.edt.rui.widgets.Button"},
					{name: "account", sig: "Tclient/client/accountRecords;"},
					{name: "usernameField", sig: "org.eclipse.edt.rui.widgets.TextField"},
					{name: "passwordField", sig: "org.eclipse.edt.rui.widgets.PasswordTextField"},
					{name: "emailField", sig: "org.eclipse.edt.rui.widgets.TextField"},
					{name: "realNameField", sig: "org.eclipse.edt.rui.widgets.TextField"},
					{name: "birthdayField", sig: "org.eclipse.edt.rui.widgets.TextField"},
					{name: "addressField", sig: "org.eclipse.edt.rui.widgets.TextField"},
					{name: "usernameController", sig: "org.eclipse.edt.rui.mvc.Controller"},
					{name: "passwordController", sig: "org.eclipse.edt.rui.mvc.Controller"},
					{name: "emailController", sig: "org.eclipse.edt.rui.mvc.Controller"},
					{name: "realNameController", sig: "org.eclipse.edt.rui.mvc.Controller"},
					{name: "birthdayController", sig: "org.eclipse.edt.rui.mvc.Controller"},
					{name: "addressController", sig: "org.eclipse.edt.rui.mvc.Controller"},
					{name: "acctForm", sig: "org.eclipse.edt.rui.mvc.ValidatingForm"}];
				}
				return this.fieldSigs;
			}
			,
			"eze$$getAnnotations": function() {
				if(this.annotations === undefined){
					this.annotations = {};
					this.annotations["XMLRootElement"] = new egl.eglx.xml.binding.annotation.XMLRootElement("MainHandler", null, false);
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
					annotations["XMLStyle"] = new egl.eglx.xml.binding.annotation.XMLElement("BodyBox", null, false, false);
					annotations["JsonName"] = new egl.eglx.json.JsonName("BodyBox");
					this.fieldInfos[1] =new egl.eglx.services.FieldInfo("BodyBox", "BodyBox", "org.eclipse.edt.rui.widgets.Box", egl.org.eclipse.edt.rui.widgets.Box, annotations);
					annotations = {};
					annotations["XMLStyle"] = new egl.eglx.xml.binding.annotation.XMLElement("Image", null, false, false);
					annotations["JsonName"] = new egl.eglx.json.JsonName("Image");
					this.fieldInfos[2] =new egl.eglx.services.FieldInfo("Image", "Image", "org.eclipse.edt.rui.widgets.Image", egl.org.eclipse.edt.rui.widgets.Image, annotations);
					annotations = {};
					annotations["XMLStyle"] = new egl.eglx.xml.binding.annotation.XMLElement("GridLayout1", null, false, false);
					annotations["JsonName"] = new egl.eglx.json.JsonName("GridLayout1");
					this.fieldInfos[3] =new egl.eglx.services.FieldInfo("GridLayout1", "GridLayout1", "org.eclipse.edt.rui.widgets.GridLayout", egl.org.eclipse.edt.rui.widgets.GridLayout, annotations);
					annotations = {};
					annotations["XMLStyle"] = new egl.eglx.xml.binding.annotation.XMLElement("BoxBody", null, false, false);
					annotations["JsonName"] = new egl.eglx.json.JsonName("BoxBody");
					this.fieldInfos[4] =new egl.eglx.services.FieldInfo("BoxBody", "BoxBody", "org.eclipse.edt.rui.widgets.Box", egl.org.eclipse.edt.rui.widgets.Box, annotations);
					annotations = {};
					annotations["XMLStyle"] = new egl.eglx.xml.binding.annotation.XMLElement("WelcomeBox", null, false, false);
					annotations["JsonName"] = new egl.eglx.json.JsonName("WelcomeBox");
					this.fieldInfos[5] =new egl.eglx.services.FieldInfo("WelcomeBox", "WelcomeBox", "org.eclipse.edt.rui.widgets.Box", egl.org.eclipse.edt.rui.widgets.Box, annotations);
					annotations = {};
					annotations["XMLStyle"] = new egl.eglx.xml.binding.annotation.XMLElement("Welcome", null, false, false);
					annotations["JsonName"] = new egl.eglx.json.JsonName("Welcome");
					this.fieldInfos[6] =new egl.eglx.services.FieldInfo("Welcome", "Welcome", "org.eclipse.edt.rui.widgets.TextLabel", egl.org.eclipse.edt.rui.widgets.TextLabel, annotations);
					annotations = {};
					annotations["XMLStyle"] = new egl.eglx.xml.binding.annotation.XMLElement("LoginBox", null, false, false);
					annotations["JsonName"] = new egl.eglx.json.JsonName("LoginBox");
					this.fieldInfos[7] =new egl.eglx.services.FieldInfo("LoginBox", "LoginBox", "org.eclipse.edt.rui.widgets.Box", egl.org.eclipse.edt.rui.widgets.Box, annotations);
					annotations = {};
					annotations["XMLStyle"] = new egl.eglx.xml.binding.annotation.XMLElement("logininBox", null, false, false);
					annotations["JsonName"] = new egl.eglx.json.JsonName("logininBox");
					this.fieldInfos[8] =new egl.eglx.services.FieldInfo("logininBox", "logininBox", "org.eclipse.edt.rui.widgets.Box", egl.org.eclipse.edt.rui.widgets.Box, annotations);
					annotations = {};
					annotations["XMLStyle"] = new egl.eglx.xml.binding.annotation.XMLElement("fieldBox", null, false, false);
					annotations["JsonName"] = new egl.eglx.json.JsonName("fieldBox");
					this.fieldInfos[9] =new egl.eglx.services.FieldInfo("fieldBox", "fieldBox", "org.eclipse.edt.rui.widgets.Box", egl.org.eclipse.edt.rui.widgets.Box, annotations);
					annotations = {};
					annotations["XMLStyle"] = new egl.eglx.xml.binding.annotation.XMLElement("GreetBox", null, false, false);
					annotations["JsonName"] = new egl.eglx.json.JsonName("GreetBox");
					this.fieldInfos[12] =new egl.eglx.services.FieldInfo("GreetBox", "GreetBox", "org.eclipse.edt.rui.widgets.Box", egl.org.eclipse.edt.rui.widgets.Box, annotations);
					annotations = {};
					annotations["XMLStyle"] = new egl.eglx.xml.binding.annotation.XMLElement("Greet", null, false, false);
					annotations["JsonName"] = new egl.eglx.json.JsonName("Greet");
					this.fieldInfos[13] =new egl.eglx.services.FieldInfo("Greet", "Greet", "org.eclipse.edt.rui.widgets.TextLabel", egl.org.eclipse.edt.rui.widgets.TextLabel, annotations);
					annotations = {};
					annotations["XMLStyle"] = new egl.eglx.xml.binding.annotation.XMLElement("myuser", null, false, false);
					annotations["JsonName"] = new egl.eglx.json.JsonName("myuser");
					this.fieldInfos[14] =new egl.eglx.services.FieldInfo("myuser", "myuser", "Tclient/client/user;", egl.client.client.user, annotations);
					annotations = {};
					annotations["XMLStyle"] = new egl.eglx.xml.binding.annotation.XMLElement("myuser_ui", null, false, false);
					annotations["JsonName"] = new egl.eglx.json.JsonName("myuser_ui");
					this.fieldInfos[15] =new egl.eglx.services.FieldInfo("myuser_ui", "myuser_ui", "org.eclipse.edt.rui.widgets.GridLayout", egl.org.eclipse.edt.rui.widgets.GridLayout, annotations);
					annotations = {};
					annotations["XMLStyle"] = new egl.eglx.xml.binding.annotation.XMLElement("myuser_username_nameLabel", null, false, false);
					annotations["JsonName"] = new egl.eglx.json.JsonName("myuser_username_nameLabel");
					this.fieldInfos[16] =new egl.eglx.services.FieldInfo("myuser_username_nameLabel", "myuser_username_nameLabel", "org.eclipse.edt.rui.widgets.TextLabel", egl.org.eclipse.edt.rui.widgets.TextLabel, annotations);
					annotations = {};
					annotations["XMLStyle"] = new egl.eglx.xml.binding.annotation.XMLElement("myuser_username_controller", null, false, false);
					annotations["JsonName"] = new egl.eglx.json.JsonName("myuser_username_controller");
					this.fieldInfos[18] =new egl.eglx.services.FieldInfo("myuser_username_controller", "myuser_username_controller", "org.eclipse.edt.rui.mvc.Controller", egl.org.eclipse.edt.rui.mvc.Controller, annotations);
					annotations = {};
					annotations["XMLStyle"] = new egl.eglx.xml.binding.annotation.XMLElement("myuser_username_formField", null, false, false);
					annotations["JsonName"] = new egl.eglx.json.JsonName("myuser_username_formField");
					this.fieldInfos[19] =new egl.eglx.services.FieldInfo("myuser_username_formField", "myuser_username_formField", "Torg/eclipse/edt/rui/mvc/FormField;", egl.org.eclipse.edt.rui.mvc.FormField, annotations);
					annotations = {};
					annotations["XMLStyle"] = new egl.eglx.xml.binding.annotation.XMLElement("myuser_password_nameLabel", null, false, false);
					annotations["JsonName"] = new egl.eglx.json.JsonName("myuser_password_nameLabel");
					this.fieldInfos[20] =new egl.eglx.services.FieldInfo("myuser_password_nameLabel", "myuser_password_nameLabel", "org.eclipse.edt.rui.widgets.TextLabel", egl.org.eclipse.edt.rui.widgets.TextLabel, annotations);
					annotations = {};
					annotations["XMLStyle"] = new egl.eglx.xml.binding.annotation.XMLElement("myuser_password_field", null, false, false);
					annotations["JsonName"] = new egl.eglx.json.JsonName("myuser_password_field");
					this.fieldInfos[21] =new egl.eglx.services.FieldInfo("myuser_password_field", "myuser_password_field", "org.eclipse.edt.rui.widgets.PasswordTextField", egl.org.eclipse.edt.rui.widgets.PasswordTextField, annotations);
					annotations = {};
					annotations["XMLStyle"] = new egl.eglx.xml.binding.annotation.XMLElement("myuser_password_controller", null, false, false);
					annotations["JsonName"] = new egl.eglx.json.JsonName("myuser_password_controller");
					this.fieldInfos[22] =new egl.eglx.services.FieldInfo("myuser_password_controller", "myuser_password_controller", "org.eclipse.edt.rui.mvc.Controller", egl.org.eclipse.edt.rui.mvc.Controller, annotations);
					annotations = {};
					annotations["XMLStyle"] = new egl.eglx.xml.binding.annotation.XMLElement("myuser_password_formField", null, false, false);
					annotations["JsonName"] = new egl.eglx.json.JsonName("myuser_password_formField");
					this.fieldInfos[23] =new egl.eglx.services.FieldInfo("myuser_password_formField", "myuser_password_formField", "Torg/eclipse/edt/rui/mvc/FormField;", egl.org.eclipse.edt.rui.mvc.FormField, annotations);
					annotations = {};
					annotations["XMLStyle"] = new egl.eglx.xml.binding.annotation.XMLElement("myuser_form", null, false, false);
					annotations["JsonName"] = new egl.eglx.json.JsonName("myuser_form");
					this.fieldInfos[24] =new egl.eglx.services.FieldInfo("myuser_form", "myuser_form", "org.eclipse.edt.rui.mvc.FormManager", egl.org.eclipse.edt.rui.mvc.FormManager, annotations);
					annotations = {};
					annotations["XMLStyle"] = new egl.eglx.xml.binding.annotation.XMLElement("identityBox", null, false, false);
					annotations["JsonName"] = new egl.eglx.json.JsonName("identityBox");
					this.fieldInfos[25] =new egl.eglx.services.FieldInfo("identityBox", "identityBox", "org.eclipse.edt.rui.widgets.Box", egl.org.eclipse.edt.rui.widgets.Box, annotations);
					annotations = {};
					annotations["XMLStyle"] = new egl.eglx.xml.binding.annotation.XMLElement("promptBox", null, false, false);
					annotations["JsonName"] = new egl.eglx.json.JsonName("promptBox");
					this.fieldInfos[26] =new egl.eglx.services.FieldInfo("promptBox", "promptBox", "org.eclipse.edt.rui.widgets.Box", egl.org.eclipse.edt.rui.widgets.Box, annotations);
					annotations = {};
					annotations["XMLStyle"] = new egl.eglx.xml.binding.annotation.XMLElement("prompt", null, false, false);
					annotations["JsonName"] = new egl.eglx.json.JsonName("prompt");
					this.fieldInfos[27] =new egl.eglx.services.FieldInfo("prompt", "prompt", "org.eclipse.edt.rui.widgets.TextLabel", egl.org.eclipse.edt.rui.widgets.TextLabel, annotations);
					annotations = {};
					annotations["XMLStyle"] = new egl.eglx.xml.binding.annotation.XMLElement("content", null, false, false);
					annotations["JsonName"] = new egl.eglx.json.JsonName("content");
					this.fieldInfos[29] =new egl.eglx.services.FieldInfo("content", "content", "org.eclipse.edt.rui.widgets.Box", egl.org.eclipse.edt.rui.widgets.Box, annotations);
					annotations = {};
					annotations["XMLStyle"] = new egl.eglx.xml.binding.annotation.XMLElement("Reginfo", null, false, false);
					annotations["JsonName"] = new egl.eglx.json.JsonName("Reginfo");
					this.fieldInfos[30] =new egl.eglx.services.FieldInfo("Reginfo", "Reginfo", "org.eclipse.edt.rui.widgets.Div", egl.org.eclipse.edt.rui.widgets.Div, annotations);
					annotations = {};
					annotations["XMLStyle"] = new egl.eglx.xml.binding.annotation.XMLElement("submitButton", null, false, false);
					annotations["JsonName"] = new egl.eglx.json.JsonName("submitButton");
					this.fieldInfos[31] =new egl.eglx.services.FieldInfo("submitButton", "submitButton", "org.eclipse.edt.rui.widgets.Button", egl.org.eclipse.edt.rui.widgets.Button, annotations);
					annotations = {};
					annotations["XMLStyle"] = new egl.eglx.xml.binding.annotation.XMLElement("clearButton", null, false, false);
					annotations["JsonName"] = new egl.eglx.json.JsonName("clearButton");
					this.fieldInfos[32] =new egl.eglx.services.FieldInfo("clearButton", "clearButton", "org.eclipse.edt.rui.widgets.Button", egl.org.eclipse.edt.rui.widgets.Button, annotations);
					annotations = {};
					annotations["XMLStyle"] = new egl.eglx.xml.binding.annotation.XMLElement("account", null, false, false);
					annotations["JsonName"] = new egl.eglx.json.JsonName("account");
					this.fieldInfos[33] =new egl.eglx.services.FieldInfo("account", "account", "Tclient/client/accountRecords;", egl.client.client.accountRecords, annotations);
					annotations = {};
					annotations["XMLStyle"] = new egl.eglx.xml.binding.annotation.XMLElement("usernameField", null, false, false);
					annotations["JsonName"] = new egl.eglx.json.JsonName("usernameField");
					this.fieldInfos[34] =new egl.eglx.services.FieldInfo("usernameField", "usernameField", "org.eclipse.edt.rui.widgets.TextField", egl.org.eclipse.edt.rui.widgets.TextField, annotations);
					annotations = {};
					annotations["XMLStyle"] = new egl.eglx.xml.binding.annotation.XMLElement("passwordField", null, false, false);
					annotations["JsonName"] = new egl.eglx.json.JsonName("passwordField");
					this.fieldInfos[35] =new egl.eglx.services.FieldInfo("passwordField", "passwordField", "org.eclipse.edt.rui.widgets.PasswordTextField", egl.org.eclipse.edt.rui.widgets.PasswordTextField, annotations);
					annotations = {};
					annotations["XMLStyle"] = new egl.eglx.xml.binding.annotation.XMLElement("emailField", null, false, false);
					annotations["JsonName"] = new egl.eglx.json.JsonName("emailField");
					this.fieldInfos[36] =new egl.eglx.services.FieldInfo("emailField", "emailField", "org.eclipse.edt.rui.widgets.TextField", egl.org.eclipse.edt.rui.widgets.TextField, annotations);
					annotations = {};
					annotations["XMLStyle"] = new egl.eglx.xml.binding.annotation.XMLElement("realNameField", null, false, false);
					annotations["JsonName"] = new egl.eglx.json.JsonName("realNameField");
					this.fieldInfos[37] =new egl.eglx.services.FieldInfo("realNameField", "realNameField", "org.eclipse.edt.rui.widgets.TextField", egl.org.eclipse.edt.rui.widgets.TextField, annotations);
					annotations = {};
					annotations["XMLStyle"] = new egl.eglx.xml.binding.annotation.XMLElement("birthdayField", null, false, false);
					annotations["JsonName"] = new egl.eglx.json.JsonName("birthdayField");
					this.fieldInfos[38] =new egl.eglx.services.FieldInfo("birthdayField", "birthdayField", "org.eclipse.edt.rui.widgets.TextField", egl.org.eclipse.edt.rui.widgets.TextField, annotations);
					annotations = {};
					annotations["XMLStyle"] = new egl.eglx.xml.binding.annotation.XMLElement("addressField", null, false, false);
					annotations["JsonName"] = new egl.eglx.json.JsonName("addressField");
					this.fieldInfos[39] =new egl.eglx.services.FieldInfo("addressField", "addressField", "org.eclipse.edt.rui.widgets.TextField", egl.org.eclipse.edt.rui.widgets.TextField, annotations);
					annotations = {};
					annotations["XMLStyle"] = new egl.eglx.xml.binding.annotation.XMLElement("usernameController", null, false, false);
					annotations["JsonName"] = new egl.eglx.json.JsonName("usernameController");
					this.fieldInfos[40] =new egl.eglx.services.FieldInfo("usernameController", "usernameController", "org.eclipse.edt.rui.mvc.Controller", egl.org.eclipse.edt.rui.mvc.Controller, annotations);
					annotations = {};
					annotations["XMLStyle"] = new egl.eglx.xml.binding.annotation.XMLElement("passwordController", null, false, false);
					annotations["JsonName"] = new egl.eglx.json.JsonName("passwordController");
					this.fieldInfos[41] =new egl.eglx.services.FieldInfo("passwordController", "passwordController", "org.eclipse.edt.rui.mvc.Controller", egl.org.eclipse.edt.rui.mvc.Controller, annotations);
					annotations = {};
					annotations["XMLStyle"] = new egl.eglx.xml.binding.annotation.XMLElement("emailController", null, false, false);
					annotations["JsonName"] = new egl.eglx.json.JsonName("emailController");
					this.fieldInfos[42] =new egl.eglx.services.FieldInfo("emailController", "emailController", "org.eclipse.edt.rui.mvc.Controller", egl.org.eclipse.edt.rui.mvc.Controller, annotations);
					annotations = {};
					annotations["XMLStyle"] = new egl.eglx.xml.binding.annotation.XMLElement("realNameController", null, false, false);
					annotations["JsonName"] = new egl.eglx.json.JsonName("realNameController");
					this.fieldInfos[43] =new egl.eglx.services.FieldInfo("realNameController", "realNameController", "org.eclipse.edt.rui.mvc.Controller", egl.org.eclipse.edt.rui.mvc.Controller, annotations);
					annotations = {};
					annotations["XMLStyle"] = new egl.eglx.xml.binding.annotation.XMLElement("birthdayController", null, false, false);
					annotations["JsonName"] = new egl.eglx.json.JsonName("birthdayController");
					this.fieldInfos[44] =new egl.eglx.services.FieldInfo("birthdayController", "birthdayController", "org.eclipse.edt.rui.mvc.Controller", egl.org.eclipse.edt.rui.mvc.Controller, annotations);
					annotations = {};
					annotations["XMLStyle"] = new egl.eglx.xml.binding.annotation.XMLElement("addressController", null, false, false);
					annotations["JsonName"] = new egl.eglx.json.JsonName("addressController");
					this.fieldInfos[45] =new egl.eglx.services.FieldInfo("addressController", "addressController", "org.eclipse.edt.rui.mvc.Controller", egl.org.eclipse.edt.rui.mvc.Controller, annotations);
					annotations = {};
					annotations["XMLStyle"] = new egl.eglx.xml.binding.annotation.XMLElement("acctForm", null, false, false);
					annotations["JsonName"] = new egl.eglx.json.JsonName("acctForm");
					this.fieldInfos[46] =new egl.eglx.services.FieldInfo("acctForm", "acctForm", "org.eclipse.edt.rui.mvc.ValidatingForm", egl.org.eclipse.edt.rui.mvc.ValidatingForm, annotations);
				}
				return this.fieldInfos;
			}
			,
			"start": function() {
			}
			,
			"LoginIn_onClick": function(e) {
				if (((((this.myuser.username) == "yanxue") && ((this.myuser.password) == "123456")))) {
					this.Greet.setText("Hello yanxue");
				}
				else {
					this.Greet.setText("Please login again");
				}
			}
			,
			"myuser_form_Submit": function(event) {
				if (this.myuser_form.isValid()) {
					this.myuser_form.commit();
				}
			}
			,
			"myuser_form_Publish": function(event) {
				this.myuser_form.publish();
				this.myuser_form_Validate();
			}
			,
			"myuser_form_Validate": function() {
				this.myuser_form.isValid();
			}
			,
			"Register_onClick": function(e) {
				this.Regdialog.showDialog();
			}
			,
			"handleValidStateChange_myuser": function(widget, valid) {
				{
					var n = 0;
					for (n = this.myuser_form.getEntries().getSize(); ((n >= 1)); n = ((n - 1))) {
						var entry = null;
						entry = egl.eglx.lang.AnyValue.ezeCopyTo(egl.getElement(this.myuser_form.getEntries(), egl.eglx.lang.EInt32.ezeCast({eze$$value : n, eze$$signature : "I;"}, false) - 1), entry);
						if ((egl.eglx.lang.EAny.equals(egl.eglx.lang.convert(egl.eglx.lang.EAny.fromEAny, [entry.controller.getView(),"Teglx/ui/rui/Widget;"]), egl.eglx.lang.convert(egl.eglx.lang.EAny.fromEAny, [egl.eglx.ui.rui.View,"Teglx/ui/rui/View;"])))) {
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
			"submitForm": function(e) {
				if (this.acctForm.isValid()) {
					this.acctForm.commit();
					var eze$LNNTemp31 = null;
					{
						var eze$SettingTarget1;
						eze$SettingTarget1 = (function () {
							var eze$Temp32 = new egl.org.eclipse.edt.rui.widgets.Button();
							return eze$Temp32;
						}).call(this);
						eze$SettingTarget1.setText("OK");
						eze$SettingTarget1.getOnClick().appendElement(new egl.egl.jsrt.Delegate(this, egl.client.client.MainHandler.prototype.reset, ""));
						eze$SettingTarget1.setWidth(egl.eglx.lang.convert(egl.eglx.lang.EString.fromEInt32, [100]));
						eze$SettingTarget1.setMargin(10);
						eze$LNNTemp31 = eze$SettingTarget1;
					}
					var eze$LNNTemp30 = null;
					var eze$LNNTemp42 = null;
					{
						var eze$SettingTarget2;
						eze$SettingTarget2 = (function () {
							var eze$Temp43 = new egl.org.eclipse.edt.rui.widgets.TextLabel();
							return eze$Temp43;
						}).call(this);
						eze$SettingTarget2.setText(this.account.address);
						eze$SettingTarget2.setMarginLeft(10);
						eze$LNNTemp42 = eze$SettingTarget2;
					}
					var eze$LNNTemp41 = null;
					{
						var eze$SettingTarget2;
						eze$SettingTarget2 = (function () {
							var eze$Temp44 = new egl.org.eclipse.edt.rui.widgets.TextLabel();
							return eze$Temp44;
						}).call(this);
						eze$SettingTarget2.setText("\u5730\u5740:");
						eze$LNNTemp41 = eze$SettingTarget2;
					}
					var eze$LNNTemp40 = null;
					{
						var eze$SettingTarget2;
						eze$SettingTarget2 = (function () {
							var eze$Temp45 = new egl.org.eclipse.edt.rui.widgets.TextLabel();
							return eze$Temp45;
						}).call(this);
						eze$SettingTarget2.setText(egl.eglx.lang.convert(egl.eglx.lang.EString.fromEDate, [this.account.birthday]));
						eze$SettingTarget2.setMarginLeft(10);
						eze$LNNTemp40 = eze$SettingTarget2;
					}
					var eze$LNNTemp39 = null;
					{
						var eze$SettingTarget2;
						eze$SettingTarget2 = (function () {
							var eze$Temp46 = new egl.org.eclipse.edt.rui.widgets.TextLabel();
							return eze$Temp46;
						}).call(this);
						eze$SettingTarget2.setText("\u51fa\u751f\u65e5\u671f:");
						eze$LNNTemp39 = eze$SettingTarget2;
					}
					var eze$LNNTemp38 = null;
					{
						var eze$SettingTarget2;
						eze$SettingTarget2 = (function () {
							var eze$Temp47 = new egl.org.eclipse.edt.rui.widgets.TextLabel();
							return eze$Temp47;
						}).call(this);
						eze$SettingTarget2.setText(this.account.realName);
						eze$SettingTarget2.setMarginLeft(10);
						eze$LNNTemp38 = eze$SettingTarget2;
					}
					var eze$LNNTemp37 = null;
					{
						var eze$SettingTarget2;
						eze$SettingTarget2 = (function () {
							var eze$Temp48 = new egl.org.eclipse.edt.rui.widgets.TextLabel();
							return eze$Temp48;
						}).call(this);
						eze$SettingTarget2.setText("\u771f\u5b9e\u59d3\u540d:");
						eze$LNNTemp37 = eze$SettingTarget2;
					}
					var eze$LNNTemp36 = null;
					{
						var eze$SettingTarget2;
						eze$SettingTarget2 = (function () {
							var eze$Temp49 = new egl.org.eclipse.edt.rui.widgets.TextLabel();
							return eze$Temp49;
						}).call(this);
						eze$SettingTarget2.setText(this.account.email);
						eze$SettingTarget2.setMarginLeft(10);
						eze$LNNTemp36 = eze$SettingTarget2;
					}
					var eze$LNNTemp35 = null;
					{
						var eze$SettingTarget2;
						eze$SettingTarget2 = (function () {
							var eze$Temp50 = new egl.org.eclipse.edt.rui.widgets.TextLabel();
							return eze$Temp50;
						}).call(this);
						eze$SettingTarget2.setText("Email:");
						eze$LNNTemp35 = eze$SettingTarget2;
					}
					var eze$LNNTemp34 = null;
					{
						var eze$SettingTarget2;
						eze$SettingTarget2 = (function () {
							var eze$Temp51 = new egl.org.eclipse.edt.rui.widgets.TextLabel();
							return eze$Temp51;
						}).call(this);
						eze$SettingTarget2.setText(this.account.username);
						eze$SettingTarget2.setMarginLeft(10);
						eze$LNNTemp34 = eze$SettingTarget2;
					}
					var eze$LNNTemp33 = null;
					{
						var eze$SettingTarget2;
						eze$SettingTarget2 = (function () {
							var eze$Temp52 = new egl.org.eclipse.edt.rui.widgets.TextLabel();
							return eze$Temp52;
						}).call(this);
						eze$SettingTarget2.setText("\u7528\u6237\u540d:");
						eze$LNNTemp33 = eze$SettingTarget2;
					}
					{
						var eze$SettingTarget1;
						eze$SettingTarget1 = (function () {
							var eze$Temp53 = new egl.org.eclipse.edt.rui.widgets.Box();
							return eze$Temp53;
						}).call(this);
						eze$SettingTarget1.setColumns(2);
						eze$SettingTarget1.setMarginLeft(10);
						eze$SettingTarget1.setChildren([egl.eglx.lang.convert(egl.eglx.ui.rui.Widget.fromWidget, [eze$LNNTemp33,"org.eclipse.edt.rui.widgets.TextLabel"]), egl.eglx.lang.convert(egl.eglx.ui.rui.Widget.fromWidget, [eze$LNNTemp34,"org.eclipse.edt.rui.widgets.TextLabel"]), egl.eglx.lang.convert(egl.eglx.ui.rui.Widget.fromWidget, [eze$LNNTemp35,"org.eclipse.edt.rui.widgets.TextLabel"]), egl.eglx.lang.convert(egl.eglx.ui.rui.Widget.fromWidget, [eze$LNNTemp36,"org.eclipse.edt.rui.widgets.TextLabel"]), egl.eglx.lang.convert(egl.eglx.ui.rui.Widget.fromWidget, [eze$LNNTemp37,"org.eclipse.edt.rui.widgets.TextLabel"]), egl.eglx.lang.convert(egl.eglx.ui.rui.Widget.fromWidget, [eze$LNNTemp38,"org.eclipse.edt.rui.widgets.TextLabel"]), egl.eglx.lang.convert(egl.eglx.ui.rui.Widget.fromWidget, [eze$LNNTemp39,"org.eclipse.edt.rui.widgets.TextLabel"]), egl.eglx.lang.convert(egl.eglx.ui.rui.Widget.fromWidget, [eze$LNNTemp40,"org.eclipse.edt.rui.widgets.TextLabel"]), egl.eglx.lang.convert(egl.eglx.ui.rui.Widget.fromWidget, [eze$LNNTemp41,"org.eclipse.edt.rui.widgets.TextLabel"]), egl.eglx.lang.convert(egl.eglx.ui.rui.Widget.fromWidget, [eze$LNNTemp42,"org.eclipse.edt.rui.widgets.TextLabel"])].setType("[Teglx/ui/rui/Widget;"));
						eze$LNNTemp30 = eze$SettingTarget1;
					}
					var eze$LNNTemp29 = null;
					{
						var eze$SettingTarget1;
						eze$SettingTarget1 = (function () {
							var eze$Temp54 = new egl.org.eclipse.edt.rui.widgets.TextLabel();
							return eze$Temp54;
						}).call(this);
						eze$SettingTarget1.setText("\u8d26\u6237\u521b\u5efa\u6210\u529f!");
						eze$SettingTarget1.setColor("red");
						eze$SettingTarget1.setFontWeight("bold");
						eze$SettingTarget1.setMargin(10);
						eze$LNNTemp29 = eze$SettingTarget1;
					}
					this.Reginfo.setChildren([egl.eglx.lang.convert(egl.eglx.ui.rui.Widget.fromWidget, [eze$LNNTemp29,"org.eclipse.edt.rui.widgets.TextLabel"]), egl.eglx.lang.convert(egl.eglx.ui.rui.Widget.fromWidget, [eze$LNNTemp30,"org.eclipse.edt.rui.widgets.Box"]), egl.eglx.lang.convert(egl.eglx.ui.rui.Widget.fromWidget, [eze$LNNTemp31,"org.eclipse.edt.rui.widgets.Button"])].setType("[Teglx/ui/rui/Widget;"));
				}
			}
			,
			"clearForm": function(e) {
				this.account = egl.eglx.lang.AnyValue.ezeCopyTo(new egl.client.client.accountRecords(), this.account);
				this.acctForm.publish();
			}
			,
			"validateEmail": function(input) {
				var i;
				i = egl.eglx.rbd.StrLib['$inst'].indexOf_2_S_S(input, "@");
				if (((i > 0))) {
					i = egl.eglx.rbd.StrLib['$inst'].indexOf_3_S_S_I(input, ".", i);
					if (((i < egl.eglx.rbd.StrLib['$inst'].characterLen(input)))) {
						return "";
					}
				}
			}
			,
			"reset": function(e) {
				this.clearForm(e);
				var eze$LNNTemp57 = null;
				{
					var eze$SettingTarget1;
					eze$SettingTarget1 = (function () {
						var eze$Temp58 = new egl.org.eclipse.edt.rui.widgets.Box();
						return eze$Temp58;
					}).call(this);
					eze$SettingTarget1.setMarginTop(3);
					eze$SettingTarget1.setChildren([egl.eglx.lang.convert(egl.eglx.ui.rui.Widget.fromWidget, [this.submitButton,"org.eclipse.edt.rui.widgets.Button"]), egl.eglx.lang.convert(egl.eglx.ui.rui.Widget.fromWidget, [this.clearButton,"org.eclipse.edt.rui.widgets.Button"])].setType("[Teglx/ui/rui/Widget;"));
					eze$LNNTemp57 = eze$SettingTarget1;
				}
				this.Reginfo.setChildren([egl.eglx.lang.convert(egl.eglx.ui.rui.Widget.fromWidget, [this.acctForm,"org.eclipse.edt.rui.mvc.ValidatingForm"]), egl.eglx.lang.convert(egl.eglx.ui.rui.Widget.fromWidget, [eze$LNNTemp57,"org.eclipse.edt.rui.widgets.Box"])].setType("[Teglx/ui/rui/Widget;"));
			}
			,
			"chooseDrink": function(event) {
			}
			,
			"toString": function() {
				return "[MainHandler]";
			}
		}
	);
});
