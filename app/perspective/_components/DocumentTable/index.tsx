import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

const tableData = [
    {
        docId: '5.4.1.1',
        docTitle: 'Digital_Transformation_Plan.pdf',
        docLead: 'Ahmed Khaled',
        docPreparer: 'Ahmed Khaled',
        docDate: '2025-08-01',
        docDueDate: '2025-08-01',
        docStatus: 'Approved'
    },
    {
        docId: '5.4.1.1',
        docTitle: 'Digital_Transformation_Plan.pdf',
        docLead: 'Ahmed Khaled',
        docPreparer: 'Ahmed Khaled',
        docDate: '2025-08-01',
        docDueDate: '2025-08-01',
        docStatus: 'Approved'
    },
    {
        docId: '5.4.1.1',
        docTitle: 'Digital_Transformation_Plan.pdf',
        docLead: 'Ahmed Khaled',
        docPreparer: 'Ahmed Khaled',
        docDate: '2025-08-01',
        docDueDate: '2025-08-01',
        docStatus: 'Approved'
    },
    {
        docId: '5.4.1.1',
        docTitle: 'Digital_Transformation_Plan.pdf',
        docLead: 'Ahmed Khaled',
        docPreparer: 'Ahmed Khaled',
        docDate: '2025-08-01',
        docDueDate: '2025-08-01',
        docStatus: 'Approved'
    },
    {
        docId: '5.4.1.1',
        docTitle: 'Digital_Transformation_Plan.pdf',
        docLead: 'Ahmed Khaled',
        docPreparer: 'Ahmed Khaled',
        docDate: '2025-08-01',
        docDueDate: '2025-08-01',
        docStatus: 'Approved'
    },
]
export function DocumentTable() {
    return (
        <Table>
            <TableHeader>
                <TableRow>
                    <TableHead>Document Number</TableHead>
                    <TableHead>Document Name</TableHead>
                    <TableHead>Document Lead</TableHead>
                    <TableHead>Document Preparer</TableHead>
                    <TableHead>Date</TableHead>
                    <TableHead>Due Date</TableHead>
                    <TableHead>Status</TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                {tableData.map((record, idx) => (
                    <TableRow key={record.docId + idx}>
                        <TableCell>{record.docId}</TableCell>
                        <TableCell>{record.docTitle}</TableCell>
                        <TableCell>{record.docLead}</TableCell>
                        <TableCell>{record.docPreparer}</TableCell>
                        <TableCell>{record.docDate}</TableCell>
                        <TableCell>{record.docDueDate}</TableCell>
                        <TableCell>{record.docStatus}</TableCell>
                    </TableRow>
                ))}
            </TableBody>
        </Table>
    )
}