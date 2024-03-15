from azure.core.credentials import AzureKeyCredential
from azure.ai.formrecognizer import DocumentAnalysisClient
import os

# Define the endpoint and key
endpoint = "https://processing-invoice.cognitiveservices.azure.com/"
key = "2a0ff84cbcc541778b400af97dda7c4f"

# Prompt user to input file path
invoice_file_path = input("Enter the file path of the invoice: ")

document_analysis_client = DocumentAnalysisClient(
    endpoint=endpoint, credential=AzureKeyCredential(key)
)

# Check if file exists
if not os.path.isfile(invoice_file_path):
    print("File not found. Please provide a valid file path.")
    exit()

# Perform document analysis
with open(invoice_file_path, "rb") as f:
    poller = document_analysis_client.begin_analyze_document("prebuilt-invoice", f)
    invoices = poller.result()

# Extract specific fields from the analyzed invoice
for idx, invoice in enumerate(invoices.documents):
    print("--------Recognizing invoice #{}--------".format(idx + 1))
    
    # Extract and print Invoice Number
    invoice_number = invoice.fields.get("InvoiceId") or invoice.fields.get("Invoice No")
    if invoice_number:
        print("Invoice Number:", invoice_number.value if invoice_number else "Not found")
    else:
        print("Invoice Number not found")
    
    # Extract and print Customer Name
    customer_name = invoice.fields.get("CustomerName")
    if customer_name:
        print("Customer Name:", customer_name.value if customer_name else "Not found")
    else:
        print("Customer Name not found")
    
    # Extract and print Invoice Date
    invoice_date = invoice.fields.get("InvoiceDate")
    if invoice_date:
        print("Invoice Date:", invoice_date.value if invoice_date else "Not found")
    else:
        print("Invoice Date not found")
    
    # Extract and print Issue Date (Assuming it's the same as Invoice Date)
    print("Issue Date:", invoice_date.value if invoice_date else "Not found")
    
    invoice_total = invoice.fields.get("InvoiceTotal")
    if invoice_total:
        print(
            "Total Amount:", invoice_total.value if invoice_total else "Not found")
    else:
        print("Total amount not found")
    
    # Extract and print Due Date
    due_date = invoice.fields.get("DueDate")
    if due_date:
        print("Due Date:", due_date.value if due_date else "Not found")
    else:
        print("Due Date not found")
    
    print("----------------------------------------")