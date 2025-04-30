/* eslint-disable @typescript-eslint/no-use-before-define */
"use client";
import { useTranslation } from 'react-i18next';
import Link from 'next/link';
import { createPortal } from 'react-dom';
import { useState, useEffect } from 'react';

export type PrivacyDialogProps = {
  isOpen?: boolean;
  onClose?: () => void;
}

// 대화상자 또는 일반 페이지로 사용 가능한 컴포넌트
export default function Privacy({ isOpen, onClose }: PrivacyDialogProps = {}) {
  const { t } = useTranslation();
  const [mounted, setMounted] = useState(false);
  const isDialog = isOpen !== undefined;

  useEffect(() => {
    setMounted(true);
    return () => setMounted(false);
  }, []);

  // 대화상자로 사용될 때 처리
  if (isDialog) {
    if (!isOpen || !mounted) return null;

    return createPortal(
      <div className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center p-4 overflow-y-auto">
        <div className="relative max-w-3xl mx-auto bg-white rounded-xl shadow-lg max-h-[90vh] overflow-y-auto">
          <div className="p-6 sm:p-10">
            {/* 헤더 영역 */}
            <div className="border-b border-gray-200 pb-6 mb-8 relative">
              <button
                onClick={onClose}
                className="absolute top-0 right-0 text-gray-500 hover:text-gray-700"
                aria-label="닫기"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
              <h1 className="text-2xl sm:text-3xl font-bold text-gray-800 text-center mt-4">
                {t('common.privacy.title')}
              </h1>
              <p className="mt-2 text-sm text-gray-500 text-center">
                {t('common.privacy.lastUpdated')}
                {t('app.chat.privacyPolicyMiddle')}
              </p>
            </div>

            {renderContent()}
          </div>
        </div>
      </div>,
      document.body
    );
  }

  // 일반 페이지로 사용될 때 처리
  return (
    <div className="min-h-screen bg-gray-50 py-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto bg-white rounded-xl shadow-sm overflow-hidden">
        <div className="p-6 sm:p-10">
          {/* 헤더 영역 */}
          <div className="border-b border-gray-200 pb-6 mb-8">
            <Link href="/" className="text-primary-600 hover:text-primary-700 mb-4 inline-block">
              &larr; {t('common.default.backToHome')}
            </Link>
            <h1 className="text-2xl sm:text-3xl font-bold text-gray-800 text-center mt-4">
              {t('common.privacy.title')}
            </h1>
            <p className="mt-2 text-sm text-gray-500 text-center">
              {t('common.privacy.lastUpdated')}
              {t('app.chat.privacyPolicyMiddle')}
            </p>
          </div>

          {renderContent()}
        </div>
      </div>
    </div>
  );

  // 공통 콘텐츠 렌더링 함수
  function renderContent() {
    return (
      <>
        {/* 내용 영역 */}
        <div className="space-y-6 text-gray-700 leading-relaxed">

          <h2 className="text-xl font-semibold text-primary-700 mt-8">
            {t('common.privacy.sections.purpose.title')}
          </h2>
          <p className="text-sm sm:text-base">
            {t('common.privacy.sections.purpose.content')}
          </p>

          <h2 className="text-xl font-semibold text-primary-700 mt-8">
            {t('common.privacy.sections.retention.title')}
          </h2>
          <p className="text-sm sm:text-base">
            {t('common.privacy.sections.retention.content')}
          </p>

          <h2 className="text-xl font-semibold text-primary-700 mt-8">
            {t('common.privacy.sections.rights.title')}
          </h2>
          <p className="text-sm sm:text-base">
            {t('common.privacy.sections.rights.content')}
          </p>

          <h2 className="text-xl font-semibold text-primary-700 mt-8">
            {t('common.privacy.sections.items.title')}
          </h2>
          <p className="text-sm sm:text-base">
            {t('common.privacy.sections.items.content')}
          </p>

          <h2 className="text-xl font-semibold text-primary-700 mt-8">
            {t('common.privacy.sections.disposal.title')}
          </h2>
          <p className="text-sm sm:text-base">
            {t('common.privacy.sections.disposal.content')}
          </p>
        </div>

        {/* 푸터 영역 */}
        <div className="mt-12 pt-6 border-t border-gray-200">
          <p className="text-xs text-gray-500 text-center">
            {t('common.privacy.footer.contact')}{' '}
            <a href={`mailto:${t('common.privacy.footer.email')}`} className="text-primary-600 hover:underline">
              {t('common.privacy.footer.email')}
            </a>
            {t('common.privacy.footer.emailSuffix')}
          </p>
        </div>
      </>
    );
  }
}