package client.server;

import org.eclipse.edt.javart.resources.*;
import org.eclipse.edt.javart.*;
import org.eclipse.edt.javart.services.*;
import org.eclipse.edt.javart.Runtime;
import org.eclipse.edt.javart.json.Json;
import org.eclipse.edt.runtime.java.eglx.lang.EString;
import java.lang.String;
import org.eclipse.edt.runtime.java.eglx.lang.AnyStruct;
@SuppressWarnings("unused")

@javax.xml.bind.annotation.XmlRootElement(name="HelloWorldService")
public class HelloWorldService extends ServiceBase {
	private static final long serialVersionUID = 10L;
	
	{
		if(Runtime.getRunUnit().getActiveExecutable() == null)
		Runtime.getRunUnit().setActiveExecutable(this);
		ezeInitialize();
	}
	
	public HelloWorldService() {
		super();
	}
	public void ezeInitialize() {
	}
	@FunctionSignature(name="sayHello", parameters={@FunctionParameter(jsonInfo=@Json(name="name", clazz=EString.class, asOptions={}), kind=FunctionParameterKind.IN), @FunctionParameter(jsonInfo=@Json(name="eze_return", clazz=EString.class, asOptions={}), kind=FunctionParameterKind.RETURN)})
	public String sayHello(String name){
		String ret;
		ret = (((("Hello, ") + name)) + "!");
		return ret;
	}
}
