export type CsvUpload = {
    id: number;
    file_path: string;
    state: string;
    status: 'pending' | 'processing' | 'completed' | 'failed';
    error_message: string | null;
    created_at: string;
    updated_at: string;
  };
  