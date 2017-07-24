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
				try { egl.enter("<init>",this,arguments);
					this.eze$$setEmpty();
					egl.atLine(this.eze$$fileName,43,1502,11, this);
					this.ui.setColumns(3);
					egl.atLine(this.eze$$fileName,43,1515,8, this);
					this.ui.setRows(4);
					egl.atLine(this.eze$$fileName,43,1525,15, this);
					this.ui.setCellPadding(4);
					egl.atLine(this.eze$$fileName,43,1542,35, this);
					this.ui.setChildren([egl.eglx.lang.convert(egl.eglx.ui.rui.Widget.fromWidget, [this.GridLayout1,"org.eclipse.edt.rui.widgets.GridLayout"]), egl.eglx.lang.convert(egl.eglx.ui.rui.Widget.fromWidget, [this.BodyBox,"org.eclipse.edt.rui.widgets.Box"])].setType("[Teglx/ui/rui/Widget;"));
					egl.atLine(this.eze$$fileName,44,1584,14, this);
					this.ui.setWidth("1000");
					var eze$LNNTemp1 = null;
					{
						var eze$SettingTarget1 = new egl.org.eclipse.edt.rui.widgets.GridLayoutData();
						egl.atLine(this.eze$$fileName,45,1631,66, this);
						eze$SettingTarget1 = egl.eglx.lang.AnyValue.ezeCopyTo(new egl.org.eclipse.edt.rui.widgets.GridLayoutData(), eze$SettingTarget1);
						egl.atLine(this.eze$$fileName,45,1651,7, this);
						eze$SettingTarget1.row = 1;
						egl.atLine(this.eze$$fileName,45,1660,10, this);
						eze$SettingTarget1.column = 1;
						egl.atLine(this.eze$$fileName,46,1677,18, this);
						eze$SettingTarget1.horizontalSpan = 3;
						egl.atLine(this.eze$$fileName,45,1631,66, this);
						eze$LNNTemp1 = egl.eglx.lang.AnyValue.ezeCopyTo(eze$SettingTarget1, eze$LNNTemp1);
					}
					egl.atLine(this.eze$$fileName,45,1618,79, this);
					this.BodyBox.setLayoutData(egl.eglx.lang.convert(egl.eglx.lang.EAny.fromEAny, [eze$LNNTemp1.eze$$clone(),"Torg/eclipse/edt/rui/widgets/GridLayoutData;"]));
					egl.atLine(this.eze$$fileName,46,1699,9, this);
					this.BodyBox.setPadding(8);
					egl.atLine(this.eze$$fileName,47,1715,20, this);
					this.BodyBox.setChildren([egl.eglx.lang.convert(egl.eglx.ui.rui.Widget.fromWidget, [this.Image,"org.eclipse.edt.rui.widgets.Image"])].setType("[Teglx/ui/rui/Widget;"));
					egl.atLine(this.eze$$fileName,49,1761,38, this);
					this.Image.setSrc("E:\\workspace\\pictures\\2.jpg");
					var eze$LNNTemp2 = null;
					{
						var eze$SettingTarget1 = new egl.org.eclipse.edt.rui.widgets.GridLayoutData();
						egl.atLine(this.eze$$fileName,51,1848,66, this);
						eze$SettingTarget1 = egl.eglx.lang.AnyValue.ezeCopyTo(new egl.org.eclipse.edt.rui.widgets.GridLayoutData(), eze$SettingTarget1);
						egl.atLine(this.eze$$fileName,51,1868,7, this);
						eze$SettingTarget1.row = 2;
						egl.atLine(this.eze$$fileName,51,1877,10, this);
						eze$SettingTarget1.column = 1;
						egl.atLine(this.eze$$fileName,52,1894,18, this);
						eze$SettingTarget1.horizontalSpan = 3;
						egl.atLine(this.eze$$fileName,51,1848,66, this);
						eze$LNNTemp2 = egl.eglx.lang.AnyValue.ezeCopyTo(eze$SettingTarget1, eze$LNNTemp2);
					}
					egl.atLine(this.eze$$fileName,51,1835,79, this);
					this.GridLayout1.setLayoutData(egl.eglx.lang.convert(egl.eglx.lang.EAny.fromEAny, [eze$LNNTemp2.eze$$clone(),"Torg/eclipse/edt/rui/widgets/GridLayoutData;"]));
					egl.atLine(this.eze$$fileName,52,1916,15, this);
					this.GridLayout1.setCellPadding(4);
					egl.atLine(this.eze$$fileName,52,1933,8, this);
					this.GridLayout1.setRows(1);
					egl.atLine(this.eze$$fileName,52,1943,11, this);
					this.GridLayout1.setColumns(1);
					egl.atLine(this.eze$$fileName,53,1961,16, this);
					this.GridLayout1.setMarginLeft(190);
					egl.atLine(this.eze$$fileName,54,1984,22, this);
					this.GridLayout1.setChildren([egl.eglx.lang.convert(egl.eglx.ui.rui.Widget.fromWidget, [this.BoxBody,"org.eclipse.edt.rui.widgets.Box"])].setType("[Teglx/ui/rui/Widget;"));
					egl.atLine(this.eze$$fileName,55,2013,21, this);
					this.GridLayout1.setPosition("absolute");
					egl.atLine(this.eze$$fileName,56,2041,7, this);
					this.GridLayout1.setX(-30);
					egl.atLine(this.eze$$fileName,57,2055,7, this);
					this.GridLayout1.setY(180);
					var eze$LNNTemp3 = null;
					{
						var eze$SettingTarget1 = new egl.org.eclipse.edt.rui.widgets.GridLayoutData();
						egl.atLine(this.eze$$fileName,58,2096,41, this);
						eze$SettingTarget1 = egl.eglx.lang.AnyValue.ezeCopyTo(new egl.org.eclipse.edt.rui.widgets.GridLayoutData(), eze$SettingTarget1);
						egl.atLine(this.eze$$fileName,58,2116,7, this);
						eze$SettingTarget1.row = 1;
						egl.atLine(this.eze$$fileName,58,2125,10, this);
						eze$SettingTarget1.column = 1;
						egl.atLine(this.eze$$fileName,58,2096,41, this);
						eze$LNNTemp3 = egl.eglx.lang.AnyValue.ezeCopyTo(eze$SettingTarget1, eze$LNNTemp3);
					}
					egl.atLine(this.eze$$fileName,58,2083,54, this);
					this.BoxBody.setLayoutData(egl.eglx.lang.convert(egl.eglx.lang.EAny.fromEAny, [eze$LNNTemp3.eze$$clone(),"Torg/eclipse/edt/rui/widgets/GridLayoutData;"]));
					egl.atLine(this.eze$$fileName,58,2139,9, this);
					this.BoxBody.setPadding(8);
					egl.atLine(this.eze$$fileName,59,2155,56, this);
					this.BoxBody.setChildren([egl.eglx.lang.convert(egl.eglx.ui.rui.Widget.fromWidget, [this.WelcomeBox,"org.eclipse.edt.rui.widgets.Box"]), egl.eglx.lang.convert(egl.eglx.ui.rui.Widget.fromWidget, [this.LoginBox,"org.eclipse.edt.rui.widgets.Box"]), egl.eglx.lang.convert(egl.eglx.ui.rui.Widget.fromWidget, [this.GreetBox,"org.eclipse.edt.rui.widgets.Box"]), egl.eglx.lang.convert(egl.eglx.ui.rui.Widget.fromWidget, [this.promptBox,"org.eclipse.edt.rui.widgets.Box"])].setType("[Teglx/ui/rui/Widget;"));
					egl.atLine(this.eze$$fileName,60,2218,11, this);
					this.BoxBody.setColumns(1);
					egl.atLine(this.eze$$fileName,61,2253,9, this);
					this.WelcomeBox.setPadding(8);
					egl.atLine(this.eze$$fileName,62,2269,22, this);
					this.WelcomeBox.setChildren([egl.eglx.lang.convert(egl.eglx.ui.rui.Widget.fromWidget, [this.Welcome,"org.eclipse.edt.rui.widgets.TextLabel"])].setType("[Teglx/ui/rui/Widget;"));
					egl.atLine(this.eze$$fileName,63,2318,26, this);
					this.Welcome.setText("\u5c0f\u5b66\u6570\u5b66\u4e2a\u6027\u5316\u667a\u80fd\u6559\u5b66\u7cfb\u7edf\u6b22\u8fce\u60a8\uff01");
					egl.atLine(this.eze$$fileName,64,2351,18, this);
					this.Welcome.setColor("DeepPink");
					egl.atLine(this.eze$$fileName,65,2376,13, this);
					this.Welcome.setFont("\u534e\u6587\u884c\u6977");
					egl.atLine(this.eze$$fileName,66,2396,15, this);
					this.Welcome.setFontSize("40");
					egl.atLine(this.eze$$fileName,67,2418,21, this);
					this.Welcome.setFontWeight("bolder");
					egl.atLine(this.eze$$fileName,68,2461,9, this);
					this.LoginBox.setPadding(8);
					egl.atLine(this.eze$$fileName,69,2477,11, this);
					this.LoginBox.setColumns(1);
					egl.atLine(this.eze$$fileName,70,2495,48, this);
					this.LoginBox.setChildren([egl.eglx.lang.convert(egl.eglx.ui.rui.Widget.fromWidget, [this.logininBox,"org.eclipse.edt.rui.widgets.Box"]), egl.eglx.lang.convert(egl.eglx.ui.rui.Widget.fromWidget, [this.identityBox,"org.eclipse.edt.rui.widgets.Box"]), egl.eglx.lang.convert(egl.eglx.ui.rui.Widget.fromWidget, [this.fieldBox,"org.eclipse.edt.rui.widgets.Box"])].setType("[Teglx/ui/rui/Widget;"));
					egl.atLine(this.eze$$fileName,71,2550,17, this);
					this.LoginBox.setPaddingLeft(100);
					egl.atLine(this.eze$$fileName,72,2591,9, this);
					this.logininBox.setPadding(8);
					egl.atLine(this.eze$$fileName,73,2607,24, this);
					this.logininBox.setChildren([egl.eglx.lang.convert(egl.eglx.ui.rui.Widget.fromWidget, [this.myuser_ui,"org.eclipse.edt.rui.widgets.GridLayout"])].setType("[Teglx/ui/rui/Widget;"));
					egl.atLine(this.eze$$fileName,74,2638,17, this);
					this.logininBox.setPaddingLeft(100);
					egl.atLine(this.eze$$fileName,75,2662,13, this);
					this.logininBox.setWidth("500");
					egl.atLine(this.eze$$fileName,76,2682,11, this);
					this.logininBox.setColumns(1);
					egl.atLine(this.eze$$fileName,77,2712,9, this);
					this.fieldBox.setPadding(8);
					egl.atLine(this.eze$$fileName,78,2725,11, this);
					this.fieldBox.setColumns(2);
					egl.atLine(this.eze$$fileName,79,2740,32, this);
					this.fieldBox.setChildren([egl.eglx.lang.convert(egl.eglx.ui.rui.Widget.fromWidget, [this.LoginIn,"dojo.widgets.DojoButton"]), egl.eglx.lang.convert(egl.eglx.ui.rui.Widget.fromWidget, [this.Register,"dojo.widgets.DojoButton"])].setType("[Teglx/ui/rui/Widget;"));
					egl.atLine(this.eze$$fileName,80,2796,11, this);
					this.LoginIn.setText("\u767b\u9646");
					egl.atLine(this.eze$$fileName,81,2811,13, this);
					this.LoginIn.setFont("\u5fae\u8f6f\u96c5\u9ed1");
					egl.atLine(this.eze$$fileName,82,2828,15, this);
					this.LoginIn.setFontSize("16");
					egl.atLine(this.eze$$fileName,83,2847,17, this);
					this.LoginIn.setPaddingLeft(165);
					egl.atLine(this.eze$$fileName,83,2866,27, this);
					this.LoginIn.getOnClick().appendElement(new egl.egl.jsrt.Delegate(this, egl.client.client.MainHandler.prototype.LoginIn_onClick, ""));
					egl.atLine(this.eze$$fileName,84,2919,11, this);
					this.Register.setText("\u6ce8\u518c");
					egl.atLine(this.eze$$fileName,85,2934,13, this);
					this.Register.setFont("\u5fae\u8f6f\u96c5\u9ed1");
					egl.atLine(this.eze$$fileName,86,2951,15, this);
					this.Register.setFontSize("16");
					egl.atLine(this.eze$$fileName,87,2970,16, this);
					this.Register.setPaddingLeft(20);
					egl.atLine(this.eze$$fileName,87,2988,28, this);
					this.Register.getOnClick().appendElement(new egl.egl.jsrt.Delegate(this, egl.client.client.MainHandler.prototype.Register_onClick, ""));
					egl.atLine(this.eze$$fileName,88,3035,9, this);
					this.GreetBox.setPadding(8);
					egl.atLine(this.eze$$fileName,89,3048,20, this);
					this.GreetBox.setChildren([egl.eglx.lang.convert(egl.eglx.ui.rui.Widget.fromWidget, [this.Greet,"org.eclipse.edt.rui.widgets.TextLabel"])].setType("[Teglx/ui/rui/Widget;"));
					egl.atLine(this.eze$$fileName,90,3072,17, this);
					this.GreetBox.setPaddingLeft(220);
					egl.atLine(this.eze$$fileName,92,3113,11, this);
					this.Greet.setFont("\u5b8b\u4f53");
					egl.atLine(this.eze$$fileName,93,3128,15, this);
					this.Greet.setFontSize("16");
					egl.atLine(this.eze$$fileName,94,3147,14, this);
					this.Greet.setColor("Gold");
					var eze$LNNTemp4 = null;
					{
						var eze$SettingTarget1 = new egl.org.eclipse.edt.rui.widgets.GridLayoutData();
						egl.atLine(this.eze$$fileName,99,3224,91, this);
						eze$SettingTarget1 = egl.eglx.lang.AnyValue.ezeCopyTo(new egl.org.eclipse.edt.rui.widgets.GridLayoutData(), eze$SettingTarget1);
						egl.atLine(this.eze$$fileName,99,3244,7, this);
						eze$SettingTarget1.row = 2;
						egl.atLine(this.eze$$fileName,99,3253,10, this);
						eze$SettingTarget1.column = 2;
						egl.atLine(this.eze$$fileName,100,3267,46, this);
						eze$SettingTarget1.horizontalAlignment = egl.org.eclipse.edt.rui.widgets.GridLayoutLib['$inst'].ALIGN_LEFT;
						egl.atLine(this.eze$$fileName,99,3224,91, this);
						eze$LNNTemp4 = egl.eglx.lang.AnyValue.ezeCopyTo(eze$SettingTarget1, eze$LNNTemp4);
					}
					egl.atLine(this.eze$$fileName,99,3211,104, this);
					this.myuser_ui.setLayoutData(egl.eglx.lang.convert(egl.eglx.lang.EAny.fromEAny, [eze$LNNTemp4.eze$$clone(),"Torg/eclipse/edt/rui/widgets/GridLayoutData;"]));
					egl.atLine(this.eze$$fileName,100,3317,8, this);
					this.myuser_ui.setRows(2);
					egl.atLine(this.eze$$fileName,100,3327,11, this);
					this.myuser_ui.setColumns(2);
					egl.atLine(this.eze$$fileName,100,3340,15, this);
					this.myuser_ui.setCellPadding(4);
					egl.atLine(this.eze$$fileName,100,3357,110, this);
					this.myuser_ui.setChildren([egl.eglx.lang.convert(egl.eglx.ui.rui.Widget.fromWidget, [this.myuser_username_nameLabel,"org.eclipse.edt.rui.widgets.TextLabel"]), egl.eglx.lang.convert(egl.eglx.ui.rui.Widget.fromWidget, [this.myuser_username_field,"dojo.widgets.DojoTextField"]), egl.eglx.lang.convert(egl.eglx.ui.rui.Widget.fromWidget, [this.myuser_password_nameLabel,"org.eclipse.edt.rui.widgets.TextLabel"]), egl.eglx.lang.convert(egl.eglx.ui.rui.Widget.fromWidget, [this.myuser_password_field,"org.eclipse.edt.rui.widgets.PasswordTextField"])].setType("[Teglx/ui/rui/Widget;"));
					egl.atLine(this.eze$$fileName,101,3471,14, this);
					this.myuser_ui.setMarginTop(20);
					egl.atLine(this.eze$$fileName,102,3489,16, this);
					this.myuser_ui.setMarginBottom(5);
					egl.atLine(this.eze$$fileName,104,3549,11, this);
					this.myuser_username_nameLabel.setText("\u7528\u6237\u540d\uff1a");
					var eze$LNNTemp5 = null;
					{
						var eze$SettingTarget1 = new egl.org.eclipse.edt.rui.widgets.GridLayoutData();
						egl.atLine(this.eze$$fileName,104,3576,41, this);
						eze$SettingTarget1 = egl.eglx.lang.AnyValue.ezeCopyTo(new egl.org.eclipse.edt.rui.widgets.GridLayoutData(), eze$SettingTarget1);
						egl.atLine(this.eze$$fileName,104,3597,7, this);
						eze$SettingTarget1.row = 1;
						egl.atLine(this.eze$$fileName,104,3606,10, this);
						eze$SettingTarget1.column = 1;
						egl.atLine(this.eze$$fileName,104,3576,41, this);
						eze$LNNTemp5 = egl.eglx.lang.AnyValue.ezeCopyTo(eze$SettingTarget1, eze$LNNTemp5);
					}
					egl.atLine(this.eze$$fileName,104,3563,54, this);
					this.myuser_username_nameLabel.setLayoutData(egl.eglx.lang.convert(egl.eglx.lang.EAny.fromEAny, [eze$LNNTemp5.eze$$clone(),"Torg/eclipse/edt/rui/widgets/GridLayoutData;"]));
					egl.atLine(this.eze$$fileName,105,3621,13, this);
					this.myuser_username_nameLabel.setFont("\u5fae\u8f6f\u96c5\u9ed1");
					egl.atLine(this.eze$$fileName,106,3638,15, this);
					this.myuser_username_nameLabel.setFontSize("16");
					egl.atLine(this.eze$$fileName,107,3657,21, this);
					this.myuser_username_nameLabel.setFontWeight("bolder");
					var eze$LNNTemp6 = null;
					{
						var eze$SettingTarget1 = new egl.org.eclipse.edt.rui.widgets.GridLayoutData();
						egl.atLine(this.eze$$fileName,108,3733,41, this);
						eze$SettingTarget1 = egl.eglx.lang.AnyValue.ezeCopyTo(new egl.org.eclipse.edt.rui.widgets.GridLayoutData(), eze$SettingTarget1);
						egl.atLine(this.eze$$fileName,108,3754,7, this);
						eze$SettingTarget1.row = 1;
						egl.atLine(this.eze$$fileName,108,3763,10, this);
						eze$SettingTarget1.column = 2;
						egl.atLine(this.eze$$fileName,108,3733,41, this);
						eze$LNNTemp6 = egl.eglx.lang.AnyValue.ezeCopyTo(eze$SettingTarget1, eze$LNNTemp6);
					}
					egl.atLine(this.eze$$fileName,108,3720,54, this);
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
					egl.atLine(this.eze$$fileName,110,3921,39, this);
					this.myuser_username_formField.controller = this.myuser_username_controller;
					egl.atLine(this.eze$$fileName,110,3962,37, this);
					this.myuser_username_formField.nameLabel = this.myuser_username_nameLabel;
					egl.atLine(this.eze$$fileName,112,4042,13, this);
					this.myuser_password_nameLabel.setText("\u5bc6\u7801\uff1a   ");
					var eze$LNNTemp7 = null;
					{
						var eze$SettingTarget1 = new egl.org.eclipse.edt.rui.widgets.GridLayoutData();
						egl.atLine(this.eze$$fileName,112,4071,41, this);
						eze$SettingTarget1 = egl.eglx.lang.AnyValue.ezeCopyTo(new egl.org.eclipse.edt.rui.widgets.GridLayoutData(), eze$SettingTarget1);
						egl.atLine(this.eze$$fileName,112,4092,7, this);
						eze$SettingTarget1.row = 2;
						egl.atLine(this.eze$$fileName,112,4101,10, this);
						eze$SettingTarget1.column = 1;
						egl.atLine(this.eze$$fileName,112,4071,41, this);
						eze$LNNTemp7 = egl.eglx.lang.AnyValue.ezeCopyTo(eze$SettingTarget1, eze$LNNTemp7);
					}
					egl.atLine(this.eze$$fileName,112,4058,54, this);
					this.myuser_password_nameLabel.setLayoutData(egl.eglx.lang.convert(egl.eglx.lang.EAny.fromEAny, [eze$LNNTemp7.eze$$clone(),"Torg/eclipse/edt/rui/widgets/GridLayoutData;"]));
					egl.atLine(this.eze$$fileName,113,4116,13, this);
					this.myuser_password_nameLabel.setFont("\u5fae\u8f6f\u96c5\u9ed1");
					egl.atLine(this.eze$$fileName,114,4133,15, this);
					this.myuser_password_nameLabel.setFontSize("16");
					egl.atLine(this.eze$$fileName,115,4152,21, this);
					this.myuser_password_nameLabel.setFontWeight("bolder");
					var eze$LNNTemp8 = null;
					{
						var eze$SettingTarget1 = new egl.org.eclipse.edt.rui.widgets.GridLayoutData();
						egl.atLine(this.eze$$fileName,116,4232,41, this);
						eze$SettingTarget1 = egl.eglx.lang.AnyValue.ezeCopyTo(new egl.org.eclipse.edt.rui.widgets.GridLayoutData(), eze$SettingTarget1);
						egl.atLine(this.eze$$fileName,116,4253,7, this);
						eze$SettingTarget1.row = 2;
						egl.atLine(this.eze$$fileName,116,4262,10, this);
						eze$SettingTarget1.column = 2;
						egl.atLine(this.eze$$fileName,116,4232,41, this);
						eze$LNNTemp8 = egl.eglx.lang.AnyValue.ezeCopyTo(eze$SettingTarget1, eze$LNNTemp8);
					}
					egl.atLine(this.eze$$fileName,116,4219,54, this);
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
					egl.atLine(this.eze$$fileName,118,4420,39, this);
					this.myuser_password_formField.controller = this.myuser_password_controller;
					egl.atLine(this.eze$$fileName,118,4461,37, this);
					this.myuser_password_formField.nameLabel = this.myuser_password_nameLabel;
					egl.atLine(this.eze$$fileName,120,4529,65, this);
					this.myuser_form.setEntries([this.myuser_username_formField, this.myuser_password_formField].setType("[Torg/eclipse/edt/rui/mvc/FormField;"));
					egl.atLine(this.eze$$fileName,122,4620,9, this);
					this.identityBox.setPadding(8);
					egl.atLine(this.eze$$fileName,123,4633,11, this);
					this.identityBox.setColumns(4);
					egl.atLine(this.eze$$fileName,124,4648,14, this);
					this.identityBox.setChildren((function() { var eze$Temp9 = []; eze$Temp9.setType("[eglx.ui.rui.Widget");
						for (var i = 0; i < 0; i++) {
						eze$Temp9[i] = new egl.eglx.ui.rui.Widget();}
					return eze$Temp9;})());
					egl.atLine(this.eze$$fileName,125,4666,16, this);
					this.identityBox.setPaddingLeft(80);
					egl.atLine(this.eze$$fileName,126,4702,9, this);
					this.promptBox.setPadding(8);
					egl.atLine(this.eze$$fileName,127,4715,21, this);
					this.promptBox.setChildren([egl.eglx.lang.convert(egl.eglx.ui.rui.Widget.fromWidget, [this.prompt,"org.eclipse.edt.rui.widgets.TextLabel"])].setType("[Teglx/ui/rui/Widget;"));
					egl.atLine(this.eze$$fileName,128,4759,17, this);
					this.prompt.setText("\u9996\u6b21\u767b\u9646\u8bf7\u5148\u6ce8\u518c");
					egl.atLine(this.eze$$fileName,129,4780,11, this);
					this.prompt.setFont("\u5b8b\u4f53");
					egl.atLine(this.eze$$fileName,130,4795,15, this);
					this.prompt.setFontSize("18");
					egl.atLine(this.eze$$fileName,131,4814,21, this);
					this.prompt.setFontWeight("bolder");
					egl.atLine(this.eze$$fileName,132,4839,13, this);
					this.prompt.setColor("Red");
					egl.atLine(this.eze$$fileName,133,4856,17, this);
					this.prompt.setPaddingLeft(250);
					egl.atLine(this.eze$$fileName,136,4910,14, this);
					this.Regdialog.title = "\u7528\u6237\u6ce8\u518c";
					egl.atLine(this.eze$$fileName,137,4933,12, this);
					this.Regdialog.setPadding(20);
					egl.atLine(this.eze$$fileName,138,4954,28, this);
					this.Regdialog.setBackgroundColor("AliceBlue");
					egl.atLine(this.eze$$fileName,139,4991,16, this);
					this.Regdialog.draggable = true;
					egl.atLine(this.eze$$fileName,140,5016,20, this);
					this.Regdialog.setChildren([egl.eglx.lang.convert(egl.eglx.ui.rui.Widget.fromWidget, [this.content,"org.eclipse.edt.rui.widgets.Box"])].setType("[Teglx/ui/rui/Widget;"));
					egl.atLine(this.eze$$fileName,143,5068,10, this);
					this.content.setColumns(1);
					egl.atLine(this.eze$$fileName,144,5087,20, this);
					this.content.setChildren([egl.eglx.lang.convert(egl.eglx.ui.rui.Widget.fromWidget, [this.Reginfo,"org.eclipse.edt.rui.widgets.Div"])].setType("[Teglx/ui/rui/Widget;"));
					egl.atLine(this.eze$$fileName,147,5142,10, this);
					this.Reginfo.setPadding(10);
					egl.atLine(this.eze$$fileName,147,5154,9, this);
					this.Reginfo.setWidth(egl.eglx.lang.convert(egl.eglx.lang.EString.fromEInt32, [400]));
					egl.atLine(this.eze$$fileName,148,5167,27, this);
					this.Reginfo.setBackgroundColor("lightBlue");
					var eze$LNNTemp10 = null;
					{
						var eze$SettingTarget1;
						egl.atLine(this.eze$$fileName,150,5230,90, this);
						eze$SettingTarget1 = (function () {
							var eze$Temp11 = new egl.org.eclipse.edt.rui.widgets.Box();
							return eze$Temp11;
						}).call(this);
						egl.atLine(this.eze$$fileName,150,5240,11, this);
						eze$SettingTarget1.setMarginTop(3);
						egl.atLine(this.eze$$fileName,150,5253,11, this);
						eze$SettingTarget1.setColumns(2);
						egl.atLine(this.eze$$fileName,151,5282,37, this);
						eze$SettingTarget1.setChildren([egl.eglx.lang.convert(egl.eglx.ui.rui.Widget.fromWidget, [this.submitButton,"org.eclipse.edt.rui.widgets.Button"]), egl.eglx.lang.convert(egl.eglx.ui.rui.Widget.fromWidget, [this.clearButton,"org.eclipse.edt.rui.widgets.Button"])].setType("[Teglx/ui/rui/Widget;"));
						egl.atLine(this.eze$$fileName,150,5230,90, this);
						eze$LNNTemp10 = eze$SettingTarget1;
					}
					egl.atLine(this.eze$$fileName,149,5198,124, this);
					this.Reginfo.setChildren([egl.eglx.lang.convert(egl.eglx.ui.rui.Widget.fromWidget, [this.acctForm,"org.eclipse.edt.rui.mvc.ValidatingForm"]), egl.eglx.lang.convert(egl.eglx.ui.rui.Widget.fromWidget, [eze$LNNTemp10,"org.eclipse.edt.rui.widgets.Box"])].setType("[Teglx/ui/rui/Widget;"));
					egl.atLine(this.eze$$fileName,154,5355,11, this);
					this.submitButton.setText("\u6ce8\u518c");
					egl.atLine(this.eze$$fileName,154,5368,22, this);
					this.submitButton.getOnClick().appendElement(new egl.egl.jsrt.Delegate(this, egl.client.client.MainHandler.prototype.submitForm, ""));
					egl.atLine(this.eze$$fileName,154,5392,13, this);
					this.submitButton.setMarginLeft(10);
					egl.atLine(this.eze$$fileName,154,5407,15, this);
					this.submitButton.setMarginBottom(10);
					egl.atLine(this.eze$$fileName,155,5448,11, this);
					this.clearButton.setText("\u6e05\u7a7a");
					egl.atLine(this.eze$$fileName,155,5461,21, this);
					this.clearButton.getOnClick().appendElement(new egl.egl.jsrt.Delegate(this, egl.client.client.MainHandler.prototype.clearForm, ""));
					egl.atLine(this.eze$$fileName,155,5484,13, this);
					this.clearButton.setMarginLeft(10);
					egl.atLine(this.eze$$fileName,155,5499,15, this);
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
					egl.atLine(this.eze$$fileName,167,5984,28, this);
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
					egl.atLine(this.eze$$fileName,173,6321,12, this);
					this.acctForm.setMarginTop(10);
					egl.atLine(this.eze$$fileName,174,6337,13, this);
					this.acctForm.setMarginLeft(10);
					var eze$LNNTemp22 = null;
					{
						var eze$SettingTarget1 = new egl.org.eclipse.edt.rui.mvc.FormField();
						egl.atLine(this.eze$$fileName,181,6747,69, this);
						eze$SettingTarget1 = egl.eglx.lang.AnyValue.ezeCopyTo(new egl.org.eclipse.edt.rui.mvc.FormField(), eze$SettingTarget1);
						egl.atLine(this.eze$$fileName,181,6763,19, this);
						eze$SettingTarget1.displayName = "* \u5730\u5740:";
						egl.atLine(this.eze$$fileName,181,6784,30, this);
						eze$SettingTarget1.controller = this.addressController;
						egl.atLine(this.eze$$fileName,181,6747,69, this);
						eze$LNNTemp22 = egl.eglx.lang.AnyValue.ezeCopyTo(eze$SettingTarget1, eze$LNNTemp22);
					}
					var eze$LNNTemp21 = null;
					{
						var eze$SettingTarget1 = new egl.org.eclipse.edt.rui.mvc.FormField();
						egl.atLine(this.eze$$fileName,180,6672,70, this);
						eze$SettingTarget1 = egl.eglx.lang.AnyValue.ezeCopyTo(new egl.org.eclipse.edt.rui.mvc.FormField(), eze$SettingTarget1);
						egl.atLine(this.eze$$fileName,180,6688,19, this);
						eze$SettingTarget1.displayName = "\u51fa\u751f\u65e5\u671f:";
						egl.atLine(this.eze$$fileName,180,6709,31, this);
						eze$SettingTarget1.controller = this.birthdayController;
						egl.atLine(this.eze$$fileName,180,6672,70, this);
						eze$LNNTemp21 = egl.eglx.lang.AnyValue.ezeCopyTo(eze$SettingTarget1, eze$LNNTemp21);
					}
					var eze$LNNTemp20 = null;
					{
						var eze$SettingTarget1 = new egl.org.eclipse.edt.rui.mvc.FormField();
						egl.atLine(this.eze$$fileName,179,6595,72, this);
						eze$SettingTarget1 = egl.eglx.lang.AnyValue.ezeCopyTo(new egl.org.eclipse.edt.rui.mvc.FormField(), eze$SettingTarget1);
						egl.atLine(this.eze$$fileName,179,6611,21, this);
						eze$SettingTarget1.displayName = "* \u771f\u5b9e\u59d3\u540d:";
						egl.atLine(this.eze$$fileName,179,6634,31, this);
						eze$SettingTarget1.controller = this.realNameController;
						egl.atLine(this.eze$$fileName,179,6595,72, this);
						eze$LNNTemp20 = egl.eglx.lang.AnyValue.ezeCopyTo(eze$SettingTarget1, eze$LNNTemp20);
					}
					var eze$LNNTemp19 = null;
					{
						var eze$SettingTarget1 = new egl.org.eclipse.edt.rui.mvc.FormField();
						egl.atLine(this.eze$$fileName,178,6520,70, this);
						eze$SettingTarget1 = egl.eglx.lang.AnyValue.ezeCopyTo(new egl.org.eclipse.edt.rui.mvc.FormField(), eze$SettingTarget1);
						egl.atLine(this.eze$$fileName,178,6536,22, this);
						eze$SettingTarget1.displayName = "* Email:";
						egl.atLine(this.eze$$fileName,178,6560,28, this);
						eze$SettingTarget1.controller = this.emailController;
						egl.atLine(this.eze$$fileName,178,6520,70, this);
						eze$LNNTemp19 = egl.eglx.lang.AnyValue.ezeCopyTo(eze$SettingTarget1, eze$LNNTemp19);
					}
					var eze$LNNTemp18 = null;
					{
						var eze$SettingTarget1 = new egl.org.eclipse.edt.rui.mvc.FormField();
						egl.atLine(this.eze$$fileName,177,6445,70, this);
						eze$SettingTarget1 = egl.eglx.lang.AnyValue.ezeCopyTo(new egl.org.eclipse.edt.rui.mvc.FormField(), eze$SettingTarget1);
						egl.atLine(this.eze$$fileName,177,6461,19, this);
						eze$SettingTarget1.displayName = "* \u5bc6\u7801:";
						egl.atLine(this.eze$$fileName,177,6482,31, this);
						eze$SettingTarget1.controller = this.passwordController;
						egl.atLine(this.eze$$fileName,177,6445,70, this);
						eze$LNNTemp18 = egl.eglx.lang.AnyValue.ezeCopyTo(eze$SettingTarget1, eze$LNNTemp18);
					}
					var eze$LNNTemp17 = null;
					{
						var eze$SettingTarget1 = new egl.org.eclipse.edt.rui.mvc.FormField();
						egl.atLine(this.eze$$fileName,176,6369,71, this);
						eze$SettingTarget1 = egl.eglx.lang.AnyValue.ezeCopyTo(new egl.org.eclipse.edt.rui.mvc.FormField(), eze$SettingTarget1);
						egl.atLine(this.eze$$fileName,176,6385,20, this);
						eze$SettingTarget1.displayName = "* \u7528\u6237\u540d:";
						egl.atLine(this.eze$$fileName,176,6407,31, this);
						eze$SettingTarget1.controller = this.usernameController;
						egl.atLine(this.eze$$fileName,176,6369,71, this);
						eze$LNNTemp17 = egl.eglx.lang.AnyValue.ezeCopyTo(eze$SettingTarget1, eze$LNNTemp17);
					}
					egl.atLine(this.eze$$fileName,175,6354,465, this);
					this.acctForm.setEntries([eze$LNNTemp17, eze$LNNTemp18, eze$LNNTemp19, eze$LNNTemp20, eze$LNNTemp21, eze$LNNTemp22].setType("[Torg/eclipse/edt/rui/mvc/FormField;"));
					egl.atLine(this.eze$$fileName,40,1377,28, this);
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
				try { egl.enter("start",this,arguments);
					egl.atLine(this.eze$$fileName,185,6854,24, this);
					if (!egl.debugg) egl.leave();
				} finally {
					if (!egl.debugg){
					} else { egl.leave(); }
				}
			}
			,
			"LoginIn_onClick": function(e) {
				try { egl.enter("LoginIn_onClick",this,arguments);
					egl.addLocalFunctionVariable("e", e, "eglx.ui.rui.Event", "e");
					egl.atLine(this.eze$$fileName,188,6930,170, this);
					if (((((this.myuser.username) == "yanxue") && ((this.myuser.password) == "123456")))) {
						try{egl.enterBlock();
							egl.atLine(this.eze$$fileName,189,7000,30, this);
							this.Greet.setText("Hello yanxue");
						}finally{egl.exitBlock();}
					}
					else {
						try{egl.enterBlock();
							egl.atLine(this.eze$$fileName,191,7055,36, this);
							this.Greet.setText("Please login again");
						}finally{egl.exitBlock();}
					}
					egl.atLine(this.eze$$fileName,187,6887,221, this);
					if (!egl.debugg) egl.leave();
				} finally {
					if (!egl.debugg){
					} else { egl.leave(); }
				}
			}
			,
			"myuser_form_Submit": function(event) {
				try { egl.enter("myuser_form_Submit",this,arguments);
					egl.addLocalFunctionVariable("event", event, "eglx.ui.rui.Event", "event");
					egl.atLine(this.eze$$fileName,196,7167,211, this);
					if (this.myuser_form.isValid()) {
						try{egl.enterBlock();
							egl.atLine(this.eze$$fileName,197,7199,21, this);
							this.myuser_form.commit();
						}finally{egl.exitBlock();}
					}
					egl.atLine(this.eze$$fileName,195,7118,268, this);
					if (!egl.debugg) egl.leave();
				} finally {
					if (!egl.debugg){
					} else { egl.leave(); }
				}
			}
			,
			"myuser_form_Publish": function(event) {
				try { egl.enter("myuser_form_Publish",this,arguments);
					egl.addLocalFunctionVariable("event", event, "eglx.ui.rui.Event", "event");
					egl.atLine(this.eze$$fileName,207,7446,22, this);
					this.myuser_form.publish();
					egl.atLine(this.eze$$fileName,208,7474,23, this);
					this.myuser_form_Validate();
					egl.atLine(this.eze$$fileName,206,7396,109, this);
					if (!egl.debugg) egl.leave();
				} finally {
					if (!egl.debugg){
					} else { egl.leave(); }
				}
			}
			,
			"myuser_form_Validate": function() {
				try { egl.enter("myuser_form_Validate",this,arguments);
					egl.atLine(this.eze$$fileName,212,7552,22, this);
					this.myuser_form.isValid();
					egl.atLine(this.eze$$fileName,211,7515,67, this);
					if (!egl.debugg) egl.leave();
				} finally {
					if (!egl.debugg){
					} else { egl.leave(); }
				}
			}
			,
			"Register_onClick": function(e) {
				try { egl.enter("Register_onClick",this,arguments);
					egl.addLocalFunctionVariable("e", e, "eglx.ui.rui.Event", "e");
					egl.atLine(this.eze$$fileName,216,7636,23, this);
					this.Regdialog.showDialog();
					egl.atLine(this.eze$$fileName,215,7592,75, this);
					if (!egl.debugg) egl.leave();
				} finally {
					if (!egl.debugg){
					} else { egl.leave(); }
				}
			}
			,
			"handleValidStateChange_myuser": function(widget, valid) {
				try { egl.enter("handleValidStateChange_myuser",this,arguments);
					egl.addLocalFunctionVariable("widget", widget, "eglx.ui.rui.Widget", "widget");
					egl.addLocalFunctionVariable("valid", valid, "eglx.lang.EBoolean", "valid");
					egl.atLine(this.eze$$fileName,220,7758,345, this);
					{
						try{egl.enterBlock();
							var n = 0;
							egl.addLocalFunctionVariable("n", n, "eglx.lang.EInt", "n");
							for (n = this.myuser_form.getEntries().getSize(); ((n >= 1)); n = ((n - 1))) {
								egl.setLocalFunctionVariable("n", n, "eglx.lang.EInt");
								try{egl.enterBlock();
									var entry = null;
									egl.addLocalFunctionVariable("entry", entry, "org.eclipse.edt.rui.mvc.FormField", "entry");
									egl.atLine(this.eze$$fileName,221,7849,22, this);
									entry = egl.eglx.lang.AnyValue.ezeCopyTo(egl.getElement(this.myuser_form.getEntries(), egl.eglx.lang.EInt32.ezeCast({eze$$value : n, eze$$signature : "I;"}, false) - 1), entry);
									egl.setLocalFunctionVariable("entry", entry, "org.eclipse.edt.rui.mvc.FormField");
									egl.atLine(this.eze$$fileName,222,7879,215, this);
									if ((egl.eglx.lang.EAny.equals(egl.eglx.lang.convert(egl.eglx.lang.EAny.fromEAny, [entry.controller.getView(),"Teglx/ui/rui/Widget;"]), egl.eglx.lang.convert(egl.eglx.lang.EAny.fromEAny, [egl.eglx.ui.rui.View,"Teglx/ui/rui/View;"])))) {
										try{egl.enterBlock();
											egl.atLine(this.eze$$fileName,223,7920,164, this);
											if (valid) {
												try{egl.enterBlock();
												}finally{egl.exitBlock();}
											}
											else {
												try{egl.enterBlock();
													var msg;
													egl.addLocalFunctionVariable("msg", msg, "eglx.lang.EString", "msg");
													egl.atLine(this.eze$$fileName,226,8000,34, this);
													msg = entry.controller.getErrorMessage();
													egl.setLocalFunctionVariable("msg", msg, "eglx.lang.EString");
												}finally{egl.exitBlock();}
											}
										}finally{egl.exitBlock();}
									}
								}finally{egl.exitBlock();}
								egl.atLine(this.eze$$fileName,220,7758,345, this);
							}
						}
						finally{egl.exitBlock();}
					}
					egl.atLine(this.eze$$fileName,219,7677,434, this);
					if (!egl.debugg) egl.leave();
				} finally {
					if (!egl.debugg){
					} else { egl.leave(); }
				}
			}
			,
			"submitForm": function(e) {
				try { egl.enter("submitForm",this,arguments);
					egl.addLocalFunctionVariable("e", e, "eglx.ui.rui.Event", "e");
					egl.atLine(this.eze$$fileName,234,8159,805, this);
					if (this.acctForm.isValid()) {
						try{egl.enterBlock();
							egl.atLine(this.eze$$fileName,235,8185,18, this);
							this.acctForm.commit();
							var eze$LNNTemp31 = null;
							{
								var eze$SettingTarget1;
								egl.atLine(this.eze$$fileName,255,8885,67, this);
								eze$SettingTarget1 = (function () {
									var eze$Temp32 = new egl.org.eclipse.edt.rui.widgets.Button();
									return eze$Temp32;
								}).call(this);
								egl.atLine(this.eze$$fileName,255,8898,11, this);
								eze$SettingTarget1.setText("OK");
								egl.atLine(this.eze$$fileName,255,8911,17, this);
								eze$SettingTarget1.getOnClick().appendElement(new egl.egl.jsrt.Delegate(this, egl.client.client.MainHandler.prototype.reset, ""));
								egl.atLine(this.eze$$fileName,255,8930,9, this);
								eze$SettingTarget1.setWidth(egl.eglx.lang.convert(egl.eglx.lang.EString.fromEInt32, [100]));
								egl.atLine(this.eze$$fileName,255,8941,9, this);
								eze$SettingTarget1.setMargin(10);
								egl.atLine(this.eze$$fileName,255,8885,67, this);
								eze$LNNTemp31 = eze$SettingTarget1;
							}
							var eze$LNNTemp30 = null;
							var eze$LNNTemp42 = null;
							{
								var eze$SettingTarget2;
								egl.atLine(this.eze$$fileName,253,8818,53, this);
								eze$SettingTarget2 = (function () {
									var eze$Temp43 = new egl.org.eclipse.edt.rui.widgets.TextLabel();
									return eze$Temp43;
								}).call(this);
								egl.atLine(this.eze$$fileName,253,8834,20, this);
								eze$SettingTarget2.setText(this.account.address);
								egl.atLine(this.eze$$fileName,253,8856,13, this);
								eze$SettingTarget2.setMarginLeft(10);
								egl.atLine(this.eze$$fileName,253,8818,53, this);
								eze$LNNTemp42 = eze$SettingTarget2;
							}
							var eze$LNNTemp41 = null;
							{
								var eze$SettingTarget2;
								egl.atLine(this.eze$$fileName,252,8783,28, this);
								eze$SettingTarget2 = (function () {
									var eze$Temp44 = new egl.org.eclipse.edt.rui.widgets.TextLabel();
									return eze$Temp44;
								}).call(this);
								egl.atLine(this.eze$$fileName,252,8799,10, this);
								eze$SettingTarget2.setText("\u5730\u5740:");
								egl.atLine(this.eze$$fileName,252,8783,28, this);
								eze$LNNTemp41 = eze$SettingTarget2;
							}
							var eze$LNNTemp40 = null;
							{
								var eze$SettingTarget2;
								egl.atLine(this.eze$$fileName,251,8722,54, this);
								eze$SettingTarget2 = (function () {
									var eze$Temp45 = new egl.org.eclipse.edt.rui.widgets.TextLabel();
									return eze$Temp45;
								}).call(this);
								egl.atLine(this.eze$$fileName,251,8738,21, this);
								eze$SettingTarget2.setText(egl.eglx.lang.convert(egl.eglx.lang.EString.fromEDate, [this.account.birthday]));
								egl.atLine(this.eze$$fileName,251,8761,13, this);
								eze$SettingTarget2.setMarginLeft(10);
								egl.atLine(this.eze$$fileName,251,8722,54, this);
								eze$LNNTemp40 = eze$SettingTarget2;
							}
							var eze$LNNTemp39 = null;
							{
								var eze$SettingTarget2;
								egl.atLine(this.eze$$fileName,250,8685,30, this);
								eze$SettingTarget2 = (function () {
									var eze$Temp46 = new egl.org.eclipse.edt.rui.widgets.TextLabel();
									return eze$Temp46;
								}).call(this);
								egl.atLine(this.eze$$fileName,250,8701,12, this);
								eze$SettingTarget2.setText("\u51fa\u751f\u65e5\u671f:");
								egl.atLine(this.eze$$fileName,250,8685,30, this);
								eze$LNNTemp39 = eze$SettingTarget2;
							}
							var eze$LNNTemp38 = null;
							{
								var eze$SettingTarget2;
								egl.atLine(this.eze$$fileName,249,8624,54, this);
								eze$SettingTarget2 = (function () {
									var eze$Temp47 = new egl.org.eclipse.edt.rui.widgets.TextLabel();
									return eze$Temp47;
								}).call(this);
								egl.atLine(this.eze$$fileName,249,8640,21, this);
								eze$SettingTarget2.setText(this.account.realName);
								egl.atLine(this.eze$$fileName,249,8663,13, this);
								eze$SettingTarget2.setMarginLeft(10);
								egl.atLine(this.eze$$fileName,249,8624,54, this);
								eze$LNNTemp38 = eze$SettingTarget2;
							}
							var eze$LNNTemp37 = null;
							{
								var eze$SettingTarget2;
								egl.atLine(this.eze$$fileName,248,8587,30, this);
								eze$SettingTarget2 = (function () {
									var eze$Temp48 = new egl.org.eclipse.edt.rui.widgets.TextLabel();
									return eze$Temp48;
								}).call(this);
								egl.atLine(this.eze$$fileName,248,8603,12, this);
								eze$SettingTarget2.setText("\u771f\u5b9e\u59d3\u540d:");
								egl.atLine(this.eze$$fileName,248,8587,30, this);
								eze$LNNTemp37 = eze$SettingTarget2;
							}
							var eze$LNNTemp36 = null;
							{
								var eze$SettingTarget2;
								egl.atLine(this.eze$$fileName,247,8529,51, this);
								eze$SettingTarget2 = (function () {
									var eze$Temp49 = new egl.org.eclipse.edt.rui.widgets.TextLabel();
									return eze$Temp49;
								}).call(this);
								egl.atLine(this.eze$$fileName,247,8545,18, this);
								eze$SettingTarget2.setText(this.account.email);
								egl.atLine(this.eze$$fileName,247,8565,13, this);
								eze$SettingTarget2.setMarginLeft(10);
								egl.atLine(this.eze$$fileName,247,8529,51, this);
								eze$LNNTemp36 = eze$SettingTarget2;
							}
							var eze$LNNTemp35 = null;
							{
								var eze$SettingTarget2;
								egl.atLine(this.eze$$fileName,246,8491,31, this);
								eze$SettingTarget2 = (function () {
									var eze$Temp50 = new egl.org.eclipse.edt.rui.widgets.TextLabel();
									return eze$Temp50;
								}).call(this);
								egl.atLine(this.eze$$fileName,246,8507,13, this);
								eze$SettingTarget2.setText("Email:");
								egl.atLine(this.eze$$fileName,246,8491,31, this);
								eze$LNNTemp35 = eze$SettingTarget2;
							}
							var eze$LNNTemp34 = null;
							{
								var eze$SettingTarget2;
								egl.atLine(this.eze$$fileName,245,8430,54, this);
								eze$SettingTarget2 = (function () {
									var eze$Temp51 = new egl.org.eclipse.edt.rui.widgets.TextLabel();
									return eze$Temp51;
								}).call(this);
								egl.atLine(this.eze$$fileName,245,8446,21, this);
								eze$SettingTarget2.setText(this.account.username);
								egl.atLine(this.eze$$fileName,245,8469,13, this);
								eze$SettingTarget2.setMarginLeft(10);
								egl.atLine(this.eze$$fileName,245,8430,54, this);
								eze$LNNTemp34 = eze$SettingTarget2;
							}
							var eze$LNNTemp33 = null;
							{
								var eze$SettingTarget2;
								egl.atLine(this.eze$$fileName,244,8394,29, this);
								eze$SettingTarget2 = (function () {
									var eze$Temp52 = new egl.org.eclipse.edt.rui.widgets.TextLabel();
									return eze$Temp52;
								}).call(this);
								egl.atLine(this.eze$$fileName,244,8410,11, this);
								eze$SettingTarget2.setText("\u7528\u6237\u540d:");
								egl.atLine(this.eze$$fileName,244,8394,29, this);
								eze$LNNTemp33 = eze$SettingTarget2;
							}
							{
								var eze$SettingTarget1;
								egl.atLine(this.eze$$fileName,243,8342,537, this);
								eze$SettingTarget1 = (function () {
									var eze$Temp53 = new egl.org.eclipse.edt.rui.widgets.Box();
									return eze$Temp53;
								}).call(this);
								egl.atLine(this.eze$$fileName,243,8352,9, this);
								eze$SettingTarget1.setColumns(2);
								egl.atLine(this.eze$$fileName,243,8363,13, this);
								eze$SettingTarget1.setMarginLeft(10);
								egl.atLine(this.eze$$fileName,243,8378,499, this);
								eze$SettingTarget1.setChildren([egl.eglx.lang.convert(egl.eglx.ui.rui.Widget.fromWidget, [eze$LNNTemp33,"org.eclipse.edt.rui.widgets.TextLabel"]), egl.eglx.lang.convert(egl.eglx.ui.rui.Widget.fromWidget, [eze$LNNTemp34,"org.eclipse.edt.rui.widgets.TextLabel"]), egl.eglx.lang.convert(egl.eglx.ui.rui.Widget.fromWidget, [eze$LNNTemp35,"org.eclipse.edt.rui.widgets.TextLabel"]), egl.eglx.lang.convert(egl.eglx.ui.rui.Widget.fromWidget, [eze$LNNTemp36,"org.eclipse.edt.rui.widgets.TextLabel"]), egl.eglx.lang.convert(egl.eglx.ui.rui.Widget.fromWidget, [eze$LNNTemp37,"org.eclipse.edt.rui.widgets.TextLabel"]), egl.eglx.lang.convert(egl.eglx.ui.rui.Widget.fromWidget, [eze$LNNTemp38,"org.eclipse.edt.rui.widgets.TextLabel"]), egl.eglx.lang.convert(egl.eglx.ui.rui.Widget.fromWidget, [eze$LNNTemp39,"org.eclipse.edt.rui.widgets.TextLabel"]), egl.eglx.lang.convert(egl.eglx.ui.rui.Widget.fromWidget, [eze$LNNTemp40,"org.eclipse.edt.rui.widgets.TextLabel"]), egl.eglx.lang.convert(egl.eglx.ui.rui.Widget.fromWidget, [eze$LNNTemp41,"org.eclipse.edt.rui.widgets.TextLabel"]), egl.eglx.lang.convert(egl.eglx.ui.rui.Widget.fromWidget, [eze$LNNTemp42,"org.eclipse.edt.rui.widgets.TextLabel"])].setType("[Teglx/ui/rui/Widget;"));
								egl.atLine(this.eze$$fileName,243,8342,537, this);
								eze$LNNTemp30 = eze$SettingTarget1;
							}
							var eze$LNNTemp29 = null;
							{
								var eze$SettingTarget1;
								egl.atLine(this.eze$$fileName,237,8235,101, this);
								eze$SettingTarget1 = (function () {
									var eze$Temp54 = new egl.org.eclipse.edt.rui.widgets.TextLabel();
									return eze$Temp54;
								}).call(this);
								egl.atLine(this.eze$$fileName,238,8256,16, this);
								eze$SettingTarget1.setText("\u8d26\u6237\u521b\u5efa\u6210\u529f!");
								egl.atLine(this.eze$$fileName,239,8279,11, this);
								eze$SettingTarget1.setColor("red");
								egl.atLine(this.eze$$fileName,240,8297,17, this);
								eze$SettingTarget1.setFontWeight("bold");
								egl.atLine(this.eze$$fileName,241,8321,9, this);
								eze$SettingTarget1.setMargin(10);
								egl.atLine(this.eze$$fileName,237,8235,101, this);
								eze$LNNTemp29 = eze$SettingTarget1;
							}
							egl.atLine(this.eze$$fileName,236,8210,748, this);
							this.Reginfo.setChildren([egl.eglx.lang.convert(egl.eglx.ui.rui.Widget.fromWidget, [eze$LNNTemp29,"org.eclipse.edt.rui.widgets.TextLabel"]), egl.eglx.lang.convert(egl.eglx.ui.rui.Widget.fromWidget, [eze$LNNTemp30,"org.eclipse.edt.rui.widgets.Box"]), egl.eglx.lang.convert(egl.eglx.ui.rui.Widget.fromWidget, [eze$LNNTemp31,"org.eclipse.edt.rui.widgets.Button"])].setType("[Teglx/ui/rui/Widget;"));
						}finally{egl.exitBlock();}
					}
					egl.atLine(this.eze$$fileName,233,8121,855, this);
					if (!egl.debugg) egl.leave();
				} finally {
					if (!egl.debugg){
					} else { egl.leave(); }
				}
			}
			,
			"clearForm": function(e) {
				try { egl.enter("clearForm",this,arguments);
					egl.addLocalFunctionVariable("e", e, "eglx.ui.rui.Event", "e");
					egl.atLine(this.eze$$fileName,261,9024,31, this);
					this.account = egl.eglx.lang.AnyValue.ezeCopyTo(new egl.client.client.accountRecords(), this.account);
					egl.atLine(this.eze$$fileName,262,9058,19, this);
					this.acctForm.publish();
					egl.atLine(this.eze$$fileName,260,8986,99, this);
					if (!egl.debugg) egl.leave();
				} finally {
					if (!egl.debugg){
					} else { egl.leave(); }
				}
			}
			,
			"validateEmail": function(input) {
				try { egl.enter("validateEmail",this,arguments);
					egl.addLocalFunctionVariable("input", input, "eglx.lang.EString", "input");
					var i;
					egl.addLocalFunctionVariable("i", i, "eglx.lang.EInt", "i");
					egl.atLine(this.eze$$fileName,266,9165,26, this);
					i = egl.eglx.rbd.StrLib['$inst'].indexOf_2_S_S(input, "@");
					egl.setLocalFunctionVariable("i", i, "eglx.lang.EInt");
					egl.atLine(this.eze$$fileName,267,9195,114, this);
					if (((i > 0))) {
						try{egl.enterBlock();
							egl.atLine(this.eze$$fileName,268,9208,34, this);
							i = egl.eglx.rbd.StrLib['$inst'].indexOf_3_S_S_I(input, ".", i);
							egl.setLocalFunctionVariable("i", i, "eglx.lang.EInt");
							egl.atLine(this.eze$$fileName,269,9246,57, this);
							if (((i < egl.eglx.rbd.StrLib['$inst'].characterLen(input)))) {
								try{egl.enterBlock();
									egl.atLine(this.eze$$fileName,270,9285,11, this);
									if (!egl.debugg) egl.leave();
									return "";
								}finally{egl.exitBlock();}
							}
						}finally{egl.exitBlock();}
					}
					egl.atLine(this.eze$$fileName,265,9095,265, this);
					if (!egl.debugg) egl.leave();
				} finally {
					if (!egl.debugg){
					} else { egl.leave(); }
				}
			}
			,
			"reset": function(e) {
				try { egl.enter("reset",this,arguments);
					egl.addLocalFunctionVariable("e", e, "eglx.ui.rui.Event", "e");
					egl.atLine(this.eze$$fileName,277,9401,15, this);
					this.clearForm(e);
					var eze$LNNTemp57 = null;
					{
						var eze$SettingTarget1;
						egl.atLine(this.eze$$fileName,278,9450,71, this);
						eze$SettingTarget1 = (function () {
							var eze$Temp58 = new egl.org.eclipse.edt.rui.widgets.Box();
							return eze$Temp58;
						}).call(this);
						egl.atLine(this.eze$$fileName,278,9460,11, this);
						eze$SettingTarget1.setMarginTop(3);
						egl.atLine(this.eze$$fileName,278,9473,46, this);
						eze$SettingTarget1.setChildren([egl.eglx.lang.convert(egl.eglx.ui.rui.Widget.fromWidget, [this.submitButton,"org.eclipse.edt.rui.widgets.Button"]), egl.eglx.lang.convert(egl.eglx.ui.rui.Widget.fromWidget, [this.clearButton,"org.eclipse.edt.rui.widgets.Button"])].setType("[Teglx/ui/rui/Widget;"));
						egl.atLine(this.eze$$fileName,278,9450,71, this);
						eze$LNNTemp57 = eze$SettingTarget1;
					}
					egl.atLine(this.eze$$fileName,278,9419,105, this);
					this.Reginfo.setChildren([egl.eglx.lang.convert(egl.eglx.ui.rui.Widget.fromWidget, [this.acctForm,"org.eclipse.edt.rui.mvc.ValidatingForm"]), egl.eglx.lang.convert(egl.eglx.ui.rui.Widget.fromWidget, [eze$LNNTemp57,"org.eclipse.edt.rui.widgets.Box"])].setType("[Teglx/ui/rui/Widget;"));
					egl.atLine(this.eze$$fileName,276,9370,159, this);
					if (!egl.debugg) egl.leave();
				} finally {
					if (!egl.debugg){
					} else { egl.leave(); }
				}
			}
			,
			"chooseDrink": function(event) {
				try { egl.enter("chooseDrink",this,arguments);
					egl.addLocalFunctionVariable("event", event, "eglx.ui.rui.Event", "event");
					egl.atLine(this.eze$$fileName,284,9539,50, this);
					if (!egl.debugg) egl.leave();
				} finally {
					if (!egl.debugg){
					} else { egl.leave(); }
				}
			}
			,
			"toString": function() {
				return "[MainHandler]";
			}
			,
			"eze$$getName": function() {
				return "MainHandler";
			}
			,
			"eze$$getChildVariables": function() {
				var eze$$parent = this;
				return [
				{name: "GridLayoutLib", value : egl.org.eclipse.edt.rui.widgets.GridLayoutLib['$inst'], type : "org.eclipse.edt.rui.widgets.GridLayoutLib", jsName : "egl.org.eclipse.edt.rui.widgets.GridLayoutLib['$inst']"},
				{name: "StrLib", value : egl.eglx.rbd.StrLib['$inst'], type : "eglx.rbd.StrLib", jsName : "egl.eglx.rbd.StrLib['$inst']"},
				{name: "InternalValidators", value : egl.org.eclipse.edt.rui.mvc.InternalValidators['$inst'], type : "org.eclipse.edt.rui.mvc.InternalValidators", jsName : "egl.org.eclipse.edt.rui.mvc.InternalValidators['$inst']"},
				{name: "InternalDateFormatter", value : egl.org.eclipse.edt.rui.mvc.InternalDateFormatter['$inst'], type : "org.eclipse.edt.rui.mvc.InternalDateFormatter", jsName : "egl.org.eclipse.edt.rui.mvc.InternalDateFormatter['$inst']"},
				{name: "ui", value : eze$$parent.ui, type : "org.eclipse.edt.rui.widgets.GridLayout", jsName : "ui"},
				{name: "BodyBox", value : eze$$parent.BodyBox, type : "org.eclipse.edt.rui.widgets.Box", jsName : "BodyBox"},
				{name: "Image", value : eze$$parent.Image, type : "org.eclipse.edt.rui.widgets.Image", jsName : "Image"},
				{name: "GridLayout1", value : eze$$parent.GridLayout1, type : "org.eclipse.edt.rui.widgets.GridLayout", jsName : "GridLayout1"},
				{name: "BoxBody", value : eze$$parent.BoxBody, type : "org.eclipse.edt.rui.widgets.Box", jsName : "BoxBody"},
				{name: "WelcomeBox", value : eze$$parent.WelcomeBox, type : "org.eclipse.edt.rui.widgets.Box", jsName : "WelcomeBox"},
				{name: "Welcome", value : eze$$parent.Welcome, type : "org.eclipse.edt.rui.widgets.TextLabel", jsName : "Welcome"},
				{name: "LoginBox", value : eze$$parent.LoginBox, type : "org.eclipse.edt.rui.widgets.Box", jsName : "LoginBox"},
				{name: "logininBox", value : eze$$parent.logininBox, type : "org.eclipse.edt.rui.widgets.Box", jsName : "logininBox"},
				{name: "fieldBox", value : eze$$parent.fieldBox, type : "org.eclipse.edt.rui.widgets.Box", jsName : "fieldBox"},
				{name: "LoginIn", value : eze$$parent.LoginIn, type : "dojo.widgets.DojoButton", jsName : "LoginIn"},
				{name: "Register", value : eze$$parent.Register, type : "dojo.widgets.DojoButton", jsName : "Register"},
				{name: "GreetBox", value : eze$$parent.GreetBox, type : "org.eclipse.edt.rui.widgets.Box", jsName : "GreetBox"},
				{name: "Greet", value : eze$$parent.Greet, type : "org.eclipse.edt.rui.widgets.TextLabel", jsName : "Greet"},
				{name: "myuser", value : eze$$parent.myuser, type : "client.client.user", jsName : "myuser"},
				{name: "myuser_ui", value : eze$$parent.myuser_ui, type : "org.eclipse.edt.rui.widgets.GridLayout", jsName : "myuser_ui"},
				{name: "myuser_username_nameLabel", value : eze$$parent.myuser_username_nameLabel, type : "org.eclipse.edt.rui.widgets.TextLabel", jsName : "myuser_username_nameLabel"},
				{name: "myuser_username_field", value : eze$$parent.myuser_username_field, type : "dojo.widgets.DojoTextField", jsName : "myuser_username_field"},
				{name: "myuser_username_controller", value : eze$$parent.myuser_username_controller, type : "org.eclipse.edt.rui.mvc.Controller", jsName : "myuser_username_controller"},
				{name: "myuser_username_formField", value : eze$$parent.myuser_username_formField, type : "org.eclipse.edt.rui.mvc.FormField", jsName : "myuser_username_formField"},
				{name: "myuser_password_nameLabel", value : eze$$parent.myuser_password_nameLabel, type : "org.eclipse.edt.rui.widgets.TextLabel", jsName : "myuser_password_nameLabel"},
				{name: "myuser_password_field", value : eze$$parent.myuser_password_field, type : "org.eclipse.edt.rui.widgets.PasswordTextField", jsName : "myuser_password_field"},
				{name: "myuser_password_controller", value : eze$$parent.myuser_password_controller, type : "org.eclipse.edt.rui.mvc.Controller", jsName : "myuser_password_controller"},
				{name: "myuser_password_formField", value : eze$$parent.myuser_password_formField, type : "org.eclipse.edt.rui.mvc.FormField", jsName : "myuser_password_formField"},
				{name: "myuser_form", value : eze$$parent.myuser_form, type : "org.eclipse.edt.rui.mvc.FormManager", jsName : "myuser_form"},
				{name: "identityBox", value : eze$$parent.identityBox, type : "org.eclipse.edt.rui.widgets.Box", jsName : "identityBox"},
				{name: "promptBox", value : eze$$parent.promptBox, type : "org.eclipse.edt.rui.widgets.Box", jsName : "promptBox"},
				{name: "prompt", value : eze$$parent.prompt, type : "org.eclipse.edt.rui.widgets.TextLabel", jsName : "prompt"},
				{name: "Regdialog", value : eze$$parent.Regdialog, type : "dojo.widgets.DojoDialog", jsName : "Regdialog"},
				{name: "content", value : eze$$parent.content, type : "org.eclipse.edt.rui.widgets.Box", jsName : "content"},
				{name: "Reginfo", value : eze$$parent.Reginfo, type : "org.eclipse.edt.rui.widgets.Div", jsName : "Reginfo"},
				{name: "submitButton", value : eze$$parent.submitButton, type : "org.eclipse.edt.rui.widgets.Button", jsName : "submitButton"},
				{name: "clearButton", value : eze$$parent.clearButton, type : "org.eclipse.edt.rui.widgets.Button", jsName : "clearButton"},
				{name: "account", value : eze$$parent.account, type : "client.client.accountRecords", jsName : "account"},
				{name: "usernameField", value : eze$$parent.usernameField, type : "org.eclipse.edt.rui.widgets.TextField", jsName : "usernameField"},
				{name: "passwordField", value : eze$$parent.passwordField, type : "org.eclipse.edt.rui.widgets.PasswordTextField", jsName : "passwordField"},
				{name: "emailField", value : eze$$parent.emailField, type : "org.eclipse.edt.rui.widgets.TextField", jsName : "emailField"},
				{name: "realNameField", value : eze$$parent.realNameField, type : "org.eclipse.edt.rui.widgets.TextField", jsName : "realNameField"},
				{name: "birthdayField", value : eze$$parent.birthdayField, type : "org.eclipse.edt.rui.widgets.TextField", jsName : "birthdayField"},
				{name: "addressField", value : eze$$parent.addressField, type : "org.eclipse.edt.rui.widgets.TextField", jsName : "addressField"},
				{name: "usernameController", value : eze$$parent.usernameController, type : "org.eclipse.edt.rui.mvc.Controller", jsName : "usernameController"},
				{name: "passwordController", value : eze$$parent.passwordController, type : "org.eclipse.edt.rui.mvc.Controller", jsName : "passwordController"},
				{name: "emailController", value : eze$$parent.emailController, type : "org.eclipse.edt.rui.mvc.Controller", jsName : "emailController"},
				{name: "realNameController", value : eze$$parent.realNameController, type : "org.eclipse.edt.rui.mvc.Controller", jsName : "realNameController"},
				{name: "birthdayController", value : eze$$parent.birthdayController, type : "org.eclipse.edt.rui.mvc.Controller", jsName : "birthdayController"},
				{name: "addressController", value : eze$$parent.addressController, type : "org.eclipse.edt.rui.mvc.Controller", jsName : "addressController"},
				{name: "acctForm", value : eze$$parent.acctForm, type : "org.eclipse.edt.rui.mvc.ValidatingForm", jsName : "acctForm"},
				{name: "document", value : eze$$parent.document, type : "eglx.ui.rui.Document", jsName : "document"},
				{name: "initialUI", value : eze$$parent.initialUI, type : "eglx.lang.EList<eglx.ui.rui.Widget>", jsName : "!initialUI"}
				];
			}
		}
	);
});
