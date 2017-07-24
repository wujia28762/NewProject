define(["org/eclipse/edt/rui/widgets/Box", "org/eclipse/edt/rui/widgets/HyperLink", "org/eclipse/edt/rui/widgets/Div", "ezekw$$dojo/widgets/eze$$DojoTitlePane", "eglx/ui/rui/eze$$View", "org/eclipse/edt/rui/widgets/GridLayoutData", "org/eclipse/edt/rui/widgets/GridLayout", "org/eclipse/edt/rui/widgets/TextLabel", "org/eclipse/edt/rui/widgets/GridLayoutLib"],function(){
	egl.loadCSS("css/NewProject.css");
	egl.defineRUIHandler("client.client", "Education", {
		"eze$$fileName" : "client/client/Education.egl",
		"eze$$runtimePropertiesFile" : "client/client/Education",
			"constructor": function() {
				this.start();
			}
			,
			"eze$$setEmpty": function() {
				new egl.org.eclipse.edt.rui.widgets.GridLayoutLib();
				this.ui = new egl.org.eclipse.edt.rui.widgets.GridLayout();
				this.Box = new egl.org.eclipse.edt.rui.widgets.Box();
				this.TextLabel = new egl.org.eclipse.edt.rui.widgets.TextLabel();
				this.GridLayout = new egl.org.eclipse.edt.rui.widgets.GridLayout();
				this.Boxbody = new egl.org.eclipse.edt.rui.widgets.Box();
				this.BoxNewProduct = new egl.org.eclipse.edt.rui.widgets.Box();
				this.NewProduct = new egl.dojo.widgets.DojoTitlePane();
				this.NewProduct1 = new egl.org.eclipse.edt.rui.widgets.HyperLink();
				this.NewProduct2 = new egl.org.eclipse.edt.rui.widgets.HyperLink();
				this.NewProduct3 = new egl.org.eclipse.edt.rui.widgets.HyperLink();
				this.NewProduct4 = new egl.org.eclipse.edt.rui.widgets.HyperLink();
				this.NewProduct5 = new egl.org.eclipse.edt.rui.widgets.HyperLink();
				this.NewProductMore = new egl.org.eclipse.edt.rui.widgets.HyperLink();
				this.Product = new egl.dojo.widgets.DojoTitlePane();
				this.Product1 = new egl.org.eclipse.edt.rui.widgets.HyperLink();
				this.Product2 = new egl.org.eclipse.edt.rui.widgets.HyperLink();
				this.Product3 = new egl.org.eclipse.edt.rui.widgets.HyperLink();
				this.Product4 = new egl.org.eclipse.edt.rui.widgets.HyperLink();
				this.ProductMore = new egl.org.eclipse.edt.rui.widgets.HyperLink();
				this.Box1 = new egl.org.eclipse.edt.rui.widgets.Box();
				this.ProductOne = new egl.dojo.widgets.DojoTitlePane();
				this.ProductOne1 = new egl.org.eclipse.edt.rui.widgets.HyperLink();
				this.ProductOne2 = new egl.org.eclipse.edt.rui.widgets.HyperLink();
				this.ProductOne3 = new egl.org.eclipse.edt.rui.widgets.HyperLink();
				this.ProductOne4 = new egl.org.eclipse.edt.rui.widgets.HyperLink();
				this.ProductOneMore = new egl.org.eclipse.edt.rui.widgets.HyperLink();
			}
			,
			"eze$$setInitial": function() {
				this.eze$$setEmpty();
				this.ui.setColumns(1);
				this.ui.setRows(2);
				this.ui.setCellPadding(4);
				this.ui.setChildren([egl.eglx.lang.convert(egl.eglx.ui.rui.Widget.fromWidget, [this.GridLayout,"org.eclipse.edt.rui.widgets.GridLayout"]), egl.eglx.lang.convert(egl.eglx.ui.rui.Widget.fromWidget, [this.Box,"org.eclipse.edt.rui.widgets.Box"])].setType("[Teglx/ui/rui/Widget;"));
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
				this.TextLabel.setText("\u6559\u80b2\u8d44\u8baf");
				this.TextLabel.setColor("YellowGreen");
				this.TextLabel.setFont("\u534e\u6587\u884c\u6977");
				this.TextLabel.setFontSize("25");
				this.TextLabel.setPaddingLeft(400);
				var eze$LNNTemp2 = null;
				{
					var eze$SettingTarget1 = new egl.org.eclipse.edt.rui.widgets.GridLayoutData();
					eze$SettingTarget1 = egl.eglx.lang.AnyValue.ezeCopyTo(new egl.org.eclipse.edt.rui.widgets.GridLayoutData(), eze$SettingTarget1);
					eze$SettingTarget1.row = 2;
					eze$SettingTarget1.column = 1;
					eze$LNNTemp2 = egl.eglx.lang.AnyValue.ezeCopyTo(eze$SettingTarget1, eze$LNNTemp2);
				}
				this.GridLayout.setLayoutData(egl.eglx.lang.convert(egl.eglx.lang.EAny.fromEAny, [eze$LNNTemp2.eze$$clone(),"Torg/eclipse/edt/rui/widgets/GridLayoutData;"]));
				this.GridLayout.setCellPadding(4);
				this.GridLayout.setRows(1);
				this.GridLayout.setColumns(3);
				this.GridLayout.setChildren([egl.eglx.lang.convert(egl.eglx.ui.rui.Widget.fromWidget, [this.Box1,"org.eclipse.edt.rui.widgets.Box"]), egl.eglx.lang.convert(egl.eglx.ui.rui.Widget.fromWidget, [this.BoxNewProduct,"org.eclipse.edt.rui.widgets.Box"]), egl.eglx.lang.convert(egl.eglx.ui.rui.Widget.fromWidget, [this.Boxbody,"org.eclipse.edt.rui.widgets.Box"])].setType("[Teglx/ui/rui/Widget;"));
				var eze$LNNTemp3 = null;
				{
					var eze$SettingTarget1 = new egl.org.eclipse.edt.rui.widgets.GridLayoutData();
					eze$SettingTarget1 = egl.eglx.lang.AnyValue.ezeCopyTo(new egl.org.eclipse.edt.rui.widgets.GridLayoutData(), eze$SettingTarget1);
					eze$SettingTarget1.row = 1;
					eze$SettingTarget1.column = 1;
					eze$SettingTarget1.verticalAlignment = egl.org.eclipse.edt.rui.widgets.GridLayoutLib['$inst'].VALIGN_TOP;
					eze$SettingTarget1.horizontalAlignment = egl.org.eclipse.edt.rui.widgets.GridLayoutLib['$inst'].ALIGN_RIGHT;
					eze$LNNTemp3 = egl.eglx.lang.AnyValue.ezeCopyTo(eze$SettingTarget1, eze$LNNTemp3);
				}
				this.Boxbody.setLayoutData(egl.eglx.lang.convert(egl.eglx.lang.EAny.fromEAny, [eze$LNNTemp3.eze$$clone(),"Torg/eclipse/edt/rui/widgets/GridLayoutData;"]));
				this.Boxbody.setPadding(8);
				this.Boxbody.setChildren([egl.eglx.lang.convert(egl.eglx.ui.rui.Widget.fromWidget, [this.Product,"dojo.widgets.DojoTitlePane"])].setType("[Teglx/ui/rui/Widget;"));
				this.Boxbody.setWidth("300");
				var eze$LNNTemp4 = null;
				{
					var eze$SettingTarget1 = new egl.org.eclipse.edt.rui.widgets.GridLayoutData();
					eze$SettingTarget1 = egl.eglx.lang.AnyValue.ezeCopyTo(new egl.org.eclipse.edt.rui.widgets.GridLayoutData(), eze$SettingTarget1);
					eze$SettingTarget1.row = 1;
					eze$SettingTarget1.column = 2;
					eze$SettingTarget1.verticalAlignment = egl.org.eclipse.edt.rui.widgets.GridLayoutLib['$inst'].VALIGN_TOP;
					eze$SettingTarget1.horizontalAlignment = egl.org.eclipse.edt.rui.widgets.GridLayoutLib['$inst'].ALIGN_RIGHT;
					eze$LNNTemp4 = egl.eglx.lang.AnyValue.ezeCopyTo(eze$SettingTarget1, eze$LNNTemp4);
				}
				this.BoxNewProduct.setLayoutData(egl.eglx.lang.convert(egl.eglx.lang.EAny.fromEAny, [eze$LNNTemp4.eze$$clone(),"Torg/eclipse/edt/rui/widgets/GridLayoutData;"]));
				this.BoxNewProduct.setPadding(8);
				this.BoxNewProduct.setChildren([egl.eglx.lang.convert(egl.eglx.ui.rui.Widget.fromWidget, [this.NewProduct,"dojo.widgets.DojoTitlePane"])].setType("[Teglx/ui/rui/Widget;"));
				this.BoxNewProduct.setWidth("300");
				this.NewProduct.title = "\u6559\u80b2\u5934\u6761";
				this.NewProduct.setOpen(true);
				this.NewProduct.duration = 1000;
				this.NewProduct.setWidth("300");
				var eze$LNNTemp5 = null;
				{
					var eze$SettingTarget1;
					eze$SettingTarget1 = (function () {
						var eze$Temp6 = new egl.org.eclipse.edt.rui.widgets.Div();
						return eze$Temp6;
					}).call(this);
					eze$SettingTarget1.setChildren([egl.eglx.lang.convert(egl.eglx.ui.rui.Widget.fromWidget, [this.NewProduct1,"org.eclipse.edt.rui.widgets.HyperLink"]), egl.eglx.lang.convert(egl.eglx.ui.rui.Widget.fromWidget, [this.NewProduct2,"org.eclipse.edt.rui.widgets.HyperLink"]), egl.eglx.lang.convert(egl.eglx.ui.rui.Widget.fromWidget, [this.NewProduct3,"org.eclipse.edt.rui.widgets.HyperLink"]), egl.eglx.lang.convert(egl.eglx.ui.rui.Widget.fromWidget, [this.NewProduct4,"org.eclipse.edt.rui.widgets.HyperLink"]), egl.eglx.lang.convert(egl.eglx.ui.rui.Widget.fromWidget, [this.NewProduct5,"org.eclipse.edt.rui.widgets.HyperLink"]), egl.eglx.lang.convert(egl.eglx.ui.rui.Widget.fromWidget, [this.NewProductMore,"org.eclipse.edt.rui.widgets.HyperLink"])].setType("[Teglx/ui/rui/Widget;"));
					eze$LNNTemp5 = eze$SettingTarget1;
				}
				this.NewProduct.setChildren([egl.eglx.lang.convert(egl.eglx.ui.rui.Widget.fromWidget, [eze$LNNTemp5,"org.eclipse.edt.rui.widgets.Div"])].setType("[Teglx/ui/rui/Widget;"));
				this.NewProduct.setFont("\u5fae\u8f6f\u96c5\u9ed1");
				this.NewProduct.setFontSize("14");
				this.NewProduct1.setText("\u5a92\u4f53\uff1a\u8ba9\u5b69\u5b50\u8fdc\u79bb\u201c\u6bd2\u8dd1\u9053\u201d\u8fd8\u9760\u6cd5\u5f8b\u53d1\u5a01\uff01");
				this.NewProduct1.setHref("http://www.zhly.cn/education/content/index/id/12031");
				this.NewProduct2.setText("\u7f8e\u56fd\u5927\u5b66\u5165\u5b66\u8003\u8bd5ACT\u9898\u5916\u6cc4 \u53d6\u6d88\u9999\u6e2f\u97e9\u56fd\u8003\u8bd5");
				this.NewProduct2.setHref("http://www.zhly.cn/education/content/index/id/12028");
				this.NewProduct3.setText("\u6559\u80b2\u90e8\uff1a\u91cd\u70b9\u6559\u80b2\u5355\u4f4d\u9886\u5bfc\u4efb\u5185\u81f3\u5c11\u5ba1\u8ba1\u4e00\u6b21");
				this.NewProduct3.setHref("http://www.zhly.cn/education/content/index/id/12024");
				this.NewProduct4.setText("\u5317\u4eac\u5e02\u6559\u59d4\u53eb\u505c\u501f\u201c\u65e9\u57f9\u73ed\u201d\u540d\u4e49\u9009\u62d4\u8003\u8bd5");
				this.NewProduct4.setHref("http://www.zhly.cn/education/content/index/id/12021");
				this.NewProduct5.setText("\u7981\u6b62\u5728\u804c\u6559\u5e08\u6709\u507f\u5728\u7ebf\u6388\u8bfe\uff1f\u6559\u80b2\u90e8\uff1a\u5c1a\u5728\u7814\u7a76\u4e2d");
				this.NewProduct5.setHref("http://www.zhly.cn/education/content/index/id/12015");
				this.NewProductMore.setText("\u4e86\u89e3\u66f4\u591a");
				this.NewProductMore.setHref("\u4e86\u89e3\u66f4\u591a");
				this.NewProductMore.setMarginTop(10);
				this.Product.title = "\u672c\u5468\u63a8\u8350";
				this.Product.setOpen(true);
				this.Product.duration = 1000;
				this.Product.setWidth("300");
				var eze$LNNTemp7 = null;
				{
					var eze$SettingTarget1;
					eze$SettingTarget1 = (function () {
						var eze$Temp8 = new egl.org.eclipse.edt.rui.widgets.Div();
						return eze$Temp8;
					}).call(this);
					eze$SettingTarget1.setChildren([egl.eglx.lang.convert(egl.eglx.ui.rui.Widget.fromWidget, [this.Product1,"org.eclipse.edt.rui.widgets.HyperLink"]), egl.eglx.lang.convert(egl.eglx.ui.rui.Widget.fromWidget, [this.Product2,"org.eclipse.edt.rui.widgets.HyperLink"]), egl.eglx.lang.convert(egl.eglx.ui.rui.Widget.fromWidget, [this.Product3,"org.eclipse.edt.rui.widgets.HyperLink"]), egl.eglx.lang.convert(egl.eglx.ui.rui.Widget.fromWidget, [this.Product4,"org.eclipse.edt.rui.widgets.HyperLink"]), egl.eglx.lang.convert(egl.eglx.ui.rui.Widget.fromWidget, [this.ProductMore,"org.eclipse.edt.rui.widgets.HyperLink"])].setType("[Teglx/ui/rui/Widget;"));
					eze$LNNTemp7 = eze$SettingTarget1;
				}
				this.Product.setChildren([egl.eglx.lang.convert(egl.eglx.ui.rui.Widget.fromWidget, [eze$LNNTemp7,"org.eclipse.edt.rui.widgets.Div"])].setType("[Teglx/ui/rui/Widget;"));
				this.Product.setFont("\u5fae\u8f6f\u96c5\u9ed1");
				this.Product.setFontSize("14");
				this.Product1.setText("\u6559\u80b2\u6cd5\u4fee\u8ba2\uff1a\u8fdd\u89c4\u62db\u751f\u5b66\u6821\u6700\u9ad8\u53ef\u64a4\u9500\u62db\u751f\u8d44\u683c");
				this.Product1.setHref("http://www.zhly.cn/education/content/index/id/11928");
				this.Product2.setText("\u79d1\u666e\u77e5\u8bc6\uff1a\u4e13\u5bb6\u6559\u4f60\u907f\u5f00\u7a7a\u6c14\u6c61\u67d3\u768410\u4e2a\u5b9e\u7528\u826f\u65b9");
				this.Product2.setHref("http://www.zhly.cn/education/content/index/id/11931#p=1");
				this.Product3.setText("\u5386\u53f2\u6545\u4e8b\uff1a\u6bdb\u6cfd\u4e1c\u52e4\u5b66\u6545\u4e8b");
				this.Product3.setHref("http://www.zhly.cn/education/content/index/id/11932");
				this.Product4.setText("\u6784\u5efa\u6559\u80b2\u53d1\u5c55\u9884\u8b66\u673a\u5236\u5927\u6709\u5fc5\u8981");
				this.Product4.setHref("http://www.zhly.cn/education/content/index/id/11875");
				this.ProductMore.setText("\u4e86\u89e3\u66f4\u591a");
				this.ProductMore.setHref("\u4e86\u89e3\u66f4\u591a");
				this.ProductMore.setMarginTop(10);
				var eze$LNNTemp9 = null;
				{
					var eze$SettingTarget1 = new egl.org.eclipse.edt.rui.widgets.GridLayoutData();
					eze$SettingTarget1 = egl.eglx.lang.AnyValue.ezeCopyTo(new egl.org.eclipse.edt.rui.widgets.GridLayoutData(), eze$SettingTarget1);
					eze$SettingTarget1.row = 1;
					eze$SettingTarget1.column = 3;
					eze$SettingTarget1.verticalAlignment = egl.org.eclipse.edt.rui.widgets.GridLayoutLib['$inst'].VALIGN_TOP;
					eze$SettingTarget1.horizontalAlignment = egl.org.eclipse.edt.rui.widgets.GridLayoutLib['$inst'].ALIGN_RIGHT;
					eze$LNNTemp9 = egl.eglx.lang.AnyValue.ezeCopyTo(eze$SettingTarget1, eze$LNNTemp9);
				}
				this.Box1.setLayoutData(egl.eglx.lang.convert(egl.eglx.lang.EAny.fromEAny, [eze$LNNTemp9.eze$$clone(),"Torg/eclipse/edt/rui/widgets/GridLayoutData;"]));
				this.Box1.setPadding(8);
				this.Box1.setChildren([egl.eglx.lang.convert(egl.eglx.ui.rui.Widget.fromWidget, [this.ProductOne,"dojo.widgets.DojoTitlePane"])].setType("[Teglx/ui/rui/Widget;"));
				this.Box1.setWidth("300");
				this.ProductOne.title = "\u793e\u4f1a\u767e\u6001";
				this.ProductOne.setOpen(true);
				this.ProductOne.duration = 1000;
				this.ProductOne.setWidth("300");
				var eze$LNNTemp10 = null;
				{
					var eze$SettingTarget1;
					eze$SettingTarget1 = (function () {
						var eze$Temp11 = new egl.org.eclipse.edt.rui.widgets.Div();
						return eze$Temp11;
					}).call(this);
					eze$SettingTarget1.setChildren([egl.eglx.lang.convert(egl.eglx.ui.rui.Widget.fromWidget, [this.ProductOne1,"org.eclipse.edt.rui.widgets.HyperLink"]), egl.eglx.lang.convert(egl.eglx.ui.rui.Widget.fromWidget, [this.ProductOne2,"org.eclipse.edt.rui.widgets.HyperLink"]), egl.eglx.lang.convert(egl.eglx.ui.rui.Widget.fromWidget, [this.ProductOne3,"org.eclipse.edt.rui.widgets.HyperLink"]), egl.eglx.lang.convert(egl.eglx.ui.rui.Widget.fromWidget, [this.ProductOne4,"org.eclipse.edt.rui.widgets.HyperLink"]), egl.eglx.lang.convert(egl.eglx.ui.rui.Widget.fromWidget, [this.ProductOneMore,"org.eclipse.edt.rui.widgets.HyperLink"])].setType("[Teglx/ui/rui/Widget;"));
					eze$LNNTemp10 = eze$SettingTarget1;
				}
				this.ProductOne.setChildren([egl.eglx.lang.convert(egl.eglx.ui.rui.Widget.fromWidget, [eze$LNNTemp10,"org.eclipse.edt.rui.widgets.Div"])].setType("[Teglx/ui/rui/Widget;"));
				this.ProductOne.setFont("\u5fae\u8f6f\u96c5\u9ed1");
				this.ProductOne.setFontSize("14");
				this.ProductOne1.setText(" 9\u5c81\u5973\u5b69\u7acb19\u6761\u5bb6\u89c4:\u7238\u7238\u6bcf\u665a\u53ea\u80fd\u73a9\u4e00\u5c0f\u65f6\u624b\u673a");
				this.ProductOne1.setHref("http://www.zhly.cn/education/content/index/id/12030");
				this.ProductOne2.setText("\u6559\u80b2\u90e8\u516c\u5b89\u90e8\u4e25\u67e5\u201c\u9ed1\u6821\u8f66\u201d \u519c\u6751\u8981\u56e0\u5730\u5236\u5b9c");
				this.ProductOne2.setHref("http://www.zhly.cn/education/content/index/id/12019");
				this.ProductOne3.setText(" \u6b66\u6c493000\u591a\u5c0f\u5b66\u751f\u96c6\u4f53\u6570\u843d\u6210\u4eba\u73a9\u624b\u673a\uff1a\u6ca1\u5b8c\u6ca1\u4e86");
				this.ProductOne3.setHref("http://www.zhly.cn/education/content/index/id/12016");
				this.ProductOne4.setText("3\u5c81\u513f\u7ae5\u516c\u4ea4\u8f66\u5185\u653e\u97ad\u70ae \u6bcd\u4eb2\u5fd9\u6253\u7535\u8bdd\u653e\u4efb\u4e0d\u7ba1");
				this.ProductOne4.setHref("http://www.zhly.cn/education/content/index/id/11982");
				this.ProductOneMore.setText("\u4e86\u89e3\u66f4\u591a");
				this.ProductOneMore.setHref("\u4e86\u89e3\u66f4\u591a");
				this.ProductOneMore.setMarginTop(10);
				this.initialUI = [egl.eglx.lang.convert(egl.eglx.ui.rui.Widget.fromWidget, [this.ui,"org.eclipse.edt.rui.widgets.GridLayout"])].setType("[Teglx/ui/rui/Widget;");
			}
			,
			"eze$$clone": function() {
				var ezert$$1 = this;
				var ezert$$2 = new egl.client.client.Education();
				ezert$$2.ui = ezert$$1.ui === null ? null : ezert$$1.ui.eze$$clone();
				ezert$$2.Box = ezert$$1.Box === null ? null : ezert$$1.Box.eze$$clone();
				ezert$$2.TextLabel = ezert$$1.TextLabel === null ? null : ezert$$1.TextLabel.eze$$clone();
				ezert$$2.GridLayout = ezert$$1.GridLayout === null ? null : ezert$$1.GridLayout.eze$$clone();
				ezert$$2.Boxbody = ezert$$1.Boxbody === null ? null : ezert$$1.Boxbody.eze$$clone();
				ezert$$2.BoxNewProduct = ezert$$1.BoxNewProduct === null ? null : ezert$$1.BoxNewProduct.eze$$clone();
				ezert$$2.NewProduct = ezert$$1.NewProduct === null ? null : ezert$$1.NewProduct;
				ezert$$2.NewProduct1 = ezert$$1.NewProduct1 === null ? null : ezert$$1.NewProduct1.eze$$clone();
				ezert$$2.NewProduct2 = ezert$$1.NewProduct2 === null ? null : ezert$$1.NewProduct2.eze$$clone();
				ezert$$2.NewProduct3 = ezert$$1.NewProduct3 === null ? null : ezert$$1.NewProduct3.eze$$clone();
				ezert$$2.NewProduct4 = ezert$$1.NewProduct4 === null ? null : ezert$$1.NewProduct4.eze$$clone();
				ezert$$2.NewProduct5 = ezert$$1.NewProduct5 === null ? null : ezert$$1.NewProduct5.eze$$clone();
				ezert$$2.NewProductMore = ezert$$1.NewProductMore === null ? null : ezert$$1.NewProductMore.eze$$clone();
				ezert$$2.Product = ezert$$1.Product === null ? null : ezert$$1.Product;
				ezert$$2.Product1 = ezert$$1.Product1 === null ? null : ezert$$1.Product1.eze$$clone();
				ezert$$2.Product2 = ezert$$1.Product2 === null ? null : ezert$$1.Product2.eze$$clone();
				ezert$$2.Product3 = ezert$$1.Product3 === null ? null : ezert$$1.Product3.eze$$clone();
				ezert$$2.Product4 = ezert$$1.Product4 === null ? null : ezert$$1.Product4.eze$$clone();
				ezert$$2.ProductMore = ezert$$1.ProductMore === null ? null : ezert$$1.ProductMore.eze$$clone();
				ezert$$2.Box1 = ezert$$1.Box1 === null ? null : ezert$$1.Box1.eze$$clone();
				ezert$$2.ProductOne = ezert$$1.ProductOne === null ? null : ezert$$1.ProductOne;
				ezert$$2.ProductOne1 = ezert$$1.ProductOne1 === null ? null : ezert$$1.ProductOne1.eze$$clone();
				ezert$$2.ProductOne2 = ezert$$1.ProductOne2 === null ? null : ezert$$1.ProductOne2.eze$$clone();
				ezert$$2.ProductOne3 = ezert$$1.ProductOne3 === null ? null : ezert$$1.ProductOne3.eze$$clone();
				ezert$$2.ProductOne4 = ezert$$1.ProductOne4 === null ? null : ezert$$1.ProductOne4.eze$$clone();
				ezert$$2.ProductOneMore = ezert$$1.ProductOneMore === null ? null : ezert$$1.ProductOneMore.eze$$clone();
				return ezert$$2;
			}
			,
			"eze$$getFieldSignatures": function() {
				if(this.fieldSigs === undefined){
					this.fieldSigs = [
					{name: "ui", sig: "org.eclipse.edt.rui.widgets.GridLayout"},
					{name: "Box", sig: "org.eclipse.edt.rui.widgets.Box"},
					{name: "TextLabel", sig: "org.eclipse.edt.rui.widgets.TextLabel"},
					{name: "GridLayout", sig: "org.eclipse.edt.rui.widgets.GridLayout"},
					{name: "Boxbody", sig: "org.eclipse.edt.rui.widgets.Box"},
					{name: "BoxNewProduct", sig: "org.eclipse.edt.rui.widgets.Box"},
					{name: "NewProduct", sig: "dojo.widgets.DojoTitlePane"},
					{name: "NewProduct1", sig: "org.eclipse.edt.rui.widgets.HyperLink"},
					{name: "NewProduct2", sig: "org.eclipse.edt.rui.widgets.HyperLink"},
					{name: "NewProduct3", sig: "org.eclipse.edt.rui.widgets.HyperLink"},
					{name: "NewProduct4", sig: "org.eclipse.edt.rui.widgets.HyperLink"},
					{name: "NewProduct5", sig: "org.eclipse.edt.rui.widgets.HyperLink"},
					{name: "NewProductMore", sig: "org.eclipse.edt.rui.widgets.HyperLink"},
					{name: "Product", sig: "dojo.widgets.DojoTitlePane"},
					{name: "Product1", sig: "org.eclipse.edt.rui.widgets.HyperLink"},
					{name: "Product2", sig: "org.eclipse.edt.rui.widgets.HyperLink"},
					{name: "Product3", sig: "org.eclipse.edt.rui.widgets.HyperLink"},
					{name: "Product4", sig: "org.eclipse.edt.rui.widgets.HyperLink"},
					{name: "ProductMore", sig: "org.eclipse.edt.rui.widgets.HyperLink"},
					{name: "Box1", sig: "org.eclipse.edt.rui.widgets.Box"},
					{name: "ProductOne", sig: "dojo.widgets.DojoTitlePane"},
					{name: "ProductOne1", sig: "org.eclipse.edt.rui.widgets.HyperLink"},
					{name: "ProductOne2", sig: "org.eclipse.edt.rui.widgets.HyperLink"},
					{name: "ProductOne3", sig: "org.eclipse.edt.rui.widgets.HyperLink"},
					{name: "ProductOne4", sig: "org.eclipse.edt.rui.widgets.HyperLink"},
					{name: "ProductOneMore", sig: "org.eclipse.edt.rui.widgets.HyperLink"}];
				}
				return this.fieldSigs;
			}
			,
			"eze$$getAnnotations": function() {
				if(this.annotations === undefined){
					this.annotations = {};
					this.annotations["XMLRootElement"] = new egl.eglx.xml.binding.annotation.XMLRootElement("Education", null, false);
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
					this.fieldInfos[3] =new egl.eglx.services.FieldInfo("GridLayout", "GridLayout", "org.eclipse.edt.rui.widgets.GridLayout", egl.org.eclipse.edt.rui.widgets.GridLayout, annotations);
					annotations = {};
					annotations["XMLStyle"] = new egl.eglx.xml.binding.annotation.XMLElement("Boxbody", null, false, false);
					annotations["JsonName"] = new egl.eglx.json.JsonName("Boxbody");
					this.fieldInfos[4] =new egl.eglx.services.FieldInfo("Boxbody", "Boxbody", "org.eclipse.edt.rui.widgets.Box", egl.org.eclipse.edt.rui.widgets.Box, annotations);
					annotations = {};
					annotations["XMLStyle"] = new egl.eglx.xml.binding.annotation.XMLElement("BoxNewProduct", null, false, false);
					annotations["JsonName"] = new egl.eglx.json.JsonName("BoxNewProduct");
					this.fieldInfos[5] =new egl.eglx.services.FieldInfo("BoxNewProduct", "BoxNewProduct", "org.eclipse.edt.rui.widgets.Box", egl.org.eclipse.edt.rui.widgets.Box, annotations);
					annotations = {};
					annotations["XMLStyle"] = new egl.eglx.xml.binding.annotation.XMLElement("NewProduct1", null, false, false);
					annotations["JsonName"] = new egl.eglx.json.JsonName("NewProduct1");
					this.fieldInfos[7] =new egl.eglx.services.FieldInfo("NewProduct1", "NewProduct1", "org.eclipse.edt.rui.widgets.HyperLink", egl.org.eclipse.edt.rui.widgets.HyperLink, annotations);
					annotations = {};
					annotations["XMLStyle"] = new egl.eglx.xml.binding.annotation.XMLElement("NewProduct2", null, false, false);
					annotations["JsonName"] = new egl.eglx.json.JsonName("NewProduct2");
					this.fieldInfos[8] =new egl.eglx.services.FieldInfo("NewProduct2", "NewProduct2", "org.eclipse.edt.rui.widgets.HyperLink", egl.org.eclipse.edt.rui.widgets.HyperLink, annotations);
					annotations = {};
					annotations["XMLStyle"] = new egl.eglx.xml.binding.annotation.XMLElement("NewProduct3", null, false, false);
					annotations["JsonName"] = new egl.eglx.json.JsonName("NewProduct3");
					this.fieldInfos[9] =new egl.eglx.services.FieldInfo("NewProduct3", "NewProduct3", "org.eclipse.edt.rui.widgets.HyperLink", egl.org.eclipse.edt.rui.widgets.HyperLink, annotations);
					annotations = {};
					annotations["XMLStyle"] = new egl.eglx.xml.binding.annotation.XMLElement("NewProduct4", null, false, false);
					annotations["JsonName"] = new egl.eglx.json.JsonName("NewProduct4");
					this.fieldInfos[10] =new egl.eglx.services.FieldInfo("NewProduct4", "NewProduct4", "org.eclipse.edt.rui.widgets.HyperLink", egl.org.eclipse.edt.rui.widgets.HyperLink, annotations);
					annotations = {};
					annotations["XMLStyle"] = new egl.eglx.xml.binding.annotation.XMLElement("NewProduct5", null, false, false);
					annotations["JsonName"] = new egl.eglx.json.JsonName("NewProduct5");
					this.fieldInfos[11] =new egl.eglx.services.FieldInfo("NewProduct5", "NewProduct5", "org.eclipse.edt.rui.widgets.HyperLink", egl.org.eclipse.edt.rui.widgets.HyperLink, annotations);
					annotations = {};
					annotations["XMLStyle"] = new egl.eglx.xml.binding.annotation.XMLElement("NewProductMore", null, false, false);
					annotations["JsonName"] = new egl.eglx.json.JsonName("NewProductMore");
					this.fieldInfos[12] =new egl.eglx.services.FieldInfo("NewProductMore", "NewProductMore", "org.eclipse.edt.rui.widgets.HyperLink", egl.org.eclipse.edt.rui.widgets.HyperLink, annotations);
					annotations = {};
					annotations["XMLStyle"] = new egl.eglx.xml.binding.annotation.XMLElement("Product1", null, false, false);
					annotations["JsonName"] = new egl.eglx.json.JsonName("Product1");
					this.fieldInfos[14] =new egl.eglx.services.FieldInfo("Product1", "Product1", "org.eclipse.edt.rui.widgets.HyperLink", egl.org.eclipse.edt.rui.widgets.HyperLink, annotations);
					annotations = {};
					annotations["XMLStyle"] = new egl.eglx.xml.binding.annotation.XMLElement("Product2", null, false, false);
					annotations["JsonName"] = new egl.eglx.json.JsonName("Product2");
					this.fieldInfos[15] =new egl.eglx.services.FieldInfo("Product2", "Product2", "org.eclipse.edt.rui.widgets.HyperLink", egl.org.eclipse.edt.rui.widgets.HyperLink, annotations);
					annotations = {};
					annotations["XMLStyle"] = new egl.eglx.xml.binding.annotation.XMLElement("Product3", null, false, false);
					annotations["JsonName"] = new egl.eglx.json.JsonName("Product3");
					this.fieldInfos[16] =new egl.eglx.services.FieldInfo("Product3", "Product3", "org.eclipse.edt.rui.widgets.HyperLink", egl.org.eclipse.edt.rui.widgets.HyperLink, annotations);
					annotations = {};
					annotations["XMLStyle"] = new egl.eglx.xml.binding.annotation.XMLElement("Product4", null, false, false);
					annotations["JsonName"] = new egl.eglx.json.JsonName("Product4");
					this.fieldInfos[17] =new egl.eglx.services.FieldInfo("Product4", "Product4", "org.eclipse.edt.rui.widgets.HyperLink", egl.org.eclipse.edt.rui.widgets.HyperLink, annotations);
					annotations = {};
					annotations["XMLStyle"] = new egl.eglx.xml.binding.annotation.XMLElement("ProductMore", null, false, false);
					annotations["JsonName"] = new egl.eglx.json.JsonName("ProductMore");
					this.fieldInfos[18] =new egl.eglx.services.FieldInfo("ProductMore", "ProductMore", "org.eclipse.edt.rui.widgets.HyperLink", egl.org.eclipse.edt.rui.widgets.HyperLink, annotations);
					annotations = {};
					annotations["XMLStyle"] = new egl.eglx.xml.binding.annotation.XMLElement("Box1", null, false, false);
					annotations["JsonName"] = new egl.eglx.json.JsonName("Box1");
					this.fieldInfos[19] =new egl.eglx.services.FieldInfo("Box1", "Box1", "org.eclipse.edt.rui.widgets.Box", egl.org.eclipse.edt.rui.widgets.Box, annotations);
					annotations = {};
					annotations["XMLStyle"] = new egl.eglx.xml.binding.annotation.XMLElement("ProductOne1", null, false, false);
					annotations["JsonName"] = new egl.eglx.json.JsonName("ProductOne1");
					this.fieldInfos[21] =new egl.eglx.services.FieldInfo("ProductOne1", "ProductOne1", "org.eclipse.edt.rui.widgets.HyperLink", egl.org.eclipse.edt.rui.widgets.HyperLink, annotations);
					annotations = {};
					annotations["XMLStyle"] = new egl.eglx.xml.binding.annotation.XMLElement("ProductOne2", null, false, false);
					annotations["JsonName"] = new egl.eglx.json.JsonName("ProductOne2");
					this.fieldInfos[22] =new egl.eglx.services.FieldInfo("ProductOne2", "ProductOne2", "org.eclipse.edt.rui.widgets.HyperLink", egl.org.eclipse.edt.rui.widgets.HyperLink, annotations);
					annotations = {};
					annotations["XMLStyle"] = new egl.eglx.xml.binding.annotation.XMLElement("ProductOne3", null, false, false);
					annotations["JsonName"] = new egl.eglx.json.JsonName("ProductOne3");
					this.fieldInfos[23] =new egl.eglx.services.FieldInfo("ProductOne3", "ProductOne3", "org.eclipse.edt.rui.widgets.HyperLink", egl.org.eclipse.edt.rui.widgets.HyperLink, annotations);
					annotations = {};
					annotations["XMLStyle"] = new egl.eglx.xml.binding.annotation.XMLElement("ProductOne4", null, false, false);
					annotations["JsonName"] = new egl.eglx.json.JsonName("ProductOne4");
					this.fieldInfos[24] =new egl.eglx.services.FieldInfo("ProductOne4", "ProductOne4", "org.eclipse.edt.rui.widgets.HyperLink", egl.org.eclipse.edt.rui.widgets.HyperLink, annotations);
					annotations = {};
					annotations["XMLStyle"] = new egl.eglx.xml.binding.annotation.XMLElement("ProductOneMore", null, false, false);
					annotations["JsonName"] = new egl.eglx.json.JsonName("ProductOneMore");
					this.fieldInfos[25] =new egl.eglx.services.FieldInfo("ProductOneMore", "ProductOneMore", "org.eclipse.edt.rui.widgets.HyperLink", egl.org.eclipse.edt.rui.widgets.HyperLink, annotations);
				}
				return this.fieldInfos;
			}
			,
			"start": function() {
			}
			,
			"toString": function() {
				return "[Education]";
			}
		}
	);
});
