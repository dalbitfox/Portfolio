import React, { useState, useRef } from 'react';

interface SharedFile {
  id: string;
  name: string;
  category: 'Docs' | 'Design' | 'Code' | 'Reports';
  size: string;
  date: string;
  uploader: string;
  icon: string;
}

export const ResourceHub: React.FC = () => {
  // Pre-populate list with high-quality mock team materials
  const [files, setFiles] = useState<SharedFile[]>([
    { id: '1', name: '2026_Q2_프로젝트_마케팅_보고서.pdf', category: 'Reports', size: '2.4 MB', date: '2026-05-20', uploader: '최지아 팀장', icon: '📄' },
    { id: '2', name: 'Netbox_V2_시스템_아키텍처_설계도면.zip', category: 'Design', size: '14.8 MB', date: '2026-05-24', uploader: '김민우 대리', icon: '📦' },
    { id: '3', name: '점심사다리타기_동작_피드백.docx', category: 'Docs', size: '120 KB', date: '2026-05-26', uploader: '이서연 과장', icon: '📝' },
    { id: '4', name: 'Vercel_GitHub_배포연동_매뉴얼.pdf', category: 'Docs', size: '890 KB', date: '2026-05-27', uploader: '정태양 대리', icon: '📄' },
    { id: '5', name: 'index_v2_최종_디자인시스템_토큰.json', category: 'Code', size: '45 KB', date: '2026-05-27', uploader: '박준서 사원', icon: '⚙️' }
  ]);

  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [isDragOver, setIsDragOver] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  // Filter calculations
  const filteredFiles = files.filter((file) => {
    const matchesSearch = file.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          file.uploader.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = activeCategory === 'All' || file.category === activeCategory;
    return matchesSearch && matchesCategory;
  });

  const getFileIcon = (fileName: string): string => {
    const ext = fileName.split('.').pop()?.toLowerCase();
    if (ext === 'pdf') return '📄';
    if (ext === 'zip' || ext === 'rar' || ext === '7z') return '📦';
    if (ext === 'png' || ext === 'jpg' || ext === 'jpeg' || ext === 'svg') return '🖼️';
    if (ext === 'json' || ext === 'js' || ext === 'ts' || ext === 'tsx') return '⚙️';
    if (ext === 'xlsx' || ext === 'xls') return '📊';
    return '📝';
  };

  const handleFileUpload = (uploadedFiles: FileList) => {
    const newSharedFiles: SharedFile[] = [];
    const dateStr = new Date().toISOString().split('T')[0];

    for (let i = 0; i < uploadedFiles.length; i++) {
      const file = uploadedFiles[i];
      const sizeStr = file.size > 1024 * 1024 
        ? `${(file.size / (1024 * 1024)).toFixed(1)} MB` 
        : `${(file.size / 1024).toFixed(0)} KB`;
      
      // Auto-assign category based on file type
      let category: SharedFile['category'] = 'Docs';
      const ext = file.name.split('.').pop()?.toLowerCase();
      if (ext === 'pdf' || ext === 'docx' || ext === 'txt') category = 'Docs';
      else if (ext === 'zip' || ext === 'png' || ext === 'jpg') category = 'Design';
      else if (ext === 'js' || ext === 'ts' || ext === 'tsx' || ext === 'json' || ext === 'css') category = 'Code';
      else if (ext === 'xlsx' || ext === 'pptx') category = 'Reports';

      newSharedFiles.push({
        id: Math.random().toString(36).substr(2, 9),
        name: file.name,
        category,
        size: sizeStr,
        date: dateStr,
        uploader: '나 (접속자)',
        icon: getFileIcon(file.name)
      });
    }

    setFiles((prev) => [newSharedFiles[0], ...prev]);
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragOver(true);
  };

  const handleDragLeave = () => {
    setIsDragOver(false);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragOver(false);
    if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
      handleFileUpload(e.dataTransfer.files);
    }
  };

  const handleFileClick = () => {
    fileInputRef.current?.click();
  };

  const handleFileInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      handleFileUpload(e.target.files);
    }
  };

  const handleDeleteFile = (id: string, e: React.MouseEvent) => {
    e.stopPropagation();
    setFiles((prev) => prev.filter((f) => f.id !== id));
  };

  const triggerMockDownload = (file: SharedFile) => {
    // Generate a simple mock text download to simulate realistic behavior!
    const blob = new Blob([`이것은 [${file.name}] 자료실 파일 다운로드 테스트 데이터입니다.\n업로더: ${file.uploader}\n크기: ${file.size}\n업로드일자: ${file.date}`], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `[다운로드]_${file.name}.txt`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  return (
    <div style={{ animation: 'fadeIn 0.5s ease-out' }}>
      {/* Title */}
      <div style={{ marginBottom: '2.5rem' }}>
        <span className="tag tag-blue" style={{ marginBottom: '0.5rem' }}>Shared Workspace</span>
        <h2 style={{ fontSize: '2.25rem', fontFamily: 'var(--font-headings)', fontWeight: 800 }}>📁 팀 업무 자료실 (Resource Hub)</h2>
        <p style={{ color: 'var(--text-secondary)', fontSize: '1.05rem', marginTop: '0.25rem' }}>
          필요한 디자인 소스코드, 보고서 템플릿, 업무 문서들을 자유롭게 업로드하고 즉시 다운로드하세요.
        </p>
      </div>

      <div className="editorial-grid">
        {/* Left Side: Upload zone and Categories */}
        <div className="span-4" style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
          {/* Drag & Drop Card */}
          <div
            onDragOver={handleDragOver}
            onDragLeave={handleDragLeave}
            onDrop={handleDrop}
            onClick={handleFileClick}
            className="card"
            style={{
              border: isDragOver ? '2px dashed var(--accent-primary)' : '2px dashed var(--border-color)',
              backgroundColor: isDragOver ? 'var(--accent-light)' : 'var(--bg-secondary)',
              borderRadius: 'var(--radius-md)',
              padding: '2.5rem 1.5rem',
              textAlign: 'center',
              cursor: 'pointer',
              transition: 'var(--transition-smooth)',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '1rem'
            }}
          >
            <input
              type="file"
              ref={fileInputRef}
              onChange={handleFileInputChange}
              style={{ display: 'none' }}
              multiple
            />
            <span style={{ fontSize: '3rem' }}>☁️</span>
            <div>
              <h4 style={{ fontFamily: 'var(--font-headings)', fontSize: '1.1rem', marginBottom: '0.25rem' }}>파일 드래그 앤 드롭</h4>
              <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>또는 이곳을 클릭하여 컴퓨터에서 파일 선택</p>
            </div>
            <span style={{ fontSize: '0.75rem', color: 'var(--text-tertiary)' }}>PDF, ZIP, PNG, JSON 지원 (최대 50MB)</span>
          </div>

          {/* Categories card */}
          <div className="card">
            <h4 style={{ fontFamily: 'var(--font-headings)', fontSize: '1.1rem', marginBottom: '1rem', borderBottom: '1px solid var(--border-color)', paddingBottom: '0.5rem' }}>
              🗂️ 카테고리 필터
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              {['All', 'Docs', 'Design', 'Code', 'Reports'].map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    padding: '0.6rem 1rem',
                    border: 'none',
                    borderRadius: '8px',
                    backgroundColor: activeCategory === cat ? 'var(--accent-light)' : 'transparent',
                    color: activeCategory === cat ? 'var(--accent-primary)' : 'var(--text-secondary)',
                    fontWeight: activeCategory === cat ? 700 : 500,
                    fontFamily: 'var(--font-body)',
                    fontSize: '0.9rem',
                    cursor: 'pointer',
                    textAlign: 'left',
                    transition: 'var(--transition-smooth)'
                  }}
                >
                  <span>{cat === 'All' ? '📂 전체 자료' : cat === 'Docs' ? '📝 기획 & 기안문서' : cat === 'Design' ? '🎨 디자인 가이드' : cat === 'Code' ? '⚙️ 개발 코드' : '📊 분석 리포트'}</span>
                  <span
                    style={{
                      fontSize: '0.75rem',
                      backgroundColor: activeCategory === cat ? 'white' : 'var(--bg-tertiary)',
                      color: activeCategory === cat ? 'var(--accent-primary)' : 'var(--text-secondary)',
                      padding: '0.15rem 0.5rem',
                      borderRadius: '99px',
                      fontWeight: 600
                    }}
                  >
                    {cat === 'All' ? files.length : files.filter((f) => f.category === cat).length}
                  </span>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Right Side: File list & Search */}
        <div className="span-8" style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          {/* Search bar */}
          <div className="card" style={{ padding: '1rem 1.5rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
              <span style={{ fontSize: '1.1rem' }}>🔍</span>
              <input
                type="text"
                placeholder="찾으시는 업무 파일의 이름이나 등록자를 입력해 검색하세요..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                style={{
                  flex: 1,
                  border: 'none',
                  outline: 'none',
                  fontSize: '0.95rem',
                  fontFamily: 'var(--font-body)',
                  color: 'var(--text-primary)',
                  backgroundColor: 'transparent'
                }}
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  style={{ border: 'none', background: 'none', cursor: 'pointer', color: 'var(--text-tertiary)', fontWeight: 'bold' }}
                >
                  ✕
                </button>
              )}
            </div>
          </div>

          {/* Files List Display */}
          <div className="card" style={{ padding: 0, overflow: 'hidden' }}>
            {filteredFiles.length > 0 ? (
              <div style={{ display: 'flex', flexDirection: 'column' }}>
                {filteredFiles.map((file, idx) => (
                  <div
                    key={file.id}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      padding: '1.25rem 2rem',
                      borderBottom: idx === filteredFiles.length - 1 ? 'none' : '1px solid var(--border-color)',
                      backgroundColor: 'white',
                      transition: 'var(--transition-smooth)',
                      cursor: 'pointer'
                    }}
                    onClick={() => triggerMockDownload(file)}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.backgroundColor = 'var(--bg-primary)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.backgroundColor = 'white';
                    }}
                  >
                    {/* Left: icon + name */}
                    <div style={{ display: 'flex', alignItems: 'center', gap: '1.25rem', flex: 1 }}>
                      <span style={{ fontSize: '1.85rem' }}>{file.icon}</span>
                      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.2rem', overflow: 'hidden' }}>
                        <strong
                          style={{
                            fontSize: '0.95rem',
                            fontWeight: 600,
                            color: 'var(--text-primary)',
                            whiteSpace: 'nowrap',
                            overflow: 'hidden',
                            textOverflow: 'ellipsis'
                          }}
                        >
                          {file.name}
                        </strong>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', fontSize: '0.8rem', color: 'var(--text-secondary)' }}>
                          <span style={{ fontWeight: 600, color: 'var(--accent-primary)' }}>
                            {file.category === 'Docs' ? '기획' : file.category === 'Design' ? '디자인' : file.category === 'Code' ? '개발' : '리포트'}
                          </span>
                          <span>•</span>
                          <span>{file.size}</span>
                          <span>•</span>
                          <span>{file.uploader}</span>
                          <span>•</span>
                          <span>{file.date}</span>
                        </div>
                      </div>
                    </div>

                    {/* Right: Actions */}
                    <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'center', marginLeft: '1.5rem' }}>
                      <button
                        className="btn btn-secondary"
                        onClick={(e) => {
                          e.stopPropagation();
                          triggerMockDownload(file);
                        }}
                        style={{ padding: '0.4rem 0.85rem', fontSize: '0.8rem', gap: '0.25rem' }}
                      >
                        📥 다운로드
                      </button>
                      <button
                        onClick={(e) => handleDeleteFile(file.id, e)}
                        style={{
                          background: 'none',
                          border: 'none',
                          color: '#f87171',
                          cursor: 'pointer',
                          padding: '0.5rem',
                          borderRadius: '50%',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          transition: 'var(--transition-smooth)'
                        }}
                        onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#fef2f2'}
                        onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
                        title="자료 삭제"
                      >
                        🗑️
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div style={{ padding: '4rem 2rem', textAlign: 'center', color: 'var(--text-tertiary)' }}>
                <span style={{ fontSize: '3rem', display: 'block', marginBottom: '1rem' }}>🔍</span>
                <p style={{ fontSize: '1rem', fontWeight: 600, color: 'var(--text-secondary)' }}>일치하는 파일이 존재하지 않습니다.</p>
                <p style={{ fontSize: '0.85rem', marginTop: '0.25rem' }}>검색어나 필터 기준을 다시 확인해보세요.</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
