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

@javax.xml.bind.annotation.XmlRootElement(name="LoginService")
public class LoginService extends ServiceBase {
	private static final long serialVersionUID = 10L;
	public String variableName;
	
	{
		if(Runtime.getRunUnit().getActiveExecutable() == null)
		Runtime.getRunUnit().setActiveExecutable(this);
		ezeInitialize();
	}
	
	public LoginService() {
		super();
	}
	public void ezeInitialize() {
		variableName = "";
	}
	@FunctionSignature(name="register", parameters={})
	public void register(){
	}
}
