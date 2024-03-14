from azure.core.credentials import AzureKeyCredential
from azure.ai.formrecognizer import DocumentAnalysisClient
import os

# Define the endpoint and key
endpoint = "https://processing-invoice.cognitiveservices.azure.com/"
key = "2a0ff84cbcc541778b400af97dda7c4f"

def analyze_invoice(file_path):
    document_analysis_client = DocumentAnalysisClient(
        endpoint=endpoint, credential=AzureKeyCredential(key)
    )

    # Check if file exists
    if not os.path.isfile(file_path):
        return None, "File not found. Please provide a valid file path."

    # Perform document analysis
    with open(file_path, "rb") as f:
        poller = document_analysis_client.begin_analyze_document("prebuilt-invoice", f)
        invoices = poller.result()

    # Extract specific fields from the analyzed invoice
    extracted_fields = []
    for idx, invoice in enumerate(invoices.documents):
        fields = {}
        fields["Invoice Number"] = invoice.fields.get("InvoiceId") or invoice.fields.get("Invoice No")
        fields["Customer Name"] = invoice.fields.get("CustomerName")
        fields["Invoice Date"] = invoice.fields.get("InvoiceDate")
        fields["Issue Date"] = fields["Invoice Date"]
        fields["Due Date"] = invoice.fields.get("DueDate")
        fields["Total Amount"] = invoice.fields.get("Total")
        extracted_fields.append(fields)

    return extracted_fields, None
