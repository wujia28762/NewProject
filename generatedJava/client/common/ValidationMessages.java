package client.common;

import org.eclipse.edt.javart.resources.*;
import org.eclipse.edt.javart.*;
import org.eclipse.edt.runtime.java.eglx.lang.EString;
import java.lang.String;
import org.eclipse.edt.runtime.java.eglx.lang.AnyStruct;
@SuppressWarnings("unused")

@javax.xml.bind.annotation.XmlRootElement(name="ValidationMessages")
public class ValidationMessages extends ExecutableBase {
	private static final long serialVersionUID = 10L;
	public String usrMinInput;
	public String pwMinInput;
	public String valReq;
	public String validZip;
	public String emailError;
	public String invalidDate;
	
	{
		ezeInitialize();
	}
	
	public ValidationMessages() {
		super();
	}
	public void ezeInitialize() {
		usrMinInput = "";
		pwMinInput = "";
		valReq = "";
		validZip = "";
		emailError = "";
		invalidDate = "";
	}
	public String getUsrMinInput(){
		return usrMinInput;
	}
	public void setUsrMinInput(String ezeValue){
		usrMinInput = ezeValue;
	}
	public String getPwMinInput(){
		return pwMinInput;
	}
	public void setPwMinInput(String ezeValue){
		pwMinInput = ezeValue;
	}
	public String getValReq(){
		return valReq;
	}
	public void setValReq(String ezeValue){
		valReq = ezeValue;
	}
	public String getValidZip(){
		return validZip;
	}
	public void setValidZip(String ezeValue){
		validZip = ezeValue;
	}
	public String getEmailError(){
		return emailError;
	}
	public void setEmailError(String ezeValue){
		emailError = ezeValue;
	}
	public String getInvalidDate(){
		return invalidDate;
	}
	public void setInvalidDate(String ezeValue){
		invalidDate = ezeValue;
	}
}
