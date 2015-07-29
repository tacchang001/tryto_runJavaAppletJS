import java.applet.Applet;
import java.awt.TextField;
import netscape.javascript.JSObject;

public class VMInfo extends java.applet.Applet {
    public String jreVersion = "";
    public String jreVendor = "";

    private TextField versionField;
    private TextField vendorField;

    public String getJreVersion() {
	return this.jreVersion;
    }

    public void init() {
	System.out.println("port is " + this.getParameter("port"));

        this.jreVersion = System.getProperty("java.version");
        this.jreVendor = System.getProperty("java.vendor");

        this.versionField = new TextField(jreVersion, jreVersion.length());
        this.vendorField = new TextField(jreVendor, jreVendor.length());
        
        add(versionField);
        add(vendorField);
        // callback
        JSObject win = JSObject.getWindow(this);
        String jsContext = "VMInfo.notify({\"version\":\"" + jreVersion + "\", \"vendor\":\"" + jreVendor + "\"})";
        win.eval(jsContext);
    }
}

