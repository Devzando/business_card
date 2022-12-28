using MessagingToolkit.QRCode;
public class QrCodeGeneartion
{
    public b Gerar()
    {
        var qrGenerator = new QRCodeGenerator();
        var qrCodeData = qrGenerator.CreateQrCode(url, QRCodeGenerator.ECCLevel.Q);
        var qrCode = new QRCode(qrCodeData);
        var qrCodeImage = qrCode.GetGraphic(10);
        return qrCodeImage;
    }
}