import React, { useState } from 'react';
import { Lock, Unlock, FolderOpen, Download, Upload } from 'lucide-react';

const ProtectedSection = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [files, setFiles] = useState([
    {
      name: 'Project Documentation',
      type: 'pdf',
      size: '2.5 MB',
      date: '2024-03-15',
      url: '/downloads/project-documentation.pdf',
    },
    {
      name: 'Design Assets',
      type: 'zip',
      size: '15 MB',
      date: '2024-03-14',
      url: '/downloads/design-assets.zip',
    },
    {
      name: 'Research Paper',
      type: 'doc',
      size: '1.2 MB',
      date: '2024-03-13',
      url: '/downloads/research-paper.doc',
    },
  ]);

  const correctPassword = 'kxabhai'; 

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === correctPassword) {
      setIsAuthenticated(true);
      setError('');
    } else {
      setError('Incorrect password');
    }
  };

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const uploadedFiles = e.target.files;
    if (uploadedFiles) {
      const newFiles = Array.from(uploadedFiles).map((file) => ({
        name: file.name,
        type: file.name.split('.').pop() || 'file',
        size: `${(file.size / 1024 / 1024).toFixed(2)} MB`,
        date: new Date().toISOString().split('T')[0],
        url: URL.createObjectURL(file),
      }));
      setFiles((prevFiles) => [...prevFiles, ...newFiles]);
    }
  };

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen p-16 flex items-center justify-center">
        <div className="max-w-md w-full bg-gray-800/50 backdrop-blur-lg rounded-2xl p-8">
          <div className="text-center mb-8">
            <div className="inline-block p-4 bg-blue-500/20 rounded-full mb-4">
              <Lock size={32} className="text-blue-400" />
            </div>
            <h2 className="text-2xl font-bold">Protected Section</h2>
            <p className="text-gray-400 mt-2">Please enter the password to access this section</p>
          </div>

          <form onSubmit={handleLogin} className="space-y-6">
            <div>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-2 bg-gray-700/50 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
                placeholder="Enter password"
                required
              />
              {error && <p className="text-red-400 text-sm mt-2">{error}</p>}
            </div>

            <button
              type="submit"
              className="w-full py-3 bg-blue-600 hover:bg-blue-700 rounded-lg flex items-center justify-center gap-2 transition-colors"
            >
              <Unlock size={20} />
              Access Files
            </button>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen p-16">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-3">
            <FolderOpen size={32} className="text-blue-400" />
            <h2 className="text-2xl font-bold">Protected Files</h2>
          </div>
          <button
            onClick={() => setIsAuthenticated(false)}
            className="px-4 py-2 bg-gray-700 hover:bg-gray-600 rounded-lg transition-colors"
          >
            Logout
          </button>
        </div>

        <div className="bg-gray-800/50 backdrop-blur-lg rounded-2xl overflow-hidden">
          <div className="p-6 space-y-6">
            <div className="space-y-4">
              {files.map((file) => (
                <div
                  key={file.name}
                  className="flex items-center justify-between p-4 bg-gray-700/50 rounded-lg hover:bg-gray-700 transition-colors"
                >
                  <div className="flex items-center gap-4">
                    <div className="p-2 bg-blue-500/20 rounded-lg">
                      <FolderOpen size={24} className="text-blue-400" />
                    </div>
                    <div>
                      <h3 className="font-medium">{file.name}</h3>
                      <p className="text-sm text-gray-400">
                        {file.type.toUpperCase()} • {file.size}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <span className="text-sm text-gray-400">{file.date}</span>
                    <a
                      href={file.url}
                      download
                      className="px-3 py-2 bg-blue-600 hover:bg-blue-700 rounded-lg text-white flex items-center gap-2 transition-colors"
                    >
                      <Download size={16} /> Download
                    </a>
                  </div>
                </div>
              ))}
            </div>

            {/* File Upload Section */}
            <div className="pt-6 border-t border-gray-700">
              <h3 className="text-lg font-bold mb-4">Upload New Files</h3>
              <label className="flex items-center gap-3 px-4 py-3 bg-gray-700/50 hover:bg-gray-700 rounded-lg cursor-pointer transition-colors">
                <Upload size={20} className="text-blue-400" />
                <span className="text-gray-300">Choose Files</span>
                <input
                  type="file"
                  multiple
                  onChange={handleFileUpload}
                  className="hidden"
                />
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProtectedSection;
